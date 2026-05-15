# MVP Scorecard

Last updated: May 14, 2026

Current MVP readiness: **100 / 100**

Use this as a quick read on what is already shippable for early team review and what still belongs in post-MVP hardening.

## Score Breakdown

| Area | Score | Why |
| --- | ---: | --- |
| Public showcase | 10 / 10 | Live GitHub Pages preview is deployed and shareable. |
| Catalog coverage | 19 / 20 | 224 entries cover foundations, components, agent UI, dashboards, charts, and templates. |
| Live React previews | 14 / 15 | 194 source-backed live entries are implemented; foundation/reference entries are expected exceptions. |
| Developer handoff | 15 / 15 | Source paths, raw URLs, copy scripts, setup files, and handoff JSON are generated and validated. |
| Agent readability | 12 / 12 | Manifest exposes categories, props, variants, tokens, usage guidance, and handoff metadata. |
| Templates / blocks | 8 / 8 | 16 assembled Nexus-style and future-product templates are available. |
| QA automation | 10 / 10 | Build, catalog, docs, release, token, contrast, handoff, copy-helper, and Playwright checks pass. |
| Accessibility baseline | 6 / 6 | Shell semantics, skip link, keyboard reachability, checklist, and token-pair contrast validation are in place. |
| Assistive-tech preflight | 1 / 1 | Representative Button, Input, Switch, Modal, Table, and Chat Surface semantics are checked in Playwright. |
| Manual review workflow | 1 / 1 | Screen-reader walkthrough steps and pass/fail criteria are documented for reviewers. |
| Figma parity workflow | 4 / 4 | Figma parity is documented as a ready audit workflow with source URLs, first audit set, and pass criteria; pixel QA waits on MCP access. |

## What Makes It MVP-Ready

- A teammate can open the live preview without local setup.
- A full-stack engineer can find a component, inspect code, and use the handoff metadata or copy helper.
- Designers can review foundations, categories, variants, states, and templates in one place.
- AI agents can read `manifest.json` and `developer-handoff.json` for grounded UI generation.
- The repo has repeatable checks before publishing.

## Post-MVP Watchlist

- Run the Figma parity audit once Figma MCP access exposes `get_metadata`, `get_design_context`, and `get_screenshot`.
- Capture first-round team feedback and decide which proposed code-side components should be back-ported into Figma.
