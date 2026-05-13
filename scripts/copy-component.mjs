import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const defaultHandoffUrl = "https://gurneyk.github.io/Design-library/developer-handoff.json";
const defaultManifestUrl = "https://gurneyk.github.io/Design-library/manifest.json";
const args = process.argv.slice(2);
const entryId = getEntryId();
const includeGlobals = args.includes("--globals");
const listEntries = args.includes("--list");
const dryRun = args.includes("--dry-run");
const writeReceipt = args.includes("--receipt");
const handoffFile = getOption("--handoff-file");
const handoffUrl = getOption("--handoff-url") ?? defaultHandoffUrl;
const manifestFile = getOption("--manifest-file");
const manifestUrl = getOption("--manifest-url") ?? defaultManifestUrl;
const outputDir = path.resolve(getOption("--out") ?? process.cwd());
const receiptFileName = getOption("--receipt-file") ?? "DESIGN_LIBRARY_HANDOFF.md";
const searchQuery = getOption("--search");
const sourceRoot = getOption("--source-root");

process.exitCode = await main();

async function main() {
  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    return 0;
  }

  if (listEntries || searchQuery) {
    await printEntries();
    return 0;
  }

  if (!entryId) {
    printHelp();
    return 1;
  }

  const handoff = handoffFile ? await readJsonFile(handoffFile) : await fetchJson(handoffUrl);
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

    const source = sourceRoot ? await readFile(path.join(path.resolve(sourceRoot), file.relativePath), "utf8") : await fetchText(file.url);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, source, "utf8");
  }

  if (!includeGlobals && (entry.requiredGlobalPaths?.length ?? 0) > 0) {
    console.log(`Global setup files not copied. Re-run with --globals to copy: ${entry.requiredGlobalPaths.join(", ")}`);
  }

  if (writeReceipt) {
    const receiptPath = path.join(outputDir, receiptFileName);
    console.log(`${dryRun ? "Would write" : "Writing"} ${receiptFileName}`);

    if (!dryRun) {
      await mkdir(path.dirname(receiptPath), { recursive: true });
      await writeFile(receiptPath, buildReceipt(entry, allFiles, { includeGlobals }), "utf8");
    }
  }

  console.log(dryRun ? "Dry run complete." : "Copy complete.");
  return 0;
}

async function printEntries() {
  const manifest = manifestFile ? await readJsonFile(manifestFile) : await fetchJson(manifestUrl);
  const handoff = handoffFile ? await readJsonFile(handoffFile) : await fetchJson(handoffUrl);
  const query = searchQuery?.toLowerCase();
  const entries = Array.isArray(manifest.entries) ? manifest.entries : [];
  const matches = entries.filter((entry) => {
    if (!query) {
      return true;
    }

    return [entry.id, entry.name, entry.category, entry.subcategory, entry.kind]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(query));
  });

  console.log(`Design Library entries: ${matches.length}${query ? ` matching "${searchQuery}"` : ""}`);
  console.log("ID                                      Kind        Copy status        Category                         Name");

  for (const entry of matches) {
    const copyStatus = handoff[entry.id]?.copyStatus ?? "unknown";
    console.log(
      `${pad(entry.id, 39)} ${pad(entry.kind, 11)} ${pad(copyStatus, 18)} ${pad(entry.category, 32)} ${entry.name}`,
    );
  }
}

function getEntryId() {
  const optionsWithValues = new Set([
    "--handoff-file",
    "--handoff-url",
    "--manifest-file",
    "--manifest-url",
    "--out",
    "--receipt-file",
    "--search",
    "--source-root",
  ]);

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (optionsWithValues.has(arg)) {
      index += 1;
      continue;
    }
    if (arg.startsWith("--")) {
      continue;
    }
    return arg;
  }
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

function pad(value, length) {
  const text = String(value ?? "");
  return text.length >= length ? text.slice(0, length - 1) + " " : text.padEnd(length, " ");
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
  node scripts/copy-component.mjs --list [options]
  node scripts/copy-component.mjs --search <query> [options]

Options:
  --out <path>          Output directory. Defaults to the current working directory.
  --globals            Also copy tailwind.config.ts and src/index.css.
  --dry-run            Print files without writing them.
  --handoff-file <path> Read developer handoff JSON from a local file.
  --handoff-url <url>   Override the developer-handoff.json URL.
  --manifest-file <path> Read manifest JSON from a local file.
  --manifest-url <url>  Override the manifest.json URL.
  --receipt             Write DESIGN_LIBRARY_HANDOFF.md into the output directory.
  --receipt-file <path> Override the handoff receipt filename.
  --source-root <path>  Copy files from a local repo instead of raw URLs.

Examples:
  node scripts/copy-component.mjs --search run
  node scripts/copy-component.mjs run-card --dry-run
  node scripts/copy-component.mjs run-card --out ../my-app --globals
  node scripts/copy-component.mjs run-card --out ../my-app --receipt
  node scripts/copy-component.mjs run-card --handoff-file developer-handoff.json --source-root . --out ../my-app
`);
}

async function readJsonFile(filePath) {
  const json = await readFile(path.resolve(filePath), "utf8");
  return JSON.parse(json);
}

function buildReceipt(entry, files, options) {
  const lines = [
    "# Design Library Handoff",
    "",
    `Catalog ID: ${entry.catalogId}`,
    "",
    "## Setup",
    "",
    "```bash",
    entry.packageInstallCommand,
    "```",
    "",
    `Import alias: ${entry.importAlias}`,
    "",
    "Required global setup:",
    "",
    ...toBullets(entry.requiredGlobalPaths),
    "",
    options.includeGlobals
      ? "Global setup files were included in this copy."
      : "Global setup files were not copied. Re-run with `--globals` if this app does not already include equivalent Habibi Tailwind tokens and base styles.",
    "",
    "## Copied Files",
    "",
    ...toBullets(files.map((file) => file.relativePath)),
    "",
    "## Source Links",
    "",
    ...toBullets(entry.allGithubUrls),
    "",
    "## Notes",
    "",
    entry.copyInstructions,
    "",
    "After copying, run the consuming app locally and confirm Tailwind scans the copied `src/**/*.{ts,tsx}` files.",
    "",
  ];

  return `${lines.join("\n")}\n`;
}

function toBullets(values = []) {
  if (values.length === 0) {
    return ["- None"];
  }

  return values.map((value) => `- ${value}`);
}
