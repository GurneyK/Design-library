# Design Library Gap Analysis

Status: Phase 2 draft  
Date: 2026-04-28  
Source basis: Phase 1 master inventory, Habibi written specs, Polaris/Nexus reference repo, Ant Design, 21st.dev  

## Gap Status Legend

| Status | Meaning |
|---|---|
| `build-this-pass` | Recommended for the first Design Library build pass. |
| `document-first` | Needs metadata/docs now, implementation can follow once primitives exist. |
| `defer` | Useful, but not required for the first showcase milestone. |
| `needs-decision` | Requires a product/design decision before implementation. |
| `figma-deferred` | Should be checked against Figma later. |

## Critical Gaps

Critical gaps block the agent, dashboard, or showcase workflow.

| Gap | What It Is | Why Design Library Needs It | Likely Tokens | Closest Analogue | Recommendation |
|---|---|---|---|---|---|
| Machine-readable token layer | JSON/TS/CSS variable map for color, type, spacing, radius, shadows, focus | Without tokens, components drift into hardcoded Tailwind values and AI agents cannot ground generation | All foundation tokens | Ant Design design tokens; shadcn CSS variable theme | build-this-pass |
| Component metadata schema | Sidecar/frontmatter schema for every component | Required for AI-agent consumption, catalog search, status labels, and future manifest | N/A | 21st component metadata; Ant props/API tables | build-this-pass |
| Button canonicalization | Tokenized Button with variants, sizes, icon slots, loading, disabled | First worked example; proves props, variants, states, token usage, code snippet pattern | brand, gray, error, radius md, focus ring | Ant Button, shadcn Button | build-this-pass |
| Form Field primitive | Label + control + helper/error text composition | Most form controls need consistent labels, validation, and accessibility | gray, error, brand focus, spacing | Ant Form Item, shadcn Form pattern | build-this-pass |
| Enterprise Table | Table with sort, filter, pagination, loading, empty, selected/action rows | Nexus dashboards, feedback, agents, evaluation all need tables | gray, brand, semantic badges, spacing | Ant Table | build-this-pass |
| Empty / Result State | Standard empty, success, error, no-search, no-data states with recovery actions | UX docs require no blank dead ends; every list/table/template needs this | gray, brand, semantic, icon tokens | Ant Empty, Ant Result | build-this-pass |
| Skeleton / Loading family | Page, card, table, chart, and chat loading states | UX requires clear feedback after 200ms and realistic loading surfaces | gray, dark surfaces, motion | Ant Skeleton, Ant Spin | build-this-pass |
| Chat Message / Message Bubble | Canonical user/agent/system message component with metadata slots | Core Agent UI primitive for Nexus and future agent products | gray, dark, brand, avatar, spacing | Ant Design X chat, 21st AI chat components, reference `chat-message.tsx` | build-this-pass |
| Composer / Chat Input | Tokenized chat input with attach, textarea, mic, send/stop, file chips | Core agent workflow; appears in many templates | gray, brand, focus, dark surfaces | 21st AI chat input, reference `chat-input.tsx` | build-this-pass |
| Tool Call Card | Status-aware display for agent tool execution | Builds trust and observability in agent surfaces | success, warning/blue, error, monospace, dark | Reference `tool-call-display.tsx`, Ant Timeline/Progress | build-this-pass |
| Citation / Source Pattern | Citation chip/footer and drawer for inspecting sources | AI trust pattern; Nexus already has citation mappings | gray, brand, source icons, relevance badges | Reference citations footer, Ant Drawer | build-this-pass |
| Drawer | Side panel for source details, filters, inspectors, trace panels | Needed for citation drawer, detail panels, and dashboard workflows | overlay, border, shadow, gray, dark | Ant Drawer | build-this-pass |
| Stepper | Multi-step progress and navigation for agent creation | Agent builder flow requires named steps and non-linear completed-step navigation | brand, gray, success, spacing | Ant Steps | build-this-pass |
| Date Range Picker | Date filtering for eval, dashboards, feedback, reports | Spec includes date picker modal; dashboards need date filters | brand, gray, semantic focus | Ant DatePicker | build-this-pass |
| Chart Container API | Shared chart wrapper with title, legend, tooltip, empty/loading/error | Charts otherwise become one-off Recharts/Plotly implementations | chart colors, gray, spacing, radius | Ant Design Charts, Recharts | build-this-pass |
| Manifest generation | Root `manifest.json` for agent discovery | Required by final AI-agent-consumable deliverable | N/A | 21st registry metadata | document-first |

