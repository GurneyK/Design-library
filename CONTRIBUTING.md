# Contributing

Use this guide when changing the Design Library. The goal is to keep every change usable for designers, engineers, and AI agents.

## Start Here

Before editing, read:

- `docs/LAUNCH-HANDOFF.md`
- `docs/ADOPTION-GUIDE.md`
- `docs/COMPONENT-AUTHORING.md`
- `docs/COMPONENT-LIFECYCLE.md`
- `docs/DEVELOPER-HANDOFF.md`
- `docs/ACCESSIBILITY-CHECKLIST.md`
- `docs/MVP-SCORECARD.md`
- `docs/VERSIONING.md`

## Local Setup

```bash
npm install
npm run dev
```

The local preview runs at:

```text
http://127.0.0.1:5173/
```

## Change Rules

- Use Habibi tokens or CSS variables for visual decisions.
- Do not add raw hex values or arbitrary Tailwind colors in source-backed components.
- Keep props typed, small, and named by user intent.
- Keep preview, code snippet, metadata, and source implementation aligned.
- Do not invent official components outside the catalog. Add or update a gap/proposal instead.
- Mark Figma status honestly: `figma-verified`, `figma-deferred`, `written-spec`, `reference-code`, or `proposed`.
- Update docs when a change affects review, handoff, accessibility, deployment, or agent consumption.

## Component Changes

When adding or editing a component:

1. Update the implementation under `src/components/`.
2. Update the catalog metadata under `src/data/`.
3. Include variants, props, tokens, usage, avoid guidance, accessibility notes, and agent guidance.
4. Make the preview use the real component.
5. Make the code snippet copyable.
6. Confirm source-backed entries generate correct handoff metadata.

## Template Changes

When adding or editing a template:

1. Compose from existing Design Library components where possible.
2. Avoid one-off styling that should become a reusable component.
3. Update `src/data/templateEntries.tsx`.
4. Include "composes from" guidance in the entry metadata.
5. Keep the code snippet complete enough for a full-stack engineer to lift.

## Agent-Readable Changes

The generated `manifest.json` and `developer-handoff.json` are part of the product contract.

After changing entries or source files, confirm:

- Entry IDs stay stable.
- Categories match `src/data/taxonomy.ts`.
- `useWhen`, `doNotUseWhen`, `agentGuidance`, `variants`, `props`, and `tokens` remain specific.
- Source-backed entries have complete copy paths and setup notes.

## Verification

Run before committing:

```bash
npm run qa
npm run visual-qa
```

Useful focused checks:

```bash
npm run docs:check
npm run handoff:check
npm run token:check
npm run contrast:check
npm run version:check
```

For source-backed entries:

```bash
npm run copy:component -- <entry-id> --dry-run
npm run copy:component -- <entry-id> --handoff-file developer-handoff.json --source-root . --out ../copy-test --receipt
```

## Pull Requests

Use the pull request template and include:

- What changed.
- Which category or entry IDs changed.
- Whether the change affects tokens, accessibility, handoff, manifest output, or deployment.
- Whether the change requires a review release, manifest schema, or catalog ID migration note.
- Whether the lifecycle state changed and why.
- Verification commands run.
- Screenshots or live-preview notes for visual changes.

## Release Safety

Before sharing a milestone, follow:

- `docs/RELEASE-CHECKLIST.md`
- `docs/TEAM-REVIEW-PACKET.md`
- `docs/LAUNCH-HANDOFF.md`

The live preview deploys from `main` through GitHub Pages after `npm run qa` passes in GitHub Actions.
