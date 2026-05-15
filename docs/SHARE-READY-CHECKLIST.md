# Share-Ready Checklist

Use this checklist before sending the Design Library to Unilever, H3L, Nexus/Polaris, or future-product teammates.

## Current Share Status

Status: **Ready to share with the team**

Current public preview:

- https://gurneyk.github.io/Design-library/

Current source of truth:

- https://github.com/GurneyK/Design-library

Current scope:

- Browse the component and template catalog.
- Review live React + Tailwind previews.
- Copy source-backed components into another React + Tailwind app.
- Use `manifest.json` and `developer-handoff.json` for AI-agent and developer workflows.
- Collect feedback through GitHub issue templates.
- Prepare for an internal Supermicro-hosted version.

Out of current scope:

- Figma MCP extraction, pixel QA, and Code Connect mapping.
- Treating proposed code-side components as final design-source components.
- npm package publishing.

## Before Sharing

Confirm:

- `npm run qa` passes.
- `npm run visual-qa` passes after any UI-facing change.
- GitHub Actions deployment passes.
- GitHub Pages preview loads.
- `manifest.json` loads.
- `developer-handoff.json` loads.
- Team review message points to the current live URL.
- Internal hosting notes are available in [Internal hosting](INTERNAL-HOSTING.md).

## What To Ask Reviewers

Designer:

- Are names, categories, variants, and states understandable?
- Do foundations, primitives, agent UI, product patterns, and templates feel like the right system direction?
- Which entries should be refined before broader rollout?

Engineer:

- Can components be copied and used without asking the original builder?
- Are props, dependencies, Tailwind setup, and source paths clear?
- Are there any assumptions that would block use in another product repo?

Product or stakeholder:

- Do templates represent useful product workflows?
- Which templates would help a team move fastest?
- Which missing patterns should become gap proposals?

AI-agent reviewer:

- Can an agent pick the right entry from the manifest?
- Are `useWhen`, `doNotUseWhen`, and `agentGuidance` clear enough?
- Do templates provide enough composition examples?

## Figma Note For Reviewers

Figma is intentionally paused for this review pass because Codex cannot access the Figma MCP tools in the current setup. Reviewers should focus on catalog coverage, implementation quality, copyability, UX direction, accessibility basics, and internal hosting readiness.

When Figma access is available again, use [Figma parity audit](FIGMA-PARITY-AUDIT.md) as the follow-up workflow.

## Share Message

```text
Hey team, the Design Library MVP is ready for review:

Live preview:
https://gurneyk.github.io/Design-library/

Repo:
https://github.com/GurneyK/Design-library

What it includes:
- 224 catalog entries
- 194 live React + Tailwind component entries
- 16 templates/blocks for Nexus-style and future-product workflows
- Copyable component source with developer handoff metadata
- Agent-readable manifest and developer-handoff JSON
- QA gates for catalog, handoff, tokens, contrast, docs, release checks, and Playwright smoke tests

What to review now:
- Component and template coverage
- Naming, variants, states, and usage guidance
- Source copyability into another React + Tailwind app
- Manifest quality for AI-agent usage
- Internal hosting readiness

Out of scope for this review:
- Figma parity and Code Connect mapping. Figma access is currently blocked in Codex, so we will pick that up later.

Suggested feedback format:
Component/template:
Issue:
Expected behavior:
Priority: critical / high / medium / low
Reference or screenshot:
```

## Related Docs

- [Launch handoff](LAUNCH-HANDOFF.md)
- [Team review packet](TEAM-REVIEW-PACKET.md)
- [Review guide](REVIEW-GUIDE.md)
- [Internal hosting](INTERNAL-HOSTING.md)
- [Adoption guide](ADOPTION-GUIDE.md)
- [Developer handoff](DEVELOPER-HANDOFF.md)
- [Feedback triage](FEEDBACK-TRIAGE.md)
