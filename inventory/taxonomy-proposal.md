# Design Library Taxonomy Proposal

Status: Phase 2 draft  
Date: 2026-04-28  
Source basis: Habibi written specs, Polaris/Nexus reference repo, Ant Design, 21st.dev  

## Taxonomy Goals

The Design Library taxonomy needs to serve three audiences at once:

1. Designers scanning for reusable patterns and design intent.
2. Developers looking for React/Tailwind components, props, variants, and copyable code.
3. AI agents loading predictable metadata to generate grounded Unilever/Nexus UI.

That means the taxonomy should be stable like Ant Design, preview-friendly like 21st.dev, and explicit about composition: tokens become primitives, primitives become components, components become blocks, blocks become product templates.

## What We Adopt, Adapt, And Reject

| Reference | Adopt | Adapt | Reject |
|---|---|---|---|
| Ant Design | Functional categories, props/API tables, design token section, live examples, semantic/accessibility notes | Split broad categories into Design Library-specific groups; bring Ant Design X and Charts ideas into first-class categories | Vague `Other` bucket; overly generic enterprise tone where Nexus needs agent/product context |
| 21st.dev | Preview-first browsing, fast search, tags, copy code/prompt flows, templates/blocks, AI-friendly metadata | Treat popularity/newest as filters instead of primary IA; convert prompt snippets into structured agent metadata | Community-random IA, shader/effect-led categories, marketing-block dominance |
| Habibi specs | Token-led implementation, Nexus-specific agent/dashboard components, internal-tool UX rules | Convert written specs into browsable component docs with status labels | Treating written specs as final visual proof without later Figma reconciliation |
| Polaris/Nexus repo | Behavior patterns for chat, citations, tool calls, response renderers, dashboards | Rebuild with Habibi tokens and canonical props instead of copying classes | Hardcoded colors, oversized radius drift, one-off modals, rainbow/glass styles as defaults |

## Proposed Primary Navigation

### 1. Foundations

Foundations are not React components, but they must be browsable because every component consumes them.

Includes:
- Color
- Typography
- Spacing
- Radius
- Shadows / elevation
- Borders
- Focus rings
- Dark mode
- Accessibility rules
- Content tone / microcopy
- Icon usage

Why this exists:
AI agents and developers need the same token map before they generate or implement components. This category should eventually expose token JSON and CSS variable names.

### 2. Primitives

Small, reusable building blocks that appear inside larger components.

Includes:
- Button
- Icon Button
- Link
- Badge
- Tag / Pill
- Avatar
- Divider / Separator
- Tooltip
- Surface
- Card base
- Scroll Area

Design-system language:
These are the low-level slots and variants. They should have clear prop APIs and stable token bindings.

### 3. Layout

Structural components that arrange content but do not own product meaning.

Includes:
- App Shell
- Sidebar
- Topbar
- Page Header
- Container
- Stack
- Inline
- Grid
- Splitter
- Panel
- Section

Why separate from Navigation:
Ant puts many layout pieces together, but Nexus surfaces need explicit shell and panel patterns. Layout should answer “where does content live?” Navigation should answer “where can I go?”

### 4. Navigation

Components for moving between places, steps, views, and commands.

Includes:
- Breadcrumb
- Tabs
- Menu
- Dropdown Menu
- Context Menu
- Pagination
- Steps / Stepper
- Command Palette
- Sidebar Nav Item

Notes:
Command Palette and Stepper are gap candidates, but they belong here now so the system has room to grow.

### 5. Data Entry

Components that collect or configure information.

Includes:
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider
- Search Input
- Combobox / Autocomplete
- Date Picker
- Date Range Picker
- File Upload
- Form Field
- Form Section
- Validation Message

Implementation note:
Use bare React/Tailwind for simple fields. Use Radix/headless behavior for Select, Checkbox, Switch, Popover-backed Date Picker, and similar components.

### 6. Data Display

Components that present structured information.

Includes:
- Table
- List
- Description List / Key-Value
- Stat / KPI Card
- Metric Card
- Empty State
- Result State
- Skeleton
- Timeline
- Tree
- Calendar
- Detail Panel

Notes:
Cards appear here only when they display data. The Card primitive remains in Primitives.

### 7. Feedback

Components that communicate system state, confirmation, interruption, or progress.

Includes:
- Alert
- Banner
- Toast / Message
- Notification
- Modal / Dialog
- Drawer
- Popover
- Popconfirm
- Progress
- Spinner
- Loading Overlay
- Error Boundary

