# Design Library Taxonomy

## Approved Working Categories

The Design Library uses a functional taxonomy inspired by Ant Design, adapted for Habibi's agent, dashboard, and Unilever product needs.

## 1. Foundations

Design tokens and rules that every component consumes.

Includes:
- Color
- Typography
- Spacing
- Radius
- Shadows
- Borders
- Focus rings
- Dark mode
- Accessibility
- Content tone
- Icon usage

## 2. Primitives

Small reusable building blocks.

Includes:
- Button
- Icon Button
- Link
- Badge
- Tag / Pill
- Avatar
- Divider
- Tooltip
- Surface
- Card base
- Scroll Area

## 3. Layout

Structural pieces that arrange content.

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

## 4. Navigation

Components for moving between places, views, steps, and commands.

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

## 5. Data Entry

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

## 6. Data Display

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

## 7. Feedback

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

## 8. Charts / Data Viz

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

## 9. Agent UI

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

## 10. Dashboard / Product Patterns

Product-specific compositions for Nexus, Unilever workflows, and future internal products.

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

## 11. Templates / Blocks

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

## Metadata Facets

These should be stored in each component entry and used as filters.

| Facet | Values |
|---|---|
| Source | `written-spec`, `reference-code`, `figma-verified`, `proposed` |
| Status | `draft`, `review`, `approved`, `deprecated` |
| Surface | `generic`, `agent`, `dashboard`, `forms`, `marketing`, `inci`, `admin`, `evaluation` |
| Complexity | `primitive`, `component`, `pattern`, `template` |
| Implementation base | `bare-react`, `radix`, `recharts`, `plotly`, `react-flow` |

