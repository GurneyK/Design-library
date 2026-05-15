# Release Checklist

Use this checklist before sharing a new Design Library release or review milestone.

## Before Release

- Confirm `README.md` links are current.
- Confirm `docs/MVP-STATUS.md` reflects current catalog counts and status.
- Confirm `docs/MVP-SCORECARD.md` reflects current readiness and remaining points.
- Confirm `docs/LAUNCH-HANDOFF.md` reflects current live links, commands, and post-MVP watchlist.
- Confirm `CONTRIBUTING.md` reflects the current contributor workflow and verification commands.
- Confirm `docs/VERSIONING.md` reflects current release and manifest rules.
- Confirm `docs/ROADMAP.md` reflects shipped, next, and later work.
- Confirm `docs/COMPONENT-AUTHORING.md` reflects the current catalog and handoff workflow.
- Confirm `docs/HANDOFF-READINESS.md` reflects current source-copyable coverage.
- Confirm `docs/SCREEN-READER-WALKTHROUGH.md` reflects current core flows.
- Confirm `docs/FIGMA-PARITY-AUDIT.md` reflects current Figma access status and first audit set.
- Confirm `CHANGELOG.md` has an entry for the release.
- Confirm public links are appropriate for the intended audience.

## Local Verification

Run:

```bash
npm run qa
npm run visual-qa
npm run version:check
npm run docs:check
npm run handoff:check
npm run token:check
npm run contrast:check
```

Expected:

- Production build succeeds.
- Catalog validation passes.
- Copy-helper validation passes.
- Release/version validation passes.
- Markdown local-link validation passes.
- Handoff readiness validation passes.
- Copy-helper receipt generation passes.
- Token usage validation passes.
- Contrast token validation passes.
- Playwright desktop and mobile smoke tests pass.
- Accessibility smoke tests pass inside `npm run visual-qa`.

## Generated Contracts

Check:

- `manifest.json`
- `developer-handoff.json`
- `site/manifest.json`
- `site/developer-handoff.json`
- `docs/MANIFEST-SCHEMA.md`

Confirm:

- Entry counts match `docs/MVP-STATUS.md`.
- `developerHandoff` exists for every manifest entry.
- Source-backed entries have copy commands and copy scripts.
- Source-backed entries point to real local source and dependency files.
- Source-backed entries include local relative imports in `allCopyPaths`.
- Agent Reference entry points to the public manifest endpoint.

## Deployment

After pushing to `main`:

- GitHub Actions QA passes.
- GitHub Pages deployment passes.
- Live preview loads at https://gurneyk.github.io/Design-library/
- Live manifest loads at https://gurneyk.github.io/Design-library/manifest.json
- Live developer handoff loads at https://gurneyk.github.io/Design-library/developer-handoff.json

## Review Handoff

Share these links:

- Live preview: https://gurneyk.github.io/Design-library/
- Launch handoff: `docs/LAUNCH-HANDOFF.md`
- Review guide: `docs/REVIEW-GUIDE.md`
- Team review packet: `docs/TEAM-REVIEW-PACKET.md`
- MVP scorecard: `docs/MVP-SCORECARD.md`
- Feedback triage: `docs/FEEDBACK-TRIAGE.md`
- Developer handoff: `docs/DEVELOPER-HANDOFF.md`
- Component authoring: `docs/COMPONENT-AUTHORING.md`
- Handoff readiness: `docs/HANDOFF-READINESS.md`
- Accessibility checklist: `docs/ACCESSIBILITY-CHECKLIST.md`
- Screen reader walkthrough: `docs/SCREEN-READER-WALKTHROUGH.md`
- Figma parity audit: `docs/FIGMA-PARITY-AUDIT.md`
- Versioning: `docs/VERSIONING.md`
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
