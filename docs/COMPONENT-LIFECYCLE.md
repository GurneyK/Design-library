# Component Lifecycle

Use this lifecycle when adding, reviewing, promoting, renaming, or retiring Design Library entries.

## Lifecycle States

| State | Meaning | Who can rely on it |
| --- | --- | --- |
| `Proposed` | Useful gap or code-side pattern that still needs design review. | Exploratory builds and prototypes. |
| `Draft` | Entry exists, but variants, copyability, accessibility, or docs are incomplete. | Internal review only. |
| `Ready` | Entry is source-backed, documented, token-driven, copyable, and covered by QA. | Product teams and AI agents. |
| `Figma verified` | Entry has passed the Figma parity audit and has node evidence. | Design and engineering as canonical. |
| `Deprecated` | Entry remains for compatibility but should not be selected for new work. | Existing consumers only. |

## Promotion Criteria

Promote `Proposed` to `Draft` when:

- The component need is validated by a product surface, team request, or approved gap.
- The gap proposal records the user job, closest existing entry, variants, token needs, accessibility needs, and acceptance criteria.
- The expected category, job, and variants are clear.
- The entry has enough source material to build a preview.

Promote `Draft` to `Ready` when:

- Preview uses the real implementation.
- Code snippet is copyable.
- Props, variants, tokens, usage, avoid guidance, accessibility, and agent guidance are complete.
- `developer-handoff.json` resolves source and dependency paths.
- `npm run qa` and `npm run visual-qa` pass.

Promote `Ready` to `Figma verified` when:

- `docs/FIGMA-PARITY-AUDIT.md` pass criteria are met.
- Figma node URL and drift notes are recorded.
- Any intentional differences are documented as design-system decisions.

## Deprecation Criteria

Deprecate instead of deleting when:

- A component has known consumers.
- A catalog ID appears in docs, manifests, or copy commands.
- A replacement exists but migration needs time.

Remove only when:

- There are no known consumers.
- The removal is documented in `CHANGELOG.md`.
- The versioning policy allows the breaking change.
- AI-agent guidance no longer references the entry.

## Rename And Split Rules

Rename only when:

- The current name causes repeated confusion.
- Search and docs aliases are updated.
- The old catalog ID is preserved or a migration note is written.

Split a component when:

- One entry has unrelated jobs.
- Variants require incompatible props or interaction models.
- The agent guidance becomes too broad to select safely.

Merge components when:

- Two entries differ only by naming or shallow visual treatment.
- One can be expressed as a variant or slot of the other.

## Review Owners

Designer:

- Confirms visual intent, naming, variants, Figma parity, and back-port priority.

Engineer:

- Confirms implementation API, source copyability, dependencies, accessibility behavior, and QA.

Product or team reviewer:

- Confirms the component supports a real workflow and names any missing states.

AI-agent reviewer:

- Confirms manifest guidance is specific enough for grounded UI generation.

## Required Evidence

For `Ready`:

- Live preview renders.
- Source-backed handoff exists.
- QA commands pass.
- Accessibility guidance is specific.
- Agent guidance says what to pair with and what to avoid.

For `Figma verified`:

- Figma node URL.
- Screenshot or visual reference.
- Pass/fail result.
- Drift notes.
- Follow-up decision if parity is not exact.

## Related Docs

- [Component authoring](COMPONENT-AUTHORING.md)
- [Gap proposal process](GAP-PROPOSAL-PROCESS.md)
- [Adoption guide](ADOPTION-GUIDE.md)
- [Figma parity audit](FIGMA-PARITY-AUDIT.md)
- [Versioning](VERSIONING.md)
- [Release checklist](RELEASE-CHECKLIST.md)
