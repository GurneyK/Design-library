import { existsSync } from "node:fs";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
const developerHandoff = JSON.parse(await readFile("developer-handoff.json", "utf8"));
const readinessDoc = await readFile("docs/HANDOFF-READINESS.md", "utf8");
const errors = [];
const root = process.cwd();
const importExtensions = [".ts", ".tsx", ".js", ".jsx"];

const entries = Array.isArray(manifest.entries) ? manifest.entries : [];
const statusCounts = {};
const categoryCounts = {};

expect(entries.length > 0, "Manifest must include entries.");
expect(Object.keys(developerHandoff).length === entries.length, "developer-handoff.json must include one entry per manifest entry.");

for (const entry of entries) {
  const handoff = developerHandoff[entry.id];
  if (!handoff) {
    errors.push(`${entry.id}: missing developer handoff metadata.`);
    continue;
  }

  const copyStatus = handoff.copyStatus;
  statusCounts[copyStatus] = (statusCounts[copyStatus] ?? 0) + 1;
  categoryCounts[entry.category] ??= { sourceAvailable: 0, nonCopySource: 0 };

  if (copyStatus === "source-available") {
    categoryCounts[entry.category].sourceAvailable += 1;
  } else {
    categoryCounts[entry.category].nonCopySource += 1;
  }

  if (copyStatus === "usage-snippet-only") {
    errors.push(`${entry.id}: usage-snippet-only is not acceptable for MVP handoff.`);
  }

  if (entry.kind !== "foundation" && entry.category !== "Agent Reference" && copyStatus !== "source-available") {
    errors.push(`${entry.id}: component and template entries must be source-copyable.`);
  }

  await validateHandoffFiles(entry, handoff);
}

const sourceAvailable = statusCounts["source-available"] ?? 0;
const foundationGuidance = statusCounts["foundation-guidance"] ?? 0;
const referenceEndpoint = statusCounts["reference-endpoint"] ?? 0;

expectDocRow("Total catalog entries", entries.length);
expectDocRow("Source-copyable entries", sourceAvailable);
expectDocRow("Foundation guidance entries", foundationGuidance);
expectDocRow("Reference endpoint entries", referenceEndpoint);
expectStatusRow("`source-available`", sourceAvailable);
expectStatusRow("`foundation-guidance`", foundationGuidance);
expectStatusRow("`reference-endpoint`", referenceEndpoint);

for (const [category, counts] of Object.entries(categoryCounts)) {
  const row = `| ${category} | ${counts.sourceAvailable} | ${counts.nonCopySource} |`;
  expect(readinessDoc.includes(row), `docs/HANDOFF-READINESS.md must include category row: ${row}`);
}

