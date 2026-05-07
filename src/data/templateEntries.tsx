import { AnalyticsAgentWorkspace } from "../components/templates/AnalyticsAgentWorkspace";
import { AgentOpsConsole } from "../components/templates/AgentOpsConsole";
import { AuthScreen } from "../components/templates/AuthScreen";
import { CitationReviewBlock } from "../components/templates/CitationReviewBlock";
import { DashboardOverview } from "../components/templates/DashboardOverview";
import { EmptyStateLibrary } from "../components/templates/EmptyStateLibrary";
import { ExecutiveBriefing } from "../components/templates/ExecutiveBriefing";
import { EvaluationDashboard } from "../components/templates/EvaluationDashboard";
import { InciLookupView } from "../components/templates/InciLookupView";
import { MarketingWorkspace } from "../components/templates/MarketingWorkspace";
import { MobileAgentChat } from "../components/templates/MobileAgentChat";
import { PromptOpsWorkspace } from "../components/templates/PromptOpsWorkspace";
import { ReportBuilder } from "../components/templates/ReportBuilder";
import { SettingsFormScreen } from "../components/templates/SettingsFormScreen";
import { SourceManagementWorkspace } from "../components/templates/SourceManagementWorkspace";
import { TeamWorkspaceHome } from "../components/templates/TeamWorkspaceHome";
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

export const marketingWorkspaceEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-marketing-workspace",
  name: "Marketing Workspace",
  subcategory: "Full Page",
  description: "A marketing-agent workspace for campaign analysis, brief generation, audience direction, and chat follow-up.",
  preview: MarketingWorkspace,
  variants: ["Full page", "Brief builder", "Agent chat", "Campaign performance"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-lg"],
  usage: ["Use for campaign planning and agent-assisted brief generation.", "Use when marketing teams need charts, structured inputs, and conversation in one workspace."],
  avoid: ["Do not use for pure reporting dashboards without brief generation.", "Do not publish agent suggestions without source or review context."],
  accessibility: ["Composed from labeled fields, sections, buttons, and readable chat order.", "Production chart data should include non-visual summaries."],
  agentGuidance: ["Compose with Dashboard Header, Insight Card, Quick Action Panel, Panel, Form Field, Textarea, Chat Surface, and Suggestion Chips.", "Use this template when the workflow output is a campaign brief or marketing recommendation."],
  code: `import { MarketingWorkspace } from "./MarketingWorkspace";\n\n<MarketingWorkspace />`,
};

export const authScreenEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-auth-screen",
  name: "Auth Screen",
  subcategory: "Full Page",
  description: "A restrained internal-tool sign-in screen with trust messaging, form fields, validation, and primary action.",
  preview: AuthScreen,
  variants: ["Split layout", "Email and password", "SSO-ready", "Internal notice"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "info-700", "radius-lg", "shadow-xs"],
  usage: ["Use for internal product authentication and protected design-library contexts.", "Use when permission and trust messaging must be clear."],
  avoid: ["Do not use as a marketing landing page.", "Do not add decorative content that distracts from sign-in."],
  accessibility: ["Fields have visible labels and the primary action has visible text.", "Production auth should use real form semantics and identity-provider behavior."],
  agentGuidance: ["Compose with Alert, Form Field, Input, Validation Message, and Button.", "Keep auth screens quiet, direct, and security-focused."],
  code: `import { AuthScreen } from "./AuthScreen";\n\n<AuthScreen />`,
};

export const citationReviewBlockEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-citation-review-block",
  name: "Citation Review Block",
  subcategory: "Blocks",
  description: "A review block for inspecting an agent answer, mapped citations, source drawer, and approval actions.",
  preview: CitationReviewBlock,
  variants: ["Answer review", "Source drawer", "Approval actions", "Citation mapped"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "success-50", "radius-lg"],
  usage: ["Use when an agent answer needs human review before publishing.", "Use when citations and source evidence must stay visible together."],
  avoid: ["Do not use for answers without source evidence.", "Do not hide approval context behind a modal if review is the main task."],
  accessibility: ["The answer and sources remain in readable order.", "Approval actions use visible labels."],
  agentGuidance: ["Compose with Panel, Citation Chip, Source Drawer, Description List, Badge, and Button.", "Use this block whenever a workflow needs citation-backed approval."],
  code: `import { CitationReviewBlock } from "./CitationReviewBlock";\n\n<CitationReviewBlock />`,
};

