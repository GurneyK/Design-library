# Design Library Phase 1 Master Inventory

Status: Checkpoint 1 draft  
Date: 2026-04-28  
Scope: Written Habibi specs + Polaris/Nexus reference repo + Ant Design / 21st.dev taxonomy study  

## Source Status

| Source | Status | Notes |
|---|---|---|
| Habibi written specs | Available | `C:/Users/gurno/Desktop/MD FILES/ui-reference.md`, `ux-guidelines.md`, `1.zip`, `2.zip` are the current source of truth. |
| Figma Design System 2.0 | Deferred | Figma MCP tools are not exposed yet. Figma verification and node inventory will be a later reconciliation pass. |
| Reference repo | Available | Cloned read-only at `C:/Users/gurno/Documents/New project/ProjectNorthStarGK-http1`. Treated as reference, not destination. |
| Ant Design | Studied | Used as taxonomy and documentation-structure benchmark. |
| 21st.dev | Studied | Used as registry, preview, copy-flow, and AI-readable metadata benchmark. |

## Inventory Legend

| Status | Meaning |
|---|---|
| `written-spec` | Present in Habibi MD/spec files. |
| `reference-code` | Similar pattern/component exists in Polaris/Nexus reference repo. |
| `figma-deferred` | Figma confirmation not yet possible. |
| `needs-consolidation` | Multiple specs overlap or conflict and should be reconciled before mass implementation. |
| `gap-detail` | Component exists conceptually but lacks enough detail for a fully robust implementation. |

## Master Component Inventory

