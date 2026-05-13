import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
const developerHandoff = JSON.parse(await readFile("developer-handoff.json", "utf8"));
const readinessDoc = await readFile("docs/HANDOFF-READINESS.md", "utf8");
const errors = [];

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
