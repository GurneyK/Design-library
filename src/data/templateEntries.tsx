import { AnalyticsAgentWorkspace } from "../components/templates/AnalyticsAgentWorkspace";
import { DashboardOverview } from "../components/templates/DashboardOverview";
import { EmptyStateLibrary } from "../components/templates/EmptyStateLibrary";
import { InciLookupView } from "../components/templates/InciLookupView";
import type { CatalogEntry } from "./catalog";

const templateDefaults = {
  category: "Templates / Blocks",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const analyticsAgentWorkspaceEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-analytics-agent-workspace",
  name: "Analytics Agent Workspace",
  subcategory: "Full Page",
  description: "A full agent workspace combining chat, tool activity, citations, source review, charts, and insight cards.",
  preview: AnalyticsAgentWorkspace,
  variants: ["Full page", "Chat plus sources", "With dashboard context", "With tool activity"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use as the reference composition for analytics chat surfaces.", "Use when an agent answer needs evidence, dashboard context, and follow-up actions."],
  avoid: ["Do not use this full template for a compact embedded assistant.", "Do not remove source review when claims require evidence."],
  accessibility: ["Composed from semantic sections, buttons, and readable message order.", "Future production shell should manage chat scroll and source drawer focus."],
  agentGuidance: ["Compose from Chat Surface, Chat Message, Citation Chip, Tool Call Card, Source Drawer, Summary Chart Card, and Insight Card.", "Keep the chat stream and source review adjacent when an answer depends on evidence."],
  code: `import { AnalyticsAgentWorkspace } from "./AnalyticsAgentWorkspace";\n\n<AnalyticsAgentWorkspace />`,
};

export const dashboardOverviewEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-dashboard-overview",
  name: "Dashboard Overview",
  subcategory: "Full Page",
  description: "A product dashboard shell with sidebar, topbar, workspace header, metrics, charts, activity, and quick actions.",
  preview: DashboardOverview,
  variants: ["Full page", "Sidebar shell", "Metric grid", "Activity and actions"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use as the baseline for Nexus and cross-project dashboard pages.", "Use when teams need a balanced view of metrics, work activity, and next actions."],
  avoid: ["Do not use this density for marketing landing pages.", "Do not add unrelated cards just to fill the grid."],
  accessibility: ["Uses visible labels across navigation, search, and card actions.", "Chart panels need production text alternatives for underlying data."],
  agentGuidance: ["Compose with Topbar, Sidebar, Dashboard Header, Grid, Panel, Summary Chart Card, Activity Feed, and Quick Action Panel.", "Use this template when generating operational dashboards, not conversational-first pages."],
  code: `import { DashboardOverview } from "./DashboardOverview";\n\n<DashboardOverview />`,
};

export const inciLookupViewEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-inci-lookup-view",
  name: "INCI Lookup View",
  subcategory: "Full Page",
  description: "A product-information workflow for ingredient lookup, file upload, source review, and evidence-backed summary.",
  preview: InciLookupView,
  variants: ["Lookup form", "Source drawer", "Upload state", "Review needed"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "success-50"],
  usage: ["Use for product information, ingredient, and source-review workflows.", "Use when the workflow starts with structured lookup fields and source evidence."],
  avoid: ["Do not use for general dashboards where product lookup is not the primary task.", "Do not show regulatory or ingredient claims without source context."],
  accessibility: ["Fields keep visible labels and source rows remain readable.", "Production combobox and date behaviors should use full keyboard support."],
  agentGuidance: ["Compose with Panel, Form Field, Combobox, File Upload, Description List, Empty State, Source Drawer, and Badge.", "Use this template when generating product intelligence or INCI workflows."],
  code: `import { InciLookupView } from "./InciLookupView";\n\n<InciLookupView />`,
};

export const emptyStateLibraryEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-empty-state-library",
  name: "Empty State Library",
  subcategory: "Blocks",
  description: "A reusable set of empty-state blocks for conversation, source, and insight-first workflows.",
  preview: EmptyStateLibrary,
  variants: ["No conversation", "No sources", "No insights", "With action"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use when a workspace has no content yet and the next best action is clear.", "Use to keep blank pages useful and calm."],
  avoid: ["Do not use vague empty-state copy.", "Do not show more than one primary action per empty state."],
  accessibility: ["Each empty state has a visible title, description, and labeled action.", "Icon meaning is supported by text."],
  agentGuidance: ["Use Empty State Library patterns for first-run, no-source, and no-insight states.", "Make the action specific to the missing content."],
  code: `import { EmptyStateLibrary } from "./EmptyStateLibrary";\n\n<EmptyStateLibrary />`,
};
