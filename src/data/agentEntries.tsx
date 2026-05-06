import { AgentAvatar } from "../components/ui/agent/AgentAvatar";
import { ArtifactCard } from "../components/ui/agent/ArtifactCard";
import { ChatMessage } from "../components/ui/agent/ChatMessage";
import { ChatSurface } from "../components/ui/agent/ChatSurface";
import { Composer } from "../components/ui/agent/Composer";
import { ContextPanel } from "../components/ui/agent/ContextPanel";
import { CitationChip } from "../components/ui/agent/CitationChip";
import { HandoffCard } from "../components/ui/agent/HandoffCard";
import { PromptCard } from "../components/ui/agent/PromptCard";
import { PromptLibrary } from "../components/ui/agent/PromptLibrary";
import { SourceDrawer } from "../components/ui/agent/SourceDrawer";
import { StreamingState } from "../components/ui/agent/StreamingState";
import { SuggestionChips } from "../components/ui/agent/SuggestionChips";
import { ThinkingState } from "../components/ui/agent/ThinkingState";
import { ToolCallCard } from "../components/ui/agent/ToolCallCard";
import { TracePanel } from "../components/ui/agent/TracePanel";
import { Badge } from "../components/ui/badge/Badge";
import type { CatalogEntry } from "./catalog";

function ChatSurfacePreview() {
  return (
    <ChatSurface>
      <ChatMessage role="user" time="10:24 AM">Show me campaign performance by region.</ChatMessage>
      <ChatMessage actions time="10:25 AM">
        The strongest lift is in North America, with response quality up 4.2% and campaign volume up
        12% from the previous period.
      </ChatMessage>
      <div className="px-5 py-4">
        <SuggestionChips suggestions={["Show sources", "Compare to last quarter", "Export summary"]} />
      </div>
      <Composer />
    </ChatSurface>
  );
}

function ChatMessagePreview() {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200">
      <ChatMessage role="user" time="10:24 AM">Can you summarize the latest evaluation run?</ChatMessage>
      <ChatMessage actions time="10:25 AM">
        The run completed successfully. Completion rate improved to <strong>87.3%</strong>, and no
        critical red-team failures were detected.
      </ChatMessage>
      <ChatMessage role="system" time="10:25 AM">
        <Badge variant="info">Tool call completed</Badge>
      </ChatMessage>
    </div>
  );
}

function ComposerPreview() {
  return <Composer />;
}

function SuggestionChipsPreview() {
  return (
    <SuggestionChips
      suggestions={[
        "Summarize the key risks",
        "Show cited sources",
        "Create a dashboard",
        "Compare against last month",
      ]}
    />
  );
}

function StreamingStatePreview() {
  return (
    <div className="space-y-4">
      <StreamingState />
      <StreamingState label="Calling analytics tool" />
      <StreamingState label="Drafting response" />
    </div>
  );
}

function CitationChipPreview() {
  return (
    <div className="flex flex-wrap gap-3">
      <CitationChip index={1} label="Regional lift summary" source="Analytics run" tone="brand" />
      <CitationChip confidence="92%" index={2} label="Attribution confidence" tone="success" />
      <CitationChip index={3} label="Budget recommendation" />
    </div>
  );
}

function ToolCallCardPreview() {
  return (
    <div className="space-y-3">
      <ToolCallCard meta="analytics.query.regionalPerformance" status="running" toolName="Analytics Query">
        Fetching response quality, campaign volume, and attribution confidence by region.
      </ToolCallCard>
      <ToolCallCard description="The source set was indexed and attached to the final response." status="success" toolName="Source Retrieval" />
    </div>
  );
}

function SourceDrawerPreview() {
  return <SourceDrawer />;
}

function AgentAvatarPreview() {
  return (
    <div className="flex items-center gap-5">
      <AgentAvatar status="active" />
      <AgentAvatar status="complete" tone="neutral" />
      <AgentAvatar initials="GK" status="idle" tone="user" />
      <AgentAvatar size="lg" status="active" />
    </div>
  );
}

function ThinkingStatePreview() {
  return <ThinkingState />;
}

function PromptCardPreview() {
  return <PromptCard title="Summarize evaluation run" />;
}

