# Feedback Triage

Use this process after sharing the Design Library MVP with designers, engineers, product partners, and AI-agent reviewers.

## Intake Sources

- GitHub issue templates:
  - Component feedback
  - Template or block feedback
  - Agent manifest feedback
- Team review packet: `docs/TEAM-REVIEW-PACKET.md`
- Live preview: https://gurneyk.github.io/Design-library/
- Review conversations, screenshots, or Figma comments.

## Triage Labels

Use the same language everywhere:

| Label | Meaning |
| --- | --- |
| `critical` | Blocks trust, reuse, or sharing. |
| `visual-fidelity` | Figma, Habibi token, spacing, density, or visual-state mismatch. |
| `handoff` | Copy command, dependency, setup, import, package, or props issue. |
| `accessibility` | Keyboard, focus, semantics, contrast, or assistive-tech issue. |
| `agent-readability` | Manifest, guidance, metadata, or AI-generation issue. |
| `template-gap` | Missing or unrealistic template/block. |
| `figma-backport` | Code-side component should be recreated or reconciled in Figma. |
| `content-polish` | Naming, docs, usage, avoid guidance, or voice issue. |

## Priority Rules

Critical:

- Component or template cannot render.
- Source-backed entry cannot be copied.
- Core primitive has an accessibility blocker.
- Manifest or handoff data would make an AI agent generate wrong UI.
- Visual mismatch undermines trust in Habibi tokens or Figma alignment.

High:

- Common Nexus workflow state is missing.
- Component name/category makes it hard to find.
- Template does not represent the real product workflow.
- Props or variants are misleading.

Medium:

- Copy, docs, or examples need clarification.
- Token or state coverage needs refinement.
- Useful variant is missing but does not block adoption.

Low:

- Nice-to-have examples.
- Future component ideas.
- Small wording polish.

## Weekly Triage Flow

1. Review new issues and assign one primary label plus priority.
2. Link related issues to the affected catalog entry or template.
3. Decide the disposition:
   - Accept for current MVP hardening.
   - Convert to future backlog.
   - Needs design decision.
   - Needs Figma back-port.
   - Needs engineering spike.
4. Batch accepted issues by category.
5. Fix critical and high handoff/accessibility issues before adding new surface area.
6. Run the full verification set before sharing an updated link.

## Fix Acceptance

Before closing feedback, confirm:

- The live preview shows the expected change.
- Entry metadata still matches the component behavior.
- `manifest.json` and `developer-handoff.json` regenerated if source or metadata changed.
- Copy helper still works for source-backed entries.
- The issue has a short note explaining what changed.

## Verification Commands

Run:

```bash
npm run qa
npm run visual-qa
```

For handoff-heavy changes, also run a targeted copy:

```bash
npm run copy:component -- <entry-id> --dry-run
npm run copy:component -- <entry-id> --handoff-file developer-handoff.json --source-root . --out ../copy-test --receipt
```

## Release Note Pattern

When a batch of feedback is fixed, add a changelog note:

```md
### Changed

- Addressed review feedback for <category/component/template>: <short summary>.

### Verification

- npm run qa
- npm run visual-qa
```