## High-Value Gaps

High-value gaps meaningfully accelerate Nexus/Unilever product surfaces but can follow the first critical set.

| Gap | What It Is | Why Design Library Needs It | Likely Tokens | Closest Analogue | Recommendation |
|---|---|---|---|---|---|
| Command Palette | Global command/search overlay | Useful once catalog and Nexus actions grow beyond sidebar navigation | gray, brand, focus, overlay | 21st search, Ant AutoComplete/Mentions | document-first |
| Combobox / Autocomplete | Searchable select for agents, users, tools, sources | Many internal-tool forms need searchable options | input, menu, focus, selected | Ant AutoComplete, Ant Select | build-after-select |
| File Upload / Dropzone | Upload docs/data/images for knowledge and chat | Knowledge-base and agent workflows need robust upload states | brand, gray, semantic, progress | Ant Upload | build-this-pass if knowledge templates start early |
| Popconfirm | Lightweight confirmation for destructive table/list actions | Faster than modal for reversible-ish actions and table actions | error, gray, overlay shadow | Ant Popconfirm | build-after-popover |
| Popover | Anchored non-blocking overlay for filters/help/quick actions | Base behavior for popconfirm, mini filters, helper panels | overlay, shadow, border | Ant Popover, Radix Popover | build-this-pass if Popconfirm included |
| Notification Center / Banner | Persistent page-level and topbar notifications | Nexus dashboards need operational alerts beyond transient toasts | semantic, brand, gray | Ant Notification, Alert | document-first |
| Advanced Card Taxonomy | Card base plus stat, metric, action, image, INCI, red-team, info tile | Cards are numerous and overlapping; taxonomy prevents sprawl | card, border, radius, semantic | Ant Card, 21st card registry | build-this-pass as docs model |
| Timeline / Activity Feed | Ordered event list for sessions, eval replay, activity | Important for observability and agent runs | gray, brand, semantic statuses | Ant Timeline | build-after-chat |
| Usage Metadata / Cost Breakdown | Tokens, cost, duration, expandable breakdown | Core Nexus trust/ops pattern from reference repo | gray, semantic, monospace | Reference `chat-message.tsx` | document-first |
| Flow Builder Node / Canvas | React Flow node styles and palette patterns | Nexus builder surfaces need graph composition | brand, gray, status, shadows | React Flow examples, reference flow components | defer until core library stable |
| Auth / SSO Template | One-action login screen with clear error/recovery | Needed for shareable app/project starts | brand, gray, error | Ant Result/Form, reference login | build-as-template |
| Settings Form Pattern | Stacked form sections with save bar and validation | Common across admin, agent config, product settings | form, divider, button, alert | Ant Form, Pro Components | build-after-form-field |
| Approval Prompt | Approve/edit/reject prompt card for agents | Agent workflows need human-in-the-loop confirmation | brand, gray, warning, success | Proposed Plan Card, Ant Result/Modal | build-after-plan-card |
| Source Drawer Block | Full inspectable citation/source side panel | High-value trust pattern for AI outputs | drawer, table/list, citation badges | Ant Drawer, reference citations | build-this-pass if Chat template starts early |
| Workspace Switcher | Project/workspace selection pattern | Nexus and future platforms likely need project switching | menu, avatar, badge, search | Ant Dropdown/Menu | defer unless shell needs it |
| Run Status Pill | Standard status indicator for agent runs/tools/deployments | Many dashboards need consistent status language | semantic badges | Ant Badge/Tag | build-with-badge |

## Nice-To-Have / Parity Gaps

These improve library breadth but are not required before the first usable showcase.

