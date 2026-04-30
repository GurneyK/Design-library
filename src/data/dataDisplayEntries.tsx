import { Activity, Bot, Database, FileText, MessageSquare, Plus, TrendingUp } from "lucide-react";
import { Accordion } from "../components/ui/accordion/Accordion";
import { Badge } from "../components/ui/badge/Badge";
import { DataToolbar } from "../components/ui/data-toolbar/DataToolbar";
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
