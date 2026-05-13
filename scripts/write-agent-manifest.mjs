import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataDir = path.join(root, "src", "data");
const componentDirs = [path.join(root, "src", "components", "ui"), path.join(root, "src", "components", "templates")];
const buttonMetaFile = path.join(root, "src", "components", "ui", "button", "button.meta.ts");
const sourceManifestPath = path.join(dataDir, "agentManifest.json");
const developerHandoffPath = path.join(dataDir, "developerHandoff.json");
const siteManifestPath = path.join(root, "site", "manifest.json");
const siteDeveloperHandoffPath = path.join(root, "site", "developer-handoff.json");
const rootManifestPath = path.join(root, "manifest.json");
const rootDeveloperHandoffPath = path.join(root, "developer-handoff.json");
const repositoryUrl = "https://github.com/GurneyK/Design-library";
const rawRepositoryUrl = "https://raw.githubusercontent.com/GurneyK/Design-library/main";
const requiredGlobalPaths = ["tailwind.config.ts", "src/index.css"];
const packageInstallCommand = "npm install react react-dom lucide-react && npm install -D tailwindcss postcss autoprefixer";
const importAlias = "@/* resolves to src/*";

const dataFiles = (await readdir(dataDir))
  .filter((file) => file.endsWith("Entries.tsx"))
  .map((file) => path.join(dataDir, file));

const files = [buttonMetaFile, ...dataFiles];
const entries = [];
const sourceIndex = await collectSourceIndex(componentDirs);

for (const file of files) {
  entries.push(...(await extractEntries(file)));
}

const developerHandoff = Object.fromEntries(
  entries.map((entry) => [entry.id, createDeveloperHandoff(entry, sourceIndex)]),
);

for (const entry of entries) {
  entry.developerHandoff = developerHandoff[entry.id];
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
  manifestUrls: ["https://gurneyk.github.io/Design-library/manifest.json"],
  developerHandoffUrls: ["https://gurneyk.github.io/Design-library/developer-handoff.json"],
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
    developerHandoff: "Source links, import paths, dependencies, and setup notes for developers copying the component.",
  },
  categories,
  entries,
};

const json = `${JSON.stringify(manifest, null, 2)}\n`;
const developerHandoffJson = `${JSON.stringify(developerHandoff, null, 2)}\n`;

await mkdir(path.dirname(sourceManifestPath), { recursive: true });
await writeFile(sourceManifestPath, json, "utf8");
await writeFile(developerHandoffPath, developerHandoffJson, "utf8");

await mkdir(path.dirname(siteManifestPath), { recursive: true });
await writeFile(siteManifestPath, json, "utf8");
await writeFile(siteDeveloperHandoffPath, developerHandoffJson, "utf8");

await writeFile(rootManifestPath, json, "utf8");
await writeFile(rootDeveloperHandoffPath, developerHandoffJson, "utf8");

async function collectSourceIndex(directories) {
  const sourceFiles = [];

  for (const directory of directories) {
    sourceFiles.push(...(await collectTsxFiles(directory)));
  }

  const byName = new Map();
  const byPath = new Map();

  for (const file of sourceFiles) {
    const relativePath = path.relative(root, file).replaceAll("\\", "/");
    const sourceText = await readFile(file, "utf8");
    byName.set(path.basename(file, ".tsx"), relativePath);
    byPath.set(relativePath, { file, sourceText });
  }

  return { byName, byPath };
}

async function collectTsxFiles(directory) {
  const files = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTsxFiles(fullPath)));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name) && !entry.name.includes(".meta.")) {
      files.push(fullPath);
    }
  }

  return files;
}

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

