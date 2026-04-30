import { Send, Sparkles } from "lucide-react";
import { ChatMessage } from "../ui/agent/ChatMessage";
import { ChatSurface } from "../ui/agent/ChatSurface";
import { Composer } from "../ui/agent/Composer";
import { SuggestionChips } from "../ui/agent/SuggestionChips";
import { Badge } from "../ui/badge/Badge";
import { Button } from "../ui/button/Button";
import { BarChart } from "../ui/charts/BarChart";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { InsightCard } from "../ui/dashboard/InsightCard";
import { QuickActionPanel } from "../ui/dashboard/QuickActionPanel";
import { FormField } from "../ui/form-field/FormField";
import { FormGroup } from "../ui/forms/FormGroup";
import { Input } from "../ui/input/Input";
import { Grid } from "../ui/layout/Grid";
import { Panel } from "../ui/layout/Panel";
import { Textarea } from "../ui/textarea/Textarea";

export function MarketingWorkspace() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        actions={<Button leadingIcon={<Send className="h-4 w-4" />}>Create brief</Button>}
        description="Draft campaign briefs, compare audience options, and turn agent output into marketing-ready assets."
        title="Marketing Agent workspace"
      />
      <Grid columns={3}>
        <InsightCard
          description="Retail media creative is performing best when value claims are paired with ingredient proof points."
          metric="+18%"
          title="Proof-led messaging is working"
          tone="success"
        />
        <InsightCard
          description="Audience overlap is high between two proposed segments, so the next brief should consolidate them."
          metric="Review"
          title="Segment overlap detected"
          tone="warning"
        />
        <QuickActionPanel />
      </Grid>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <Panel title="Campaign performance" description="Active channels and creative themes.">
          <div className="h-60">
            <BarChart />
          </div>
        </Panel>
        <Panel title="Brief builder" description="Structured inputs for the next agent draft.">
          <FormGroup columns={1}>
            <FormField label="Campaign name">
              <Input defaultValue="Retail Media Spring Lift" />
            </FormField>
            <FormField label="Audience">
              <Input defaultValue="Ingredient-aware beauty shoppers" />
            </FormField>
            <FormField label="Message direction">
              <Textarea defaultValue="Prioritize proof-led value claims, cite product evidence, and keep the tone practical." />
            </FormField>
          </FormGroup>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="brand">Agent draft</Badge>
            <Badge variant="success">Evidence ready</Badge>
          </div>
        </Panel>
      </div>
      <ChatSurface>
        <ChatMessage role="user">Create three audience angles for the next campaign brief.</ChatMessage>
        <ChatMessage actions>
          I would start with proof-led value seekers, replenishment shoppers, and ingredient-aware switchers. The first segment has the strongest lift signal.
        </ChatMessage>
        <div className="px-5 py-4">
          <SuggestionChips suggestions={["Draft campaign brief", "Compare audience size", "Show source evidence"]} />
        </div>
        <Composer />
      </ChatSurface>
      <div className="flex items-center gap-2 text-sm text-brand-700">
        <Sparkles className="h-4 w-4" />
        Built from Habibi dashboard, form, chart, and agent primitives.
      </div>
    </div>
  );
}
