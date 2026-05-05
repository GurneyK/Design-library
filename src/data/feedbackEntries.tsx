import { Alert } from "../components/ui/alert/Alert";
import { Banner } from "../components/ui/banner/Banner";
import { Button } from "../components/ui/button/Button";
import { ConfirmationPanel } from "../components/ui/feedback/ConfirmationPanel";
import { NotificationCenter } from "../components/ui/feedback/NotificationCenter";
import { ReviewChecklist } from "../components/ui/feedback/ReviewChecklist";
import { StatusSummary } from "../components/ui/feedback/StatusSummary";
import { Progress } from "../components/ui/progress/Progress";
import { Skeleton } from "../components/ui/skeleton/Skeleton";
import { Spinner } from "../components/ui/spinner/Spinner";
import type { CatalogEntry } from "./catalog";

function AlertPreview() {
  return (
    <div className="space-y-3">
      <Alert title="Saved" variant="success">Your changes were saved to the agent configuration.</Alert>
      <Alert title="Review required" variant="warning">This agent uses a new data source. Review access before deploy.</Alert>
      <Alert title="Could not save" variant="error">The agent name is empty. Add a name and try again.</Alert>
      <Alert dismissible title="New source attached" variant="info">The knowledge base is ready for testing.</Alert>
    </div>
  );
}

function BannerPreview() {
  return (
    <div className="space-y-3">
      <Banner action={<Button size="sm" variant="secondaryColor">Review</Button>} title="Deployment review">
        This workspace has 3 agents waiting for approval.
      </Banner>
      <Banner dismissible title="Evaluation running" variant="warning">
        Results may take a few minutes while test conversations replay.
      </Banner>
    </div>
  );
}

function SpinnerPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner label="Loading" size="sm" />
      <Spinner label="Analyzing data" size="md" />
      <Spinner label="Generating report" size="lg" />
    </div>
  );
}

function ProgressPreview() {
  return (
    <div className="max-w-xl space-y-5">
      <Progress label="Knowledge import" value={68} />
      <Progress label="Evaluation replay" value={32} />
      <Progress label="Deployment checklist" value={100} />
    </div>
  );
}

function SkeletonPreview() {
  return (
    <div className="max-w-xl rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex gap-3">
        <Skeleton shape="circle" />
        <div className="flex-1 space-y-3">
          <Skeleton className="w-1/3" />
          <Skeleton className="w-full" />
          <Skeleton className="w-5/6" />
        </div>
      </div>
      <Skeleton className="mt-5" shape="block" />
    </div>
  );
}

function ConfirmationPanelPreview() {
  return (
    <div className="space-y-3">
      <ConfirmationPanel title="Publish answer?" description="This will make the sourced answer visible to the workspace." />
      <ConfirmationPanel tone="danger" title="Delete prompt?" description="This removes the prompt from the approved library." />
    </div>
  );
}

function StatusSummaryPreview() {
  return <StatusSummary />;
}

function ReviewChecklistPreview() {
  return <ReviewChecklist />;
}

function NotificationCenterPreview() {
  return <NotificationCenter />;
}

const feedbackDefaults = {
  category: "Feedback",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const alertEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "alert",
  name: "Alert",
  subcategory: "Inline feedback",
  description: "Alerts communicate contextual success, warning, error, or information inside the current page or section.",
  preview: AlertPreview,
  variants: ["Success", "Error", "Warning", "Info", "Dismissible", "With title"],
  props: [
    { name: "variant", type: '"success" | "error" | "warning" | "info"', defaultValue: '"info"', description: "Controls semantic treatment and icon." },
    { name: "title", type: "string", defaultValue: "-", description: "Optional short summary." },
    { name: "dismissible", type: "boolean", defaultValue: "false", description: "Adds a dismiss affordance." },
  ],
  tokens: ["success-50", "success-700", "error-50", "error-700", "warning-50", "warning-700", "brand-50", "brand-700", "radius-md"],
  usage: ["Use for inline state messages close to the affected content.", "Use error alerts with recovery instructions.", "Use warning alerts before risky or delayed actions."],
  avoid: ["Do not use alerts for global announcements; use Banner.", "Do not show success without naming what happened."],
  accessibility: ["Error alerts use alert role.", "Non-error alerts use status role.", "Dismiss controls include accessible labels."],
  agentGuidance: ["Use Alert when the message belongs to a specific form, table, card, or section.", "Include what happened and what the user can do next."],
  code: `import { Alert } from "./Alert";\n\n<Alert title="Could not save" variant="error">\n  The agent name is empty. Add a name and try again.\n</Alert>`,
};