export const settingsFormScreenEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-settings-form-screen",
  name: "Settings Form Screen",
  subcategory: "Full Page",
  description: "A settings workflow for configuring workspace details, agent behavior, review dates, and save actions.",
  preview: SettingsFormScreen,
  variants: ["Workspace details", "Agent behavior", "Validation", "Save actions"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use for admin settings, workspace setup, and agent configuration pages.", "Use when a form needs grouped sections and clear save/cancel behavior."],
  avoid: ["Do not use for short inline edits where a modal or panel is enough.", "Do not mix unrelated settings in one section."],
  accessibility: ["Fields and controls keep visible labels.", "Validation appears near the actions and uses text plus icon."],
  agentGuidance: ["Compose with Alert, Form Section, Form Group, Form Field, Combobox, Date Picker, Switch, Checkbox, Validation Message, and Form Actions.", "Use this template when generating configuration or setup workflows."],
  code: `import { SettingsFormScreen } from "./SettingsFormScreen";\n\n<SettingsFormScreen />`,
};

export const agentOpsConsoleEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-agent-ops-console",
  name: "Agent Ops Console",
  subcategory: "Full Page",
  description: "An operations console for monitoring live agent runs, evaluation readiness, review queue, and execution trace.",
  preview: AgentOpsConsole,
  variants: ["Full page", "Run monitoring", "Review queue", "Trace panel", "Evaluation summary"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-lg"],
  usage: ["Use for admin and operations views where teams need to monitor many active agent workflows.", "Use when run state, review work, and quality gates need to be visible together."],
  avoid: ["Do not use for a simple single-agent chat page.", "Do not expose sensitive trace details that should stay internal."],
  accessibility: ["Composed from semantic regions, readable status labels, and visible actions.", "Trace steps and review items remain readable without relying on icons alone."],
  agentGuidance: ["Compose with Dashboard Header, Filter Bar, Health Summary, Run Card, Evaluation Scorecard, Review Queue, and Trace Panel.", "Use this template when generating operational monitoring surfaces for AI workflows."],
  code: `import { AgentOpsConsole } from "./AgentOpsConsole";\n\n<AgentOpsConsole />`,
};

export const sourceManagementWorkspaceEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-source-management-workspace",
  name: "Source Management Workspace",
  subcategory: "Full Page",
  description: "A source-management workflow for connecting, filtering, uploading, previewing, and approving knowledge sources.",
  preview: SourceManagementWorkspace,
  variants: ["Full page", "Source cards", "Upload panel", "Document preview", "Source drawer"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "success-50", "radius-lg"],
  usage: ["Use when teams manage source material before agents can cite it.", "Use for knowledge-base setup, evidence review, and source governance."],
  avoid: ["Do not use for generic file storage without source review requirements.", "Do not let unapproved sources look equivalent to approved sources."],
  accessibility: ["Upload, source cards, previews, and source rows keep visible labels.", "Source status is expressed through text as well as color."],
  agentGuidance: ["Compose with Dashboard Header, Filter Bar, Data Source Card, File Upload, Document Preview, Key Value Grid, and Source Drawer.", "Use this template for source-grounded and evidence-management workflows."],
  code: `import { SourceManagementWorkspace } from "./SourceManagementWorkspace";\n\n<SourceManagementWorkspace />`,
};

export const evaluationDashboardEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-evaluation-dashboard",
  name: "Evaluation Dashboard",
  subcategory: "Full Page",
  description: "A quality dashboard for model score, capability coverage, evaluation scorecards, and activity intensity.",
  preview: EvaluationDashboard,
  variants: ["Full page", "Gauge score", "Capability matrix", "Scorecard", "Heatmap"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50"],
  usage: ["Use for evaluation review, agent quality monitoring, and leadership-ready quality summaries.", "Use when teams need to compare readiness across agent capabilities."],
  avoid: ["Do not use score visualizations without explaining what the metrics mean.", "Do not rely on color-only heatmap interpretation."],
  accessibility: ["Composed charts include visible titles and supporting text; production chart data should have table summaries.", "Matrix cells include text labels, not icons alone."],
  agentGuidance: ["Compose with Dashboard Header, Health Summary, Chart Container, Gauge Chart, Comparison Matrix, Evaluation Scorecard, and Heatmap Chart.", "Use this template for QA, eval, and model-readiness dashboards."],
  code: `import { EvaluationDashboard } from "./EvaluationDashboard";\n\n<EvaluationDashboard />`,
};

export const promptOpsWorkspaceEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-prompt-ops-workspace",
  name: "Prompt Ops Workspace",
  subcategory: "Full Page",
  description: "A prompt-operations workspace for drafting, tagging, grounding, reviewing, and publishing reusable prompts.",
  preview: PromptOpsWorkspace,
  variants: ["Full page", "Prompt draft", "Prompt library", "Context panel", "Handoff card"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use when teams maintain reusable prompt packs or workflow-specific prompt libraries.", "Use when prompts require grounding context and human review before publication."],
  avoid: ["Do not use for one-off chat suggestions.", "Do not publish prompt drafts without review state when they affect production agents."],
  accessibility: ["Fields, tags, review actions, and library items keep visible labels.", "Human handoff requirement is stated as text."],
  agentGuidance: ["Compose with Dashboard Header, Panel, Form Field, Textarea, Token Input, Prompt Library, Context Panel, Handoff Card, and Artifact Card.", "Use this template for prompt governance and reusable prompt operations."],
  code: `import { PromptOpsWorkspace } from "./PromptOpsWorkspace";\n\n<PromptOpsWorkspace />`,
};