function PromptLibraryPreview() {
  return <PromptLibrary />;
}

function ArtifactCardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ArtifactCard />
      <ArtifactCard title="Regional KPI table" type="table" />
    </div>
  );
}

function ContextPanelPreview() {
  return <ContextPanel />;
}

function HandoffCardPreview() {
  return <HandoffCard />;
}

function TracePanelPreview() {
  return <TracePanel />;
}

const agentDefaults = {
  category: "Agent UI",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const chatSurfaceEntry: CatalogEntry = {
  ...agentDefaults,
  id: "chat-surface",
  name: "Chat Surface",
  subcategory: "Conversation",
  description: "Chat Surface frames an agent conversation with header, scrollable stream, suggestions, and composer.",
  preview: ChatSurfacePreview,
  variants: ["Full surface", "With composer", "With suggestions", "Dashboard embedded"],
  props: [
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Message stream and composer content." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use as the parent container for agent conversations.", "Compose with Chat Message, Suggestion Chips, and Composer."],
  avoid: ["Do not use Chat Surface for static documentation.", "Do not place unrelated dashboard panels inside the message stream."],
  accessibility: ["Conversation regions should preserve reading order.", "Composer remains reachable after the message stream."],
  agentGuidance: ["Use Chat Surface for any interactive agent workspace.", "Keep system chrome outside the message stream."],
  code: `import { ChatSurface } from "./ChatSurface";\n\n<ChatSurface>\n  <ChatMessage role="user">Show campaign performance.</ChatMessage>\n  <Composer />\n</ChatSurface>`,
};

export const chatMessageEntry: CatalogEntry = {
  ...agentDefaults,
  id: "chat-message",
  name: "Chat Message",
  subcategory: "Conversation",
  description: "Chat Message renders user, agent, and system turns with avatar, timestamp, content, and optional actions.",
  preview: ChatMessagePreview,
  variants: ["User", "Agent", "System", "With actions", "With timestamp"],
  props: [
    { name: "role", type: '"agent" | "user" | "system"', defaultValue: '"agent"', description: "Controls avatar and background treatment." },
    { name: "actions", type: "boolean", defaultValue: "false", description: "Shows copy and feedback action buttons." },
    { name: "time", type: "string", defaultValue: "-", description: "Optional timestamp." },
  ],
  tokens: ["gray-50", "brand-50", "brand-700", "gray-400", "gray-700", "spacing-5"],
  usage: ["Use for every turn in a conversation.", "Use system messages for tool events or state changes.", "Use actions on agent responses."],
  avoid: ["Do not hide important system events outside the stream.", "Do not use message bubbles for non-conversation cards."],
  accessibility: ["Messages preserve semantic reading order.", "Action buttons should have accessible labels in production."],
  agentGuidance: ["Use role='user' for user-authored turns and role='agent' for assistant responses.", "Use system messages for tool or workflow state."],
  code: `import { ChatMessage } from "./ChatMessage";\n\n<ChatMessage role="agent" actions>\n  The evaluation completed successfully.\n</ChatMessage>`,
};

export const composerEntry: CatalogEntry = {
  ...agentDefaults,
  id: "composer",
  name: "Composer / Chat Input",
  subcategory: "Conversation",
  description: "Composer captures chat input with attachment, microphone, send action, helper text, and character count.",
  preview: ComposerPreview,
  variants: ["Pinned", "With attach", "With mic", "Active send", "Character count"],
  props: [],
  tokens: ["white", "gray-200", "gray-300", "gray-400", "brand-300", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use at the bottom of agent chat surfaces.", "Use helper text to explain keyboard behavior.", "Keep send disabled until content exists in production."],
  avoid: ["Do not make the composer scroll away in primary chat experiences.", "Do not omit labels for icon-only actions."],
  accessibility: ["Textarea is keyboard accessible.", "Icon-only controls include aria labels."],
  agentGuidance: ["Use Composer for agent chat and prompt entry.", "Use Textarea for settings forms and Composer for conversational input."],
  code: `import { Composer } from "./Composer";\n\n<Composer />`,
};

export const suggestionChipsEntry: CatalogEntry = {
  ...agentDefaults,
  id: "suggestion-chips",
  name: "Suggestion Chips",
  subcategory: "Conversation",
  description: "Suggestion Chips offer fast follow-up prompts and next actions after agent responses.",
  preview: SuggestionChipsPreview,
  variants: ["Default", "Hover", "Wrap", "Follow-up"],
  props: [
    { name: "suggestions", type: "string[]", defaultValue: "[]", description: "Prompt suggestions to render." },
  ],
  tokens: ["white", "gray-200", "gray-600", "brand-50", "brand-200", "brand-700", "radius-full", "shadow-xs"],
  usage: ["Use after agent responses to reduce typing effort.", "Use for common follow-up actions and prompt starters."],
  avoid: ["Do not show too many chips at once.", "Do not use vague suggestions like 'More'."],
  accessibility: ["Chips are buttons and keyboard reachable.", "Labels describe the action directly."],
  agentGuidance: ["Generate chips that continue the user's current task.", "Keep chip labels short and action-oriented."],
  code: `import { SuggestionChips } from "./SuggestionChips";\n\n<SuggestionChips suggestions={["Show sources", "Export summary"]} />`,
};

export const streamingStateEntry: CatalogEntry = {
  ...agentDefaults,
  id: "streaming-state",
  name: "Thinking / Streaming State",
  subcategory: "Conversation",
  description: "Streaming State shows what the agent is doing while a response or tool call is in progress.",
  preview: StreamingStatePreview,
  variants: ["Thinking", "Calling tool", "Drafting", "Spinner", "Dots"],
  props: [
    { name: "label", type: "string", defaultValue: '"Thinking through sources"', description: "Visible activity label." },
  ],
  tokens: ["brand-50", "brand-400", "brand-700", "radius-full", "motion-spin", "motion-bounce"],
  usage: ["Use when an agent response is streaming or a tool call is active.", "Name the current activity when possible."],
  avoid: ["Do not show anonymous loading for long AI actions.", "Do not use only animated dots without text."],
  accessibility: ["Visible text describes the activity.", "Future implementation should respect reduced motion preferences."],
  agentGuidance: ["Use activity-specific labels like 'Calling analytics tool' rather than generic 'Loading'.", "Pair streaming state with the message that will receive output."],
  code: `import { StreamingState } from "./StreamingState";\n\n<StreamingState label="Calling analytics tool" />`,
};

export const citationChipEntry: CatalogEntry = {
  ...agentDefaults,
  id: "citation-chip",
  name: "Citation Chip",
  subcategory: "Evidence",
  description: "Citation Chip links an agent claim to a specific source, excerpt, or evidence item.",
  preview: CitationChipPreview,
  variants: ["Neutral", "Brand", "Success", "With index", "With confidence", "With source label"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Visible source or evidence label." },
    { name: "index", type: "number", defaultValue: "-", description: "Numeric citation marker that maps to the source drawer." },
    { name: "source", type: "string", defaultValue: "-", description: "Optional source family or system label." },
    { name: "confidence", type: "string", defaultValue: "-", description: "Optional confidence label." },
    { name: "tone", type: '"neutral" | "brand" | "success"', defaultValue: '"neutral"', description: "Visual emphasis for the citation." },
  ],
  tokens: ["white", "gray-200", "gray-400", "gray-700", "brand-50", "brand-100", "brand-200", "brand-700", "success-50", "success-700"],
  usage: ["Use next to agent claims that need evidence.", "Use numbered citations when a Source Drawer is present.", "Use confidence only when it comes from a real scoring model."],
  avoid: ["Do not use citations as decorative tags.", "Do not show confidence values that are not backed by data."],
  accessibility: ["Citation chips are buttons and reachable by keyboard.", "The label should identify the source action without relying on the number alone."],
  agentGuidance: ["Use Citation Chip whenever an answer references source material.", "Pair indexed chips with Source Drawer entries using the same index."],
  code: `import { CitationChip } from "./CitationChip";\n\n<CitationChip index={1} label="Regional lift summary" source="Analytics run" tone="brand" />`,
};

export const toolCallCardEntry: CatalogEntry = {
  ...agentDefaults,
  id: "tool-call-card",
  name: "Tool Call Card",
  subcategory: "Agent Activity",
  description: "Tool Call Card exposes an agent's connected tool activity, including running, complete, and review states.",
  preview: ToolCallCardPreview,
  variants: ["Running", "Complete", "Needs review", "With metadata", "With output summary"],
  props: [
    { name: "toolName", type: "string", defaultValue: "-", description: "Human-readable tool name." },
    { name: "status", type: '"running" | "success" | "error"', defaultValue: '"running"', description: "Current tool execution state." },
    { name: "description", type: "string", defaultValue: "-", description: "Short explanation of what the tool is doing." },
    { name: "meta", type: "string", defaultValue: "-", description: "Optional endpoint, run id, or internal tool identifier." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-600", "gray-900", "brand-50", "success-50", "error-50", "shadow-xs"],
  usage: ["Use when a tool call should be visible to users.", "Use inside chat streams, activity feeds, or run detail panels."],
  avoid: ["Do not expose sensitive internal payloads.", "Do not use for normal static status badges."],
  accessibility: ["Status is visible as text, not color alone.", "Long tool details should remain in reading order."],
  agentGuidance: ["Use Tool Call Card for transparent agent actions like retrieval, analysis, export, or validation.", "Summarize payloads instead of rendering raw JSON by default."],
  code: `import { ToolCallCard } from "./ToolCallCard";\n\n<ToolCallCard status="running" toolName="Analytics Query">\n  Fetching campaign metrics by region.\n</ToolCallCard>`,
};

export const sourceDrawerEntry: CatalogEntry = {
  ...agentDefaults,
  id: "source-drawer",
  name: "Source Drawer",
  subcategory: "Evidence",
  description: "Source Drawer collects the sources behind an agent answer so users can inspect evidence without leaving the workflow.",
  preview: SourceDrawerPreview,
  variants: ["Default", "Searchable", "Citation mapped", "Evidence list", "Side panel"],
  props: [
    { name: "sources", type: "SourceDrawerSource[]", defaultValue: "defaultSources", description: "Source rows with id, title, meta, and excerpt." },
    { name: "title", type: "string", defaultValue: '"Sources"', description: "Drawer title." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use beside agent responses that contain citations.", "Use for source review, audit, and evidence inspection."],
  avoid: ["Do not put primary navigation in Source Drawer.", "Do not hide critical evidence behind unlabeled icons."],
  accessibility: ["Sources are rendered as articles in a readable sequence.", "Future drawer behavior should include focus management when opened as an overlay."],
  agentGuidance: ["Use Source Drawer as the destination for Citation Chip source inspection.", "Keep excerpts concise and include enough metadata to judge trust."],
  code: `import { SourceDrawer } from "./SourceDrawer";\n\n<SourceDrawer sources={sources} />`,
};

export const agentAvatarEntry: CatalogEntry = {
  ...agentDefaults,
  id: "agent-avatar",
  name: "Agent Avatar",
  subcategory: "Identity",
  description: "Agent Avatar represents an agent, user, or system identity with size, tone, and status variants.",
  preview: AgentAvatarPreview,
  variants: ["Brand", "Neutral", "User", "Small", "Medium", "Large", "Idle", "Active", "Complete"],
  props: [
    { name: "tone", type: '"brand" | "neutral" | "user"', defaultValue: '"brand"', description: "Identity treatment." },
    { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Avatar size." },
    { name: "status", type: '"idle" | "active" | "complete"', defaultValue: '"idle"', description: "Status indicator." },
    { name: "initials", type: "string", defaultValue: "-", description: "Optional initials instead of icon." },
  ],
  tokens: ["brand-200", "brand-500", "brand-700", "gray-200", "gray-400", "gray-700", "gray-900", "success-500", "radius-md", "shadow-xs"],
  usage: ["Use in chat messages, agent headers, run cards, and identity rows.", "Use status when the agent is actively working or complete."],
  avoid: ["Do not use decorative avatars without identity meaning.", "Do not rely on the status dot without nearby status text for critical states."],
  accessibility: ["Avatar exposes an image role with an accessible label.", "Status dot exposes a short status label."],
  agentGuidance: ["Use Agent Avatar for AI or system identities instead of generic Avatar when the status matters.", "Use the user tone for human-authored turns."],
  code: `import { AgentAvatar } from "./AgentAvatar";\n\n<AgentAvatar status="active" />`,
};

export const thinkingStateEntry: CatalogEntry = {
  ...agentDefaults,
  id: "thinking-state",
  name: "Thinking State",
  subcategory: "Agent Activity",
  description: "Thinking State shows a compact step list for what an agent is doing while work is in progress.",
  preview: ThinkingStatePreview,
  variants: ["Default", "Complete step", "Active step", "Pending step", "Custom label"],
  props: [
    { name: "label", type: "string", defaultValue: '"Agent is working"', description: "Heading for the current activity." },
    { name: "steps", type: "ThinkingStep[]", defaultValue: "defaultSteps", description: "Ordered work steps with status." },
  ],
  tokens: ["brand-50", "brand-200", "brand-400", "brand-700", "brand-800", "success-500", "radius-lg", "motion-spin"],
  usage: ["Use for multi-step agent work that takes more than a moment.", "Use when naming the work increases trust and reduces perceived wait time."],
  avoid: ["Do not expose private chain-of-thought.", "Do not use for instant loading states where Spinner or Streaming State is enough."],
  accessibility: ["Steps are rendered as an ordered list.", "Active work includes text as well as animation."],
  agentGuidance: ["Use Thinking State for transparent process summaries, not hidden reasoning.", "Describe observable workflow steps like retrieval, validation, or drafting."],
  code: `import { ThinkingState } from "./ThinkingState";\n\n<ThinkingState label="Checking sources" steps={steps} />`,
};

export const promptCardEntry: CatalogEntry = {
  ...agentDefaults,
  id: "prompt-card",
  name: "Prompt Card",
  subcategory: "Prompting",
  description: "Prompt Card packages a reusable prompt with tags, description, and copy action.",
  preview: PromptCardPreview,
  variants: ["Default", "With tags", "Copy action", "Prompt metadata"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Prompt title." },
    { name: "description", type: "string", defaultValue: "-", description: "Prompt body or summary." },
    { name: "tags", type: "string[]", defaultValue: "default tags", description: "Prompt categories and usage labels." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for reusable prompts in libraries and quick-start panels.", "Use tags to show workflow, domain, or review status."],
  avoid: ["Do not use for live chat messages.", "Do not store sensitive prompt text without access control."],
  accessibility: ["Copy action has visible text.", "Prompt title and description remain readable without icon meaning."],
  agentGuidance: ["Use Prompt Card when presenting reusable prompt starters.", "Pair with Prompt Library when multiple prompts need search and scanning."],
  code: `import { PromptCard } from "./PromptCard";\n\n<PromptCard title="Summarize evaluation run" tags={["Analytics", "Review"]} />`,
};

export const promptLibraryEntry: CatalogEntry = {
  ...agentDefaults,
  id: "prompt-library",
  name: "Prompt Library",
  subcategory: "Prompting",
  description: "Prompt Library combines search and prompt cards so teams can reuse approved agent prompts.",
  preview: PromptLibraryPreview,
  variants: ["Default", "Search", "Three-card grid", "Approved prompts"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use inside agent workspaces and settings pages where prompt reuse matters.", "Use for approved prompts, starter prompts, and workflow snippets."],
  avoid: ["Do not mix approved prompts with unreviewed prompt drafts without status labels.", "Do not use when a single Suggestion Chip row is enough."],
  accessibility: ["Search input has an accessible label.", "Prompt cards remain readable in source order."],
  agentGuidance: ["Use Prompt Library for curated prompt collections.", "Use Suggestion Chips for context-specific next prompts after a response."],
  code: `import { PromptLibrary } from "./PromptLibrary";\n\n<PromptLibrary />`,
};

export const artifactCardEntry: CatalogEntry = {
  ...agentDefaults,
  id: "artifact-card",
  name: "Artifact Card",
  subcategory: "Outputs",
  description: "Artifact Card presents a generated report, chart, table, or document as a durable output from an agent workflow.",
  preview: ArtifactCardPreview,
  variants: ["Report", "Chart", "Table", "Metrics", "Export action"],
  props: [
    { name: "title", type: "string", defaultValue: '"Campaign performance summary"', description: "Generated artifact title." },
    { name: "type", type: '"report" | "chart" | "table"', defaultValue: '"report"', description: "Artifact type and icon treatment." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use when an agent produces a reusable output that should persist beyond the chat turn.", "Use actions for open, export, or attach-to-workspace flows."],
  avoid: ["Do not use for transient tool-call state; use Tool Call Card.", "Do not show generated artifacts without source or confidence context when claims are involved."],
  accessibility: ["Title, type, metrics, and actions are visible text.", "Icon is supplemental to the artifact type label."],
  agentGuidance: ["Use Artifact Card for generated reports, charts, tables, and documents.", "Pair with Citation Chip or Source Drawer when artifact content is source-backed."],
  code: `import { ArtifactCard } from "./ArtifactCard";\n\n<ArtifactCard title="Campaign performance summary" type="report" />`,
};

export const contextPanelEntry: CatalogEntry = {
  ...agentDefaults,
  id: "context-panel",
  name: "Context Panel",
  subcategory: "Grounding",
  description: "Context Panel summarizes the audience, knowledge base, market, and policy constraints currently grounding an agent.",
  preview: ContextPanelPreview,
  variants: ["Grounded", "Audience", "Knowledge base", "Policy", "Market"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use beside chat or setup flows when context affects generated output.", "Use to make agent grounding explicit before users trust a response."],
  avoid: ["Do not expose private or sensitive context that should remain hidden.", "Do not use context panels as editable forms."],
  accessibility: ["Context items have visible labels and values.", "Status is shown with text, not color alone."],
  agentGuidance: ["Use Context Panel when generating UI for grounded agents, source-aware workflows, or regulated review contexts.", "Pair with Composer or Chat Surface when users need to understand what the agent knows."],
  code: `import { ContextPanel } from "./ContextPanel";\n\n<ContextPanel />`,
};

export const handoffCardEntry: CatalogEntry = {
  ...agentDefaults,
  id: "handoff-card",
  name: "Handoff Card",
  subcategory: "Review",
  description: "Handoff Card marks a point where an agent needs human review, approval, or escalation before continuing.",
  preview: HandoffCardPreview,
  variants: ["Human review", "Approval gate", "Warning tone", "Review actions"],
  props: [],
  tokens: ["warning-50", "warning-300", "warning-700", "warning-900", "white", "brand-700", "gray-300", "radius-lg", "shadow-xs"],
  usage: ["Use for claims, policy exceptions, low-confidence results, and irreversible actions.", "Make the required human action clear and direct."],
  avoid: ["Do not use for normal informational messages.", "Do not continue automatically when a handoff requires approval."],
  accessibility: ["Review requirement is stated as text and not only color.", "Actions are visible buttons."],
  agentGuidance: ["Use Handoff Card whenever the AI workflow must pause for human judgment.", "Pair with Review Queue, Confirmation Panel, or Review Checklist."],
  code: `import { HandoffCard } from "./HandoffCard";\n\n<HandoffCard />`,
};

export const tracePanelEntry: CatalogEntry = {
  ...agentDefaults,
  id: "trace-panel",
  name: "Trace Panel",
  subcategory: "Agent Activity",
  description: "Trace Panel shows an observable execution trail for prompt receipt, retrieval, tool work, and analysis steps.",
  preview: TracePanelPreview,
  variants: ["Live trace", "Complete step", "Active step", "Source retrieval", "Analysis step"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use when users need transparency into agent execution.", "Use for run details, evaluation replay, and debugging views."],
  avoid: ["Do not expose private chain-of-thought.", "Do not render raw logs when summarized trace steps are enough."],
  accessibility: ["Trace renders as an ordered list with visible labels.", "Status icon is supplemental to readable step text."],
  agentGuidance: ["Use Trace Panel for observable workflow events only: prompt received, source retrieval, tool call, validation, output generated.", "Use Timeline for broader historical event streams."],
  code: `import { TracePanel } from "./TracePanel";\n\n<TracePanel />`,
};
