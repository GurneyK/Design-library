# Design Library Decisions

## Project Shape

Decision:
Design Library will be a brand-new standalone project, not part of the Polaris/Nexus reference repo.

Reason:
The showcase needs to become its own product and eventually its own repository with a public preview link.

## Name

Decision:
Use `Design Library` as the product/repo direction.

Reason:
It is broad enough to support Habibi, Nexus, Unilever H3L, and future projects beyond Nexus.

## Source Of Truth For Now

Decision:
Use the MD files and zipped specs as the current build source.

Reason:
They are detailed and cover tokens, components, patterns, and templates. Figma MCP is not connected yet.

Status labels:
- `written-spec`: from MD/spec files
- `reference-code`: observed in Polaris/Nexus repo
- `figma-verified`: later Figma reconciliation
- `proposed`: approved gap or new pattern not yet in Figma

## Figma

Decision:
Defer Figma extraction and pixel verification until MCP access works.

Reason:
The Figma plugin is enabled, but no callable Figma MCP tools are exposed in this session and the OAuth token is missing.

Implication:
The first showcase can be built from written specs, but entries must not claim Figma verification yet.

## Reference Repo

Decision:
Treat `ProjectNorthStarGK-http1` as a reference repo only.

Reason:
It contains useful behavior patterns for chat, citations, tool calls, dashboards, and renderers, but its styling is not canonical Habibi.

Use:
- behavior patterns
- architecture ideas
- component coverage evidence

Avoid:
- hardcoded color classes
- one-off modal overlays
- large-radius/glass/rainbow visual defaults
- product-specific copy as generic component language

## Implementation Stack

Decision:
Use React + Tailwind as the default implementation layer.

Recommended scaffold:
- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react icons
- Radix/headless primitives for complex interactive behavior
- Recharts for early chart examples

Reason:
Vite gives a simple static build and smooth GitHub Pages deployment. React/Tailwind aligns with Nexus and the written specs.

## Headless Primitives

Decision:
Use bare React/Tailwind for simple components and Radix/headless primitives for complex behavior.

Use Radix/headless for:
- Dialog
- Dropdown Menu
- Select
- Tooltip
- Popover
- Tabs
- Switch
- Checkbox
- Drawer-style overlay behavior where useful

Reason:
Simple components stay transparent. Complex accessibility behavior should not be hand-rolled if a proven primitive exists.

## Component Naming

Decision:
Use PascalCase code names and preserve source names in metadata.

Example:
- Code: `ChatMessage`
- Display name: `Chat Message`
- Source name: original MD/Figma name when available

Reason:
This keeps code familiar to frontend developers while preserving design-source traceability.

## Scope

Decision:
Include everything in the Design Library now, even if some items begin as proposed.

Includes:
- Foundations
- Primitives
- Layout
- Navigation
- Data Entry
- Data Display
- Feedback
- Charts / Data Viz
- Agent UI
- Dashboard / Product Patterns
- Flow Builder
- Auth / SSO
- Templates / Blocks

Reason:
The final library should be broad like Ant Design and useful like 21st.dev, while still grounded in Habibi.

## First Worked Example

Decision:
Button will be the first fully implemented component entry.

Reason:
Button proves the entry template: variants, sizes, slots, states, props, tokens, accessibility, code, and usage guidance.

## Deployment

Decision:
Target a public/shareable preview link.

Recommended path:
GitHub Pages with GitHub Actions.

Reason:
The user wants a URL that can be shared like other design libraries. GitHub Pages is simple, public, and updates on push.

## Public Naming And Context

Decision:
The library can mention Unilever, H3L, Nexus, Polaris, and Habibi.

Reason:
The library is intended for current Nexus work and future Unilever projects.

