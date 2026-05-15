# Roadmap

Last updated: May 14, 2026

The Design Library is now in MVP review state. It has a deployed showcase, live React + Tailwind entries, copyable source metadata, a developer handoff path, and an agent-readable manifest.

## Shipped

Discovery and planning:

- Read local Habibi component/spec files.
- Read Polaris/Nexus project context.
- Studied Ant Design and 21st.dev as quality references.
- Created project brief, taxonomy, decisions, inventory, and gap analysis.
- Deferred Figma MCP extraction when access was unstable and documented the ready Figma parity audit workflow.

Showcase:

- Built Vite + React + TypeScript + Tailwind app.
- Deployed to GitHub Pages.
- Added category navigation, search, Components/Templates switch, preview area, code blocks, props, tokens, usage, accessibility, and agent guidance.
- Added lazy-loaded catalog entry modules to keep the initial shell lightweight.

Catalog:

- 224 catalog entries.
- 194 live component entries.
- 16 template/block entries.
- 14 foundation entries.
- Categories cover Foundations, Primitives, Layout, Navigation, Data Entry, Forms, Data Display, Charts, Feedback, Agent UI, Dashboard/Product Patterns, Agent Reference, and Templates / Blocks.

Developer and agent handoff:

- Generated `manifest.json`.
- Generated `developer-handoff.json`.
- Added source paths, dependency paths, raw GitHub URLs, import paths, copy status, package install command, global setup files, and copy commands.
- Added PowerShell and Bash copy scripts per source-backed entry.
- Added `npm run copy:component` helper with search, list, dry-run, local clone mode, and global setup copying.
- Added developer handoff guide.
- Added agent consumption guide.
- Added review guide.
- Added accessibility checklist, screen-reader walkthrough, and Figma parity audit workflow.

Quality:

- `npm run qa` builds, validates catalog metadata, validates token/contrast usage, and tests the copy helper.
- `npm run visual-qa` runs Playwright smoke tests across desktop and mobile, including accessibility semantics coverage.
- GitHub Actions and GitHub Pages run on push to `main`.

## Next

Short-term review:

- Share live preview with design, engineering, and product reviewers.
- Use `docs/REVIEW-GUIDE.md` to collect structured feedback.
- Review Foundations, Primitives, Agent UI, Dashboard / Product Patterns, and Templates / Blocks first.
- Confirm which proposed code-side components should be back-ported into Figma.

Design-system hardening:

- Reconnect Figma MCP when available.
- Run `docs/FIGMA-PARITY-AUDIT.md` for high-priority components against Figma.
- Add Figma node references and preview assets to inventory where possible.
- Map Figma component names to React component names.
- Decide which proposed components become official Habibi components.

Engineering hardening:

- Add deeper unit tests for manifest generation.
- Add copy-helper tests for templates with larger dependency graphs.
- Add accessibility walkthroughs for keyboard and focus behavior.
- Continue watching bundle size as the catalog grows.
- Consider packaging strategy if teams want npm-style installation later.

Agent-readability hardening:

- Add more explicit composition examples for the highest-use templates.
- Add stricter manifest schema versioning.
- Add machine-readable gap/proposal metadata.
- Add endpoint or static file for recommended prompt instructions.
- Use `docs/MAINTENANCE-CADENCE.md` to run weekly triage, biweekly catalog health checks, and monthly design-system review.

## Later

- Figma Code Connect mapping.
- Versioned releases and changelog.
- Proposed component review workflow.
- More templates for full Nexus/Polaris workflows.
- Internal hosting or auth if Unilever constraints require it.