| Gap | What It Is | Why It Helps | Closest Analogue | Recommendation |
|---|---|---|---|---|
| Float Button | Floating quick action | Useful in dense tools, but not core yet | Ant FloatButton | defer |
| Anchor / In-page Nav | Page section navigation | Useful for long docs pages | Ant Anchor | defer; showcase shell can use simpler nav |
| Masonry | Uneven card layout | Useful for gallery/registry pages | Ant Masonry | defer |
| Splitter | Resizable panels | Useful for agent builder and inspect panes | Ant Splitter | defer unless needed for templates |
| Cascader / TreeSelect / Transfer | Complex hierarchical selection | Enterprise parity | Ant Cascader/TreeSelect/Transfer | defer |
| Color Picker | Theme editing | Useful for future theming tools | Ant ColorPicker | defer |
| Rate | Rating input | Feedback flows might need it later | Ant Rate | defer |
| Mentions | Rich text mention input | Prompt builders might need it | Ant Mentions | defer |
| QR Code | Shareable links/codes | Not core to Nexus | Ant QRCode | defer |
| Tour | Guided onboarding | Useful after app matures | Ant Tour | defer |
| Watermark | Enterprise/security overlay | Possible internal tool need | Ant Watermark | defer |
| Carousel | Marketing/content display | Low priority for internal tools | Ant Carousel | defer |
| Image Preview | Media inspection | Useful eventually for multimodal agents | Ant Image | defer |
| Calendar standalone | Full calendar surface | Date picker likely enough first | Ant Calendar | defer |
| Heatmap / Map / Relationship Graph | Rich data viz | Valuable later for analytics | Ant Charts / Plotly | defer |
| Pricing / Testimonials / Marketing blocks | Website marketing sections | 21st-style breadth but not core design-system launch | 21st Marketing Blocks | defer unless public marketing site needed |

## First-Pass Build Recommendation

If the goal is to ship a credible first Design Library milestone, build in this order after Checkpoint 2 approval:

1. Foundations: token layer, dark mode, typography, spacing, radius.
2. Primitives: Button, Badge/Pill, Avatar, Tooltip, Card base.
3. Data Entry: Form Field, Input, Textarea, Select, Checkbox, Switch.
4. Feedback/Data Display essentials: Alert, Modal/Dialog, Empty State, Skeleton, Table.
5. Agent UI essentials: Chat Message, Composer, Tool Call Card, Citation Pattern, Source Drawer.
6. Charts: Chart Container, Line/Area/Bar examples.
7. Templates: Analytics Agent Chat and Dashboard Overview.

This order gives the showcase a strong first category and one realistic Nexus surface without waiting for every parity component.

## Components To Explicitly Mark Proposed

These should be labeled `proposed` until they are added to Figma or confirmed as Habibi components:

| Proposed Item | Reason |
|---|---|
| Command Palette | Not in current written component specs, but important for large products/catalogs. |
| Source Drawer | Source/citation details exist in reference code, but drawer pattern is not fully specified in MD files. |
| Enterprise Table advanced states | Table exists, but sort/selection/loading density details are incomplete. |
| Stepper visual component | Agent creation flow exists, but Stepper component anatomy is not fully specified. |
| Combobox / Autocomplete | Needed for internal tools, but not detailed in current specs. |
| Popconfirm | Ant parity and useful UX, but not in written Habibi specs. |
| Flow Builder Node / Canvas | Reference repo pattern, not formal Habibi spec yet. |
| Auth / SSO screen | Reference repo and UX guide support it, but not formal component spec. |

## Open Decisions For Checkpoint 2

1. Should `Source Drawer` be approved as a first-pass proposed Agent UI component?
2. Should `Enterprise Table` include advanced states in the first pass, or only basic table + filter + pagination?
3. Should `Command Palette` be deferred until after the first public showcase, or included early because the catalog itself will need search?
4. Should `Flow Builder Node / Canvas` become part of Design Library, or stay Nexus-reference only for now?
5. Should `Auth / SSO` be treated as a template in the first template batch?

