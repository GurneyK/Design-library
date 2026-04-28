# Design Library Roadmap

## Phase 0: Understand And Propose

Status: Complete

Done:
- Read Habibi MD files and zipped specs.
- Read Polaris/Nexus README.
- Studied Ant Design and 21st.dev as references.
- Tried Figma MCP and marked it deferred when tools were unavailable.
- Cloned the reference repo for local inspection.

## Phase 1: Discovery And Inventory

Status: Complete

Done:
- Created `inventory/master-inventory.md`.
- Inventoried written-spec components, patterns, templates, and gaps.
- Audited the reference Nexus frontend.
- Compared taxonomy against Ant Design and 21st.dev.

## Phase 2: Taxonomy And Gap Analysis

Status: Complete

Done:
- Created `inventory/taxonomy-proposal.md`.
- Created `inventory/gap-analysis.md`.
- Approved broad scope: include all major UI library categories plus Agent UI, Dashboard/Product Patterns, Flow Builder, Auth, Charts, and Templates.

## Phase 2.5: Condensed Planning Docs

Status: In progress

Goal:
Create readable repo-friendly docs that summarize the project without requiring people to read the full inventory.

Outputs:
- `docs/PROJECT-BRIEF.md`
- `docs/TAXONOMY.md`
- `docs/ROADMAP.md`
- `docs/DECISIONS.md`

## Phase 3: Showcase Shell

Status: Next

Goal:
Create the first runnable Design Library app.

Recommended stack:
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router or simple local route state
- Radix/headless primitives where behavior is complex
- lucide-react icons
- Recharts for early chart examples

Expected shell:
- Sidebar navigation by taxonomy
- Search
- Components / Templates switch
- Component entry layout
- Template entry layout
- Preview frame
- Props table
- Code block
- Token display
- Metadata model

First worked example:
- Button

Deployment target:
- GitHub Pages through GitHub Actions
- Public/shareable preview URL

## Phase 4: Build Existing Components

Status: Future

Build order:
1. Foundations
2. Primitives
3. Data Entry
4. Feedback and Data Display essentials
5. Agent UI essentials
6. Charts
7. Dashboard/Product patterns

Each category should stop for review before the next category starts.

## Phase 5: Proposed Components And Gaps

Status: Future

Approved broad direction:
Include proposed gaps as part of the Design Library now, clearly labeled as proposed until Figma or design review catches up.

Important proposed components:
- Source Drawer
- Command Palette
- Enterprise Table advanced states
- Stepper
- Combobox
- Popconfirm
- Flow Builder Node / Canvas
- Auth / SSO template

## Phase 5b: Templates / Blocks

Status: Future

Priority templates:
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

## Phase 6: Agent Readability

Status: Future

Goal:
Make the library consumable by AI agents.

Outputs:
- Sidecar metadata for every component.
- Root `manifest.json`.
- Agent guidance per entry.
- Composition rules and anti-patterns.

