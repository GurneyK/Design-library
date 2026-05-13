# Review Guide

Use this guide when sharing the Design Library with designers, engineers, product partners, or stakeholders for feedback.

## Review Links

- Live preview: https://gurneyk.github.io/Design-library/
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
- Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json
- Developer handoff guide: `docs/DEVELOPER-HANDOFF.md`
- Agent consumption guide: `docs/AGENT-CONSUMPTION.md`

## Recommended Walkthrough

Start with the live preview:

1. Open Foundations to review colors, type, spacing, radius, focus, shadows, density, and motion.
2. Open Primitives to review Button, Badge, Avatar, Tag, Tooltip, and related atoms.
3. Open Agent UI to review chat, message, composer, citation, source, thinking, and tool-call patterns.
4. Open Dashboard / Product Patterns to review Nexus-style cards, status, summaries, and workspaces.
5. Open Templates / Blocks to review complete surfaces and liftable compositions.

## Designer Review

Focus on:

- Token fit: Are color, spacing, radius, typography, shadows, and focus treatments aligned with Habibi/Figma?
- Variant coverage: Are important states missing?
- Composition: Do templates feel like realistic Nexus and future-product surfaces?
- Density: Do dashboard and agent surfaces feel practical for internal tools?
- Naming: Do component names match how designers will search and discuss the system?
- Gaps: Which components should be promoted, renamed, split, or back-ported into Figma?

Useful feedback format:

```text
Component/template:
Issue:
Expected behavior or visual:
Priority: critical / high / medium / low
Figma reference, if available:
```

## Engineer Review

Focus on:

- Source usability: Can the component be copied with `npm run copy:component` and used in another React + Tailwind app?
- Props: Are props understandable and appropriately typed?
- Dependencies: Are local dependencies and global setup files complete?
- Accessibility: Are focus states, semantic elements, and keyboard expectations clear?
- Reuse: Is the component general enough for multiple product surfaces?
- Bundle health: Are heavy dependencies avoided unless justified?

Start with:

1. `docs/DEVELOPER-HANDOFF.md`
2. `npm run copy:component -- --search <term>`
3. `npm run copy:component -- <entry-id> --dry-run`
4. `developer-handoff.json`
5. `src/components/ui/`

## Agent Review

Focus on:

- Manifest completeness: Are entries discoverable by category, kind, variants, props, tokens, and guidance?
- Guidance quality: Would an AI agent know when to use and not use each entry?
- Gap behavior: Are missing components clearly handled as proposals rather than hallucinations?
- Copyability: Does `developerHandoff` provide enough source and setup context?
- Templates: Are there enough full-page and block-level examples for agents to compose from?

Start with:

1. `docs/AGENT-CONSUMPTION.md`
2. `manifest.json`
3. `developer-handoff.json`
4. Entry fields: `useWhen`, `doNotUseWhen`, `agentGuidance`, `tokens`, `variants`, `props`

## Review Priorities

Critical:

- Visual or token mismatches that would make the library unusable as a design reference.
- Components that cannot be copied or built by a developer.
- Accessibility failures in core primitives or agent UI.
- Missing source/dependency metadata for source-backed entries.

High:

- Confusing names, categories, or search terms.
- Missing variants for common Nexus workflows.
- Template layouts that do not reflect real product needs.
- Agent guidance that is too vague to ground generation.

Medium:

- Copy tone, docs consistency, or usage nuance.
- Additional examples for important props or states.
- Better grouping inside categories.

Low:

- Nice-to-have polish, alternate examples, or future component ideas.

## Current Known Gaps

- Figma pixel QA is deferred until Figma MCP access is stable.
- Proposed code-side components still need design review and potential Figma back-porting.
- Deeper keyboard and contrast audits should happen before broad internal rollout.
- Code Connect-style mapping between Figma names and React components is still future work.
