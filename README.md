# Design Library

Browsable React + Tailwind showcase for the Habibi design system used across Unilever H3L, Nexus/Polaris, and future internal products.

Live preview: https://gurneyk.github.io/Design-library/

Agent manifest: https://gurneyk.github.io/Design-library/manifest.json

## What This Contains

- 224 catalog entries across foundations, primitives, layout, navigation, data entry, forms, data display, charts, feedback, agent UI, dashboard/product patterns, and templates.
- 194 live React component entries.
- 16 assembled template/block entries for Nexus-style workspaces and screens.
- A generated `manifest.json` that AI agents can read for names, categories, props, variants, tokens, usage guidance, and code snippets.
- GitHub Pages deployment through `.github/workflows/deploy.yml`.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The build generates the agent manifest, type-checks the app, builds the static site into `site/`, writes the GitHub Pages index, and refreshes the manifest outputs.

## QA

```bash
npm run qa
```

The QA command runs the production build and validates the generated catalog contract: manifest counts, duplicate IDs, required documentation fields, guidance arrays, kind/category counts, and source-file references.

## Visual QA

```bash
npm run visual-qa
```

The visual QA command runs Playwright against the production preview in desktop and mobile viewports. It checks initial render, search, representative component entries, template switching, and the published manifest endpoint.

## Deployment

This repo deploys to GitHub Pages on every push to `main`.

Deployment flow:

1. Push changes to `main`.
2. GitHub Actions runs `npm ci` and `npm run build`.
3. The `site/` folder is uploaded to GitHub Pages.
4. The live preview updates at https://gurneyk.github.io/Design-library/

## Project Docs

- [Project brief](docs/PROJECT-BRIEF.md)
- [Taxonomy](docs/TAXONOMY.md)
- [Decisions](docs/DECISIONS.md)
- [Roadmap](docs/ROADMAP.md)
- [MVP status](docs/MVP-STATUS.md)
- [Master inventory](inventory/master-inventory.md)
- [Gap analysis](inventory/gap-analysis.md)
- [Taxonomy proposal](inventory/taxonomy-proposal.md)

## Design-System Notes

The showcase treats components as reusable design-system entries:

- Tokens describe visual decisions such as color, spacing, radius, elevation, density, and typography.
- Variants describe supported component states and compositions.
- Props describe the code-side primitive API where applicable.
- Usage and avoid guidance describe when a component should or should not be selected.
- Agent guidance describes composition rules for AI-generated UI.

## Current MVP State

The MVP is shareable and usable for review. Remaining work is polish-oriented: deeper visual QA against Figma, bundle code-splitting, and continued expansion from approved future gaps.
