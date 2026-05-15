# Launch Handoff

Use this as the quick handoff page when sharing the Design Library MVP with a teammate, reviewer, or future maintainer.

## Current State

Status: **MVP complete and deployed**

MVP readiness: **100 / 100**

Live links:

- Showcase: https://gurneyk.github.io/Design-library/
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
- Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json
- Repository: https://github.com/GurneyK/Design-library

## What Is Included

- 224 catalog entries.
- 194 live React + Tailwind component entries.
- 16 assembled Templates / Blocks.
- Source-backed developer handoff metadata.
- Copy helper for moving components into another React + Tailwind app.
- Agent-readable manifest and developer handoff JSON.
- GitHub Pages deployment on push to `main`.
- QA gates for catalog, handoff, token usage, contrast, docs, release status, and Playwright smoke tests.

## First 10-Minute Review

1. Open the live showcase.
2. Search for `button`, `chat`, `run card`, `table`, and `template`.
3. Open one component entry and review Preview, Props, Tokens, Usage, Code, Developer handoff, and For agents.
4. Open Templates / Blocks and review Analytics Agent Workspace.
5. Open `docs/MVP-SCORECARD.md`.
6. Open `docs/TEAM-REVIEW-PACKET.md` if sharing with others.

## Engineer Handoff

Core docs:

- `docs/DEVELOPER-HANDOFF.md`
- `docs/HANDOFF-READINESS.md`
- `docs/COMPONENT-AUTHORING.md`
- `docs/MANIFEST-SCHEMA.md`

Useful commands:

```bash
npm install
npm run dev
npm run qa
npm run visual-qa
npm run copy:component -- --search run
npm run copy:component -- run-card --dry-run
npm run copy:component -- run-card --out ../my-app --globals --receipt
```

## Designer Handoff

Core docs:

- `docs/REVIEW-GUIDE.md`
- `docs/TEAM-REVIEW-PACKET.md`
- `docs/ACCESSIBILITY-CHECKLIST.md`
- `docs/SCREEN-READER-WALKTHROUGH.md`
- `docs/FIGMA-PARITY-AUDIT.md`

Review first:

- Foundations
- Primitives
- Agent UI
- Dashboard / Product Patterns
- Templates / Blocks

## AI Agent Handoff

Core docs:

- `docs/AGENT-CONSUMPTION.md`
- `docs/MANIFEST-SCHEMA.md`
- `manifest.json`
- `developer-handoff.json`

Agent-safe generation rules:

- Use entries from `manifest.json`.
- Prefer source-backed components when generating copyable UI.
- Respect `useWhen`, `doNotUseWhen`, `variants`, `props`, `tokens`, and `agentGuidance`.
- Treat proposed or Figma-deferred entries as review-needed.
- Do not invent components outside the catalog without opening a gap proposal.

## Deployment

Deployment happens through GitHub Actions:

1. Push to `main`.
2. `.github/workflows/deploy.yml` runs `npm ci` and `npm run qa`.
3. The `site/` build is published to GitHub Pages.
4. The live URL updates at https://gurneyk.github.io/Design-library/

## Post-MVP Watchlist

- Run `docs/FIGMA-PARITY-AUDIT.md` once Figma MCP exposes the required tools.
- Capture first-round team review feedback through the issue templates.
- Decide which proposed code-side components should be back-ported into Figma.
- Add deeper tests for manifest generation and complex template copy graphs.
- Consider packaging strategy if teams want npm-style installation later.