| Category | Item | Written Spec Coverage | Reference Code Coverage | Variants / States Known | Drift / Gap Notes | Status |
|---|---|---|---|---|---|---|
| Foundations | Color system | Brand purple, gray, semantic, blue, dark surfaces, themed dark | Generic shadcn HSL variables plus many hardcoded neutral/violet/emerald classes | Light, dark, themed dark | Token naming conflict around `brand-600` / `brand-700`; reference repo is not token-complete | written-spec, reference-code, needs-consolidation, figma-deferred |
| Foundations | Typography | Inter, Unilever Desire, monospace; display/text scale | Mostly Tailwind text utilities, no full Habibi type token layer | Display, body, labels, captions, code | Need decide whether Unilever Desire is available/licensed in app | written-spec, reference-code, figma-deferred |
| Foundations | Spacing | `sp-1` through `sp-16`, 4px base | Tailwind spacing directly | N/A | Good candidate for token export first | written-spec, reference-code, figma-deferred |
| Foundations | Radius / shadows / borders | Radius `sm` through `full`, shadows `xs-xl`, focus rings | CSS `--radius`, many `rounded-xl/2xl` one-offs | Focus, error, elevated | Reference repo radius often larger/glossier than specs | written-spec, reference-code, needs-consolidation |
| Foundations | Dark mode | Surface, text, border, interactive, scrollbar mappings | `.dark` variables plus product-specific dark classes | Light, dark, themed dark | Written dark-mode map should become canonical | written-spec, reference-code |
| Foundations | UX rules | Hierarchy, one primary action, loading, empty, errors, accessibility, tone | Mixed implementation quality in repo | Hover, active, disabled, loading, empty, error | Needs per-component accessibility checklist | written-spec |
| App Chrome | Layout shell | 100vh app shell, 224px sidebar, 56px topnav, optional 42px breadcrumb | `shared/app-sidebar.tsx`, `shared/top-bar.tsx`, dashboard layout | With/without breadcrumb, chat input optional, responsive collapse | Reference shell is project-specific; use conceptually | written-spec, reference-code |
| App Chrome | Sidebar | New Chat button, recent list, footer controls | `shared/app-sidebar.tsx`, `shared/sidebar.tsx`, demo sidebar | Active, hover, footer actions | Active/current state needs more formal spec | written-spec, reference-code, gap-detail |
| App Chrome | Top navigation | Agent title, search, help, notifications, user profile | `shared/top-bar.tsx` | Light/dark, notification badge | User profile menu/open state not fully specified | written-spec, reference-code |
| App Chrome | Page header | Analytics/dashboard title, timezone, avatar | Multiple dashboard headers | Dashboard header, agent header | Needs variants across dashboard/product/admin contexts | written-spec, reference-code, gap-detail |
| Navigation | Breadcrumb | Back-link and breadcrumb guidance | Dashboard routing patterns | Single back link, multi-segment by UX guide | Multi-segment visual spec incomplete | written-spec, reference-code, gap-detail |
| Navigation | Tabs | Underline, pill, count tabs | Radix tabs dependency, many local tab-like patterns | Active, inactive, counts | Disabled/focus state not fully specified | written-spec, reference-code |
| Navigation | Menu / Dropdown / Context Menu | Navigation menu, menu bar, context menu, separators, shortcuts | `ui/dropdown-menu.tsx`, many local menus | Hover, submenu, shortcut, checked | Keyboard/focus behavior should come from Radix | written-spec, reference-code |
| Navigation | Pagination | Table pagination row | Some table/list paging patterns | Previous/next, disabled first page | Page number variant not specified | written-spec, reference-code, gap-detail |
| Navigation | Steps / Stepper | Agent creation flow requires stepper | No canonical primitive found | Completed, current, future, non-linear nav | Visual component not fully specified | gap-detail |
| Navigation | Command palette | Proposed taxonomy / UX search expectation | No canonical component observed | Search, recent, shortcut | Not in written component specs; treat as future gap | gap-detail |
| Controls | Button | Primary, secondary color/gray, tertiary color/gray, destructive; sm/md/lg; icon/dot/loading | `ui/button.tsx` shadcn placeholder with CVA variants | Default, hover, active, disabled, loading, icon-only | First worked example; must resolve brand token conflict | written-spec, reference-code, needs-consolidation |
| Controls | Icon Button | Button sub-variant | Many icon buttons in repo | Square sizes, hover, disabled | Should become explicit primitive | written-spec, reference-code |
| Controls | Input | Label, helper, error, focus | `ui/input.tsx`, many forms | Default, focus, error, helper, disabled implied | Disabled/read-only details light | written-spec, reference-code |
| Controls | Textarea | Standard and chat textarea | `ui/textarea.tsx`, `playground/chat-input.tsx` | Default, focus, error, auto-resize chat | Chat textarea should be separate variant | written-spec, reference-code |
| Controls | Select / Dropdown | Trigger, panel, item, divider | Radix select dependency, many local selects | Open, hover, selected, disabled implied | Need canonical select primitive | written-spec, reference-code, gap-detail |
| Controls | Checkbox | 16px box, checked/unchecked, label/description | Radix checkbox dependency | Checked, unchecked, focus | Needs disabled/indeterminate | written-spec, reference-code, gap-detail |
| Controls | Radio | 16px circle, selected/unselected, group | Radix radio not listed; local patterns possible | Selected, unselected | Needs disabled/error | written-spec, gap-detail |
| Controls | Switch | 36x20 track, 16px thumb | Radix switch dependency | On, off, disabled implied | Good Radix candidate | written-spec, reference-code |
| Controls | Slider | 4px track, 16px thumb | No canonical primitive observed | Default, hover thumb | Needs value labels/disabled | written-spec, gap-detail |
| Controls | Segmented Control | Selected/unselected segments | Local tabs/filters | Selected, unselected | Could map to Tabs or ToggleGroup pattern | written-spec, reference-code |
| Controls | Search Input | Full-width search, topnav search | Many search inputs | With icon, optional submit | Search results dropdown not specified | written-spec, reference-code, gap-detail |
| Status | Badge / Pill | Success, error, warning, brand, info, neutral, severity, filter pills | `ui/badge.tsx`, many status badges | Dot, selected/unselected, severity | Yellow/medium token incomplete | written-spec, reference-code, needs-consolidation |
| Identity | Avatar | User circle, AI rounded square, status dot | Radix avatar dependency, local avatars | Sizes 24/28/32/34/40, photo, initials, icon | Chat user shape conflicts with general avatar rule | written-spec, reference-code, needs-consolidation |
| Utility | Divider / Separator | Horizontal, vertical | Radix separator dependency | Horizontal, vertical | Straightforward | written-spec, reference-code |
| Utility | Scroll Area / Scrollbar | 6px scrollbar, dark mapping | Radix scroll-area dependency, CSS scroll patterns | Hover, auto-hide | Auto-hide not specified in detail | written-spec, reference-code |
| Utility | Tooltip | Standard tooltip, chart tooltip | `ui/tooltip.tsx`, Radix tooltip | Hover delay, arrow, max width | Touch behavior light | written-spec, reference-code |
| Feedback | Alert / Banner | Success, error, warning, info, accent border | Local banners/alerts | Dismissible, accent border | Inline alert and dashboard notification overlap | written-spec, reference-code, needs-consolidation |
| Feedback | Toast / Message | Success, error, warning, info, custom, loading | Sonner dependency | Stack, auto-dismiss, loading | Placement and API need definition | written-spec, reference-code |
| Feedback | Modal / Dialog | Base modal, confirmation, alert | `ui/dialog.tsx`, many one-off modals | Small/medium/large, destructive/info/form | Some repo modals bypass canonical Dialog | written-spec, reference-code, needs-consolidation |
| Feedback | Extended Modals | Date picker, data table, red team create, feedback details, filter/sort | Many one-off feature modals | Form, table, picker, details | Should be documented as patterns, not all primitives | written-spec, reference-code |
| Feedback | Drawer | Mentioned in desired taxonomy / Ant baseline | No canonical drawer observed | Open/closed | Not in MD specs deeply; future gap | gap-detail |
| Feedback | Popover / Popconfirm | Ant baseline and Radix dependencies possible | Popover dependency not found as canonical wrapper | Open/closed, confirm/cancel | Future gap unless present in later specs | gap-detail |
| Feedback | Progress / Spinner | UX requires loading; Ant baseline | Many loader/spinner uses | Determinate, indeterminate, inline | Needs formal component spec | gap-detail |
| Feedback | Skeleton | UX requires loading; `shared/skeletons.tsx` exists | `shared/skeletons.tsx` | Page/card/table skeletons | Needs tokenized docs | reference-code, gap-detail |
| Feedback | Empty State / Result | UX strongly specifies empty/recoverable states | Many local empty states | Empty, error, success/result | Needs canonical component family | written-spec, reference-code, gap-detail |
| Disclosure | Accordion | Open/closed/focus | Radix accordion not listed, local patterns possible | Open, closed, focus | Keyboard behavior should be specified | written-spec |
| Data Display | Table | Data table, filter bar, pagination, link/badge/action cells | Many local tables, response table renderer | Hover, pagination, filters | Sort, selected row, loading empty missing | written-spec, reference-code, gap-detail |
| Data Display | List | Mentioned by Ant/taxonomy and sidebar/recent lists | Many list patterns | Dense, selectable, action rows | Needs canonical list entry spec | reference-code, gap-detail |
| Data Display | Description / Key-Value List | Feedback details modal key-value rows | Details panels/modals | Label/value, link, badge | Good docs candidate | written-spec, reference-code |
| Data Display | Stat / KPI / Metric Card | Stat/KPI cards, metric tooltip, feedback stats | Ambient/admin/dashboard cards | Tooltip, trend, grid sizes | Basic stat lacks trend despite UX requiring context | written-spec, reference-code, needs-consolidation |
| Data Display | Cards | Simple, icon, action, image, INCI, red team, info tile, timer | Many one-off cards | Hover, action, empty, status | Card family needs subcategory model | written-spec, reference-code, needs-consolidation |
| Data Display | Timeline / Activity Feed | Eval event stream, activity feeds in repo | Session/activity patterns | Expanded/collapsed events | Needs canonical timeline docs | written-spec, reference-code, gap-detail |
| Data Display | Tree | Ant baseline | Not clearly canonical | Expanded/collapsed, selected | Future gap unless needed | gap-detail |
| Data Display | Calendar | Date picker internals | Date modal only | Month/day selected/today | Calendar as standalone not specified | written-spec, gap-detail |
| Charts | Chart Primitives | Axes, grid, legend, tooltip | Recharts and Plotly renderers | Axis, legend, tooltip, grid | Need choose chart wrapper API | written-spec, reference-code |
| Charts | Line / Area Chart | Chat analytics, chart specs | Recharts, Plotly PM trend renderers | Hovered, summarized, dashboard | Good early data-viz category candidate | written-spec, reference-code |
| Charts | Bar Chart | Vertical/horizontal, hovered | Recharts/Plotly patterns | Hovered, grouped future | Needs exact responsive behavior | written-spec, reference-code |
| Charts | Pie / Donut / Radar | Chart type specs | Recharts likely available | Donut labels, center value, radar fill | No full implementation anatomy | written-spec, reference-code, gap-detail |
| Agent UI | Chat Message | AI/user messages, avatars, actions | `playground/chat-message.tsx` | User, agent, streaming empty, citations, metadata | Written spec lacks some repo features; repo uses different styling | written-spec, reference-code, needs-consolidation |
| Agent UI | Chat Input / Composer | Pinned and compact chat input | `playground/chat-input.tsx` | Attach, textarea, mic, send, stop, files, active/disabled | Repo rainbow styling should not be copied directly | written-spec, reference-code |
| Agent UI | Chat Category Cards / Suggestion Chips | Category cards, follow-up chips | `chat-message.tsx` follow-up chips | Accent variants, selectable chips | Accent token set incomplete | written-spec, reference-code, gap-detail |
| Agent UI | Generated Analytics Section | Chat analytics card grid | Structured response renderers / charts | Line, area, trend | Needs data contract | written-spec, reference-code |
| Agent UI | Tool Call Card | Success, processing, error | `tool-call-display.tsx` | Tool, delegation, status | Repo delegation pattern is valuable addition | written-spec, reference-code |
| Agent UI | Proposed Plan Card | Header, ordered list, edit/approve | Plan/card patterns in demo/reference | Version badge, approve/edit | Reject/cancel not specified | written-spec, reference-code, gap-detail |
| Agent UI | Citation / Source UI | Expandable citations in repo; source drawer desired | `chat-message.tsx` source-type mapping | Expand/collapse, relevance, linkable types | Written source drawer not yet formal | reference-code, gap-detail |
| Agent UI | Thinking / Streaming State | UX requires loading; repo has activity and dots | `ActivityIndicator`, streaming bubbles | Activity text, dots, spinner | Needs canonical variants | reference-code, gap-detail |
| Agent UI | Cost / Token Metadata | Usage stats in chat message | `chat-message.tsx` CostBreakdownModal | Tokens, cost, duration, modal breakdown | Valuable Nexus-specific component | reference-code, gap-detail |
| Dashboard | Agent Dashboard Header | Header with status/actions | Dashboard headers | Active/inactive, actions | Breadcrumb/status meaning needs docs | written-spec, reference-code |
| Dashboard | Red Team Panel / Card | Empty and populated red-team tests | Testing/admin patterns | Empty, severity, status, create test | Red-team specs duplicated in many places | written-spec, reference-code, needs-consolidation |
| Dashboard | Feedback Table / Details | Feedback table, stats row, details modal | Admin/eval style tables | Filters, badges, pagination, details modal | Needs unified feedback component family | written-spec, reference-code |
| Dashboard | LLM Evaluation Panel | Tabs/table/chart/footer | Observability/response renderers | Overview/details/comparison | Body content generic | written-spec, reference-code |
| Dashboard | Conversation / Turn Card | Collapsed/expanded replay card | Sessions/playground patterns | Expanded events, reduced chat scale | Split across files | written-spec, reference-code, needs-consolidation |
| Dashboard | Available Agents Table | Agent rows with statuses | Agents/catalog pages | Active/error/learning statuses | Needs search/filter/empty states | written-spec, reference-code |
| Dashboard | CRT Agent Panel | Dark embedded agent panel | Dark/chat patterns | Dark variant | High-level only | written-spec, gap-detail |
| Product / INCI | INCI Product Info Card | Target location, ingredient list, statements, warnings | No canonical match found | English/French stacked | Dark mode absent | written-spec, gap-detail |
| Flow / Builder | Agent Creation Flow | Six-step flow, autosave, live preview | Agent editor tabs/forms | Stepper, non-linear completed nav | Stepper and preview layout need formal component specs | written-spec, reference-code, gap-detail |
| Flow / Builder | Flow Builder Nodes / Canvas | Not in MD specs as Habibi component | `components/flow/*`, React Flow | Node types, edges, canvas, palette | Potential future Design Library category | reference-code, gap-detail |

