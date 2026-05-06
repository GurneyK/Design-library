import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataDir = path.join(root, "src", "data");
const buttonMetaFile = path.join(root, "src", "components", "ui", "button", "button.meta.ts");
const sourceManifestPath = path.join(dataDir, "agentManifest.json");
const siteManifestPath = path.join(root, "site", "manifest.json");

const dataFiles = (await readdir(dataDir))
  .filter((file) => file.endsWith("Entries.tsx"))
  .map((file) => path.join(dataDir, file));

const files = [buttonMetaFile, ...dataFiles];
const entries = [];

for (const file of files) {
  entries.push(...(await extractEntries(file)));
}

const categories = [...new Set(entries.map((entry) => entry.category))];
const categoryCounts = Object.fromEntries(
  categories.map((category) => [category, entries.filter((entry) => entry.category === category).length]),
);
const kindCounts = {
  component: entries.filter((entry) => entry.kind === "component").length,
  foundation: entries.filter((entry) => entry.kind === "foundation").length,
  template: entries.filter((entry) => entry.kind === "template").length,
};
const manifest = {
  schemaVersion: "1.0.0",
  name: "Design Library",
  description: "Machine-readable component and template catalog for Habibi/Nexus-style product surfaces.",
  publicUrl: "https://gurneyk.github.io/Design-library/",
  manifestUrls: ["https://gurneyk.github.io/Design-library/site/manifest.json"],
  counts: {
    entries: entries.length,
    categories: categories.length,
    templates: kindCounts.template,
  },
  kindCounts,
  categoryCounts,
  consumptionGuidance: [
    "Load this manifest before generating UI for Nexus, Design Library, or related Unilever internal tools.",
    "Choose existing entries by kind, category, subcategory, useWhen, doNotUseWhen, variants, props, and tokens.",
    "Prefer templates for full-page or block-level composition before assembling primitives from scratch.",
    "Honor doNotUseWhen and accessibility notes as hard constraints during UI generation.",
    "Do not invent components outside this manifest unless the user has approved a gap proposal.",
  ],
  entrySchema: {
    id: "Stable identifier used for lookup and references.",
    kind: "component | foundation | template.",
    category: "Top-level catalog category shown in navigation.",
    subcategory: "Functional grouping inside the category.",
    props: "Documented props or data slots for the implementation.",
    variants: "Supported states, tones, and structural variants.",
    tokens: "Habibi tokens consumed by the entry.",
    useWhen: "Recommended use cases.",
    doNotUseWhen: "Constraints and anti-patterns.",
    accessibility: "Baseline accessibility requirements.",
    agentGuidance: "Composition guidance for AI-assisted UI generation.",
    code: "Copyable implementation snippet or composition starter.",
  },
  categories,
  entries,
};

const json = `${JSON.stringify(manifest, null, 2)}\n`;

await mkdir(path.dirname(sourceManifestPath), { recursive: true });
await writeFile(sourceManifestPath, json, "utf8");

await mkdir(path.dirname(siteManifestPath), { recursive: true });
await writeFile(siteManifestPath, json, "utf8");

async function extractEntries(file) {
  const sourceText = await readFile(file, "utf8");
  const sourceFile = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const constants = new Map();
  const results = [];

  visit(sourceFile, (node) => {
    if (!ts.isVariableDeclaration(node) || !ts.isIdentifier(node.name) || !node.initializer) {
      return;
    }

    const name = node.name.text;
    const initializer = unwrap(node.initializer);
    const value = extractExpression(initializer, sourceFile, constants);

    if (value !== undefined) {
      constants.set(name, value);
    }
  });

  visit(sourceFile, (node) => {
    if (!ts.isVariableDeclaration(node) || !ts.isIdentifier(node.name) || !node.initializer) {
      return;
    }

    const name = node.name.text;
    if (!name.endsWith("Entry") && name !== "buttonEntry") {
      return;
    }

    const initializer = unwrap(node.initializer);
    if (!ts.isObjectLiteralExpression(initializer)) {
      return;
    }

    const entry = extractCatalogEntry(initializer, sourceFile, constants);
    if (entry?.id && entry?.name) {
      results.push(normalizeEntry(entry, file));
    }
  });

  return results;
}

function extractCatalogEntry(objectLiteral, sourceFile, constants) {
  const entry = {};

  for (const property of objectLiteral.properties) {
    if (ts.isSpreadAssignment(property) && ts.isIdentifier(property.expression)) {
      Object.assign(entry, constants.get(property.expression.text) ?? {});
      continue;
    }

    if (!ts.isPropertyAssignment(property)) {
      continue;
    }

    const key = getPropertyName(property.name);
    if (!key || key === "preview") {
      continue;
    }

    entry[key] = extractExpression(property.initializer, sourceFile, constants);
  }

  return entry;
}

function extractExpression(expression, sourceFile, constants) {
  const node = unwrap(expression);

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  if (ts.isTemplateExpression(node)) {
    return node.getText(sourceFile);
  }

  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }

  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }

  if (ts.isNumericLiteral(node)) {
    return Number(node.text);
  }

  if (ts.isIdentifier(node)) {
    return constants.get(node.text);
  }

  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((element) => extractExpression(element, sourceFile, constants)).filter((value) => value !== undefined);
  }

  if (ts.isObjectLiteralExpression(node)) {
    const result = {};
    for (const property of node.properties) {
      if (ts.isSpreadAssignment(property) && ts.isIdentifier(property.expression)) {
        Object.assign(result, constants.get(property.expression.text) ?? {});
        continue;
      }
      if (!ts.isPropertyAssignment(property)) {
        continue;
      }
      const key = getPropertyName(property.name);
      if (key) {
        result[key] = extractExpression(property.initializer, sourceFile, constants);
      }
    }
    return result;
  }

  return undefined;
}

function normalizeEntry(entry, file) {
  const id = String(entry.id);
  const category = String(entry.category);

  return {
    id,
    kind: category === "Templates / Blocks" ? "template" : category === "Foundations" ? "foundation" : "component",
    name: String(entry.name),
    category,
    subcategory: String(entry.subcategory ?? ""),
    status: String(entry.status ?? "draft"),
    source: entry.source ?? [],
    description: String(entry.description ?? ""),
    variants: entry.variants ?? [],
    props: entry.props ?? [],
    tokens: entry.tokens ?? [],
    useWhen: entry.usage ?? [],
    doNotUseWhen: entry.avoid ?? [],
    accessibility: entry.accessibility ?? [],
    agentGuidance: entry.agentGuidance ?? [],
    code: String(entry.code ?? ""),
    sourceFile: path.relative(root, file).replaceAll("\\", "/"),
  };
}

function getPropertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return undefined;
}

function unwrap(node) {
  let current = node;
  while (ts.isAsExpression(current) || ts.isSatisfiesExpression(current) || ts.isParenthesizedExpression(current)) {
    current = current.expression;
  }
  return current;
}

function visit(node, callback) {
  callback(node);
  ts.forEachChild(node, (child) => visit(child, callback));
}
