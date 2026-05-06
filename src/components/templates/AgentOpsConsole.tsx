import { TracePanel } from "../ui/agent/TracePanel";
import { EvaluationScorecard } from "../ui/dashboard/EvaluationScorecard";
import { FilterBar } from "../ui/dashboard/FilterBar";
import { HealthSummary } from "../ui/dashboard/HealthSummary";
import { ReviewQueue } from "../ui/dashboard/ReviewQueue";
import { RunCard } from "../ui/dashboard/RunCard";
import { RunStatusPill } from "../ui/dashboard/RunStatusPill";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { Grid } from "../ui/layout/Grid";
import { Panel } from "../ui/layout/Panel";

export function AgentOpsConsole() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        description="Monitor agent health, live runs, evaluation state, and human review work from one operations view."
        status={<RunStatusPill status="running" label="6 active runs" />}
        title="Agent ops console"
      />
      <FilterBar />
      <HealthSummary />
      <Grid columns={2}>
        <RunCard title="Analytics regression replay" description="Replaying 42 evaluation conversations before publishing." progress={64} />
        <RunCard title="Marketing prompt review" description="Checking generated campaign claims against source policy." progress={100} status="complete" />
      </Grid>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel description="Latest quality gate for production agents." title="Evaluation quality">
          <EvaluationScorecard />
        </Panel>
        <ReviewQueue />
      </div>
      <TracePanel />
    </div>
  );
}
