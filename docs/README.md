# Design Library Docs

This folder contains the project, review, developer, agent, and release documentation for the Design Library.

## Start Here

- [MVP status](MVP-STATUS.md): current state, catalog counts, review paths, and remaining gaps.
- [Review guide](REVIEW-GUIDE.md): how designers, engineers, product partners, and AI-agent reviewers should evaluate the library.
- [Developer handoff](DEVELOPER-HANDOFF.md): how to copy components into another React + Tailwind app.
- [Agent consumption](AGENT-CONSUMPTION.md): how AI agents should read the manifest and generate grounded UI.
- [Manifest schema](MANIFEST-SCHEMA.md): generated JSON fields, stability rules, and handoff contract.
- [Roadmap](ROADMAP.md): shipped work, next hardening passes, and later work.
- [Release checklist](RELEASE-CHECKLIST.md): repeatable checklist before sharing a new review milestone.

## Project Context

- [Project brief](PROJECT-BRIEF.md): what the Design Library is, who it serves, and what success means.
- [Taxonomy](TAXONOMY.md): category model for foundations, components, product patterns, and templates.
- [Decisions](DECISIONS.md): major product and engineering decisions made during the build.

## Related Root Files

- [Changelog](../CHANGELOG.md): versioned release notes.
- [Manifest](../manifest.json): machine-readable catalog for agents and tooling.
- [Developer handoff JSON](../developer-handoff.json): source/dependency/copy metadata for developers and agents.
- [Master inventory](../inventory/master-inventory.md): component inventory source.
- [Gap analysis](../inventory/gap-analysis.md): known and proposed component gaps.
- [Taxonomy proposal](../inventory/taxonomy-proposal.md): taxonomy planning notes.

## Audience Paths

Designer:

1. [Review guide](REVIEW-GUIDE.md)
2. [MVP status](MVP-STATUS.md)
3. [Taxonomy](TAXONOMY.md)
4. Live preview

Engineer:

1. [Developer handoff](DEVELOPER-HANDOFF.md)
2. [Release checklist](RELEASE-CHECKLIST.md)
3. [MVP status](MVP-STATUS.md)
4. `npm run copy:component -- --search <term>`

AI Agent / Automation:

1. [Agent consumption](AGENT-CONSUMPTION.md)
2. [Manifest schema](MANIFEST-SCHEMA.md)
3. [Manifest](../manifest.json)
4. [Developer handoff JSON](../developer-handoff.json)
5. Entry fields: `agentGuidance`, `useWhen`, `doNotUseWhen`, `variants`, `props`, `tokens`

Product / Stakeholder:

1. [Review guide](REVIEW-GUIDE.md)
2. [Project brief](PROJECT-BRIEF.md)
3. [Roadmap](ROADMAP.md)
4. Live preview
