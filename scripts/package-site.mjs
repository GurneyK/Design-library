import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const siteDir = path.join(repoRoot, "site");
const releaseRoot = path.join(repoRoot, "release");
const packageDir = path.join(releaseRoot, "design-library-site");
const deploymentDir = path.join(packageDir, "_deployment");

const requiredFiles = ["index.html", "manifest.json", "developer-handoff.json"];

async function main() {
  await assertRequiredSiteFiles();

  await rm(packageDir, { force: true, recursive: true });
  await mkdir(releaseRoot, { recursive: true });
  await cp(siteDir, packageDir, { recursive: true });

  const packagedFiles = await listFiles(packageDir);
  const checksums = await Promise.all(
    packagedFiles.map(async (filePath) => ({
      path: toPosix(path.relative(packageDir, filePath)),
      sha256: await sha256(filePath),
    })),
  );

  await mkdir(deploymentDir, { recursive: true });
  await writeFile(path.join(deploymentDir, "checksums.json"), `${JSON.stringify(checksums, null, 2)}\n`);
  await writeFile(path.join(deploymentDir, "README.md"), deploymentReadme(checksums.length));

  console.log(`Packaged ${checksums.length} site files for internal hosting.`);
  console.log(`Output: ${path.relative(repoRoot, packageDir)}`);
}

async function assertRequiredSiteFiles() {
  for (const relativeFile of requiredFiles) {
    const filePath = path.join(siteDir, relativeFile);
    try {
      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) {
        throw new Error(`${relativeFile} is not a file.`);
      }
    } catch {
      throw new Error(`Missing site/${relativeFile}. Run "npm run qa" before packaging.`);
    }
  }
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return listFiles(entryPath);
      }
      if (entry.isFile()) {
        return [entryPath];
      }
      return [];
    }),
  );

  return files.flat().sort((a, b) => a.localeCompare(b));
}

async function sha256(filePath) {
  const file = await readFile(filePath);
  return createHash("sha256").update(file).digest("hex");
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function deploymentReadme(fileCount) {
  return `# Design Library Internal Hosting Package

This folder contains a static build of the Design Library for internal Unilever or Supermicro hosting.

## Contents

- ${fileCount} static site files copied from \`site/\`
- \`manifest.json\` for AI-agent catalog discovery
- \`developer-handoff.json\` for source-copy and dependency metadata
- \`_deployment/checksums.json\` with SHA-256 checksums for copied files

## Deploy

Copy every file in this folder to the target static web root.

Required checks after upload:

- \`/\` loads the Design Library shell.
- \`/manifest.json\` returns JSON.
- \`/developer-handoff.json\` returns JSON.
- Search works in the browser.
- Components and Templates tabs both render entries.

## Recommended Build Command

\`\`\`bash
npm ci
npm run qa
npm run visual-qa
npm run package:site
\`\`\`

Keep this package internal if it contains Unilever-specific workflow, naming, or implementation context.
`;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
