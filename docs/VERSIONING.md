# Versioning

Use this policy when preparing a Design Library milestone, review release, or future package release.

## Current Versions

| Contract | Current value | Source |
| --- | ---: | --- |
| Review release | `0.1.0` | `package.json` and `CHANGELOG.md` |
| Manifest schema | `1.0.0` | generated `manifest.json` |
| Developer handoff schema | follows manifest schema | generated `developer-handoff.json` |

## Version Types

Review release version:

- Tracks the human-facing Design Library milestone.
- Lives in `package.json`.
- Must have a matching `CHANGELOG.md` heading.
- Validated by `npm run version:check`.

Manifest schema version:

- Tracks the machine-readable contract for AI agents and automation.
- Lives in `manifest.json` as `schemaVersion`.
- Should only change when the shape or meaning of manifest/handoff fields changes.
- Currently validated as `1.0.0` by `scripts/validate-release.mjs`.

## Bump Rules

Patch-style review update:

- Docs-only edits.
- Copy polish.
- New checklist or handoff guidance.
- No catalog count or manifest shape change.

Minor-style review update:

- New source-backed components.
- New templates or blocks.
- New categories or meaningful taxonomy changes.
- Additive manifest fields.
- New copy helper capability.

Major-style review update:

- Removed or renamed existing catalog IDs.
- Breaking changes to public component props.
- Breaking changes to `manifest.json` or `developer-handoff.json`.
- Removal or semantic change of generated manifest/handoff fields.

## Release Checklist

Before bumping a review release:

1. Update `package.json`.
2. Add a matching heading to `CHANGELOG.md`.
3. Update `docs/MVP-STATUS.md` counts if catalog totals changed.
4. Update `scripts/validate-release.mjs` if expected counts or schema expectations changed.
5. Run `npm run qa`.
6. Run `npm run visual-qa`.
7. Push to `main` and confirm GitHub Actions and GitHub Pages pass.

## Catalog ID Stability

Catalog IDs are durable references for:

- Search and navigation.
- `manifest.json`.
- `developer-handoff.json`.
- `npm run copy:component`.
- AI-agent generation.
- External links and docs.

Do not rename an existing ID unless there is a migration note and a strong reason.

## Manifest Compatibility

Allowed without a schema bump:

- Adding a new catalog entry.
- Adding a new category count.
- Adding optional metadata that existing consumers can ignore.
- Improving copy or guidance strings.

Requires schema review:

- Removing fields.
- Renaming fields.
- Changing a field type.
- Changing the meaning of `copyStatus`, `source`, `kind`, or `category`.
- Changing how `developerHandoff` is keyed.

## Future Package Strategy

This repo is currently a showcase and source-copy library, not an npm package.

If teams later want package installation:

- Decide package name and scope.
- Split publishable primitives from showcase-only code.
- Add build output for package consumers.
- Add semantic versioning for component API compatibility.
- Keep `manifest.json` and `developer-handoff.json` available for agents and copy-based workflows.