if (errors.length > 0) {
  console.error("Handoff readiness validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Handoff readiness validation passed: ${sourceAvailable} source-copyable entries.`);

async function validateHandoffFiles(entry, handoff) {
  const prefix = `${entry.id}:`;

  if (handoff.copyStatus !== "source-available") {
    return;
  }

  expectSameLength(prefix, "sourcePaths", handoff.sourcePaths, "githubUrls", handoff.githubUrls);
  expectSameLength(prefix, "sourcePaths", handoff.sourcePaths, "rawUrls", handoff.rawUrls);
  expectSameLength(prefix, "sourcePaths", handoff.sourcePaths, "importPaths", handoff.importPaths);
  expectSameLength(prefix, "dependencyPaths", handoff.dependencyPaths, "dependencyGithubUrls", handoff.dependencyGithubUrls);
  expectSameLength(prefix, "dependencyPaths", handoff.dependencyPaths, "dependencyRawUrls", handoff.dependencyRawUrls);
  expectSameLength(prefix, "dependencyPaths", handoff.dependencyPaths, "dependencyImportPaths", handoff.dependencyImportPaths);
  expectSameLength(prefix, "allCopyPaths", handoff.allCopyPaths, "allGithubUrls", handoff.allGithubUrls);
  expectSameLength(prefix, "allCopyPaths", handoff.allCopyPaths, "allRawUrls", handoff.allRawUrls);
  expectSameLength(prefix, "allCopyPaths", handoff.allCopyPaths, "allImportPaths", handoff.allImportPaths);

  for (const filePath of [
    ...(handoff.sourcePaths ?? []),
    ...(handoff.dependencyPaths ?? []),
    ...(handoff.allCopyPaths ?? []),
    ...(handoff.requiredGlobalPaths ?? []),
  ]) {
    await expectFileExists(prefix, filePath);
  }

  for (const sourcePath of handoff.sourcePaths ?? []) {
    expect(
      (handoff.allCopyPaths ?? []).includes(sourcePath),
      `${prefix} allCopyPaths must include source path ${sourcePath}.`,
    );
  }

  for (const dependencyPath of handoff.dependencyPaths ?? []) {
    expect(
      (handoff.allCopyPaths ?? []).includes(dependencyPath),
      `${prefix} allCopyPaths must include dependency path ${dependencyPath}.`,
    );
  }

  await validateLocalImportClosure(prefix, handoff.allCopyPaths ?? []);
}

function expectSameLength(prefix, leftName, left = [], rightName, right = []) {
  expect(left.length === right.length, `${prefix} ${leftName} and ${rightName} must have matching lengths.`);
}

async function expectFileExists(prefix, filePath) {
  if (!filePath || typeof filePath !== "string") {
    errors.push(`${prefix} handoff file path must be a non-empty string.`);
    return;
  }

  try {
    await access(path.join(root, filePath));
  } catch {
    errors.push(`${prefix} handoff file path does not exist: ${filePath}.`);
  }
}

async function validateLocalImportClosure(prefix, copyPaths) {
  const copySet = new Set(copyPaths);

  for (const copyPath of copyPaths) {
    const content = await readFile(path.join(root, copyPath), "utf8");
    const importSpecifiers = extractLocalImportSpecifiers(content);

    for (const specifier of importSpecifiers) {
      const resolved = resolveLocalImport(path.dirname(copyPath), specifier);
      if (!resolved) {
        errors.push(`${prefix} local import could not be resolved from ${copyPath}: ${specifier}.`);
        continue;
      }

      if (!copySet.has(resolved)) {
        errors.push(`${prefix} allCopyPaths must include local import ${resolved} referenced by ${copyPath}.`);
      }
    }
  }
}

function extractLocalImportSpecifiers(content) {
  const specifiers = new Set();
  const patterns = [
    /(?:import|export)\s+(?:type\s+)?(?:[^'";]*?\s+from\s+)?["']([^"']+)["']/g,
    /import\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      if (match[1]?.startsWith(".")) {
        specifiers.add(match[1]);
      }
    }
  }

  return [...specifiers];
}

function resolveLocalImport(fromDirectory, specifier) {
  const basePath = path.normalize(path.join(fromDirectory, specifier));
  const candidates = [
    ...importExtensions.map((extension) => `${basePath}${extension}`),
    ...importExtensions.map((extension) => path.join(basePath, `index${extension}`)),
  ];

  for (const candidate of candidates) {
    if (fileExistsSync(candidate)) {
      return candidate.replaceAll("\\", "/");
    }
  }
}

function fileExistsSync(filePath) {
  return existsSync(path.join(root, filePath));
}

function expectDocRow(label, count) {
  expect(readinessDoc.includes(`| ${label} | ${count} |`), `docs/HANDOFF-READINESS.md must include "${label}" count ${count}.`);
}

function expectStatusRow(label, count) {
  const row = readinessDoc
    .split("\n")
    .find((line) => line.startsWith(`| ${label} |`) && line.endsWith(`| ${count} |`));
  expect(Boolean(row), `docs/HANDOFF-READINESS.md must include "${label}" status count ${count}.`);
}

function expect(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}
