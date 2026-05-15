# Gap Proposal Process

Use this process when a product team, designer, engineer, or AI-agent reviewer needs a component, template, token, or pattern that is not already available in the Design Library.

## When To Open A Gap Proposal

Open a gap proposal when:

- The needed component or template does not exist in the catalog.
- An existing entry is close, but repeated local edits would be required.
- A product workflow needs a new state, density, slot, or interaction model.
- The gap affects more than one product surface.
- An AI agent cannot safely generate the UI from existing entries.

Use component feedback instead when the entry already exists and only needs a fix, polish, documentation update, or Figma parity review.

## Required Proposal Fields

Every gap proposal should include:

| Field | What to include |
| --- | --- |
| Proposed name | Human-readable name and likely code name, such as `DataFilterBar` or `CitationDrawer`. |
| Product surface | Nexus, Polaris, dashboard, agent workspace, forms, auth, or shared platform. |
| User job | The task this UI helps someone complete. |
| Existing closest entry | The nearest Design Library component or template, if one exists. |
| Missing behavior | The state, variant, slot, or composition that is currently unsupported. |
| Variants and states | Size, tone, status, loading, empty, selected, disabled, error, or responsive states. |
| Token needs | Known color, spacing, radius, shadow, typography, chart, or motion token requirements. |
| Accessibility needs | Keyboard behavior, focus rules, semantics, live region needs, or contrast concerns. |
| References | Figma node, screenshot, product screen, Ant Design, 21st.dev, shadcn, or product notes. |
| Priority | Critical, high, medium, or low. |
| Acceptance criteria | What must be true before the gap is considered ready. |

## Decision Routes

During triage, route each proposal to one outcome:

| Outcome | Use when | Next step |
| --- | --- | --- |
| Merge with existing entry | The need can be solved by a new variant, prop, or slot. | Update the existing entry and docs. |
| Add proposed entry | The need is valid but needs design review or Figma back-port. | Create a `Proposed` catalog entry. |
| Add draft entry | The need is clear enough to implement, but docs or QA are incomplete. | Create a `Draft` entry and track remaining work. |
| Backlog | The need is useful but not urgent for current products. | Keep the issue open or move it to roadmap. |
| Reject | The proposal duplicates an existing pattern or conflicts with system rules. | Close with a short explanation and a suggested alternative. |

## Promotion Path

1. Gap proposal is filed with enough context to understand the workflow.
2. Triage confirms whether the gap is product-backed, design-backed, agent-backed, or speculative.
3. Approved gaps enter the [Component lifecycle](COMPONENT-LIFECYCLE.md) as `Proposed`.
4. A visual proposal is reviewed before implementation when the component is net-new.
5. Implementation uses Habibi tokens, existing primitives, and the locked entry template.
6. The entry becomes `Ready` only after docs, handoff metadata, accessibility notes, and QA pass.
7. The entry becomes `Figma verified` after the [Figma parity audit](FIGMA-PARITY-AUDIT.md) records node evidence.

## Acceptance Criteria

A gap can be closed as implemented when:

- The catalog has a live entry or template for the approved solution.
- Usage and avoid guidance explain when to choose it.
- Props, variants, tokens, accessibility notes, and agent guidance are complete.
- Source-backed entries appear in `developer-handoff.json`.
- `npm run qa` passes.
- `npm run visual-qa` passes when the change affects rendered UI.
- Any Figma back-port need is recorded if the source of truth is still code-side only.

## Related Docs

- [Feedback triage](FEEDBACK-TRIAGE.md)
- [Component lifecycle](COMPONENT-LIFECYCLE.md)
- [Adoption guide](ADOPTION-GUIDE.md)
- [Component authoring](COMPONENT-AUTHORING.md)
- [Figma parity audit](FIGMA-PARITY-AUDIT.md)
- [Gap analysis](../inventory/gap-analysis.md)
