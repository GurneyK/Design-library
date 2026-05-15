# Design Library Docs

This folder contains the project, review, developer, agent, and release documentation for the Design Library.

## Start Here

- [MVP status](MVP-STATUS.md): current state, catalog counts, review paths, and remaining gaps.
- [MVP scorecard](MVP-SCORECARD.md): readiness score, weighted breakdown, and the remaining post-MVP points.
- [Review guide](REVIEW-GUIDE.md): how designers, engineers, product partners, and AI-agent reviewers should evaluate the library.
- [Team review packet](TEAM-REVIEW-PACKET.md): copyable review message, links, feedback route, and triage labels.
- [Launch handoff](LAUNCH-HANDOFF.md): quick handoff page for teammates, reviewers, maintainers, and AI-agent consumers.
- [Feedback triage](FEEDBACK-TRIAGE.md): how to label, prioritize, route, and close review feedback.
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
3. [Accessibility checklist](ACCESSIBILITY-CHECKLIST.md)
4. [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md)
5. [Figma parity audit](FIGMA-PARITY-AUDIT.md)
6. [MVP scorecard](MVP-SCORECARD.md)
7. [MVP status](MVP-STATUS.md)
8. [Taxonomy](TAXONOMY.md)
9. Live preview

Engineer:

1. [Adoption guide](ADOPTION-GUIDE.md)
2. [Developer handoff](DEVELOPER-HANDOFF.md)
3. [Component authoring](COMPONENT-AUTHORING.md)
4. [Component lifecycle](COMPONENT-LIFECYCLE.md)
5. [Handoff readiness](HANDOFF-READINESS.md)
6. [Accessibility checklist](ACCESSIBILITY-CHECKLIST.md)
7. [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md)
8. [Figma parity audit](FIGMA-PARITY-AUDIT.md)
9. [MVP scorecard](MVP-SCORECARD.md)
10. [Release checklist](RELEASE-CHECKLIST.md)
11. [MVP status](MVP-STATUS.md)
12. `npm run copy:component -- --search <term>`

AI Agent / Automation:

1. [Agent consumption](AGENT-CONSUMPTION.md)
2. [Manifest schema](MANIFEST-SCHEMA.md)
3. [Manifest](../manifest.json)
4. [Developer handoff JSON](../developer-handoff.json)
5. Entry fields: `agentGuidance`, `useWhen`, `doNotUseWhen`, `variants`, `props`, `tokens`

Product / Stakeholder:

1. [Launch handoff](LAUNCH-HANDOFF.md)
2. [Adoption guide](ADOPTION-GUIDE.md)
3. [Team review packet](TEAM-REVIEW-PACKET.md)
4. [Feedback triage](FEEDBACK-TRIAGE.md)
5. [Review guide](REVIEW-GUIDE.md)
6. [Project brief](PROJECT-BRIEF.md)
7. [Roadmap](ROADMAP.md)
8. Live preview
