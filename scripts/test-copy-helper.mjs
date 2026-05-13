import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const tempDir = await mkdtemp(path.join(os.tmpdir(), "design-library-copy-helper-"));

try {
  const list = await run([
    "scripts/copy-component.mjs",
    "--list",
    "--manifest-file",
    "manifest.json",
    "--handoff-file",
    "developer-handoff.json",
  ]);
  if (!list.stdout.includes("button") || !list.stdout.includes("source-available")) {
    throw new Error("Copy helper list output should include component IDs and copy status.");
  }

  const search = await run([
    "scripts/copy-component.mjs",
    "--search",
    "run",
    "--manifest-file",
    "manifest.json",
    "--handoff-file",
    "developer-handoff.json",
  ]);
  if (!search.stdout.includes("run-card")) {
    throw new Error("Copy helper search output should include matching component IDs.");
  }

  await run(["scripts/copy-component.mjs", "run-card", "--dry-run", "--handoff-file", "developer-handoff.json"]);
  await run([
    "scripts/copy-component.mjs",
    "run-card",
    "--handoff-file",
    "developer-handoff.json",
    "--source-root",
    ".",
    "--out",
    tempDir,
    "--globals",
    "--receipt",
  ]);

  const copiedFiles = await listFiles(tempDir);
  const expectedFiles = [
    "src/components/ui/dashboard/RunCard.tsx",
    "src/components/ui/button/Button.tsx",
    "src/components/ui/dashboard/RunStatusPill.tsx",
    "src/components/ui/progress/Progress.tsx",
    "tailwind.config.ts",
    "src/index.css",
    "DESIGN_LIBRARY_HANDOFF.md",
  ];

  for (const expectedFile of expectedFiles) {
    if (!copiedFiles.includes(expectedFile)) {
      throw new Error(`Copy helper did not create ${expectedFile}.`);
    }
  }

  const receipt = await readFile(path.join(tempDir, "DESIGN_LIBRARY_HANDOFF.md"), "utf8");
  if (!receipt.includes("Catalog ID: run-card") || !receipt.includes("src/components/ui/dashboard/RunCard.tsx")) {
    throw new Error("Copy helper receipt should include the catalog ID and copied source files.");
  }

  const unknown = await run(["scripts/copy-component.mjs", "unknown-entry", "--handoff-file", "developer-handoff.json"], {
    allowFailure: true,
  });

  if (unknown.code === 0 || !unknown.stderr.includes("Unknown Design Library entry")) {
    throw new Error("Copy helper should return a clear error for unknown entry IDs.");
  }

  console.log(`Copy helper validation passed: ${expectedFiles.length} files copied.`);
} finally {
  await rm(tempDir, { force: true, recursive: true });
}

async function run(args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0 && !options.allowFailure) {
        reject(new Error(`Command failed: node ${args.join(" ")}\n${stderr || stdout}`));
        return;
      }
      resolve({ code, stdout, stderr });
    });
  });
}

async function listFiles(directory) {
  const results = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await listFiles(fullPath)));
      continue;
    }
    results.push(path.relative(tempDir, fullPath).replaceAll("\\", "/"));
  }

  return results.sort();
}
