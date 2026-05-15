# MVP Status

Last updated: May 14, 2026

## Status

The Design Library MVP is shareable, deployed, and ready for early team review.

- Live preview: https://gurneyk.github.io/Design-library/
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
- Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json
- MVP readiness: 99 / 100, tracked in `docs/MVP-SCORECARD.md`
- Deployment: GitHub Pages from `main`
- Local command: `npm run dev`
- Build command: `npm run build`
- Catalog QA command: `npm run qa`
- Browser QA command: `npm run visual-qa`

## Catalog Coverage

| Category | Entries |
| --- | ---: |
| Agent Reference | 1 |
| Agent UI | 20 |
| Charts / Data Viz | 20 |
| Dashboard / Product Patterns | 20 |
| Data Display | 21 |
| Data Entry | 18 |
| Feedback | 18 |
| Forms | 19 |
| Foundations | 14 |
| Layout | 20 |
| Navigation | 19 |
| Primitives | 18 |
| Templates / Blocks | 16 |

## Totals

| Measure | Count |
| --- | ---: |
| Total catalog entries | 224 |
| Live component entries | 194 |
| Template/block entries | 16 |

## MVP Definition

The current MVP includes:

- A browsable public showcase with category navigation and search.
- Live React + Tailwind previews for component entries.
- Documentation per entry: description, variants, props where applicable, tokens, usage, avoid guidance, accessibility notes, code snippet, and agent guidance.
- A Templates / Blocks section for realistic Nexus and dashboard compositions.
- A generated machine-readable manifest for AI-agent consumption.
- A GitHub Pages deployment that updates when `main` is pushed.
- GitHub Actions deploy gating through `npm run qa` before publishing `site/`.
- Token usage validation for component source files so implementation colors route through Habibi tokens or CSS variables.
- Contrast validation for approved foreground/background token pairs.
- Desktop and mobile Playwright smoke tests for catalog render, search, templates, shell accessibility, representative component semantics, keyboard reachability, and manifest access.
- Developer handoff metadata for every entry, including source links, raw files, import paths, package install command, global setup files, setup notes, and copy status.
- A standalone `developer-handoff.json` endpoint for scripts, agents, and dev tooling.
- Lazy-loaded catalog modules so the initial app shell stays small and previews load on demand.
- Generated PowerShell and Bash copy scripts for source-backed entries.
- A `npm run copy:component -- <entry-id>` helper for copying source-backed entries into another React + Tailwind project.
- A developer handoff guide covering install requirements, CLI discovery, copy commands, local clone mode, programmatic handoff, and reuse QA.
- A component authoring guide covering entry metadata, source-backed snippets, loader registration, manifest output, and copy QA.
- A handoff readiness summary showing 209 source-copyable entries and the expected non-copy foundation/reference entries.
- An agent consumption guide covering manifest selection, composition rules, gap behavior, prompt patterns, and generated UI review checks.
- A manifest schema guide covering generated JSON fields, handoff metadata, and stability rules.
- A review guide for design, engineering, product, and AI-agent feedback.
- A screen-reader walkthrough for manual assistive-technology review.
- A team review packet with share links, a copyable message, review route, and feedback labels.
- A changelog and release checklist for versioned review milestones.
- A docs index that gives each audience a clear path through the project documentation.
- An accessibility checklist for shell, component, template, keyboard, semantic, and contrast review.

## What Is Still Post-MVP

- Pixel-level Figma QA for every entry once Figma MCP access is stable.
- Continued performance budgets as the catalog grows.
- Stronger test coverage for manifest generation and catalog schema validation.
- More exact Code Connect-style mapping between Figma component names and React component names.
- Back-porting proposed code-side components into the Figma library.

## Recommended Review Path

For a design review, start with:

1. `docs/README.md`
2. `docs/TEAM-REVIEW-PACKET.md`
3. `docs/MVP-SCORECARD.md`
4. `docs/REVIEW-GUIDE.md`
5. Foundations
6. Primitives
7. Agent UI
8. Dashboard / Product Patterns
9. Templates / Blocks

For a developer review, start with:

1. `docs/README.md`
2. `docs/DEVELOPER-HANDOFF.md`
3. `docs/COMPONENT-AUTHORING.md`
4. `docs/HANDOFF-READINESS.md`
5. `src/data/catalog.ts`
6. `src/data/*Entries.tsx`
7. `src/components/ui/`
8. `scripts/write-agent-manifest.mjs`
9. `manifest.json`

For an AI-agent review, start with:

1. `docs/README.md`
2. `docs/AGENT-CONSUMPTION.md`
3. `docs/MANIFEST-SCHEMA.md`
4. https://gurneyk.github.io/Design-library/manifest.json
5. Entry `agentGuidance` fields
6. Entry `usage` and `avoid` fields
7. Entry `tokens`, `variants`, and `code`
