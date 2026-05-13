import { readFile } from "node:fs/promises";

const errors = [];
const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
const changelog = await readFile("CHANGELOG.md", "utf8");
const mvpStatus = await readFile("docs/MVP-STATUS.md", "utf8");
const releaseChecklist = await readFile("docs/RELEASE-CHECKLIST.md", "utf8");

expect(packageJson.version, "package.json must include a version.");
expect(changelog.includes(`## ${packageJson.version} `), `CHANGELOG.md must include a ${packageJson.version} release entry.`);
expect(manifest.schemaVersion === "1.0.0", `manifest.schemaVersion must be 1.0.0, received ${manifest.schemaVersion}.`);

const expectedCounts = {
  entries: 224,
  component: 194,
  foundation: 14,
  template: 16,
  categories: 13,
};

expect(manifest.counts?.entries === expectedCounts.entries, `manifest counts.entries must be ${expectedCounts.entries}.`);
expect(manifest.counts?.categories === expectedCounts.categories, `manifest counts.categories must be ${expectedCounts.categories}.`);
expect(manifest.kindCounts?.component === expectedCounts.component, `manifest kindCounts.component must be ${expectedCounts.component}.`);
expect(manifest.kindCounts?.foundation === expectedCounts.foundation, `manifest kindCounts.foundation must be ${expectedCounts.foundation}.`);
expect(manifest.kindCounts?.template === expectedCounts.template, `manifest kindCounts.template must be ${expectedCounts.template}.`);

for (const value of [
  "Total catalog entries | 224",
  "Live component entries | 194",
  "Template/block entries | 16",
  "A changelog and release checklist",
]) {
  expect(mvpStatus.includes(value), `docs/MVP-STATUS.md must include "${value}".`);
}

for (const value of ["npm run qa", "npm run visual-qa", "CHANGELOG.md", "manifest.json", "developer-handoff.json"]) {
  expect(releaseChecklist.includes(value), `docs/RELEASE-CHECKLIST.md must include "${value}".`);
}

if (errors.length > 0) {
  console.error("Release validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Release validation passed: ${packageJson.version}, ${expectedCounts.entries} entries.`);

function expect(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}
