# Handoff Readiness

Last checked: May 13, 2026

This page summarizes whether a full-stack engineer can take code from the Design Library and use it in another React + Tailwind project.

## Summary

| Measure | Count |
| --- | ---: |
| Total catalog entries | 224 |
| Source-copyable entries | 209 |
| Foundation guidance entries | 14 |
| Reference endpoint entries | 1 |

All component and template entries are source-backed. The only entries without copyable component source are the expected non-component entries:

- Foundations: token guidance, not standalone React components.
- Agent Manifest: reference endpoint for agent/tooling consumption.

## Copy Status Model

| Status | Meaning | Current count |
| --- | --- | ---: |
| `source-available` | The entry resolves implementation source, dependencies, raw URLs, copy commands, and generated copy scripts. | 209 |
| `foundation-guidance` | The entry documents tokens or foundation rules rather than a component source file. | 14 |
| `reference-endpoint` | The entry points to an API/static endpoint instead of local UI source. | 1 |

No component or template should ship as `usage-snippet-only` in the MVP. If a future entry lands with that status, treat it as a handoff gap.

## Source-Copyable Coverage By Category

| Category | Source-copyable | Non-copy source |
| --- | ---: | ---: |
| Agent UI | 20 | 0 |
| Charts / Data Viz | 20 | 0 |
| Dashboard / Product Patterns | 20 | 0 |
| Data Display | 21 | 0 |
| Data Entry | 18 | 0 |
| Feedback | 18 | 0 |
| Forms | 19 | 0 |
| Layout | 20 | 0 |
| Navigation | 19 | 0 |
| Primitives | 18 | 0 |
| Templates / Blocks | 16 | 0 |
| Foundations | 0 | 14 |
| Agent Reference | 0 | 1 |

## What A Developer Gets

For every source-backed entry, `developer-handoff.json` includes:

- Implementation source paths.
- Local dependency paths.
- GitHub source URLs.
- Raw download URLs.
- Import paths.
- Required global setup files.
- Package install command.
- PowerShell copy script.
- Bash copy script.
- `npm run copy:component` command.
- `npm run copy:component -- --globals` command.
- Optional local receipt support through `npm run copy:component -- <entry-id> --receipt`.

The live component page also shows the same handoff data inside the Developer Handoff section.

## Verification Commands

Run this before sharing a release:

```bash
npm run qa
npm run handoff:check
```

That validates:

- Every manifest entry has matching handoff metadata.
- Every component and template resolves implementation source.
- Source-backed entries include copy scripts and copy commands.
- Listed source, dependency, and required global files exist in the repo.
- Local relative imports inside copied files are included in `allCopyPaths`.
- Generated `developer-handoff.json` matches the manifest payload.
- This readiness page matches generated manifest and handoff counts.

For a spot check, run:

```bash
npm run copy:component -- button --dry-run
npm run copy:component -- template-agent-chat-workspace --dry-run
npm run copy:component -- run-card --handoff-file developer-handoff.json --source-root . --out ../copy-test --receipt
```

For a local copy test without downloading from GitHub:

```bash
npm run copy:component -- button --handoff-file developer-handoff.json --source-root . --out ../copy-test
```

## Reviewer Guidance

When reviewing handoff readiness, check one primitive, one product-pattern component, and one template:

- Primitive: `button`
- Product pattern: `run-card`
- Agent UI: `chat-surface`
- Template: `template-agent-chat-workspace`

For each, confirm that the preview, code snippet, source file, and generated copy command all describe the same component. If those four surfaces agree, the entry is ready for full-stack reuse.