export const bannerEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "banner",
  name: "Banner",
  subcategory: "Page feedback",
  description: "Banners communicate page-level announcements, operational status, and persistent calls to action.",
  preview: BannerPreview,
  variants: ["Info", "Success", "Warning", "Error", "With action", "Dismissible"],
  props: [
    { name: "variant", type: '"info" | "success" | "warning" | "error"', defaultValue: '"info"', description: "Controls semantic treatment." },
    { name: "action", type: "ReactNode", defaultValue: "-", description: "Optional action slot." },
    { name: "dismissible", type: "boolean", defaultValue: "false", description: "Adds a dismiss affordance." },
  ],
  tokens: ["brand-50", "brand-200", "success-50", "warning-50", "error-50", "radius-lg", "spacing-5"],
  usage: ["Use for page-level or dashboard-level announcements.", "Use actions when the banner asks the user to resolve something."],
  avoid: ["Do not use banners for field validation.", "Do not stack many banners at the top of a page."],
  accessibility: ["Uses alert role for error variant and status role for other variants.", "Action and dismiss controls are keyboard reachable."],
  agentGuidance: ["Use Banner above the main content area for persistent operational context.", "Prefer Alert for section-specific feedback."],
  code: `import { Banner } from "./Banner";\n\n<Banner title="Deployment review" action={<button>Review</button>}>\n  This workspace has 3 agents waiting for approval.\n</Banner>`,
};

export const spinnerEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "spinner",
  name: "Spinner",
  subcategory: "Loading",
  description: "Spinner indicates short indeterminate loading states.",
  preview: SpinnerPreview,
  variants: ["sm", "md", "lg", "With label"],
  props: [
    { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls icon size." },
    { name: "label", type: "string", defaultValue: '"Loading"', description: "Visible loading label." },
  ],
  tokens: ["brand-700", "gray-600", "motion-spin"],
  usage: ["Use for short loading states under a few seconds.", "Pair with text when the wait has meaning."],
  avoid: ["Do not use only a spinner for long operations; use Progress or Skeleton.", "Do not leave users without context for slow operations."],
  accessibility: ["Uses status role.", "Provides visible or screen-reader loading text."],
  agentGuidance: ["Use Spinner for brief async actions.", "For page loads, prefer Skeleton so layout feels stable."],
  code: `import { Spinner } from "./Spinner";\n\n<Spinner label="Analyzing data" />`,
};

export const progressEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "progress",
  name: "Progress",
  subcategory: "Loading",
  description: "Progress shows determinate completion for imports, evaluations, deployments, and long-running tasks.",
  preview: ProgressPreview,
  variants: ["Determinate", "With label", "Complete"],
  props: [
    { name: "value", type: "number", defaultValue: "-", description: "Current value." },
    { name: "max", type: "number", defaultValue: "100", description: "Maximum value." },
    { name: "label", type: "string", defaultValue: "-", description: "Optional visible label." },
  ],
  tokens: ["brand-700", "gray-200", "radius-full"],
  usage: ["Use when completion percentage is known.", "Use for imports, deploys, replays, and checklists."],
  avoid: ["Do not fake precision if the system cannot estimate progress.", "Do not use for instant actions."],
  accessibility: ["Uses progressbar role and aria value attributes.", "Visible label provides task context."],
  agentGuidance: ["Use Progress for long-running known tasks.", "Use Spinner when progress cannot be estimated."],
  code: `import { Progress } from "./Progress";\n\n<Progress label="Knowledge import" value={68} />`,
};

export const skeletonEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "skeleton",
  name: "Skeleton",
  subcategory: "Loading",
  description: "Skeleton preserves layout while content loads, reducing perceived wait time and layout shift.",
  preview: SkeletonPreview,
  variants: ["Line", "Circle", "Block", "Card composition"],
  props: [
    { name: "shape", type: '"line" | "circle" | "block"', defaultValue: '"line"', description: "Controls placeholder geometry." },
    { name: "className", type: "string", defaultValue: "-", description: "Adjusts dimensions for composition." },
  ],
  tokens: ["gray-200", "radius-full", "radius-lg", "motion-pulse"],
  usage: ["Use for page, card, table, and chat loading states.", "Match skeleton shape to the final content layout."],
  avoid: ["Do not use skeletons for actions that complete almost instantly.", "Do not show unrelated placeholder shapes."],
  accessibility: ["Skeletons are aria-hidden because they are visual placeholders.", "Pair with a higher-level loading announcement when needed."],
  agentGuidance: ["Use Skeleton when content structure is known but data is not ready.", "Use it in tables, cards, dashboards, and message streams."],
  code: `import { Skeleton } from "./Skeleton";\n\n<Skeleton className="w-1/2" />\n<Skeleton shape="block" />`,
};

