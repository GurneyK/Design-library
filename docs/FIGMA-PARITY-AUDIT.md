# Figma Parity Audit

Use this document when Figma MCP access is stable enough to run visual parity checks against Design System 2.0.

## Current Status

Status: **Deferred, not blocking MVP**

Reason:

- Figma MCP tools are not exposed in the current Codex session.
- `get_design_context`, `get_metadata`, and `get_screenshot` are unavailable, so pixel evidence cannot be captured honestly right now.
- The library was built from written Habibi specs, Polaris/Nexus reference patterns, Ant Design / 21st.dev structure, and local implementation QA.

Figma sources to reconnect:

- Design System 2.0 root: https://www.figma.com/design/qafioCr7GiesyZtf90byDh/Design-System-2.0?node-id=0-1&t=2Mp8NzPzMMlz6qmV-1
- Provided page/node: https://www.figma.com/design/qafioCr7GiesyZtf90byDh/Design-System-2.0?node-id=339-11336

## Required MCP Flow

For every audited component:

1. Run `get_metadata` on the file or target page to locate the component node.
2. Run `get_design_context` for the exact component node.
3. Run `get_screenshot` for the exact component node and variant.
4. Compare the live React preview against the Figma screenshot at desktop width.
5. Record pass/fail and drift notes in this document or in `inventory/master-inventory.md`.
6. Add the Figma node URL to the component metadata once verified.

## First Audit Set

Start with high-signal primitives and Nexus patterns:

| Component / template | Catalog ID | Why first | Status |
| --- | --- | --- | --- |
| Button | `button` | Proves variants, slots, states, and token mapping. | Pending MCP access |
| Input | `input` | Proves labels, error state, disabled state, and density. | Pending MCP access |
| Switch | `switch` | Proves compact control sizing and state colors. | Pending MCP access |
| Modal / Dialog | `modal` | Proves overlay, title, description, footer, and focus affordances. | Pending MCP access |
| Table | `table` | Proves dense data layout and headers. | Pending MCP access |
| Chat Surface | `chat-surface` | Proves core agent UI composition. | Pending MCP access |
| Citation Chip | `citation-chip` | Proves agent-specific source/citation pattern. | Pending MCP access |
| Run Card | `run-card` | Proves dashboard/product pattern density. | Pending MCP access |
| Analytics Agent Workspace | `template-analytics-agent-workspace` | Proves full-page Nexus composition. | Pending MCP access |

## Pass Criteria

Mark a component Figma-verified when:

- Spacing, radius, border, shadow, and density match the Figma node within an acceptable review tolerance.
- Color usage maps to Habibi tokens, not raw values.
- Typography scale and weight match the Figma source or documented Habibi token.
- Variants in code match the Figma component properties or are explicitly marked proposed.
- Accessibility behavior in code is at least as strong as the Figma intent.
- Any intentional difference is recorded as a design-system decision.

## Drift Format

```text
Component:
Catalog ID:
Figma node:
Reviewer:
Date:
Result: pass / fail / needs decision
Visual drift:
Token drift:
Variant drift:
Accessibility notes:
Decision or follow-up:
```

## MVP Interpretation

The MVP is considered complete without this audit because Figma access is an external integration blocker. This document keeps the parity work explicit and ready to run as soon as the MCP tools are available.
