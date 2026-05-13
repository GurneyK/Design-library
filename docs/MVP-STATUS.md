# MVP Status

Last updated: May 13, 2026

## Status

The Design Library MVP is shareable, deployed, and ready for early team review.

- Live preview: https://gurneyk.github.io/Design-library/
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
- Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json
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
- Desktop and mobile Playwright smoke tests for catalog render, search, templates, and manifest access.
- Developer handoff metadata for every entry, including source links, raw files, import paths, package install command, global setup files, setup notes, and copy status.
- A standalone `developer-handoff.json` endpoint for scripts, agents, and dev tooling.
- Lazy-loaded catalog modules so the initial app shell stays small and previews load on demand.
- Generated PowerShell and Bash copy scripts for source-backed entries.
- A `npm run copy:component -- <entry-id>` helper for copying source-backed entries into another React + Tailwind project.
- A developer handoff guide covering install requirements, CLI discovery, copy commands, local clone mode, programmatic handoff, and reuse QA.
- A component authoring guide covering entry metadata, source-backed snippets, loader registration, manifest output, and copy QA.
- An agent consumption guide covering manifest selection, composition rules, gap behavior, prompt patterns, and generated UI review checks.
- A manifest schema guide covering generated JSON fields, handoff metadata, and stability rules.
- A review guide for design, engineering, product, and AI-agent feedback.
- A changelog and release checklist for versioned review milestones.
- A docs index that gives each audience a clear path through the project documentation.

## What Is Still Post-MVP

- Pixel-level Figma QA for every entry once Figma MCP access is stable.
- Deeper accessibility QA with keyboard walkthroughs and contrast checks.
- Continued performance budgets as the catalog grows.
- Stronger test coverage for manifest generation and catalog schema validation.
- More exact Code Connect-style mapping between Figma component names and React component names.
- Back-porting proposed code-side components into the Figma library.

## Recommended Review Path

For a design review, start with:

1. `docs/README.md`
2. `docs/REVIEW-GUIDE.md`
3. Foundations
4. Primitives
5. Agent UI
6. Dashboard / Product Patterns
7. Templates / Blocks

For a developer review, start with:

1. `docs/README.md`
2. `docs/DEVELOPER-HANDOFF.md`
3. `docs/COMPONENT-AUTHORING.md`
4. `src/data/catalog.ts`
5. `src/data/*Entries.tsx`
6. `src/components/ui/`
7. `scripts/write-agent-manifest.mjs`
8. `manifest.json`

For an AI-agent review, start with:

1. `docs/README.md`
2. `docs/AGENT-CONSUMPTION.md`
3. `docs/MANIFEST-SCHEMA.md`
4. https://gurneyk.github.io/Design-library/manifest.json
5. Entry `agentGuidance` fields
6. Entry `usage` and `avoid` fields
7. Entry `tokens`, `variants`, and `code`