export const confirmationPanelEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "confirmation-panel",
  name: "Confirmation Panel",
  subcategory: "Review feedback",
  description: "Confirmation Panel presents a clear consequence, cancel action, and confirm action inside the current workflow.",
  preview: ConfirmationPanelPreview,
  variants: ["Warning", "Danger", "Info", "Cancel / confirm", "With consequence copy"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Confirmation heading." },
    { name: "description", type: "string", defaultValue: "-", description: "Consequence and recovery copy." },
    { name: "tone", type: '"warning" | "danger" | "info"', defaultValue: '"warning"', description: "Semantic confirmation tone." },
  ],
  tokens: ["warning-50", "warning-300", "warning-700", "error-50", "error-300", "error-700", "brand-50", "brand-200", "brand-700", "radius-lg"],
  usage: ["Use for inline confirmations where the user should review consequences before continuing.", "Use danger tone for destructive actions."],
  avoid: ["Do not use for tiny table-row confirmations where Popconfirm is enough.", "Do not use vague confirm labels without context."],
  accessibility: ["Actions are visible buttons.", "Tone is supported by text and icon, not color alone."],
  agentGuidance: ["Use Confirmation Panel inside review workflows and settings pages.", "Use Modal for blocking confirmations that require focus trapping."],
  code: `import { ConfirmationPanel } from "./ConfirmationPanel";\n\n<ConfirmationPanel title="Publish answer?" description="This will make the answer visible." />`,
};

export const statusSummaryEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "status-summary",
  name: "Status Summary",
  subcategory: "Review feedback",
  description: "Status Summary shows several workflow checks as compact status/value tiles.",
  preview: StatusSummaryPreview,
  variants: ["Complete", "Pending", "Blocked", "Three-column summary"],
  props: [
    { name: "items", type: "StatusSummaryItem[]", defaultValue: "defaultItems", description: "Status items with label, status, and value." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "success-50", "warning-50", "error-50", "radius-lg", "shadow-xs"],
  usage: ["Use at the top of review, approval, and deployment workflows.", "Use to summarize readiness before a decision."],
  avoid: ["Do not use for detailed logs.", "Do not show status colors without text labels."],
  accessibility: ["Each status includes visible text and icon.", "Tiles preserve readable source order."],
  agentGuidance: ["Use Status Summary before review checklists or approval actions.", "Pair with Run Card or Evaluation Scorecard when workflow state matters."],
  code: `import { StatusSummary } from "./StatusSummary";\n\n<StatusSummary items={items} />`,
};

export const reviewChecklistEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "review-checklist",
  name: "Review Checklist",
  subcategory: "Review feedback",
  description: "Review Checklist presents required approval steps for sourced answers, evaluations, and publishing workflows.",
  preview: ReviewChecklistPreview,
  variants: ["Checked item", "Unchecked item", "With description", "Approval checklist"],
  props: [
    { name: "items", type: "ReviewChecklistItem[]", defaultValue: "defaultItems", description: "Checklist items with label, description, and checked state." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-500", "gray-900", "success-600", "radius-lg", "shadow-xs"],
  usage: ["Use for approval gates and review workflows.", "Use descriptions to clarify what each check means."],
  avoid: ["Do not use for editable task management without real state handling.", "Do not hide failed checks elsewhere on the page."],
  accessibility: ["Checklist is rendered as a list with visible state icons.", "State is supported by text and position."],
  agentGuidance: ["Use Review Checklist for publish readiness and human approval flows.", "Pair with Citation Review Block for sourced answer approval."],
  code: `import { ReviewChecklist } from "./ReviewChecklist";\n\n<ReviewChecklist items={items} />`,
};

export const notificationCenterEntry: CatalogEntry = {
  ...feedbackDefaults,
  id: "notification-center",
  name: "Notification Center",
  subcategory: "Transient feedback",
  description: "Notification Center collects recent product and agent events in a compact overlay or panel.",
  preview: NotificationCenterPreview,
  variants: ["Default", "Unread count", "Evaluation event", "Prompt event", "Source review event"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use in topbars and dashboard shells for recent user-facing events.", "Use concise event titles and timestamps."],
  avoid: ["Do not use for audit logs that require filtering and pagination.", "Do not surface low-value noise as notifications."],
  accessibility: ["Notification titles and bodies are visible text.", "Unread count is visible through Badge text."],
  agentGuidance: ["Use Notification Center for recent operational events.", "Use Activity Feed for persistent dashboard history."],
  code: `import { NotificationCenter } from "./NotificationCenter";\n\n<NotificationCenter />`,
};
