import { ActivityFeed } from "../components/ui/dashboard/ActivityFeed";
import { DashboardHeader } from "../components/ui/dashboard/DashboardHeader";
import { InsightCard } from "../components/ui/dashboard/InsightCard";
import { QuickActionPanel } from "../components/ui/dashboard/QuickActionPanel";
import { RunStatusPill } from "../components/ui/dashboard/RunStatusPill";
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
