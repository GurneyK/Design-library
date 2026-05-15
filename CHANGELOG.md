# Changelog

All notable changes to the Design Library are tracked here.

## 0.1.0 MVP Review - 2026-05-13

Status: Deployed to GitHub Pages and ready for early team review.

### Added

- Public Design Library showcase at https://gurneyk.github.io/Design-library/
- 224 catalog entries across foundations, primitives, layout, navigation, data entry, forms, data display, charts, feedback, Agent UI, dashboard/product patterns, agent reference, and templates.
- 194 live React + Tailwind component entries.
- 16 assembled Templates / Blocks for Nexus-style screens and liftable product compositions.
- Machine-readable `manifest.json` for AI-agent discovery.
- Standalone `developer-handoff.json` for source files, raw URLs, dependency files, setup requirements, and copy commands.
- Developer handoff section in each source-backed entry.
- PowerShell and Bash copy scripts for source-backed entries.
- `npm run copy:component` helper with:
  - `--search`
  - `--list`
  - `--dry-run`
  - `--globals`
  - `--handoff-file`
  - `--source-root`
- Lazy-loaded catalog modules so the initial app shell stays lightweight.
- Developer handoff guide.
- Component authoring guide for future contributors.
- Handoff readiness summary for full-stack reuse coverage.
- Handoff readiness validation in `npm run qa` and `npm run handoff:check`.
- Optional `--receipt` output for copied components and templates.
- GitHub Pages deployment now runs `npm run qa` before publishing.
- Handoff readiness validation now checks local source, dependency, and global setup paths.
- Handoff readiness validation now checks copied local import closure.
- Token usage validation for source-backed component files.
- Agent consumption guide.
- Review guide.
- Team review packet for sharing the MVP with designers, engineers, product partners, and AI reviewers.
- MVP scorecard with a 100 / 100 readiness breakdown and post-MVP watchlist.
- GitHub issue templates for component, template/block, and agent-manifest feedback.
- Pull request template and feedback triage guide for review follow-through.
- Refreshed roadmap and MVP status docs.
- Accessibility checklist and Playwright smoke coverage for shell landmarks, skip link, selected state, and copy-action keyboard reachability.
- Contrast token validation for approved foreground/background pairs in `npm run qa`.
- Representative component semantics coverage for Button, Input, Switch, Modal, Table, and Chat Surface in Playwright.
- Screen-reader walkthrough with manual assistive-technology pass/fail criteria.
- Figma parity audit workflow with source URLs, first audit set, and pass/fail criteria.
- Launch handoff with live links, review paths, copy commands, deployment flow, and post-MVP watchlist.
- Catalog validation and copy-helper validation in `npm run qa`.
- Release/version validation in `npm run qa` and `npm run version:check`.
- Markdown local-link validation in `npm run qa` and `npm run docs:check`.
- Desktop and mobile Playwright smoke tests in `npm run visual-qa`.

### Known Gaps

- Figma pixel QA is deferred until Figma MCP access is stable.
- Proposed code-side components need design review before being treated as official Figma components.
- Deeper keyboard and contrast audits are still needed before broad rollout.
- Figma Code Connect-style mapping is future work.
- Versioned package publishing is not yet implemented.

### Verification

- `npm run qa`
- `npm run visual-qa`
- GitHub Actions build
- GitHub Pages deployment

## Pre-MVP Buildout

### Added

- Project brief, taxonomy, decisions, roadmap, inventory, and gap-analysis docs.
- Vite + React + TypeScript + Tailwind shell.
- GitHub Pages deployment workflow.
- First component and template entry layouts.
- Broad component catalog buildout across major UI-library categories.
- Agent-specific and dashboard-specific components for Nexus/Polaris workflows.
