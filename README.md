# Design Library

[![Deploy Design Library](https://github.com/GurneyK/Design-library/actions/workflows/deploy.yml/badge.svg)](https://github.com/GurneyK/Design-library/actions/workflows/deploy.yml)

Browsable React + Tailwind showcase for the Habibi design system used across Unilever H3L, Nexus/Polaris, and future internal products.

Live preview: https://gurneyk.github.io/Design-library/

Agent manifest: https://gurneyk.github.io/Design-library/manifest.json

Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json

Agent consumption guide: [Agent consumption](docs/AGENT-CONSUMPTION.md)

Review guide: [Review guide](docs/REVIEW-GUIDE.md)

Team review packet: [Team review packet](docs/TEAM-REVIEW-PACKET.md)

Review feedback can be filed through the GitHub issue templates for component, template/block, and agent-manifest feedback.

Feedback triage guide: [Feedback triage](docs/FEEDBACK-TRIAGE.md)

Component authoring guide: [Component authoring](docs/COMPONENT-AUTHORING.md)

Handoff readiness: [Handoff readiness](docs/HANDOFF-READINESS.md)

Accessibility checklist: [Accessibility checklist](docs/ACCESSIBILITY-CHECKLIST.md)

Screen reader walkthrough: [Screen reader walkthrough](docs/SCREEN-READER-WALKTHROUGH.md)

MVP scorecard: [MVP scorecard](docs/MVP-SCORECARD.md)

## What This Contains

- 224 catalog entries across foundations, primitives, layout, navigation, data entry, forms, data display, charts, feedback, agent UI, dashboard/product patterns, and templates.
- 194 live React component entries.
- 16 assembled template/block entries for Nexus-style workspaces and screens.
- A generated `manifest.json` that AI agents can read for names, categories, props, variants, tokens, usage guidance, and code snippets.
- A generated `developer-handoff.json` that developers and agents can read for source files, dependency files, raw URLs, and copy setup.
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

The showcase shell loads lightweight manifest metadata first, then lazy-loads the selected entry module on demand. This keeps the initial app bundle small while preserving live previews for the full catalog.

## QA

```bash
npm run qa
```

The QA command runs the production build and validates the generated catalog contract: manifest counts, duplicate IDs, required documentation fields, guidance arrays, kind/category counts, and source-file references.

It also validates handoff readiness, including source-copyable coverage, expected foundation/reference exceptions, copy scripts, token usage, and the published readiness summary.

## Visual QA

```bash
npm run visual-qa
```

The visual QA command runs Playwright against the production preview in desktop and mobile viewports. It checks initial render, search, representative component entries, template switching, and the published manifest endpoint.

## Reusing Components

Full developer handoff guide: [Developer handoff](docs/DEVELOPER-HANDOFF.md)

Future contributor guide: [Component authoring](docs/COMPONENT-AUTHORING.md)

Copy readiness summary: [Handoff readiness](docs/HANDOFF-READINESS.md)

Each catalog entry includes two developer-facing code surfaces:

- `Code` shows a usage snippet for the component or template.
- `Developer handoff` links to the real implementation source, local dependency files, raw files, import paths, required setup, package install command, import alias, and global token setup files.

To reuse a component in another React + Tailwind app, copy the implementation source plus any listed local dependencies, run the listed install command, and align the consuming app to the Habibi Tailwind token setup from `tailwind.config.ts` plus the base styles in `src/index.css`.

For source-backed entries, the `Developer handoff` section also includes generated PowerShell and Bash copy scripts that download the implementation source and local dependency files from raw GitHub URLs.

You can also copy any source-backed entry by ID from the command line:

```bash
npm run copy:component -- --search run
npm run copy:component -- --list
npm run copy:component -- run-card --dry-run
npm run copy:component -- run-card --out ../my-app --globals
npm run copy:component -- run-card --out ../my-app --receipt
npm run copy:component -- run-card --handoff-file developer-handoff.json --source-root . --out ../my-app
npm run handoff:check
```

Use `--search` or `--list` to discover catalog IDs from the terminal before copying a component.

Use `--globals` when the consuming app still needs the Habibi Tailwind token setup and base styles. Without `--globals`, the script copies only the component/template source and local component dependencies.

Use `--receipt` when you want the copy helper to write `DESIGN_LIBRARY_HANDOFF.md` into the target app with setup commands, copied files, source links, and follow-up checks.

Use `--handoff-file` and `--source-root` when testing from a local clone without downloading raw GitHub files.

For setup details, import expectations, and the reuse checklist, see [Developer handoff](docs/DEVELOPER-HANDOFF.md).

Programmatic handoff lookup:

```ts
const handoff = await fetch("https://gurneyk.github.io/Design-library/developer-handoff.json").then((response) =>
  response.json(),
);

console.log(handoff["run-card"].allCopyPaths);
console.log(handoff["run-card"].copyCommand);
console.log(handoff["run-card"].copyCommandWithGlobals);
console.log(handoff["run-card"].packageInstallCommand);
console.log(handoff["run-card"].requiredGlobalPaths);
console.log(handoff["run-card"].copyScripts.powershell);
console.log(handoff["run-card"].copyScripts.bash);
```

## Deployment

This repo deploys to GitHub Pages on every push to `main`.

Deployment flow:

1. Push changes to `main`.
2. GitHub Actions runs `npm ci` and `npm run qa`.
3. The `site/` folder is uploaded to GitHub Pages.
4. The live preview updates at https://gurneyk.github.io/Design-library/

## Project Docs

- [Docs index](docs/README.md)
- [Changelog](CHANGELOG.md)
- [Agent consumption](docs/AGENT-CONSUMPTION.md)
- [Project brief](docs/PROJECT-BRIEF.md)
- [Developer handoff](docs/DEVELOPER-HANDOFF.md)
- [Component authoring](docs/COMPONENT-AUTHORING.md)
- [Handoff readiness](docs/HANDOFF-READINESS.md)
- [Accessibility checklist](docs/ACCESSIBILITY-CHECKLIST.md)
- [Screen reader walkthrough](docs/SCREEN-READER-WALKTHROUGH.md)
- [MVP scorecard](docs/MVP-SCORECARD.md)
- [Manifest schema](docs/MANIFEST-SCHEMA.md)
- [Review guide](docs/REVIEW-GUIDE.md)
- [Team review packet](docs/TEAM-REVIEW-PACKET.md)
- [Feedback triage](docs/FEEDBACK-TRIAGE.md)
- [Release checklist](docs/RELEASE-CHECKLIST.md)
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