function createDeveloperHandoff(entry, sourceIndex) {
  if (entry.category === "Agent Reference") {
    return {
      copyStatus: "reference-endpoint",
      usageSnippetStatus: "fetch-example",
      catalogId: entry.id,
      repositoryUrl,
      sourcePaths: ["manifest.json"],
      dependencyPaths: [],
      allCopyPaths: ["manifest.json"],
      githubUrls: [`${repositoryUrl}/blob/main/manifest.json`],
      rawUrls: [`${rawRepositoryUrl}/manifest.json`],
      importPaths: ["https://gurneyk.github.io/Design-library/manifest.json"],
      dependencyGithubUrls: [],
      dependencyRawUrls: [],
      dependencyImportPaths: [],
      allGithubUrls: [`${repositoryUrl}/blob/main/manifest.json`],
      allRawUrls: [`${rawRepositoryUrl}/manifest.json`],
      allImportPaths: ["https://gurneyk.github.io/Design-library/manifest.json"],
      copyScripts: {},
      copyCommand: "",
      copyCommandWithGlobals: "",
      packageInstallCommand: "No package install required for the manifest endpoint.",
      importAlias: "Public HTTPS endpoint.",
      requiredGlobalPaths: [],
      requiredGlobalGithubUrls: [],
      requiredGlobalRawUrls: [],
      requiredSetup: ["Fetch-capable runtime or server route", "JSON parser", "Use entry IDs, props, variants, tokens, and guidance before generating UI"],
      copyInstructions:
        "Use the public manifest URL as a fetchable API. This is a reference endpoint, not a React component file.",
    };
  }

  const sourcePaths = resolveSourcePaths(entry, sourceIndex);
  const dependencyPaths = resolveDependencyPaths(sourcePaths, sourceIndex);
  const allCopyPaths = [...new Set([...sourcePaths, ...dependencyPaths])];
  const sourceGithubUrls = sourcePaths.map((sourcePath) => `${repositoryUrl}/blob/main/${sourcePath}`);
  const sourceRawUrls = sourcePaths.map((sourcePath) => `${rawRepositoryUrl}/${sourcePath}`);
  const sourceImportPaths = sourcePaths.map(toImportPath);
  const dependencyGithubUrls = dependencyPaths.map((sourcePath) => `${repositoryUrl}/blob/main/${sourcePath}`);
  const dependencyRawUrls = dependencyPaths.map((sourcePath) => `${rawRepositoryUrl}/${sourcePath}`);
  const dependencyImportPaths = dependencyPaths.map(toImportPath);
  const allGithubUrls = allCopyPaths.map((sourcePath) => `${repositoryUrl}/blob/main/${sourcePath}`);
  const allRawUrls = allCopyPaths.map((sourcePath) => `${rawRepositoryUrl}/${sourcePath}`);
  const allImportPaths = allCopyPaths.map(toImportPath);
  const requiredGlobalGithubUrls = requiredGlobalPaths.map((sourcePath) => `${repositoryUrl}/blob/main/${sourcePath}`);
  const requiredGlobalRawUrls = requiredGlobalPaths.map((sourcePath) => `${rawRepositoryUrl}/${sourcePath}`);
  const copyStatus =
    entry.kind === "foundation" ? "foundation-guidance" : sourcePaths.length > 0 ? "source-available" : "usage-snippet-only";

  return {
    copyStatus,
    usageSnippetStatus: "example",
    catalogId: entry.id,
    repositoryUrl,
    sourcePaths,
    dependencyPaths,
    allCopyPaths,
    githubUrls: sourceGithubUrls,
    rawUrls: sourceRawUrls,
    importPaths: sourceImportPaths,
    dependencyGithubUrls,
    dependencyRawUrls,
    dependencyImportPaths,
    allGithubUrls,
    allRawUrls,
    allImportPaths,
    copyScriptLanguage: copyStatus === "source-available" ? "powershell" : undefined,
    copyScript: copyStatus === "source-available" ? createPowerShellCopyScript(allCopyPaths, allRawUrls) : undefined,
    copyScripts:
      copyStatus === "source-available"
        ? {
            powershell: createPowerShellCopyScript(allCopyPaths, allRawUrls),
            bash: createBashCopyScript(allCopyPaths, allRawUrls),
          }
        : {},
    copyCommand: copyStatus === "source-available" ? `npm run copy:component -- ${entry.id}` : "",
    copyCommandWithGlobals: copyStatus === "source-available" ? `npm run copy:component -- ${entry.id} --globals` : "",
    packageInstallCommand,
    importAlias,
    requiredGlobalPaths,
    requiredGlobalGithubUrls,
    requiredGlobalRawUrls,
    requiredSetup: [
      "React 18+",
      "Tailwind CSS 3+ with this repo's tailwind.config.ts token extensions",
      "src/index.css for base styles, focus-ring, and CSS variables",
      "lucide-react for icons used by many components",
    ],
    copyInstructions:
      copyStatus === "source-available"
        ? "Copy the implementation source plus the local dependencies listed here. Keep the Habibi Tailwind config and src/index.css in the consuming app."
        : copyStatus === "foundation-guidance"
          ? "This is a token/foundation entry. Copy the relevant Tailwind token setup and CSS variables rather than a React component."
          : "This entry currently has a usage snippet but no resolved implementation file. Treat it as documentation until a source file is mapped.",
  };
}

