# Design Library Docs

This folder contains the project, review, developer, agent, and release documentation for the Design Library.

## Start Here

- [MVP status](MVP-STATUS.md): current state, catalog counts, review paths, and remaining gaps.
- [MVP scorecard](MVP-SCORECARD.md): readiness score, weighted breakdown, and the remaining post-MVP points.
- [Review guide](REVIEW-GUIDE.md): how designers, engineers, product partners, and AI-agent reviewers should evaluate the library.
- [Team review packet](TEAM-REVIEW-PACKET.md): copyable review message, links, feedback route, and triage labels.
- [Launch handoff](LAUNCH-HANDOFF.md): quick handoff page for teammates, reviewers, maintainers, and AI-agent consumers.
- [Share-ready checklist](SHARE-READY-CHECKLIST.md): current share scope, reviewer prompts, and Figma-out-of-scope note.
- [Internal hosting](INTERNAL-HOSTING.md): static hosting notes for an internal Unilever or Supermicro deployment.
- [Feedback triage](FEEDBACK-TRIAGE.md): how to label, prioritize, route, and close review feedback.
- [Gap proposal process](GAP-PROPOSAL-PROCESS.md): how to intake, evaluate, and promote missing components, templates, tokens, and patterns.
- [Maintenance cadence](MAINTENANCE-CADENCE.md): weekly, biweekly, monthly, and release routines for keeping the library healthy.
- [Accessibility checklist](ACCESSIBILITY-CHECKLIST.md): shell, component, template, keyboard, semantic, and contrast review checklist.
- [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md): manual assistive-technology review route and pass/fail criteria.
- [Figma parity audit](FIGMA-PARITY-AUDIT.md): MCP reconnection plan, first audit set, and pass/fail criteria for Figma verification.
- [Adoption guide](ADOPTION-GUIDE.md): paths for teams copying, validating, and scaling components into another product.
- [Developer handoff](DEVELOPER-HANDOFF.md): how to copy components into another React + Tailwind app.
- [Component authoring](COMPONENT-AUTHORING.md): how to add or edit entries without breaking previews, copy flow, or agent metadata.
- [Component lifecycle](COMPONENT-LIFECYCLE.md): status model and promotion, deprecation, rename, split, and review rules.
- [Handoff readiness](HANDOFF-READINESS.md): current source-copyable coverage and verification path.
- [Agent consumption](AGENT-CONSUMPTION.md): how AI agents should read the manifest and generate grounded UI.
- [Manifest schema](MANIFEST-SCHEMA.md): generated JSON fields, stability rules, and handoff contract.
- [Versioning](VERSIONING.md): review release, manifest schema, catalog ID, and future package versioning rules.
- [Roadmap](ROADMAP.md): shipped work, next hardening passes, and later work.
- [Release checklist](RELEASE-CHECKLIST.md): repeatable checklist before sharing a new review milestone.

## Project Context

- [Project brief](PROJECT-BRIEF.md): what the Design Library is, who it serves, and what success means.
- [Taxonomy](TAXONOMY.md): category model for foundations, components, product patterns, and templates.
- [Decisions](DECISIONS.md): major product and engineering decisions made during the build.

## Related Root Files

- [Changelog](../CHANGELOG.md): versioned release notes.
- [Contributing](../CONTRIBUTING.md): contributor workflow, change rules, and verification commands.
- [Manifest](../manifest.json): machine-readable catalog for agents and tooling.
- [Developer handoff JSON](../developer-handoff.json): source/dependency/copy metadata for developers and agents.
- [Master inventory](../inventory/master-inventory.md): component inventory source.
- [Gap analysis](../inventory/gap-analysis.md): known and proposed component gaps.
- [Taxonomy proposal](../inventory/taxonomy-proposal.md): taxonomy planning notes.

## Audience Paths

Designer:

1. [Review guide](REVIEW-GUIDE.md)
2. [Team review packet](TEAM-REVIEW-PACKET.md)
3. [Share-ready checklist](SHARE-READY-CHECKLIST.md)
4. [Accessibility checklist](ACCESSIBILITY-CHECKLIST.md)
5. [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md)
6. [MVP scorecard](MVP-SCORECARD.md)
7. [MVP status](MVP-STATUS.md)
8. [Taxonomy](TAXONOMY.md)
9. Live preview

Engineer:

1. [Adoption guide](ADOPTION-GUIDE.md)
2. [Developer handoff](DEVELOPER-HANDOFF.md)
3. [Component authoring](COMPONENT-AUTHORING.md)
4. [Component lifecycle](COMPONENT-LIFECYCLE.md)
5. [Gap proposal process](GAP-PROPOSAL-PROCESS.md)
6. [Maintenance cadence](MAINTENANCE-CADENCE.md)
7. [Handoff readiness](HANDOFF-READINESS.md)
8. [Accessibility checklist](ACCESSIBILITY-CHECKLIST.md)
9. [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md)
10. [Figma parity audit](FIGMA-PARITY-AUDIT.md)
11. [MVP scorecard](MVP-SCORECARD.md)
12. [Release checklist](RELEASE-CHECKLIST.md)
13. [MVP status](MVP-STATUS.md)
14. `npm run copy:component -- --search <term>`

AI Agent / Automation:

1. [Agent consumption](AGENT-CONSUMPTION.md)
2. [Manifest schema](MANIFEST-SCHEMA.md)
3. [Manifest](../manifest.json)
4. [Developer handoff JSON](../developer-handoff.json)
5. Entry fields: `agentGuidance`, `useWhen`, `doNotUseWhen`, `variants`, `props`, `tokens`

Product / Stakeholder:

1. [Launch handoff](LAUNCH-HANDOFF.md)
2. [Share-ready checklist](SHARE-READY-CHECKLIST.md)
3. [Internal hosting](INTERNAL-HOSTING.md)
4. [Adoption guide](ADOPTION-GUIDE.md)
5. [Team review packet](TEAM-REVIEW-PACKET.md)
6. [Feedback triage](FEEDBACK-TRIAGE.md)
7. [Gap proposal process](GAP-PROPOSAL-PROCESS.md)
8. [Maintenance cadence](MAINTENANCE-CADENCE.md)
9. [Review guide](REVIEW-GUIDE.md)
10. [Project brief](PROJECT-BRIEF.md)
11. [Roadmap](ROADMAP.md)
12. Live preview