Facet tags:
- `inline`
- `overlay`
- `blocking`
- `non-blocking`
- `transient`
- `persistent`

Why:
This helps agents choose between an inline alert, a toast, a drawer, or a blocking modal.

### 8. Charts / Data Viz

Chart wrappers and reusable chart anatomy.

Includes:
- Chart Container
- Axis
- Grid
- Legend
- Chart Tooltip
- Line Chart
- Area Chart
- Bar Chart
- Horizontal Bar Chart
- Pie Chart
- Donut Chart
- Radar Chart
- Summary Chart Card

Why separate:
Charts have data contracts, responsive behavior, empty/loading/error states, and interaction rules that differ from simple data display.

### 9. Agent UI

Habibi-specific AI-agent interface components.

Includes:
- Chat Surface
- Message Bubble / Chat Message
- Composer / Chat Input
- Suggestion Chips
- Chat Category Card
- Streaming Indicator
- Thinking State
- Tool Call Card
- Proposed Plan Card
- Citation Chip
- Citation Footer
- Source Drawer
- Agent Avatar
- Usage Metadata
- Cost Breakdown
- Approval Prompt

Why first-class:
This is the strategic differentiator. Ant Design has Ant Design X, but Habibi should make agent UI native to the library rather than an add-on.

### 10. Dashboard / Product Patterns

Nexus and Unilever product-specific patterns that compose shared components.

Includes:
- Dashboard Header
- Workspace Switcher
- Run Status Pill
- Activity Feed
- Agent Dashboard Header
- Red Team Test Card / Panel
- Feedback Table
- Feedback Details
- LLM Evaluation Panel
- Conversation Turn Card
- Available Agents Table
- INCI / Product Info Card
- Flow Builder Node
- Flow Canvas

Why not just “components”:
These are product patterns with domain meaning. They may become reusable components, but they should be documented as compositions with context.

### 11. Templates / Blocks

Composed screens and sections that teams can copy as starting points.

Includes:
- Analytics Agent Chat
- Marketing Agent Workspace
- INCI Lookup View
- Agent Dashboard
- Evaluation Kit Dashboard
- Agent Creation Flow
- Data Table Block
- Citation Drawer Block
- Empty State Set
- Auth / SSO Screen
- Dashboard Overview

Rules:
Templates are not primitives. They should document “composes from,” “when to use,” sample data, and full copyable code.

## Cross-Cutting Metadata Facets

These facets should exist in metadata and filters, not as primary nav categories.

| Facet | Values |
|---|---|
| Source | `written-spec`, `reference-code`, `figma-verified`, `proposed` |
| Status | `draft`, `review`, `approved`, `deprecated` |
| Surface | `generic`, `agent`, `dashboard`, `forms`, `marketing`, `inci`, `admin`, `evaluation` |
| Complexity | `primitive`, `component`, `pattern`, `template` |
| Behavior | `static`, `interactive`, `async`, `overlay`, `data-bound` |
| Theme | `light`, `dark`, `themed-dark` |
| Accessibility risk | `low`, `medium`, `high` |
| Implementation base | `bare-react`, `radix`, `recharts`, `plotly`, `react-flow` |

## Recommended Entry Types

### Foundation Entry

Used for color, type, spacing, radius, shadows, focus, dark mode.

Required sections:
- Overview
- Token table
- Usage guidance
- Do / do not
- Examples
- Accessibility notes
- Agent guidance
- Machine-readable token export

### Component Entry

Used for primitives and normal components.

Required sections:
- Overview
- Live preview
- Variants
- Props table
- States
- Code
- Tokens consumed
- Accessibility
- When to use
- When not to use
- Related components
- Agent guidance

### Pattern Entry

Used for product/domain patterns like Red Team Panel or INCI Card.

Required sections:
- Overview
- Context
- Live preview
- Composition slots
- Variants
- Data requirements
- Code
- Tokens consumed
- Accessibility
- Related patterns
- Agent guidance

### Template / Block Entry

Used for assembled screens and sections.

Required sections:
- Overview
- Large preview
- Composes from
- Usage context
- Sample data
- Full code
- Customization notes
- Accessibility and responsive notes
- Agent prompt guidance

## Phase 2 Recommendation

Approve this taxonomy as the working navigation for the Design Library showcase, with the understanding that:

- Foundations and Button should be built first.
- Agent UI and Dashboard categories are first-class, not secondary examples.
- Templates / Blocks must launch early, even with one or two examples, because they are the highest-leverage artifact for team review.
- Figma status remains `figma-deferred` until MCP works.

