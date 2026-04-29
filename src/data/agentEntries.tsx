import { ChatMessage } from "../components/ui/agent/ChatMessage";
import { ChatSurface } from "../components/ui/agent/ChatSurface";
import { Composer } from "../components/ui/agent/Composer";
import { StreamingState } from "../components/ui/agent/StreamingState";
import { SuggestionChips } from "../components/ui/agent/SuggestionChips";
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