## Template / Block Inventory

| Template / Block | Written Spec Coverage | Reference Code Coverage | Composes From | Notes | Status |
|---|---|---|---|---|---|
| AI Analytics Chat Agent | `20-page-templates.md`, `ui-reference.md` | Playground/chat and response renderers | Shell, sidebar, topnav, chat messages, analytics cards, tool calls, composer | Strong first full-page template candidate after primitives | written-spec, reference-code |
| Component Showcase | `20-page-templates.md` | Not applicable | Shell, sections, cards, docs entry pattern | This project will supersede the written sketch | written-spec |
| Product Information / INCI Agent | `20-page-templates.md`, `18-cards-inci.md` | No strong canonical implementation found | Shell, topnav, INCI cards, chat input | Good Unilever-specific template candidate | written-spec |
| Marketing Chat Ideas | `20-page-templates.md` | Chat patterns exist | Chat shell, category cards, marketing metrics | WIP in specs; needs content decisions | written-spec, gap-detail |
| Agent Creation Flow | `ui-reference.md`, `ux-guidelines.md` | Agent editor and tabs | Stepper, form sections, tool/data selection, live preview, deploy summary | High-value builder template | written-spec, reference-code |
| Agent Dashboard | `ui-reference.md`, `24-dashboard-widgets.md` | Many dashboard routes | KPI cards, tabs, tables, evaluation panels, logs | High-value dashboard template | written-spec, reference-code |
| Evaluation Kit Dashboard | `ui-reference.md`, `21-24` specs | Testing/observability patterns | KPI grid, replay turns, red team, feedback table, modals | Needs consolidation before build | written-spec, reference-code |
| Data Table Block | `ui-reference.md`, `22-modals-extended.md` | Many tables | Filter bar, table, pagination, empty/loading | Could become reusable block and component docs example | written-spec, reference-code |
| Dashboard Widgets Collection | `24-dashboard-widgets.md` | Dashboard/admin components | Search, header, banners, cards, eval panel, red team, CRT panel | Useful as blocks category | written-spec, reference-code |
| Auth / SSO Screen | UX docs mention SSO/login | `src/app/login/page.tsx`, `ui/sign-up.tsx` | Login action, error state, SSO copy | Needed for broader Design Library despite limited written spec | reference-code, gap-detail |

