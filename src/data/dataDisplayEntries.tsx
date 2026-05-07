import { Activity, Bot, Database, FileText, MessageSquare, Plus, TrendingUp } from "lucide-react";
import { Accordion } from "../components/ui/accordion/Accordion";
import { Badge } from "../components/ui/badge/Badge";
import { DataToolbar } from "../components/ui/data-toolbar/DataToolbar";
import { CalendarMonth } from "../components/ui/data-display/CalendarMonth";
import { ChangeLog } from "../components/ui/data-display/ChangeLog";
import { CodeBlock } from "../components/ui/data-display/CodeBlock";
import { ComparisonMatrix } from "../components/ui/data-display/ComparisonMatrix";
import { DocumentPreview } from "../components/ui/data-display/DocumentPreview";
import { EntityCard } from "../components/ui/data-display/EntityCard";
import { FileList } from "../components/ui/data-display/FileList";
import { KanbanBoard } from "../components/ui/data-display/KanbanBoard";
import { KeyValueGrid } from "../components/ui/data-display/KeyValueGrid";
import { MetricBreakdown } from "../components/ui/data-display/MetricBreakdown";
import { Roadmap } from "../components/ui/data-display/Roadmap";
import { WorkflowMap } from "../components/ui/data-display/WorkflowMap";
import { DescriptionList } from "../components/ui/description-list/DescriptionList";
import { EmptyState } from "../components/ui/empty-state/EmptyState";
import { List } from "../components/ui/list/List";
import { StatCard } from "../components/ui/stat-card/StatCard";
import { Table } from "../components/ui/table/Table";
import { Timeline } from "../components/ui/timeline/Timeline";
import { Tree } from "../components/ui/tree/Tree";
import type { CatalogEntry } from "./catalog";

function TablePreview() {
  const rows = [
    { agent: "Analytics Agent", owner: "Marketing", status: <Badge dot variant="success">Active</Badge>, runs: "148" },
    { agent: "INCI Review", owner: "R&D", status: <Badge dot variant="warning">Review</Badge>, runs: "42" },
    { agent: "Campaign Writer", owner: "Brand", status: <Badge dot variant="neutral">Draft</Badge>, runs: "12" },
  ];

  return (
    <Table
      columns={[
        { key: "agent", header: "Agent" },
        { key: "owner", header: "Owner" },
        { key: "status", header: "Status" },
        { key: "runs", header: "Runs" },
      ]}
      rows={rows}
    />
  );
}

function ListPreview() {
  return (
    <List
      items={[
        {
          description: "Review sources and approve deployment.",
          leading: <Bot className="h-5 w-5 text-brand-700" />,
          meta: <Badge variant="warning">Pending</Badge>,
          title: "INCI Review Agent",
        },
        {
          description: "Dashboard summary refreshed 8 minutes ago.",
          leading: <Activity className="h-5 w-5 text-info-600" />,
          meta: "8m ago",
          title: "Analytics workspace",
        },
        {
          description: "New knowledge base attached to the project.",
          leading: <Database className="h-5 w-5 text-success-600" />,
          meta: <Badge variant="success">Ready</Badge>,
          title: "Formulation studies",
        },
      ]}
    />
  );
}

function DescriptionListPreview() {
  return (
    <DescriptionList
      items={[
        { label: "Agent", value: "Analytics Agent" },
        { label: "Workspace", value: "H3L Marketing" },
        { label: "Status", value: <Badge dot variant="success">Active</Badge> },
        { label: "Last run", value: "April 29, 2026 at 10:24 AM" },
      ]}
    />
  );
}

function StatCardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <StatCard icon={<MessageSquare className="h-5 w-5" />} label="Conversations" trend="+12%" value="148" />
      <StatCard helper="avg latency" icon={<TrendingUp className="h-5 w-5" />} label="Quality score" trend="+4.2%" value="87.3%" />
      <StatCard helper="this month" icon={<Activity className="h-5 w-5" />} label="Cost" value="$4.48" />
    </div>
  );
}

