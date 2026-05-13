import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const defaultHandoffUrl = "https://gurneyk.github.io/Design-library/developer-handoff.json";
const args = process.argv.slice(2);
const entryId = args.find((arg) => !arg.startsWith("--"));
const includeGlobals = args.includes("--globals");
const dryRun = args.includes("--dry-run");
const handoffUrl = getOption("--handoff-url") ?? defaultHandoffUrl;
const outputDir = path.resolve(getOption("--out") ?? process.cwd());

process.exitCode = await main();

async function main() {
  if (!entryId || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return entryId ? 0 : 1;
  }

  const handoff = await fetchJson(handoffUrl);
  const entry = handoff[entryId];

  if (!entry) {
    const suggestions = Object.keys(handoff)
      .filter((id) => id.includes(entryId) || entryId.includes(id))
      .slice(0, 8);

    console.error(`Unknown Design Library entry: ${entryId}`);
    if (suggestions.length > 0) {
      console.error(`Closest IDs: ${suggestions.join(", ")}`);
    }
    return 1;
  }

  if (entry.copyStatus !== "source-available") {
    console.error(`Entry "${entryId}" is not a copyable source component. copyStatus=${entry.copyStatus}`);
    console.error(entry.copyInstructions);
    return 1;
  }

  const files = toFilePairs(entry.allCopyPaths, entry.allRawUrls);
  const globalFiles = includeGlobals ? toFilePairs(entry.requiredGlobalPaths ?? [], entry.requiredGlobalRawUrls ?? []) : [];
  const allFiles = [...files, ...globalFiles];

  console.log(`Design Library entry: ${entryId}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Package setup: ${entry.packageInstallCommand}`);
  console.log(`Import alias: ${entry.importAlias}`);
  console.log(`Files: ${allFiles.length}${includeGlobals ? " including global setup" : ""}`);

  for (const file of allFiles) {
    const targetPath = path.join(outputDir, file.relativePath);
    console.log(`${dryRun ? "Would copy" : "Copying"} ${file.relativePath}`);

    if (dryRun) {
      continue;
    }

    const source = await fetchText(file.url);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, source, "utf8");
  }

  if (!includeGlobals && (entry.requiredGlobalPaths?.length ?? 0) > 0) {
    console.log(`Global setup files not copied. Re-run with --globals to copy: ${entry.requiredGlobalPaths.join(", ")}`);
  }

  console.log(dryRun ? "Dry run complete." : "Copy complete.");
  return 0;
}

function getOption(name) {
  const exact = args.findIndex((arg) => arg === name);
  if (exact >= 0) {
    return args[exact + 1];
  }

  const prefix = `${name}=`;
  return args.find((arg) => arg.startsWith(prefix))?.slice(prefix.length);
}

function toFilePairs(paths = [], urls = []) {
  return paths.map((relativePath, index) => ({
    relativePath,
    url: urls[index],
  }));
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function printHelp() {
  console.log(`Copy a Design Library component or template by catalog ID.

Usage:
  node scripts/copy-component.mjs <entry-id> [options]

Options:
  --out <path>          Output directory. Defaults to the current working directory.
  --globals            Also copy tailwind.config.ts and src/index.css.
  --dry-run            Print files without writing them.
  --handoff-url <url>   Override the developer-handoff.json URL.

Examples:
  node scripts/copy-component.mjs run-card --dry-run
  node scripts/copy-component.mjs run-card --out ../my-app --globals
`);
}