## Proposed Taxonomy For Checkpoint 1 Review

This taxonomy should be reviewed in Phase 2 before it becomes final navigation.

1. Foundations: tokens, typography, spacing, radius, shadows, focus, dark mode, accessibility, content tone.
2. Primitives: Button, Icon Button, Badge, Tag/Pill, Avatar, Divider, Tooltip, Surface/Card base.
3. Layout: App Shell, Sidebar, Topbar, Page Header, Container, Stack, Grid, Splitter.
4. Navigation: Breadcrumb, Tabs, Menu, Dropdown, Pagination, Steps, Command Palette.
5. Data Entry: Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Search, Form patterns, Upload.
6. Data Display: Table, List, Description/Key-Value, Stat/KPI, Cards, Timeline, Empty/Result.
7. Feedback: Alert, Toast, Modal/Dialog, Drawer, Popover/Popconfirm, Progress, Spinner, Skeleton.
8. Charts / Data Viz: Chart primitives, line, area, bar, pie/donut, radar, chart cards.
9. Agent UI: Chat Message, Composer, Suggestions, Tool Call, Proposed Plan, Citation/Source, Thinking/Streaming, Usage Metadata.
10. Dashboard / Product Patterns: Agent Header, Red Team, Feedback, Evaluation, Conversation Replay, INCI Card, Flow Builder.
11. Templates / Blocks: Analytics Agent, Marketing Agent, INCI Agent, Dashboard, Evaluation Kit, Agent Creation, Auth, Data Table block.