function EmptyStatePreview() {
  return (
    <EmptyState
      actionLabel="Create first agent"
      description="Create an agent to start testing prompts, connecting tools, and reviewing generated outputs."
      icon={<Plus className="h-6 w-6" />}
      title="No agents yet"
    />
  );
}

function TimelinePreview() {
  return (
    <Timeline
      items={[
        {
          badge: <Badge variant="info">USER_QUERY_RECEIVED</Badge>,
          content: "User asked for campaign performance by brand and region.",
          time: "10:24 AM",
          title: "Turn 1",
        },
        {
          badge: <Badge variant="brand">TOOL_CALL</Badge>,
          content: "Agent queried the marketing analytics dataset and generated a summary table.",
          time: "10:25 AM",
          title: "Analytics generated",
        },
        {
          badge: <Badge variant="success">FINAL_REPORT_PRESENTED</Badge>,
          content: "Final answer included KPI deltas, citations, and suggested next actions.",
          time: "10:26 AM",
          title: "Report delivered",
        },
      ]}
    />
  );
}

function AccordionPreview() {
  return <Accordion />;
}

function TreePreview() {
  return <Tree />;
}

function DataToolbarPreview() {
  return <DataToolbar />;
}

function CodeBlockPreview() {
  return <CodeBlock />;
}

function KeyValueGridPreview() {
  return <KeyValueGrid />;
}

function DocumentPreviewPreview() {
  return <DocumentPreview />;
}

function ComparisonMatrixPreview() {
  return <ComparisonMatrix />;
}

function CalendarMonthPreview() {
  return <CalendarMonth />;
}

function KanbanBoardPreview() {
  return <KanbanBoard />;
}

function RoadmapPreview() {
  return <Roadmap />;
}

function WorkflowMapPreview() {
  return <WorkflowMap />;
}

function FileListPreview() {
  return <FileList />;
}

function EntityCardPreview() {
  return <EntityCard />;
}

function MetricBreakdownPreview() {
  return <MetricBreakdown />;
}

function ChangeLogPreview() {
  return <ChangeLog />;
}

