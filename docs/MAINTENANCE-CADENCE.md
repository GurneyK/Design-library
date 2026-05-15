# Maintenance Cadence

Use this cadence after the Design Library is shared with teams and starts receiving real adoption feedback.

## Weekly Triage

Owner: maintainer or rotating design-system reviewer.

Do every week:

- Review new GitHub issues from component, template, agent-manifest, and gap-proposal templates.
- Assign one primary label and one priority.
- Route net-new UI requests through [Gap proposal process](GAP-PROPOSAL-PROCESS.md).
- Close duplicates with a link to the canonical issue or catalog entry.
- Pull critical handoff, accessibility, and visual-fidelity issues above new component work.
- Update affected issues with the next action and owner.

Exit criteria:

- Every new issue has a label, priority, and disposition.
- Critical issues have an owner.
- Accepted gap proposals are connected to [Component lifecycle](COMPONENT-LIFECYCLE.md).

## Biweekly Catalog Health

Owner: engineer plus designer reviewer.

Do every two weeks:

- Run `npm run qa`.
- Run `npm run visual-qa`.
- Check `docs/HANDOFF-READINESS.md` against generated source-copyable coverage.
- Review the top copied or requested entries for stale props, variants, tokens, and usage copy.
- Confirm new entries use existing tokens before introducing new values.
- Confirm templates still represent realistic product workflows.

Exit criteria:

- QA and visual QA pass.
- Any drift is logged as feedback, Figma parity work, or a gap proposal.
- Changelog notes are drafted for user-facing changes.

## Monthly Design-System Review

Owner: design lead plus engineering lead.

Do every month:

- Review proposed and draft entries.
- Decide which code-side entries should be back-ported into Figma.
- Run or update the [Figma parity audit](FIGMA-PARITY-AUDIT.md) for high-priority entries when Figma access is available.
- Review the [Gap analysis](../inventory/gap-analysis.md) and decide what moves into the next build cycle.
- Check whether taxonomy, naming, or agent guidance needs consolidation.

Exit criteria:

- Proposed entries are promoted, deferred, merged, or rejected.
- Figma back-port priorities are named.
- Roadmap next steps are current.

## Release Rhythm

Use a release milestone when:

- A batch of component or template changes is ready for team review.
- Manifest schema or handoff behavior changes.
- A new product surface is represented by templates.
- A significant gap category is closed.

Before release:

- Run the [Release checklist](RELEASE-CHECKLIST.md).
- Update [MVP status](MVP-STATUS.md) if catalog counts or readiness notes changed.
- Update [Changelog](../CHANGELOG.md).
- Confirm GitHub Actions and GitHub Pages pass after pushing.

## Ownership Model

Designer:

- Owns visual intent, Figma parity, naming, variants, and template realism.

Engineer:

- Owns implementation quality, props, source copyability, dependencies, QA, and accessibility behavior.

Product partner:

- Owns workflow fit, priority, and whether a proposed pattern solves a real need.

AI-agent reviewer:

- Owns manifest clarity, selection guidance, and whether generated UI stays grounded in the catalog.

## Escalation Rules

Escalate immediately when:

- A source-backed entry cannot be copied.
- A public link breaks.
- A manifest change could cause agents to select the wrong UI.
- A core primitive has an accessibility blocker.
- A component's visual treatment diverges from approved Figma intent.

Pause new component work until critical trust or handoff issues are fixed.

## Related Docs

- [Feedback triage](FEEDBACK-TRIAGE.md)
- [Gap proposal process](GAP-PROPOSAL-PROCESS.md)
- [Component lifecycle](COMPONENT-LIFECYCLE.md)
- [Release checklist](RELEASE-CHECKLIST.md)
- [Launch handoff](LAUNCH-HANDOFF.md)
- [Roadmap](ROADMAP.md)
