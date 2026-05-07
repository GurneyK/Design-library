import { ActivityFeed } from "../components/ui/dashboard/ActivityFeed";
import { DataSourceCard } from "../components/ui/dashboard/DataSourceCard";
import { DashboardHeader } from "../components/ui/dashboard/DashboardHeader";
import { DashboardShell } from "../components/ui/dashboard/DashboardShell";
import { EvaluationScorecard } from "../components/ui/dashboard/EvaluationScorecard";
import { FilterBar } from "../components/ui/dashboard/FilterBar";
import { HealthSummary } from "../components/ui/dashboard/HealthSummary";
import { InsightCard } from "../components/ui/dashboard/InsightCard";
import { KpiStrip } from "../components/ui/dashboard/KpiStrip";
import { QuickActionPanel } from "../components/ui/dashboard/QuickActionPanel";
import { ReviewQueue } from "../components/ui/dashboard/ReviewQueue";
import { RunCard } from "../components/ui/dashboard/RunCard";
import { RunStatusPill } from "../components/ui/dashboard/RunStatusPill";
import { SavedReportCard } from "../components/ui/dashboard/SavedReportCard";
import { SlaStatusPanel } from "../components/ui/dashboard/SlaStatusPanel";
import { WorkspaceSwitcher } from "../components/ui/dashboard/WorkspaceSwitcher";
import type { CatalogEntry } from "./catalog";

function DashboardHeaderPreview() {
  return <DashboardHeader title="Analytics workspace" />;
}

function WorkspaceSwitcherPreview() {
  return <WorkspaceSwitcher />;
}

function RunStatusPillPreview() {
  return (
    <div className="flex flex-wrap gap-3">
      <RunStatusPill status="queued" />
      <RunStatusPill status="running" />
      <RunStatusPill status="complete" />
      <RunStatusPill status="failed" />
    </div>
  );
}

function ActivityFeedPreview() {
  return <ActivityFeed />;
}

function InsightCardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <InsightCard
        description="North America has the strongest response quality lift and should receive the next budget review."
        metric="+4.2%"
        title="Campaign performance is improving"
        tone="success"
      />
      <InsightCard
        description="Two regions have incomplete attribution tags, so source confidence should be reviewed before publishing."
        metric="Review"
        title="Attribution coverage needs attention"
        tone="warning"
      />
    </div>
  );
}

function QuickActionPanelPreview() {
  return <QuickActionPanel />;
}

function RunCardPreview() {
  return (
    <div className="space-y-4">
      <RunCard title="Analytics evaluation run" />
      <RunCard description="Exporting approved campaign summary to the dashboard workspace." progress={100} status="complete" title="Dashboard export" />
    </div>
  );
}

function EvaluationScorecardPreview() {
  return <EvaluationScorecard />;
}

function FilterBarPreview() {
  return <FilterBar />;
}

function DataSourceCardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DataSourceCard />
      <DataSourceCard documents="42 files" status="review" title="Campaign evidence folder" />
    </div>
  );
}

function HealthSummaryPreview() {
  return <HealthSummary />;
}

function ReviewQueuePreview() {
  return <ReviewQueue />;
}

function KpiStripPreview() {
  return <KpiStrip />;
}

function DashboardShellPreview() {
  return <DashboardShell />;
}

function SavedReportCardPreview() {
  return (
    <div className="max-w-xl">
      <SavedReportCard />
    </div>
  );
}

function SlaStatusPanelPreview() {
  return <SlaStatusPanel />;
}

