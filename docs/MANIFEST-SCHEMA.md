# Manifest Schema

This document describes the generated JSON contracts used by developers, AI agents, and automation.

## Files

- `manifest.json`: complete catalog contract for discovery, documentation, and generation.
- `developer-handoff.json`: source/copy contract keyed by catalog entry ID.
- `site/manifest.json`: deployed copy of `manifest.json`.
- `site/developer-handoff.json`: deployed copy of `developer-handoff.json`.

Public endpoints:

```text
https://gurneyk.github.io/Design-library/manifest.json
https://gurneyk.github.io/Design-library/developer-handoff.json
```

## Versioning

Current manifest schema version:

```text
1.0.0
```

Treat `schemaVersion` as the machine contract version. Treat `package.json` version and `CHANGELOG.md` as the review/release version.

Run:

```bash
npm run version:check
```

to verify package version, changelog entry, manifest schema, and catalog counts.

See [Versioning](VERSIONING.md) for review release, manifest schema, catalog ID, and future package rules.

## Manifest Root

Required root fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `schemaVersion` | `string` | Machine contract version. |
| `name` | `string` | Catalog name. |
| `description` | `string` | Catalog purpose. |
| `publicUrl` | `string` | Live showcase URL. |
| `manifestUrls` | `string[]` | Public manifest endpoints. |
| `developerHandoffUrls` | `string[]` | Public handoff endpoints. |
| `counts` | `object` | Entry, category, and template totals. |
| `kindCounts` | `object` | Totals for `component`, `foundation`, and `template`. |
| `categoryCounts` | `Record<string, number>` | Entry count by category. |
| `consumptionGuidance` | `string[]` | Top-level instructions for AI agents. |
| `entrySchema` | `Record<string, string>` | Human-readable field descriptions. |
| `categories` | `string[]` | Top-level navigation/category list. |
| `entries` | `CatalogEntry[]` | Full catalog entries. |

Current counts:

```json
{
  "entries": 224,
  "categories": 13,
  "templates": 16
}
```

## Catalog Entry

Required entry fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `id` | `string` | Stable lookup ID. |
| `kind` | `"component" | "foundation" | "template"` | Entry type. |
| `name` | `string` | Display name. |
| `category` | `string` | Top-level category. |
| `subcategory` | `string` | Category grouping. |
| `status` | `string` | Entry status. |
| `source` | `string[]` | Source labels such as `written-spec`, `reference-code`, or `figma-deferred`. |
| `description` | `string` | Plain-language purpose. |
| `variants` | `string[]` | Supported states, tones, and structures. |
| `props` | `PropRow[]` | Code-side API or data slots. |
| `tokens` | `string[]` | Habibi tokens used by the entry. |
| `useWhen` | `string[]` | Recommended use cases. |
| `doNotUseWhen` | `string[]` | Constraints and anti-patterns. |
| `accessibility` | `string[]` | Baseline accessibility requirements. |
| `agentGuidance` | `string[]` | AI-agent composition guidance. |
| `code` | `string` | Usage snippet or starter composition. |
| `sourceFile` | `string` | Metadata source file inside this repo. |
| `developerHandoff` | `DeveloperHandoff` | Copy/source metadata for the entry. |

`foundation` entries may have empty `variants`; component and template entries must have at least one variant.

## Prop Row

| Field | Type | Purpose |
| --- | --- | --- |
| `name` | `string` | Prop or slot name. |
| `type` | `string` | TypeScript-style type description. |
| `defaultValue` | `string` | Default value or `-`. |
| `description` | `string` | Purpose and behavior. |

## Developer Handoff

`developer-handoff.json` is keyed by entry ID:

```ts
handoff["run-card"]
```

Required handoff fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `catalogId` | `string` | Must match the catalog entry ID. |
| `copyStatus` | `"source-available" | "usage-snippet-only" | "foundation-guidance" | "reference-endpoint"` | Copy/source availability. |
| `usageSnippetStatus` | `string` | Usage snippet state. |
| `repositoryUrl` | `string` | GitHub repo URL. |
| `sourcePaths` | `string[]` | Primary implementation files. |
| `dependencyPaths` | `string[]` | Local files imported by source files. |
| `allCopyPaths` | `string[]` | Source plus dependency paths. |
| `githubUrls` | `string[]` | GitHub source links for primary files. |
| `rawUrls` | `string[]` | Raw GitHub links for primary files. |
| `importPaths` | `string[]` | Suggested import paths. |
| `allGithubUrls` | `string[]` | GitHub links for all copied files. |
| `allRawUrls` | `string[]` | Raw links for all copied files. |
| `allImportPaths` | `string[]` | Import paths for all copied files. |
| `copyScripts` | `{ powershell?: string; bash?: string }` | Shell scripts for source-backed entries. |
| `copyCommand` | `string` | CLI copy command without global setup. |
| `copyCommandWithGlobals` | `string` | CLI copy command with global setup. |
| `packageInstallCommand` | `string` | Package install command for consuming apps. |
| `importAlias` | `string` | Import alias convention. |
| `requiredGlobalPaths` | `string[]` | Global token/style files to review or copy. |
| `requiredSetup` | `string[]` | Human-readable setup requirements. |
| `copyInstructions` | `string` | Human-readable copy guidance. |

Source-backed entries must include source paths, raw URLs, copy scripts, and copy commands. Foundation entries provide guidance rather than component source files.

The copy helper also supports `--receipt`, which writes a local `DESIGN_LIBRARY_HANDOFF.md` file into the consuming app. The receipt is generated from `developer-handoff.json`; it is not a separate manifest field.

`npm run handoff:check` verifies that source-backed handoff paths exist locally, that source/dependency/global path arrays align with their URL and import arrays, that local relative imports are included in `allCopyPaths`, and that this contract stays synchronized with [Handoff readiness](HANDOFF-READINESS.md).

## Stability Rules

- Existing `id` values should remain stable.
- Do not remove fields from `manifest.json` or `developer-handoff.json` without bumping `schemaVersion`.
- Additive fields are allowed in minor review updates.
- Count changes must be reflected in `docs/MVP-STATUS.md`, `CHANGELOG.md`, and `scripts/validate-release.mjs`.
- Use `npm run qa` before sharing a release or review link.

## Related Docs

- [Agent consumption](AGENT-CONSUMPTION.md)
- [Developer handoff](DEVELOPER-HANDOFF.md)
- [Release checklist](RELEASE-CHECKLIST.md)
- [Versioning](VERSIONING.md)
- [MVP status](MVP-STATUS.md)
