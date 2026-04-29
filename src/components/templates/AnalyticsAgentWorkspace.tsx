import { BarChart3 } from "lucide-react";
import { ChatMessage } from "../ui/agent/ChatMessage";
import { ChatSurface } from "../ui/agent/ChatSurface";
import { CitationChip } from "../ui/agent/CitationChip";
import { Composer } from "../ui/agent/Composer";
import { SourceDrawer } from "../ui/agent/SourceDrawer";
import { SuggestionChips } from "../ui/agent/SuggestionChips";
import { ToolCallCard } from "../ui/agent/ToolCallCard";
import { SummaryChartCard } from "../ui/charts/SummaryChartCard";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { InsightCard } from "../ui/dashboard/InsightCard";
import { RunStatusPill } from "../ui/dashboard/RunStatusPill";
import { Grid } from "../ui/layout/Grid";
import { Panel } from "../ui/layout/Panel";

export function AnalyticsAgentWorkspace() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        description="Ask performance questions, inspect source evidence, and turn agent output into dashboard-ready insight."
        status={<RunStatusPill status="running" label="Agent active" />}
        title="Analytics Agent workspace"
      />
      <Grid columns={3}>
        <SummaryChartCard />
        <InsightCard
          description="North America has the strongest response lift and should receive the next budget review."
          metric="+4.2%"
          title="Campaign performance is improving"
          tone="success"
        />
        <Panel description="Current evaluation run" title="Run context">
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <span>Model confidence</span>
              <strong className="text-gray-900">92%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Sources attached</span>
              <strong className="text-gray-900">18</strong>
            </div>
            <div className="flex items-center gap-2 text-brand-700">
              <BarChart3 className="h-4 w-4" />
              Ready for dashboard export
            </div>
          </div>
        </Panel>
      </Grid>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <ChatSurface>
          <ChatMessage role="user" time="10:24 AM">Show me campaign performance by region.</ChatMessage>
          <ChatMessage actions time="10:25 AM">
            North America is leading the current campaign period. Response quality is up 4.2%, and
            retail media volume increased by 12%.
            <div className="mt-3 flex flex-wrap gap-2">
              <CitationChip index={1} label="Regional lift summary" tone="brand" />
              <CitationChip index={2} label="Attribution confidence" tone="success" />
            </div>
          </ChatMessage>
          <div className="px-5 py-4">
            <ToolCallCard status="success" toolName="Analytics Query">
              Campaign metrics were grouped by region, channel, and attribution confidence.
            </ToolCallCard>
          </div>
          <div className="px-5 py-4">
            <SuggestionChips suggestions={["Show sources", "Compare to last quarter", "Create insight card"]} />
          </div>
          <Composer />
        </ChatSurface>
        <SourceDrawer />
      </div>
    </div>
  );
}
