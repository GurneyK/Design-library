import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const errors = [];
const allowedRawHexFiles = new Set([
  "src/components/ui/color-swatch/ColorSwatch.tsx",
]);

const componentFiles = await listSourceFiles(path.join(root, "src/components"));

for (const absolutePath of componentFiles) {
  const relativePath = path.relative(root, absolutePath).replaceAll("\\", "/");
  const content = await readFile(absolutePath, "utf8");

  if (!allowedRawHexFiles.has(relativePath)) {
    assertNoPattern(relativePath, content, /#[0-9a-fA-F]{3,8}/g, "raw hex color");
  }

  assertNoPattern(relativePath, content, /\b(?:bg|text|border|ring|from|to|via)-\[#/g, "raw arbitrary Tailwind color");
  assertNoPattern(relativePath, content, /shadow-\[[^\]]*#[0-9a-fA-F]{3,8}[^\]]*\]/g, "raw arbitrary Tailwind shadow color");
}

if (errors.length > 0) {
  console.error("Token usage validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Token usage validation passed: ${componentFiles.length} component files scanned.`);

async function listSourceFiles(directory) {
  const results = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await listSourceFiles(fullPath)));
      continue;
    }

    if (/\.(ts|tsx)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results.sort();
}

function assertNoPattern(filePath, content, pattern, label) {
  const lines = content.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    if (pattern.test(lines[index])) {
      errors.push(`${filePath}:${index + 1} contains ${label}. Use Habibi tokens or CSS variables instead.`);
    }
    pattern.lastIndex = 0;
  }
}
