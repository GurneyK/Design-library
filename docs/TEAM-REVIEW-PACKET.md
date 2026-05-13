# Team Review Packet

Use this when sending the Design Library MVP to H3L, Nexus/Polaris, or future product teams for early feedback.

## Share Links

- Live preview: https://gurneyk.github.io/Design-library/
- GitHub repo: https://github.com/GurneyK/Design-library
- MVP status: `docs/MVP-STATUS.md`
- MVP scorecard: `docs/MVP-SCORECARD.md`
- Review guide: `docs/REVIEW-GUIDE.md`
- Accessibility checklist: `docs/ACCESSIBILITY-CHECKLIST.md`
- Developer handoff: `docs/DEVELOPER-HANDOFF.md`
- Handoff readiness: `docs/HANDOFF-READINESS.md`
- Agent manifest: https://gurneyk.github.io/Design-library/manifest.json
- Developer handoff JSON: https://gurneyk.github.io/Design-library/developer-handoff.json

## What We Need Reviewed

Designer review:

- Do the foundations, primitives, agent UI, dashboard patterns, and templates feel visually aligned with Habibi?
- Are component names, categories, and variants searchable from a designer's mental model?
- Which code-side proposed components should be back-ported into Figma first?
- Are any common states missing: empty, loading, error, disabled, selected, streaming, collapsed, expanded?

Engineer review:

- Can components be copied into another React + Tailwind project using `npm run copy:component`?
- Are props, source paths, dependencies, and setup notes clear enough to use without asking the original builder?
- Do the copied components feel reusable rather than one-off page code?
- Are there any package, Tailwind, alias, or TypeScript assumptions that would block adoption?

Product / stakeholder review:

- Do the templates represent realistic Nexus/Polaris and future-product workflows?
- Which templates would help teams move fastest right now?
- Which component categories should get deeper refinement before broad rollout?
- Are any business-critical surfaces missing from Templates / Blocks?

AI-agent review:

- Can an agent choose the right component from the manifest using category, props, variants, tokens, and guidance?
- Are `useWhen`, `doNotUseWhen`, and `agentGuidance` specific enough?
- Do templates provide enough composition examples for agent-generated UI?
- Are gaps clearly marked rather than implied as official components?

## Suggested Review Route

Ask reviewers to spend 20-30 minutes in this order:

1. Open the live preview.
2. Search for `button`, `chat`, `run`, `table`, and `template`.
3. Review Foundations, Primitives, Agent UI, Dashboard / Product Patterns, and Templates / Blocks.
4. Pick one component and inspect preview, code, props, variants, tokens, accessibility, and developer handoff.
5. Pick one template and inspect what it composes from.
6. For engineers, run one dry copy command:

```bash
npm run copy:component -- run-card --dry-run
```

## Copyable Message

```text
Hey team, I have an MVP of the Design Library ready for early review:

Live preview:
https://gurneyk.github.io/Design-library/

Repo:
https://github.com/GurneyK/Design-library

What it includes:
- 224 catalog entries across foundations, primitives, product patterns, agent UI, charts, forms, feedback, and templates
- 194 live React + Tailwind component entries
- 16 templates/blocks for Nexus-style and future-product workflows
- Copyable source-backed components with developer handoff metadata
- Agent-readable manifest and developer-handoff JSON

What I need feedback on:
- Designers: visual fidelity, naming, variants, missing states, and Figma back-port priorities
- Engineers: copyability, props, dependencies, Tailwind setup, and source usability
- Product/stakeholders: whether templates represent the workflows teams need first
- AI/automation reviewers: whether the manifest gives enough guidance to generate grounded UI

Useful docs:
- Review guide: docs/REVIEW-GUIDE.md
- MVP status: docs/MVP-STATUS.md
- MVP scorecard: docs/MVP-SCORECARD.md
- Developer handoff: docs/DEVELOPER-HANDOFF.md
- Accessibility checklist: docs/ACCESSIBILITY-CHECKLIST.md
- Handoff readiness: docs/HANDOFF-READINESS.md

Suggested feedback format:
Component/template:
Issue:
Expected behavior or visual:
Priority: critical / high / medium / low
Reference or screenshot:
```

## Feedback Triage

Use these labels when collecting feedback:

| Label | Meaning |
| --- | --- |
| `critical` | Blocks the Design Library from being trusted or reused. |
| `visual-fidelity` | Difference from Figma, Habibi tokens, spacing, density, or visual state. |
| `handoff` | Copy command, source dependency, setup, import, or props issue. |
| `accessibility` | Keyboard, focus, semantics, contrast, or assistive technology issue. |
| `agent-readability` | Manifest, guidance, metadata, or AI-generation concern. |
| `template-gap` | Missing or unrealistic template/block for product workflows. |
| `figma-backport` | Code-side component should be recreated or reconciled in Figma. |
| `content-polish` | Naming, wording, usage guidance, or docs clarity. |

GitHub issue templates are available for:

- Component feedback
- Template or block feedback
- Agent manifest feedback

Use [Feedback triage](FEEDBACK-TRIAGE.md) to label, prioritize, route, and close incoming review feedback.

## MVP Confidence

Current confidence: 96 / 100.

Already validated:

- `npm run qa`
- `npm run visual-qa`
- GitHub Actions deploy gate
- GitHub Pages deployment
- Source-copyable handoff coverage
- Local import closure for copied files
- Token usage validation for component source files
- Accessibility smoke coverage for shell landmarks, skip link, selected state, and copy-action keyboard reachability

Still expected after review:

- Figma pixel QA once Figma MCP access is stable.
- Deeper accessibility walkthroughs for core flows.
- Final naming and content pass after team feedback.
- Back-port priority list for proposed code-side components.
