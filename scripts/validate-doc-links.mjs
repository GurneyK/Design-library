import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules", "playwright-report", "test-results", "site", "dist"]);
const markdownFiles = await collectMarkdownFiles(root);
const errors = [];

for (const filePath of markdownFiles) {
  await validateFile(filePath);
}

if (errors.length > 0) {
  console.error("Markdown link validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Markdown link validation passed: ${markdownFiles.length} files.`);

async function validateFile(filePath) {
  const source = await readFile(filePath, "utf8");
  const relativeFile = path.relative(root, filePath).replaceAll("\\", "/");
  const links = [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)];

  for (const [, href] of links) {
    const target = href.trim();

    if (!target || shouldSkip(target)) {
      continue;
    }

    const [targetPath, hash] = target.split("#");
    const resolvedPath = path.resolve(path.dirname(filePath), decodeURIComponent(targetPath));

    try {
      await access(resolvedPath);
    } catch {
      errors.push(`${relativeFile} links to missing file: ${target}`);
      continue;
    }

    if (hash && targetPath.endsWith(".md")) {
      await validateAnchor(relativeFile, resolvedPath, hash, target);
    }
  }
}

async function validateAnchor(relativeFile, resolvedPath, hash, target) {
  const source = await readFile(resolvedPath, "utf8");
  const anchors = new Set(
    [...source.matchAll(/^#{1,6}\s+(.+)$/gm)].map(([, heading]) =>
      heading
        .trim()
        .toLowerCase()
        .replace(/`/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-"),
    ),
  );

  if (!anchors.has(hash.toLowerCase())) {
    errors.push(`${relativeFile} links to missing heading: ${target}`);
  }
}

function shouldSkip(target) {
  return (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("#") ||
    target.startsWith("javascript:") ||
    target.includes("<") ||
    target.includes(">")
  );
}

async function collectMarkdownFiles(directory) {
  const results = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }

  return results.sort();
}
