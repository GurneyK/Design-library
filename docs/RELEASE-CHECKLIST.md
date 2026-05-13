# Release Checklist

Use this checklist before sharing a new Design Library release or review milestone.

## Before Release

- Confirm `README.md` links are current.
- Confirm `docs/MVP-STATUS.md` reflects current catalog counts and status.
- Confirm `docs/ROADMAP.md` reflects shipped, next, and later work.
- Confirm `CHANGELOG.md` has an entry for the release.
- Confirm public links are appropriate for the intended audience.

## Local Verification

Run:

```bash
npm run qa
npm run visual-qa
npm run version:check
npm run docs:check
```

Expected:

- Production build succeeds.
- Catalog validation passes.
- Copy-helper validation passes.
- Release/version validation passes.
- Markdown local-link validation passes.
- Playwright desktop and mobile smoke tests pass.

## Generated Contracts

Check:

- `manifest.json`
- `developer-handoff.json`
- `site/manifest.json`
- `site/developer-handoff.json`

Confirm:

- Entry counts match `docs/MVP-STATUS.md`.
- `developerHandoff` exists for every manifest entry.
- Source-backed entries have copy commands and copy scripts.
- Agent Reference entry points to the public manifest endpoint.

## Deployment

After pushing to `main`:

- GitHub Actions build passes.
- GitHub Pages deployment passes.
- Live preview loads at https://gurneyk.github.io/Design-library/
- Live manifest loads at https://gurneyk.github.io/Design-library/manifest.json
- Live developer handoff loads at https://gurneyk.github.io/Design-library/developer-handoff.json

## Review Handoff

Share these links:

- Live preview: https://gurneyk.github.io/Design-library/
- Review guide: `docs/REVIEW-GUIDE.md`
- Developer handoff: `docs/DEVELOPER-HANDOFF.md`
- Agent consumption: `docs/AGENT-CONSUMPTION.md`
- Changelog: `CHANGELOG.md`

## Release Notes Template

```md
## Version / Milestone

Date:
Status:
Live preview:

### Added

-

### Changed

-

### Fixed

-

### Known Gaps

-

### Verification

- npm run qa
- npm run visual-qa
- GitHub Actions
- GitHub Pages
```