const dashboardDefaults = {
  category: "Dashboard / Product Patterns",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const dashboardHeaderEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "dashboard-header",
  name: "Dashboard Header",
  subcategory: "Workspace Chrome",
  description: "Dashboard Header introduces a product workspace with title, description, status, and primary actions.",
  preview: DashboardHeaderPreview,
  variants: ["Default", "With status", "With custom actions", "Long description"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Primary page or workspace title." },
    { name: "eyebrow", type: "string", defaultValue: '"Project North Star"', description: "Small context label above the title." },
    { name: "description", type: "string", defaultValue: "-", description: "Short explanation of the workspace." },
    { name: "status", type: "ReactNode", defaultValue: "RunStatusPill", description: "Optional status slot." },
    { name: "actions", type: "ReactNode", defaultValue: "Export / New run", description: "Action slot for page commands." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use at the top of dashboard, workspace, and run-detail pages.", "Place primary page actions in the action slot."],
  avoid: ["Do not use for card-level headings.", "Do not overload the header with every available action."],
  accessibility: ["Uses a semantic header and h1 title.", "Action controls preserve visible labels."],
  agentGuidance: ["Use Dashboard Header once per full-page dashboard or workspace view.", "Pair it with Workspace Switcher when the user can change context."],
  code: `import { DashboardHeader } from "./DashboardHeader";\n\n<DashboardHeader title="Analytics workspace" />`,
};

export const workspaceSwitcherEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "workspace-switcher",
  name: "Workspace Switcher",
  subcategory: "Workspace Chrome",
  description: "Workspace Switcher lets users move between product, agent, or dashboard contexts.",
  preview: WorkspaceSwitcherPreview,
  variants: ["Default", "Selected workspace", "Three workspaces", "Compact menu"],
  props: [
    { name: "workspaces", type: "WorkspaceOption[]", defaultValue: "defaultWorkspaces", description: "Workspace options with label, meta, and selected state." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-500", "brand-700", "radius-lg"],
  usage: ["Use when a user can switch between Nexus, marketing, INCI, or other project spaces.", "Keep metadata short so the selected workspace scans quickly."],
  avoid: ["Do not use for local tabs inside one panel.", "Do not mix workspace selection with destructive actions."],
  accessibility: ["Items are buttons with visible labels.", "Production dropdown behavior should add menu semantics and keyboard roving focus."],
  agentGuidance: ["Use Workspace Switcher near the top of cross-project surfaces.", "Prefer Tabs for local page sections and Workspace Switcher for global context."],
  code: `import { WorkspaceSwitcher } from "./WorkspaceSwitcher";\n\n<WorkspaceSwitcher workspaces={workspaces} />`,
};

export const runStatusPillEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "run-status-pill",
  name: "Run Status Pill",
  subcategory: "Status",
  description: "Run Status Pill communicates the state of an agent run, export, analysis, or queued job.",
  preview: RunStatusPillPreview,
  variants: ["Queued", "Running", "Complete", "Failed", "Custom label"],
  props: [
    { name: "status", type: '"queued" | "running" | "complete" | "failed"', defaultValue: '"running"', description: "Status treatment and icon." },
    { name: "label", type: "string", defaultValue: "status label", description: "Optional custom label." },
  ],
  tokens: ["gray-100", "gray-700", "brand-50", "brand-700", "success-50", "success-700", "error-50", "error-700", "radius-full"],
  usage: ["Use in dashboard headers, tables, activity rows, and run cards.", "Use visible text with color so status is not color-only."],
  avoid: ["Do not use for arbitrary tags.", "Do not show running animation for inactive states."],
  accessibility: ["Status is shown as text and icon.", "Running icon is decorative because the label carries the meaning."],
  agentGuidance: ["Use Run Status Pill for job-like states only.", "Use Badge for simpler labels that are not workflow state."],
  code: `import { RunStatusPill } from "./RunStatusPill";\n\n<RunStatusPill status="running" />`,
};

export const activityFeedEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "activity-feed",
  name: "Activity Feed",
  subcategory: "Monitoring",
  description: "Activity Feed shows recent agent actions, workspace events, and system updates in a dashboard context.",
  preview: ActivityFeedPreview,
  variants: ["Default", "Agent event", "Message event", "System event", "Mixed statuses"],
  props: [
    { name: "items", type: "ActivityFeedItem[]", defaultValue: "defaultItems", description: "Feed rows with label, description, meta, type, and status." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-500", "gray-600", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use on dashboards that need recent work visibility.", "Use for audit-friendly product events and agent activity."],
  avoid: ["Do not use for long-form logs where a table or timeline is better.", "Do not mix unrelated product areas without context."],
  accessibility: ["Feed is an ordered list with readable event text.", "Status text is visible in each row."],
  agentGuidance: ["Use Activity Feed when summarizing what happened recently.", "Use Timeline when event sequence and dates are the primary content."],
  code: `import { ActivityFeed } from "./ActivityFeed";\n\n<ActivityFeed items={items} />`,
};

export const insightCardEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "insight-card",
  name: "Insight Card",
  subcategory: "Insights",
  description: "Insight Card highlights an agent-generated recommendation, risk, or opportunity with a clear next action.",
  preview: InsightCardPreview,
  variants: ["Brand", "Success", "Warning", "Neutral", "With metric", "Without metric"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Insight headline." },
    { name: "description", type: "string", defaultValue: "-", description: "One-sentence explanation." },
    { name: "label", type: "string", defaultValue: '"Agent insight"', description: "Small contextual label." },
    { name: "metric", type: "string", defaultValue: "-", description: "Optional supporting metric." },
    { name: "tone", type: '"brand" | "success" | "warning" | "neutral"', defaultValue: '"brand"', description: "Insight emphasis." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "success-50", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use for one high-signal recommendation or risk.", "Pair with charts, tables, or source drawers when evidence is available."],
  avoid: ["Do not use for generic marketing copy.", "Do not stack too many insight cards without prioritization."],
  accessibility: ["Insight title and description are readable without the icon.", "The review action has visible text."],
  agentGuidance: ["Use Insight Card for synthesized recommendations, not raw facts.", "Keep each card to one decision or action."],
  code: `import { InsightCard } from "./InsightCard";\n\n<InsightCard title="Performance is improving" description="Response quality increased by region." metric="+4.2%" />`,
};

export const quickActionPanelEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "quick-action-panel",
  name: "Quick Action Panel",
  subcategory: "Actions",
  description: "Quick Action Panel combines search with common product actions so users can move quickly in a workspace.",
  preview: QuickActionPanelPreview,
  variants: ["Default", "Search", "Two-column actions", "Agent actions", "Source actions"],
  props: [
    { name: "actions", type: "QuickAction[]", defaultValue: "defaultActions", description: "Action rows with label, description, and type." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use on dashboard home pages and workspaces where repeated actions matter.", "Keep actions specific and task-oriented."],
  avoid: ["Do not use as a replacement for full navigation.", "Do not include actions that require dangerous confirmation without a confirm step."],
  accessibility: ["Search input has an accessible label.", "Actions are buttons with visible labels and descriptions."],
  agentGuidance: ["Use Quick Action Panel to expose common AI workflows such as chat, analysis, source review, and drafting.", "Keep labels short and descriptions concrete."],
  code: `import { QuickActionPanel } from "./QuickActionPanel";\n\n<QuickActionPanel actions={actions} />`,
};

export const runCardEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "run-card",
  name: "Run Card",
  subcategory: "Runs",
  description: "Run Card summarizes an agent run or export with status, progress, timing, and a detail action.",
  preview: RunCardPreview,
  variants: ["Running", "Complete", "Queued", "Failed", "With progress", "With action"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Run title." },
    { name: "description", type: "string", defaultValue: "-", description: "Short run summary." },
    { name: "status", type: '"queued" | "running" | "complete" | "failed"', defaultValue: '"running"', description: "Run state." },
    { name: "progress", type: "number", defaultValue: "72", description: "Progress value from 0 to 100." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "success-50", "error-50", "radius-lg", "shadow-xs"],
  usage: ["Use for agent runs, exports, analysis jobs, and evaluation jobs.", "Pair with Activity Feed or Timeline for more detailed history."],
  avoid: ["Do not use for static status labels; use Run Status Pill.", "Do not show progress if the backend cannot estimate it."],
  accessibility: ["Progress uses semantic progressbar from Progress.", "Status is visible as text."],
  agentGuidance: ["Use Run Card when an AI workflow is job-like and has state over time.", "Use Tool Call Card for one tool event inside a conversation."],
  code: `import { RunCard } from "./RunCard";\n\n<RunCard title="Analytics evaluation run" status="running" progress={72} />`,
};

export const evaluationScorecardEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "evaluation-scorecard",
  name: "Evaluation Scorecard",
  subcategory: "Evaluation",
  description: "Evaluation Scorecard summarizes answer quality, source coverage, and policy checks for an agent run.",
  preview: EvaluationScorecardPreview,
  variants: ["Default", "Overall score", "Quality metric", "Source coverage", "Policy checks"],
  props: [
    { name: "score", type: "string", defaultValue: '"91%"', description: "Overall evaluation score." },
    { name: "metrics", type: "EvaluationMetric[]", defaultValue: "defaultMetrics", description: "Metric labels and values." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "success-50", "success-700", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use after agent evaluations, red-team checks, and source coverage reviews.", "Use when teams need a quick quality read before publishing."],
  avoid: ["Do not show scores without explaining what they measure.", "Do not use as a substitute for detailed evaluation logs."],
  accessibility: ["Each metric uses visible labels and progress semantics.", "Overall score is text, not color-only."],
  agentGuidance: ["Use Evaluation Scorecard for quality gates and review workflows.", "Pair with Citation Review Block or Run Card when users need more context."],
  code: `import { EvaluationScorecard } from "./EvaluationScorecard";\n\n<EvaluationScorecard score="91%" metrics={metrics} />`,
};

export const filterBarEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "filter-bar",
  name: "Filter Bar",
  subcategory: "Filtering",
  description: "Filter Bar combines search, status selection, date range, and active filter chips for dashboard views.",
  preview: FilterBarPreview,
  variants: ["Search", "Status select", "Date filter", "Active filters", "Actions"],
  props: [],
  tokens: ["white", "gray-200", "gray-300", "gray-400", "gray-500", "brand-50", "brand-700", "info-50", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use above tables, grids, review queues, and analytics dashboards.", "Show active filters as chips so users can understand scoped data."],
  avoid: ["Do not place a heavy filter bar above very small lists.", "Do not hide the active filter state only inside menus."],
  accessibility: ["Search and select use native controls.", "Filter actions have visible labels and keyboard-reachable buttons."],
  agentGuidance: ["Use Filter Bar for dashboards and lists with search plus multiple filters.", "Pair with Table, Data Toolbar, Review Queue, or chart dashboards."],
  code: `import { FilterBar } from "./FilterBar";\n\n<FilterBar />`,
};

export const dataSourceCardEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "data-source-card",
  name: "Data Source Card",
  subcategory: "Sources",
  description: "Data Source Card summarizes a connected source, document count, policy state, and source actions.",
  preview: DataSourceCardPreview,
  variants: ["Connected", "Needs review", "Metrics", "Actions", "Source description"],
  props: [
    { name: "title", type: "string", defaultValue: '"Brand claims library"', description: "Source name." },
    { name: "description", type: "string", defaultValue: "-", description: "Short source description." },
    { name: "documents", type: "string", defaultValue: '"248 documents"', description: "Visible source volume metric." },
    { name: "status", type: '"connected" | "review"', defaultValue: '"connected"', description: "Source health state." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "success-600", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use in source libraries, workspace setup, and knowledge-base dashboards.", "Expose source health and next actions directly on the card."],
  avoid: ["Do not use for individual documents when a table or list scans better.", "Do not hide policy state from users configuring agents."],
  accessibility: ["Card title, description, metrics, and actions are visible text.", "Status is expressed through text, not color alone."],
  agentGuidance: ["Use Data Source Card when showing connected knowledge sources.", "Pair with Source Drawer, Citation Chip, or File Upload in source-management flows."],
  code: `import { DataSourceCard } from "./DataSourceCard";\n\n<DataSourceCard title="Brand claims library" documents="248 documents" />`,
};

export const healthSummaryEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "health-summary",
  name: "Health Summary",
  subcategory: "Monitoring",
  description: "Health Summary groups readiness signals such as source coverage, latency, and open risks.",
  preview: HealthSummaryPreview,
  variants: ["Healthy", "Three metrics", "Status badge", "Readiness summary"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use near the top of operational dashboards and review workspaces.", "Use for quick readiness before publishing or stakeholder review."],
  avoid: ["Do not use without clear metric definitions.", "Do not replace detailed evaluation or logs when users need diagnostics."],
  accessibility: ["Metrics are visible text with readable labels.", "Status badge has text support beyond color."],
  agentGuidance: ["Use Health Summary for dashboard readiness and operational health.", "Pair with Evaluation Scorecard for deeper model-quality review."],
  code: `import { HealthSummary } from "./HealthSummary";\n\n<HealthSummary />`,
};

export const reviewQueueEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "review-queue",
  name: "Review Queue",
  subcategory: "Review",
  description: "Review Queue lists open human-review items with priority, context, and a direct open action.",
  preview: ReviewQueuePreview,
  variants: ["Open items", "Priority badges", "Citation review", "Policy review", "Prompt review"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "warning-600", "error-50", "radius-lg", "shadow-xs"],
  usage: ["Use for approval queues, citation checks, policy exceptions, and prompt reviews.", "Place in dashboard workspaces where human-in-the-loop review is expected."],
  avoid: ["Do not use for immutable audit history; use Activity Feed or Timeline.", "Do not show priority without a clear path to act."],
  accessibility: ["Rows are readable article blocks with visible open actions.", "Priority is displayed as text inside badges."],
  agentGuidance: ["Use Review Queue for human approval and remediation workflows.", "Pair with Citation Review Block, Confirmation Panel, or Review Checklist."],
  code: `import { ReviewQueue } from "./ReviewQueue";\n\n<ReviewQueue />`,
};

export const kpiStripEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "kpi-strip",
  name: "KPI Strip",
  subcategory: "Metrics",
  description: "KPI Strip groups the most important dashboard metrics into one compact, scannable row.",
  preview: KpiStripPreview,
  variants: ["Four metrics", "Trend badges", "Responsive stack", "Operational summary"],
  props: [],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use near the top of dashboards to summarize the current state.", "Use for stable metrics that users compare at a glance."],
  avoid: ["Do not use for long metric definitions or charts.", "Do not pack more than four to six KPIs into one strip."],
  accessibility: ["Each metric has a visible label, value, and trend text.", "Trend icons are supplemental to the text badge."],
  agentGuidance: ["Use KPI Strip before chart grids and review queues when generating dashboards.", "Pair with Dashboard Header and Filter Bar for complete dashboard pages."],
  code: `import { KpiStrip } from "./KpiStrip";\n\n<KpiStrip />`,
};

export const dashboardShellEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "dashboard-shell",
  name: "Dashboard Shell",
  subcategory: "Workspace Chrome",
  description: "Dashboard Shell composes top chrome, section navigation, and a main content region for product dashboards.",
  preview: DashboardShellPreview,
  variants: ["Sidebar nav", "Header actions", "Metric region", "Content slot"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use as the page-level frame for dashboard and operations views.", "Use when a workflow needs persistent local navigation."],
  avoid: ["Do not nest a Dashboard Shell inside another application shell.", "Do not use for small cards or modal content."],
  accessibility: ["Navigation is labelled and uses button elements for this preview.", "The main region is separated from local navigation."],
  agentGuidance: ["Use Dashboard Shell for full dashboard pages; use Panel, Card, or Section for smaller regions.", "Keep global navigation outside this component in app implementations."],
  code: `import { DashboardShell } from "./DashboardShell";\n\n<DashboardShell />`,
};

export const savedReportCardEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "saved-report-card",
  name: "Saved Report Card",
  subcategory: "Reports",
  description: "Saved Report Card represents a reusable dashboard report with ownership, freshness, sharing state, and quick actions.",
  preview: SavedReportCardPreview,
  variants: ["Shared report", "Metrics", "Favorite action", "Copy action", "Freshness"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use in report libraries, analytics workspaces, and dashboard home pages.", "Expose freshness and sharing state directly on the card."],
  avoid: ["Do not use for individual chart cards; use Chart Container or Summary Chart Card.", "Do not hide ownership or last-updated context."],
  accessibility: ["Report name, description, metrics, and updated time are visible text.", "Icon actions include accessible labels."],
  agentGuidance: ["Use Saved Report Card when generating report libraries or reusable analytics dashboards.", "Pair with Search Input, Filter Bar, or Data Toolbar for report browsing."],
  code: `import { SavedReportCard } from "./SavedReportCard";\n\n<SavedReportCard />`,
};

export const slaStatusPanelEntry: CatalogEntry = {
  ...dashboardDefaults,
  id: "sla-status-panel",
  name: "SLA Status Panel",
  subcategory: "Monitoring",
  description: "SLA Status Panel summarizes operational targets, warnings, and required actions for production workspaces.",
  preview: SlaStatusPanelPreview,
  variants: ["Targets", "Warning summary", "Action needed", "Operational rows"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "warning-50", "error-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for production monitoring, model operations, and human-review dashboards.", "Use when teams need to see whether service targets are being met."],
  avoid: ["Do not use for general marketing stats.", "Do not show target status without a follow-up action path."],
  accessibility: ["Each row has visible target, metric, and status text.", "Status badges communicate meaning through text as well as color."],
  agentGuidance: ["Use SLA Status Panel for operations-heavy dashboards and production agent surfaces.", "Pair with Activity Feed, Health Summary, and Review Queue for monitoring pages."],
  code: `import { SlaStatusPanel } from "./SlaStatusPanel";\n\n<SlaStatusPanel />`,
};