export const executiveBriefingEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-executive-briefing",
  name: "Executive Briefing",
  subcategory: "Full Page",
  description: "A leadership-ready briefing view for delivery momentum, workspace mix, insight summary, and review timeline.",
  preview: ExecutiveBriefing,
  variants: ["Full page", "KPI strip", "Chart panels", "Insight summary", "Review timeline"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use for stakeholder reviews and leadership readouts.", "Use when the page must summarize status, evidence, and next action quickly."],
  avoid: ["Do not use for raw operational debugging.", "Do not include low-confidence recommendations without review state."],
  accessibility: ["Composed from labelled sections, visible actions, and readable chart titles.", "Production chart data should include text or table alternatives."],
  agentGuidance: ["Compose with Dashboard Header, KPI Strip, Panel, Area Chart, Donut Chart, Insight Card, and Timeline.", "Use this template when generating executive-facing summaries."],
  code: `import { ExecutiveBriefing } from "./ExecutiveBriefing";\n\n<ExecutiveBriefing />`,
};

export const reportBuilderEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-report-builder",
  name: "Report Builder",
  subcategory: "Full Page",
  description: "A report-generation workflow for defining scope, grounding variables, previewing artifacts, and collecting approval.",
  preview: ReportBuilder,
  variants: ["Full page", "Report setup", "Prompt variables", "Artifact preview", "Approval gate"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-50", "brand-700", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use when a team generates durable reports from sources and agent instructions.", "Use when report output needs review before sharing."],
  avoid: ["Do not use for one-off chat answers.", "Do not skip approval when generated claims are externally visible."],
  accessibility: ["Form fields have visible labels and grouped sections.", "Approval actions use visible labels."],
  agentGuidance: ["Compose with Data Toolbar, Form Section, Form Group, Form Field, Textarea, Prompt Variable, Artifact Card, Panel, and Approval Form.", "Use this template for report, document, or brief generation workflows."],
  code: `import { ReportBuilder } from "./ReportBuilder";\n\n<ReportBuilder />`,
};

export const teamWorkspaceHomeEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-team-workspace-home",
  name: "Team Workspace Home",
  subcategory: "Full Page",
  description: "A workspace landing page combining shell navigation, health, launchers, shortcuts, notifications, recent items, and activity.",
  preview: TeamWorkspaceHome,
  variants: ["Full page", "Workspace shell", "App launcher", "Notifications", "Recent work"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use as a starting page for cross-project teams and design-library workspaces.", "Use when users need to resume work and launch frequent actions."],
  avoid: ["Do not use for single-purpose tools that have no workspace switching or recent work.", "Do not overload the home page with every available action."],
  accessibility: ["Navigation, recent items, notifications, and actions keep visible labels.", "Status and health states include text."],
  agentGuidance: ["Compose with Navigation Header, Health Summary, App Launcher, Shortcut Grid, Saved Report Card, Notification Menu, Recent Items, and Activity Feed.", "Use this template for team home pages and workspace landing screens."],
  code: `import { TeamWorkspaceHome } from "./TeamWorkspaceHome";\n\n<TeamWorkspaceHome />`,
};

export const mobileAgentChatEntry: CatalogEntry = {
  ...templateDefaults,
  id: "template-mobile-agent-chat",
  name: "Mobile Agent Chat",
  subcategory: "Full Page",
  description: "A narrow-screen agent chat surface with conversation header, status bar, suggestions, evidence, and mobile tab navigation.",
  preview: MobileAgentChat,
  variants: ["Mobile width", "Agent chat", "Evidence list", "Status bar", "Bottom navigation"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use when an agent workflow needs a responsive or mobile-first preview.", "Use when evidence must stay available even on narrow screens."],
  avoid: ["Do not use for desktop-only dashboards.", "Do not hide source evidence behind unlabeled navigation when claims require review."],
  accessibility: ["Conversation, suggestions, evidence, and navigation keep visible text labels.", "Icon-only actions come from labelled primitives."],
  agentGuidance: ["Compose with Conversation Header, Agent Status Bar, Chat Surface, Chat Message, Suggestion Chips, Composer, Evidence List, and Mobile Tab Bar.", "Use this template for mobile agent experiences and responsive QA checks."],
  code: `import { MobileAgentChat } from "./MobileAgentChat";\n\n<MobileAgentChat />`,
};