const displayDefaults = {
  category: "Data Display",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const tableEntry: CatalogEntry = {
  ...displayDefaults,
  id: "table",
  name: "Table",
  subcategory: "Structured data",
  description: "Table presents structured rows and columns for dashboards, feedback, agents, runs, and evaluation data.",
  preview: TablePreview,
  variants: ["Basic", "Hover rows", "Badge cells", "Action cells", "Future: sorting", "Future: selection"],
  props: [
    { name: "columns", type: "TableColumn<Row>[]", defaultValue: "-", description: "Column definitions and optional cell renderers." },
    { name: "rows", type: "Row[]", defaultValue: "[]", description: "Rows to render." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-700", "radius-lg", "shadow-xs"],
  usage: ["Use for comparable structured records.", "Use badge cells for status.", "Pair with filters and pagination for large datasets."],
  avoid: ["Do not use tables for narrative content.", "Do not make users scan large tables without search or filters."],
  accessibility: ["Uses semantic table, thead, th, tbody, and td elements.", "Header cells use scope."],
  agentGuidance: ["Use Table for agent lists, feedback, runs, and evaluation data.", "Use Empty State when there are no rows."],
  code: `import { Table } from "./Table";\n\n<Table columns={columns} rows={rows} />`,
};

export const listEntry: CatalogEntry = {
  ...displayDefaults,
  id: "list",
  name: "List",
  subcategory: "Collections",
  description: "List presents compact stacked items with optional leading icons, metadata, and descriptions.",
  preview: ListPreview,
  variants: ["Icon", "Meta", "Description", "Status badge"],
  props: [
    { name: "items", type: "ListItem[]", defaultValue: "[]", description: "List items with title, optional description, leading slot, and meta slot." },
  ],
  tokens: ["white", "gray-100", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use for recent activity, agents, sources, and short collections.", "Use meta for time, status, or counts."],
  avoid: ["Do not use lists for dense comparison; use Table.", "Do not overload list rows with too many actions."],
  accessibility: ["Use semantic list structure in future enhancements where needed.", "Keep row labels readable and descriptive."],
  agentGuidance: ["Use List for compact activity and source collections.", "Use Table when users compare multiple fields."],
  code: `import { List } from "./List";\n\n<List items={[{ title: "Analytics Agent", description: "Ready" }]} />`,
};

export const descriptionListEntry: CatalogEntry = {
  ...displayDefaults,
  id: "description-list",
  name: "Description List",
  subcategory: "Key-value",
  description: "Description List presents labeled metadata for detail panels, modals, and drawers.",
  preview: DescriptionListPreview,
  variants: ["Key-value", "With badges", "Stacked mobile"],
  props: [
    { name: "items", type: "DescriptionItem[]", defaultValue: "[]", description: "Label/value pairs." },
  ],
  tokens: ["white", "gray-100", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use in detail panels, feedback modals, and source drawers.", "Use for stable metadata that users scan by label."],
  avoid: ["Do not use for editable forms.", "Do not use for large row sets."],
  accessibility: ["Uses semantic dl, dt, and dd elements.", "Labels and values remain paired."],
  agentGuidance: ["Use Description List for source metadata, agent settings summaries, and modal details."],
  code: `import { DescriptionList } from "./DescriptionList";\n\n<DescriptionList items={[{ label: "Status", value: "Active" }]} />`,
};

export const statCardEntry: CatalogEntry = {
  ...displayDefaults,
  id: "stat-card",
  name: "Stat / KPI Card",
  subcategory: "Metrics",
  description: "Stat cards highlight key metrics with optional trend, helper text, and icon slot.",
  preview: StatCardPreview,
  variants: ["Value", "Trend", "Helper", "Icon"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Metric label." },
    { name: "value", type: "string", defaultValue: "-", description: "Primary metric value." },
    { name: "trend", type: "string", defaultValue: "-", description: "Optional trend badge." },
    { name: "helper", type: "string", defaultValue: "-", description: "Optional contextual text." },
  ],
  tokens: ["white", "brand-50", "brand-700", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use for dashboard summaries.", "Include trend or helper context when possible.", "Use a grid for related metrics."],
  avoid: ["Do not show numbers without context.", "Do not use too many stat cards above the fold."],
  accessibility: ["Use clear labels and values.", "Do not rely on trend color alone."],
  agentGuidance: ["Use Stat Card for KPI overviews and analytics dashboards.", "Add helper text that answers 'so what?'."],
  code: `import { StatCard } from "./StatCard";\n\n<StatCard label="Conversations" value="148" trend="+12%" />`,
};

export const emptyStateEntry: CatalogEntry = {
  ...displayDefaults,
  id: "empty-state",
  name: "Empty State",
  subcategory: "States",
  description: "Empty State explains what would appear in an empty region and gives the user a clear next action.",
  preview: EmptyStatePreview,
  variants: ["No data", "No search results", "First use", "With action"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Short empty state summary." },
    { name: "description", type: "string", defaultValue: "-", description: "Explains what happened and what to do next." },
    { name: "actionLabel", type: "string", defaultValue: "-", description: "Optional primary action label." },
  ],
  tokens: ["white", "brand-50", "brand-700", "gray-300", "gray-500", "gray-900", "radius-lg"],
  usage: ["Use whenever a list, table, or page has no content.", "Give users a recovery or creation action."],
  avoid: ["Do not show blank panels.", "Do not use vague text like 'No data' without guidance."],
  accessibility: ["Uses readable text and a real action button when provided.", "Icon is decorative unless paired with text."],
  agentGuidance: ["Use Empty State for first-use, no-results, and no-data cases.", "Always explain the next useful action."],
  code: `import { EmptyState } from "./EmptyState";\n\n<EmptyState title="No agents yet" description="Create an agent to get started." actionLabel="Create first agent" />`,
};

export const timelineEntry: CatalogEntry = {
  ...displayDefaults,
  id: "timeline",
  name: "Timeline",
  subcategory: "Events",
  description: "Timeline presents ordered events such as agent turns, tool calls, runs, and audit activity.",
  preview: TimelinePreview,
  variants: ["Event", "With badge", "Timestamp", "Agent turn"],
  props: [
    { name: "items", type: "TimelineItem[]", defaultValue: "[]", description: "Ordered timeline events." },
  ],
  tokens: ["brand-700", "gray-200", "gray-500", "gray-900", "white", "radius-lg", "shadow-xs"],
  usage: ["Use for chronological activity.", "Use badges for event types and statuses."],
  avoid: ["Do not use timeline for unordered lists.", "Do not hide timestamps when sequence matters."],
  accessibility: ["Uses ordered list semantics.", "Event text includes meaning beyond color."],
  agentGuidance: ["Use Timeline for eval replay, tool-call history, and activity feeds."],
  code: `import { Timeline } from "./Timeline";\n\n<Timeline items={[{ title: "Turn 1", time: "10:24 AM", content: "User query received." }]} />`,
};

export const accordionEntry: CatalogEntry = {
  ...displayDefaults,
  id: "accordion",
  name: "Accordion",
  subcategory: "Disclosure",
  description: "Accordion reveals and hides grouped content such as help text, FAQs, and progressive detail.",
  preview: AccordionPreview,
  variants: ["Default", "Open item", "Closed item", "Multi item"],
  props: [
    { name: "items", type: "AccordionItem[]", defaultValue: "defaultItems", description: "Disclosure rows with title, content, and defaultOpen state." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-600", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use for secondary detail that should not dominate the page.", "Use for FAQs, help text, and grouped configuration notes."],
  avoid: ["Do not hide required form instructions inside an accordion.", "Do not use for primary navigation."],
  accessibility: ["Uses native details and summary semantics.", "Summary rows are keyboard reachable."],
  agentGuidance: ["Use Accordion for optional explanatory content.", "Use Tabs for peer views and Tree for hierarchical navigation."],
  code: `import { Accordion } from "./Accordion";\n\n<Accordion items={items} />`,
};

export const treeEntry: CatalogEntry = {
  ...displayDefaults,
  id: "tree",
  name: "Tree",
  subcategory: "Hierarchical data",
  description: "Tree displays nested workspaces, source libraries, folders, and agent/project hierarchies.",
  preview: TreePreview,
  variants: ["Default", "Nested", "Selected node", "With metadata"],
  props: [
    { name: "nodes", type: "TreeNode[]", defaultValue: "defaultNodes", description: "Nested nodes with label, children, metadata, and selected state." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for source libraries, workspace folders, and nested project structures.", "Use metadata for counts or short state labels."],
  avoid: ["Do not use Tree for flat lists.", "Do not create deep hierarchies without search."],
  accessibility: ["Preview uses navigation and list structure.", "Production tree behavior should add full tree keyboard semantics when interactive."],
  agentGuidance: ["Use Tree when hierarchy matters to the task.", "Use List for flat collections and Sidebar for primary routes."],
  code: `import { Tree } from "./Tree";\n\n<Tree nodes={nodes} />`,
};

export const dataToolbarEntry: CatalogEntry = {
  ...displayDefaults,
  id: "data-toolbar",
  name: "Data Toolbar",
  subcategory: "Table controls",
  description: "Data Toolbar combines search, filters, selected filter tags, result count, refresh, and export actions for data views.",
  preview: DataToolbarPreview,
  variants: ["Search", "Filters", "Active tags", "Result count", "Refresh", "Export"],
  props: [
    { name: "resultCount", type: "string", defaultValue: '"148 results"', description: "Visible result count or data summary." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-700", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use above tables, source lists, and run lists.", "Use active tags to make filters visible and removable."],
  avoid: ["Do not add toolbar controls that do not affect the data below.", "Do not hide active filters only inside a menu."],
  accessibility: ["Search input has an accessible label.", "Icon actions use accessible labels through Icon Button."],
  agentGuidance: ["Use Data Toolbar with Table, List, and Pagination.", "Use Quick Action Panel for task launch rather than data filtering."],
  code: `import { DataToolbar } from "./DataToolbar";\n\n<DataToolbar resultCount="148 results" />`,
};

export const codeBlockEntry: CatalogEntry = {
  ...displayDefaults,
  id: "code-block",
  name: "Code Block",
  subcategory: "Developer content",
  description: "Code Block presents runnable snippets with title, language metadata, and copy action.",
  preview: CodeBlockPreview,
  variants: ["Title", "Language label", "Copy action", "Status footer", "Overflow scroll"],
  props: [
    { name: "title", type: "string", defaultValue: '"Source search"', description: "Snippet title." },
    { name: "language", type: "string", defaultValue: '"ts"', description: "Language label." },
    { name: "code", type: "string", defaultValue: "defaultCode", description: "Code snippet content." },
  ],
  tokens: ["gray-900", "gray-700", "gray-400", "gray-100", "success-300", "white", "radius-lg", "shadow-xs"],
  usage: ["Use for API examples, component snippets, prompt templates, and setup instructions.", "Keep snippets copyable and runnable in a configured project."],
  avoid: ["Do not use for long documentation prose.", "Do not show snippets with dangling imports or impossible setup."],
  accessibility: ["Code is rendered inside pre and code elements.", "Copy action has visible text and an icon."],
  agentGuidance: ["Use Code Block when a user or agent needs implementation-ready code.", "Prefer short, complete examples that include imports."],
  code: `import { CodeBlock } from "./CodeBlock";\n\n<CodeBlock title="Source search" language="ts" code={snippet} />`,
};

export const keyValueGridEntry: CatalogEntry = {
  ...displayDefaults,
  id: "key-value-grid",
  name: "Key Value Grid",
  subcategory: "Key-value",
  description: "Key Value Grid displays important metadata in a compact responsive grid.",
  preview: KeyValueGridPreview,
  variants: ["Two columns", "Metadata cells", "Badge value", "Responsive"],
  props: [
    { name: "items", type: "KeyValueGridItem[]", defaultValue: "defaultItems", description: "Label/value cells." },
  ],
  tokens: ["white", "gray-100", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use for workspace metadata, source details, run configuration, and agent settings summaries.", "Use when labels and values should scan as equal cells."],
  avoid: ["Do not use for editable form fields.", "Do not use for long paragraphs or large datasets."],
  accessibility: ["Uses semantic dl, dt, and dd elements.", "Labels and values remain paired in the DOM."],
  agentGuidance: ["Use Key Value Grid for compact metadata summaries.", "Use Description List for simpler stacked details in drawers and modals."],
  code: `import { KeyValueGrid } from "./KeyValueGrid";\n\n<KeyValueGrid items={items} />`,
};

export const documentPreviewEntry: CatalogEntry = {
  ...displayDefaults,
  id: "document-preview",
  name: "Document Preview",
  subcategory: "Source content",
  description: "Document Preview shows a sourced excerpt, highlight treatment, source filename, and open-source action.",
  preview: DocumentPreviewPreview,
  variants: ["Highlighted excerpt", "Source badge", "Filename metadata", "Open action"],
  props: [
    { name: "title", type: "string", defaultValue: '"Claim support excerpt"', description: "Preview title." },
    { name: "excerpt", type: "string", defaultValue: "-", description: "Highlighted source text." },
    { name: "source", type: "string", defaultValue: '"Brand evidence pack.pdf"', description: "Source file label." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-700", "warning-50", "warning-700", "radius-lg", "shadow-xs"],
  usage: ["Use in citation drawers, source reviews, claim support, and document inspection flows.", "Highlight only the excerpt that supports the decision."],
  avoid: ["Do not use as a full PDF reader.", "Do not show source snippets without source identity."],
  accessibility: ["Source title, excerpt, and filename are visible text.", "Open action has visible text and icon."],
  agentGuidance: ["Use Document Preview when grounding generated content in source material.", "Pair with Citation Chip, Source Drawer, or Review Queue."],
  code: `import { DocumentPreview } from "./DocumentPreview";\n\n<DocumentPreview title="Claim support excerpt" source="Brand evidence pack.pdf" />`,
};

export const comparisonMatrixEntry: CatalogEntry = {
  ...displayDefaults,
  id: "comparison-matrix",
  name: "Comparison Matrix",
  subcategory: "Structured data",
  description: "Comparison Matrix compares capabilities or states across products, agents, plans, or workspaces.",
  preview: ComparisonMatrixPreview,
  variants: ["Capability rows", "Included / not included", "Semantic table", "Horizontal scroll"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-500", "gray-900", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use when users need to compare feature support across several entities.", "Keep row labels clear and column count modest."],
  avoid: ["Do not use for single-object metadata.", "Do not use icons without visible included/not-included text."],
  accessibility: ["Uses semantic table, th, scope, and readable cell text.", "Icons are supplemental to text labels."],
  agentGuidance: ["Use Comparison Matrix for capability comparison and plan/workspace parity.", "Use Table for general records and Key Value Grid for one object's metadata."],
  code: `import { ComparisonMatrix } from "./ComparisonMatrix";\n\n<ComparisonMatrix />`,
};

export const calendarMonthEntry: CatalogEntry = {
  ...displayDefaults,
  id: "calendar-month",
  name: "Calendar Month",
  subcategory: "Planning",
  description: "Calendar Month shows scheduled reviews, launches, demos, and agent operations inside a month grid.",
  preview: CalendarMonthPreview,
  variants: ["Month grid", "Muted dates", "Selected day", "Event badges", "Month controls"],
  props: [
    { name: "month", type: "string", defaultValue: '"May 2026"', description: "Visible month label." },
    { name: "events", type: "CalendarEvent[]", defaultValue: "[]", description: "Events keyed by date with title and optional tone." },
    { name: "selectedDate", type: "Date | string", defaultValue: "-", description: "Date to highlight for current context." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-500", "gray-900", "brand-50", "brand-800", "radius-lg", "shadow-xs"],
  usage: ["Use for scheduled review, release, demo, and workflow events.", "Use event badges to show what makes a day actionable."],
  avoid: ["Do not use for dense resource scheduling that needs drag-and-drop.", "Do not hide critical deadlines behind unlabeled dots."],
  accessibility: ["Day labels and event names are visible text.", "Month navigation uses icon buttons with accessible labels."],
  agentGuidance: ["Use Calendar Month when date placement matters more than event details.", "Use Timeline for sequence-heavy audit history and Roadmap for quarter-level planning."],
  code: `import { CalendarMonth } from "./CalendarMonth";\n\n<CalendarMonth />`,
};

export const kanbanBoardEntry: CatalogEntry = {
  ...displayDefaults,
  id: "kanban-board",
  name: "Kanban Board",
  subcategory: "Planning",
  description: "Kanban Board organizes work items into status columns for design, review, and delivery workflows.",
  preview: KanbanBoardPreview,
  variants: ["Backlog", "In review", "Ready", "Column counts", "Card metadata", "Column actions"],
  props: [
    { name: "columns", type: "KanbanColumn[]", defaultValue: "defaultColumns", description: "Status columns with title, count, and cards." },
    { name: "cards", type: "KanbanCard[]", defaultValue: "[]", description: "Work items with title, metadata, and status tone." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "success-50", "warning-50", "info-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for work queues where status movement is the main mental model.", "Use card metadata to show owner, category, or review state."],
  avoid: ["Do not use for purely tabular data.", "Do not use for high-volume records without search, filtering, and virtualization."],
  accessibility: ["Cards and columns use visible headings.", "Column option buttons have accessible labels; future drag behavior should preserve keyboard alternatives."],
  agentGuidance: ["Use Kanban Board for review pipelines, design-system contribution tracking, and human-in-the-loop queues.", "Use Review Queue for simpler list-based approvals."],
  code: `import { KanbanBoard } from "./KanbanBoard";\n\n<KanbanBoard />`,
};

export const roadmapEntry: CatalogEntry = {
  ...displayDefaults,
  id: "roadmap",
  name: "Roadmap",
  subcategory: "Planning",
  description: "Roadmap presents time-boxed milestones and delivery state across quarters or phases.",
  preview: RoadmapPreview,
  variants: ["Quarter cards", "Complete", "In progress", "Planned", "Status icons"],
  props: [
    { name: "milestones", type: "RoadmapMilestone[]", defaultValue: "defaultMilestones", description: "Milestones with period, title, status, and tone." },
    { name: "range", type: "string", defaultValue: '"2026"', description: "Planning range displayed in the header." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-500", "gray-900", "brand-50", "brand-700", "success-600", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for quarter-level product, system, or rollout planning.", "Keep milestone labels short enough to scan as a set."],
  avoid: ["Do not use for day-by-day scheduling.", "Do not mix granular tasks and strategic milestones in the same roadmap."],
  accessibility: ["Milestone status is expressed through text and icon.", "The period and title remain visible in every card."],
  agentGuidance: ["Use Roadmap for high-level delivery planning and phase communication.", "Use Calendar Month for date-specific events and Kanban Board for active task state."],
  code: `import { Roadmap } from "./Roadmap";\n\n<Roadmap />`,
};

export const workflowMapEntry: CatalogEntry = {
  ...displayDefaults,
  id: "workflow-map",
  name: "Workflow Map",
  subcategory: "Process",
  description: "Workflow Map shows a linear process with current, complete, and upcoming steps.",
  preview: WorkflowMapPreview,
  variants: ["Complete step", "Running step", "Upcoming step", "Directional connectors", "Status badges"],
  props: [
    { name: "steps", type: "WorkflowStep[]", defaultValue: "defaultSteps", description: "Ordered process steps with label, state, and icon." },
    { name: "title", type: "string", defaultValue: "-", description: "Workflow title shown above the step map." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "success-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use when users need to understand where an AI or product workflow is in a process.", "Use labels and badges so progress is not icon-only."],
  avoid: ["Do not use for branching processes with multiple paths.", "Do not use for historical logs; use Timeline instead."],
  accessibility: ["Steps are rendered in an ordered list.", "Each state is shown as readable text."],
  agentGuidance: ["Use Workflow Map for linear agent workflows such as source collection, drafting, citation review, and publish.", "Use Steps for compact navigation between setup stages."],
  code: `import { WorkflowMap } from "./WorkflowMap";\n\n<WorkflowMap />`,
};

export const fileListEntry: CatalogEntry = {
  ...displayDefaults,
  id: "file-list",
  name: "File List",
  subcategory: "Source content",
  description: "File List displays attached documents, file metadata, source status, and per-file actions.",
  preview: FileListPreview,
  variants: ["Document rows", "Status badges", "File metadata", "Row actions", "Download action"],
  props: [
    { name: "files", type: "FileListItem[]", defaultValue: "defaultFiles", description: "Files with name, type, size, status, and optional actions." },
    { name: "onDownload", type: "() => void", defaultValue: "-", description: "Optional handler for downloading selected files." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for source libraries, upload results, document packs, and evidence folders.", "Show both file identity and source status."],
  avoid: ["Do not use File List for dense tabular file management; use Table with a Data Toolbar.", "Do not show status only through color."],
  accessibility: ["File names, file metadata, and statuses are visible text.", "Row action icon buttons have accessible labels."],
  agentGuidance: ["Use File List when the primary object is a small set of documents or source files.", "Pair with Document Preview, Source Drawer, and File Upload."],
  code: `import { FileList } from "./FileList";\n\n<FileList />`,
};

export const entityCardEntry: CatalogEntry = {
  ...displayDefaults,
  id: "entity-card",
  name: "Entity Card",
  subcategory: "Cards",
  description: "Entity Card summarizes a workspace, product, team, agent, or source group with metadata and a primary action.",
  preview: EntityCardPreview,
  variants: ["Workspace", "Status badge", "Metric cells", "Owner metadata", "Open action"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Entity name." },
    { name: "description", type: "string", defaultValue: "-", description: "Short context for the entity." },
    { name: "metrics", type: "EntityMetric[]", defaultValue: "[]", description: "Small label/value metrics." },
    { name: "status", type: "ReactNode", defaultValue: "-", description: "Optional status slot." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for workspace cards, source groups, agent cards, and product areas.", "Keep the primary action obvious and singular."],
  avoid: ["Do not use when users need to compare many rows; use Table or List.", "Do not overload the card with unrelated actions."],
  accessibility: ["Entity name is a visible heading.", "Metrics use semantic description-list structure."],
  agentGuidance: ["Use Entity Card for one important object that needs identity, status, and quick metadata.", "Use Stat Card for a metric and Data Source Card for connected source systems."],
  code: `import { EntityCard } from "./EntityCard";\n\n<EntityCard />`,
};

export const metricBreakdownEntry: CatalogEntry = {
  ...displayDefaults,
  id: "metric-breakdown",
  name: "Metric Breakdown",
  subcategory: "Metrics",
  description: "Metric Breakdown shows multiple scored dimensions with labels, status badges, and progress bars.",
  preview: MetricBreakdownPreview,
  variants: ["Quality score", "Source coverage", "Policy readiness", "Progress rows", "Status badge"],
  props: [
    { name: "metrics", type: "MetricBreakdownItem[]", defaultValue: "defaultMetrics", description: "Metric rows with label, value, and tone." },
    { name: "title", type: "string", defaultValue: "-", description: "Breakdown title." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "warning-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use to explain what contributes to a score.", "Use in evaluations, quality gates, and readiness summaries."],
  avoid: ["Do not use if the score cannot be explained by meaningful submetrics.", "Do not rely on progress color alone."],
  accessibility: ["Each metric has text labels and numeric values.", "Progress rows use progressbar semantics from Progress."],
  agentGuidance: ["Use Metric Breakdown when users need score decomposition.", "Use Evaluation Scorecard for a higher-level review summary."],
  code: `import { MetricBreakdown } from "./MetricBreakdown";\n\n<MetricBreakdown />`,
};

export const changeLogEntry: CatalogEntry = {
  ...displayDefaults,
  id: "change-log",
  name: "Change Log",
  subcategory: "Events",
  description: "Change Log presents release notes, component updates, and versioned product changes.",
  preview: ChangeLogPreview,
  variants: ["Version rows", "Release date", "Change tags", "Released state"],
  props: [
    { name: "releases", type: "ChangeLogRelease[]", defaultValue: "defaultReleases", description: "Release rows with version, date, summary, and changed items." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for library release notes, workspace updates, and version history.", "Use concise tags to expose what changed."],
  avoid: ["Do not use for realtime activity; use Activity Feed.", "Do not use for detailed audit replay; use Timeline."],
  accessibility: ["Releases are presented in an ordered list with visible version and date.", "Changed items are visible text inside tags."],
  agentGuidance: ["Use Change Log to communicate versioned design-system updates.", "Use Timeline for chronological operational events."],
  code: `import { ChangeLog } from "./ChangeLog";\n\n<ChangeLog />`,
};
