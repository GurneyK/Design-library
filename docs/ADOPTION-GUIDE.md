# Adoption Guide

Use this guide when a product team wants to adopt Design Library components in another React + Tailwind app.

## Choose An Adoption Path

| Path | Use when | What to do |
| --- | --- | --- |
| Browse and copy | A developer needs one component or template. | Use the live showcase and `Developer handoff` section. |
| CLI copy | A developer wants source plus dependencies. | Use `npm run copy:component`. |
| Agent-assisted build | An AI agent is generating UI. | Load `manifest.json` and `developer-handoff.json`. |
| Design review first | The component is proposed or Figma-deferred. | Review the entry, then run the Figma parity or gap process. |

## Before Copying

Confirm the consuming app has:

- React 18 or newer.
- Tailwind CSS 3 or newer.
- `lucide-react`.
- A `src/` directory that Tailwind scans.
- A plan for Habibi tokens from `tailwind.config.ts` and base styles from `src/index.css`.

If the consuming app already has design tokens, compare them against Habibi before copying globals.

## Copy Flow

Find the component ID:

```bash
npm run copy:component -- --search run
```

Dry-run the copy:

```bash
npm run copy:component -- run-card --dry-run
```

Copy source and dependencies:

```bash
npm run copy:component -- run-card --out ../my-app
```

Copy source, dependencies, and global token setup:

```bash
npm run copy:component -- run-card --out ../my-app --globals
```

Write a receipt into the target app:

```bash
npm run copy:component -- run-card --out ../my-app --globals --receipt
```

## What To Verify In The Target App

After copying:

- The app builds without unresolved imports.
- Tailwind scans the copied component files.
- `lucide-react` icons resolve.
- Focus states are visible.
- The component uses Habibi tokens or mapped equivalent tokens.
- The copied receipt documents source files, dependency files, setup requirements, and follow-up checks.
- The component still matches the preview and usage guidance from the Design Library.

## Recommended First Components

For a product team adopting the system, start with:

- `button`
- `input`
- `badge`
- `alert`
- `table`
- `run-card`
- `chat-surface`
- `citation-chip`
- `template-analytics-agent-workspace`

These cover primitives, feedback, data display, dashboard/product patterns, agent UI, and templates.

## When To Open A Gap

Open a gap proposal instead of copying when:

- The needed component is not in the catalog.
- The entry is marked proposed and needs design approval.
- The component requires a new token, density, or interaction model.
- The target app needs behavior beyond the documented variants.
- The copied component needs repeated local edits to work.

Use [Gap proposal process](GAP-PROPOSAL-PROCESS.md) to capture the user job, closest existing entry, missing behavior, variants, token needs, accessibility needs, references, priority, and acceptance criteria.

Use [Component lifecycle](COMPONENT-LIFECYCLE.md) to decide whether the request should become a proposed entry, draft entry, ready component, or Figma verification task.

Use the GitHub issue templates and include:

- Component or template name.
- Product surface.
- Missing behavior or state.
- Figma or screenshot reference, if available.
- Priority and deadline.

## AI Agent Adoption

When using an AI agent:

1. Load https://gurneyk.github.io/Design-library/manifest.json
2. Select entries by `category`, `name`, `useWhen`, `doNotUseWhen`, `variants`, and `agentGuidance`.
3. Prefer entries with `developerHandoff.copyStatus` set to `source-available`.
4. Use https://gurneyk.github.io/Design-library/developer-handoff.json for source paths and copy commands.
5. Do not generate components outside the catalog unless the output is explicitly marked as a proposal.

## Adoption Owner Checklist

- Pick the first product surface or workflow.
- Identify the needed components/templates.
- Copy one primitive, one product pattern, and one template first.
- Run the consuming app build.
- Review accessibility basics with keyboard and focus states.
- Capture gaps back into the Design Library issue flow.
- Decide whether the team needs source-copy only or future package installation.
