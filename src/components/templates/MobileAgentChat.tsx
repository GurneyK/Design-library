import { AgentStatusBar } from "../ui/agent/AgentStatusBar";
import { ChatMessage } from "../ui/agent/ChatMessage";
import { ChatSurface } from "../ui/agent/ChatSurface";
import { Composer } from "../ui/agent/Composer";
import { ConversationHeader } from "../ui/agent/ConversationHeader";
import { EvidenceList } from "../ui/agent/EvidenceList";
import { SuggestionChips } from "../ui/agent/SuggestionChips";
import { MobileTabBar } from "../ui/navigation/MobileTabBar";

export function MobileAgentChat() {
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-habibiLg bg-gray-50 p-3">
      <ConversationHeader />
      <AgentStatusBar />
      <ChatSurface>
        <ChatMessage role="user" time="10:24 AM">Can you summarize source coverage for this campaign?</ChatMessage>
        <ChatMessage actions time="10:25 AM">
          Source coverage is strong across approved campaign files. Two claims still need human review before export.
        </ChatMessage>
        <div className="px-4 py-3">
          <SuggestionChips suggestions={["Show evidence", "Create review task", "Export answer"]} />
        </div>
        <Composer />
      </ChatSurface>
      <EvidenceList />
      <MobileTabBar />
    </div>
  );
}