function resolveSourcePaths(entry, sourceIndex) {
  if (entry.kind === "foundation") {
    return [];
  }

  const names = new Set();
  const code = String(entry.code ?? "");
  const importRegex = /from\s+["']\.\/([^"']+)["']/g;
  const jsxRegex = /<([A-Z][A-Za-z0-9]*)\b/g;
  let match;

  while ((match = importRegex.exec(code))) {
    names.add(path.basename(match[1]));
  }

  while ((match = jsxRegex.exec(code))) {
    names.add(match[1]);
  }

  names.add(toPascalCase(entry.name));

  return [...new Set([...names].map((name) => sourceIndex.byName.get(name)).filter(Boolean))].sort();
}

function resolveDependencyPaths(sourcePaths, sourceIndex) {
  const directSources = new Set(sourcePaths);
  const visited = new Set();
  const dependencies = new Set();

  for (const sourcePath of sourcePaths) {
    visitDependencies(sourcePath);
  }

  return [...dependencies].filter((sourcePath) => !directSources.has(sourcePath)).sort();

  function visitDependencies(sourcePath) {
    if (visited.has(sourcePath)) {
      return;
    }
    visited.add(sourcePath);

    const source = sourceIndex.byPath.get(sourcePath);
    if (!source) {
      return;
    }

    const importRegex = /from\s+["'](\.{1,2}\/[^"']+)["']/g;
    let match;

    while ((match = importRegex.exec(source.sourceText))) {
      const dependencyPath = resolveRelativeSourcePath(sourcePath, match[1], sourceIndex);
      if (!dependencyPath || dependencyPath === sourcePath) {
        continue;
      }
      dependencies.add(dependencyPath);
      visitDependencies(dependencyPath);
    }
  }
}

function resolveRelativeSourcePath(fromSourcePath, importPath, sourceIndex) {
  const directory = path.posix.dirname(fromSourcePath);
  const normalized = path.posix.normalize(path.posix.join(directory, importPath)).replaceAll("\\", "/");
  const candidates = [
    normalized,
    `${normalized}.tsx`,
    `${normalized}.ts`,
    path.posix.join(normalized, "index.tsx"),
    path.posix.join(normalized, "index.ts"),
  ];

  return candidates.find((candidate) => sourceIndex.byPath.has(candidate));
}

function toImportPath(sourcePath) {
  return sourcePath.replace(/^src\//, "@/").replace(/\.tsx$/, "");
}

function createPowerShellCopyScript(sourcePaths, rawUrls) {
  const rows = sourcePaths
    .map((sourcePath, index) => `  @{ Path = "${escapePowerShellString(sourcePath)}"; Url = "${escapePowerShellString(rawUrls[index])}" }`)
    .join("\n");

  return `$files = @(\n${rows}\n)\n\nforeach ($file in $files) {\n  $target = Join-Path (Get-Location) $file.Path\n  New-Item -ItemType Directory -Force -Path (Split-Path $target) | Out-Null\n  Invoke-WebRequest -Uri $file.Url -OutFile $target\n}\n`;
}

function createBashCopyScript(sourcePaths, rawUrls) {
  const rows = sourcePaths
    .map((sourcePath, index) => `"${escapeBashString(sourcePath)}|${escapeBashString(rawUrls[index])}"`)
    .join("\n  ");

  return `files=(\n  ${rows}\n)\n\nfor file in "\${files[@]}"; do\n  path="\${file%%|*}"\n  url="\${file#*|}"\n  mkdir -p "$(dirname "$path")"\n  curl -L "$url" -o "$path"\ndone\n`;
}

function escapePowerShellString(value) {
  return String(value).replaceAll("`", "``").replaceAll('"', '`"');
}

function escapeBashString(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll("$", "\\$").replaceAll("`", "\\`");
}

function toPascalCase(value) {
  return String(value)
    .replace(/\/.*/, "")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase());
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