## Known Consolidation Issues

| Issue | Impact | Suggested Resolution |
|---|---|---|
| `brand-600` / `brand-700` button shade mismatch | Affects the first Button implementation and token docs | Treat token table as canonical, then confirm visually later against Figma. |
| Cards overlap heavily | Card docs could become messy if every card becomes a primitive | Define `Card` as primitive, then document specialized card patterns under Data Display / Dashboard / Agent UI. |
| Red Team specs repeated | Could create duplicate entries | Consolidate into one Red Team component family with Card, Panel, Create Modal, Empty State. |
| Alert vs Notification Banner overlap | Could create duplicate feedback entries | Use Alert for inline semantic messages; Banner for dashboard/page-level announcements. |
| Chat input full vs compact | Could be mistaken for duplicate components | Treat as one Composer component with `density/fullWidth/context` variants. |
| Tables lack sort/selection/loading details | Blocks real enterprise table parity | Add as Phase 2 gap against Ant Table. |
| Figma unavailable | Cannot confirm 1:1 visual fidelity yet | Label entries `written-spec` until Figma MCP works, then upgrade to `figma-verified`. |
| Reference repo uses hardcoded visual classes | Could contaminate token-led library | Reuse architecture and behavior, not raw class names. |
| shadcn/Radix wrappers incomplete | Need headless behavior but canonical styling is not done | Use Radix where behavior is hard; wrap in Habibi tokens and CVA variants. |

