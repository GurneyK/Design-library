# MVP Status

Last updated: May 12, 2026

## Status

The Design Library MVP is shareable, deployed, and ready for early team review.

- Live preview: https://gurneyk.github.io/Design-library/
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
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
- Developer handoff metadata for every entry, including source links, raw files, import paths, setup notes, and copy status.

## What Is Still Post-MVP

- Pixel-level Figma QA for every entry once Figma MCP access is stable.
- Deeper accessibility QA with keyboard walkthroughs and contrast checks.
- Bundle code-splitting. The app currently builds successfully, but Vite warns that the main app chunk is above 500 kB because the catalog is large.
- Stronger test coverage for manifest generation and catalog schema validation.
- More exact Code Connect-style mapping between Figma component names and React component names.
- Back-porting proposed code-side components into the Figma library.

## Recommended Review Path

For a design review, start with:

1. Foundations
2. Primitives
3. Agent UI
4. Dashboard / Product Patterns
5. Templates / Blocks

For a developer review, start with:

1. `src/data/catalog.ts`
2. `src/data/*Entries.tsx`
3. `src/components/ui/`
4. `scripts/write-agent-manifest.mjs`
5. `manifest.json`

For an AI-agent review, start with:

1. https://gurneyk.github.io/Design-library/manifest.json
2. Entry `agentGuidance` fields
3. Entry `usage` and `avoid` fields
4. Entry `tokens`, `variants`, and `code`
