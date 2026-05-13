import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "manifest.json");
const developerHandoffPath = path.join(root, "developer-handoff.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const developerHandoff = JSON.parse(await readFile(developerHandoffPath, "utf8"));
const errors = [];

const entries = Array.isArray(manifest.entries) ? manifest.entries : [];
const uniqueCategories = new Set(entries.map((entry) => entry.category));
const uniqueKinds = new Set(entries.map((entry) => entry.kind));

expect(manifest.schemaVersion, "Manifest must include schemaVersion.");
expect(manifest.publicUrl, "Manifest must include publicUrl.");
expect(Array.isArray(manifest.manifestUrls) && manifest.manifestUrls.length > 0, "Manifest must include at least one manifest URL.");
expect(
  Array.isArray(manifest.developerHandoffUrls) && manifest.developerHandoffUrls.length > 0,
  "Manifest must include at least one developer handoff URL.",
);
expect(manifest.counts?.entries === entries.length, `Manifest count mismatch: counts.entries=${manifest.counts?.entries}, entries.length=${entries.length}.`);
expect(manifest.counts?.categories === uniqueCategories.size, `Category count mismatch: counts.categories=${manifest.counts?.categories}, actual=${uniqueCategories.size}.`);
expect(
  Object.keys(developerHandoff).length === entries.length,
  `Developer handoff count mismatch: handoff=${Object.keys(developerHandoff).length}, entries=${entries.length}.`,
);

const ids = new Map();
for (const entry of entries) {
  if (!entry?.id) {
    errors.push("Entry is missing id.");
    continue;
  }
  ids.set(entry.id, [...(ids.get(entry.id) ?? []), entry]);
}

for (const [id, matches] of ids) {
  if (matches.length > 1) {
    errors.push(`Duplicate entry id: ${id}.`);
  }
}

for (const category of uniqueCategories) {
  const expected = entries.filter((entry) => entry.category === category).length;
  const actual = manifest.categoryCounts?.[category];
  expect(actual === expected, `Category count mismatch for ${category}: manifest=${actual}, actual=${expected}.`);
}

for (const kind of uniqueKinds) {
  const expected = entries.filter((entry) => entry.kind === kind).length;
  const actual = manifest.kindCounts?.[kind];
  expect(actual === expected, `Kind count mismatch for ${kind}: manifest=${actual}, actual=${expected}.`);
}

await Promise.all(entries.map((entry) => validateEntry(entry)));

if (errors.length > 0) {
  console.error("Catalog validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Catalog validation passed: ${entries.length} entries, ${uniqueCategories.size} categories.`);

async function validateEntry(entry) {
  const prefix = entry.id ? `${entry.id}:` : "Unknown entry:";
  const requiredStrings = ["id", "kind", "name", "category", "subcategory", "status", "description", "code", "sourceFile"];
  const requiredArrays = ["source", "tokens", "useWhen", "doNotUseWhen", "accessibility", "agentGuidance"];

  for (const key of requiredStrings) {
    if (typeof entry[key] !== "string" || entry[key].trim().length === 0) {
      errors.push(`${prefix} ${key} must be a non-empty string.`);
    }
  }

  for (const key of requiredArrays) {
    if (!Array.isArray(entry[key]) || entry[key].length === 0) {
      errors.push(`${prefix} ${key} must be a non-empty array.`);
    }
  }

  if (!["component", "foundation", "template"].includes(entry.kind)) {
    errors.push(`${prefix} kind must be component, foundation, or template.`);
  }

  if (entry.kind !== "foundation" && (!Array.isArray(entry.variants) || entry.variants.length === 0)) {
    errors.push(`${prefix} variants must be a non-empty array for components and templates.`);
  }

  if (entry.kind === "foundation" && !Array.isArray(entry.variants)) {
    errors.push(`${prefix} variants must be an array.`);
  }

  if (!Array.isArray(entry.props)) {
    errors.push(`${prefix} props must be an array.`);
  }

  if (entry.sourceFile) {
    await checkSourceFile(prefix, entry.sourceFile);
  }

  validateDeveloperHandoff(prefix, entry);
}

async function checkSourceFile(prefix, sourceFile) {
  try {
    await access(path.join(root, sourceFile));
  } catch {
    errors.push(`${prefix} sourceFile does not exist: ${sourceFile}.`);
  }
}

function expect(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function validateDeveloperHandoff(prefix, entry) {
  const handoff = entry.developerHandoff;
  if (!handoff || typeof handoff !== "object") {
    errors.push(`${prefix} developerHandoff is required.`);
    return;
  }

  const externalHandoff = developerHandoff[entry.id];
  if (!externalHandoff) {
    errors.push(`${prefix} standalone developer-handoff.json entry is required.`);
  } else if (JSON.stringify(externalHandoff) !== JSON.stringify(handoff)) {
    errors.push(`${prefix} standalone developer-handoff.json must match manifest developerHandoff.`);
  }

  if (!["source-available", "usage-snippet-only", "foundation-guidance", "reference-endpoint"].includes(handoff.copyStatus)) {
    errors.push(`${prefix} developerHandoff.copyStatus is invalid.`);
  }

  for (const key of [
    "sourcePaths",
    "dependencyPaths",
    "allCopyPaths",
    "githubUrls",
    "rawUrls",
    "importPaths",
    "dependencyGithubUrls",
    "dependencyRawUrls",
    "dependencyImportPaths",
    "allGithubUrls",
    "allRawUrls",
    "allImportPaths",
    "requiredGlobalPaths",
    "requiredGlobalGithubUrls",
    "requiredGlobalRawUrls",
    "requiredSetup",
  ]) {
    if (!Array.isArray(handoff[key])) {
      errors.push(`${prefix} developerHandoff.${key} must be an array.`);
    }
  }

  for (const key of ["packageInstallCommand", "importAlias"]) {
    if (typeof handoff[key] !== "string" || handoff[key].trim().length === 0) {
      errors.push(`${prefix} developerHandoff.${key} must be a non-empty string.`);
    }
  }

  if (entry.kind !== "foundation" && entry.category !== "Agent Reference" && handoff.copyStatus !== "source-available") {
    errors.push(`${prefix} developerHandoff must resolve implementation source for component/template entries.`);
  }

  if (handoff.copyStatus === "source-available" && handoff.sourcePaths.length === 0) {
    errors.push(`${prefix} developerHandoff.sourcePaths must include at least one source file.`);
  }

  if (handoff.copyStatus === "source-available" && handoff.allCopyPaths.length < handoff.sourcePaths.length) {
    errors.push(`${prefix} developerHandoff.allCopyPaths must include source paths and local dependencies.`);
  }

  if (handoff.copyStatus === "source-available") {
    if (handoff.allCopyPaths.length !== handoff.allRawUrls.length) {
      errors.push(`${prefix} developerHandoff.allRawUrls must align with allCopyPaths.`);
    }
    if (handoff.copyScriptLanguage !== "powershell") {
      errors.push(`${prefix} developerHandoff.copyScriptLanguage must be powershell.`);
    }
    if (typeof handoff.copyScript !== "string" || !handoff.copyScript.includes("Invoke-WebRequest")) {
      errors.push(`${prefix} developerHandoff.copyScript must include a PowerShell download script.`);
    }
    if (!handoff.copyScripts || typeof handoff.copyScripts !== "object") {
      errors.push(`${prefix} developerHandoff.copyScripts is required.`);
    } else {
      if (typeof handoff.copyScripts.powershell !== "string" || !handoff.copyScripts.powershell.includes("Invoke-WebRequest")) {
        errors.push(`${prefix} developerHandoff.copyScripts.powershell must include Invoke-WebRequest.`);
      }
      if (typeof handoff.copyScripts.bash !== "string" || !handoff.copyScripts.bash.includes("curl -L")) {
        errors.push(`${prefix} developerHandoff.copyScripts.bash must include curl -L.`);
      }
    }
  }

  if (typeof handoff.copyInstructions !== "string" || handoff.copyInstructions.trim().length === 0) {
    errors.push(`${prefix} developerHandoff.copyInstructions must be a non-empty string.`);
  }
}