## Recommended Phase 2 Gap Candidates

These are not approved for build yet; they are likely gap-analysis candidates.

| Gap | Why It Matters | Closest Reference |
|---|---|---|
| Command Palette | Nexus will need global search/actions once library grows | Ant Mentions/AutoComplete, 21st registry search |
| Enterprise Table | Sorting, row selection, loading, empty, pagination, density | Ant Table |
| Drawer / Source Drawer | Agent citations and details need inspectable side panels | Ant Drawer, Nexus citation footer |
| Popconfirm | Safer destructive actions without heavy modal | Ant Popconfirm |
| Stepper | Agent creation flow needs a formal step component | Ant Steps |
| Upload / File Dropzone | Knowledge-base and agent file workflows need upload patterns | Ant Upload |
| Date / Date Range Picker | Eval filters need canonical date controls | Ant DatePicker |
| Skeleton / Loading Family | UX requires robust loading states | Ant Skeleton / Spin |
| Empty / Result Family | UX requires recoverable empty/error states | Ant Empty / Result |
| Chart Wrapper API | Charts need consistent tokens and data contracts | Ant Design Charts, Recharts |
| Citation Drawer | Nexus-specific source inspection | Reference repo citations, Agent UI patterns |
| Streaming / Thinking State | Core agent trust pattern | Ant Design X, 21st AI chat components |

## Checkpoint 1 Recommendation

Proceed to Phase 2 after review with this direction:

- Use written specs as the build source until Figma MCP is available.
- Build the new standalone project as `Design Library`.
- Use PascalCase component names in code and preserve written/Figma names in metadata.
- Use React + Tailwind as the default implementation layer.
- Use Radix/headless primitives where behavior is complex: Dialog, Dropdown, Select, Tooltip, Tabs, Switch, Checkbox, Popover.
- Use Button as the Phase 3 worked example after taxonomy and schema approval.

