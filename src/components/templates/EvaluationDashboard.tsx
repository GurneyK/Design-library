import { ComparisonMatrix } from "../ui/data-display/ComparisonMatrix";
import { EvaluationScorecard } from "../ui/dashboard/EvaluationScorecard";
import { GaugeChart } from "../ui/charts/GaugeChart";
import { HeatmapChart } from "../ui/charts/HeatmapChart";
import { HealthSummary } from "../ui/dashboard/HealthSummary";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { ChartContainer } from "../ui/charts/ChartContainer";
import { Panel } from "../ui/layout/Panel";

export function EvaluationDashboard() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        description="Review quality, capability coverage, risk patterns, and activity intensity across active agents."
        title="Evaluation dashboard"
      />
      <HealthSummary />
      <div className="grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
        <ChartContainer description="Overall readiness across the current evaluation set." title="Quality score">
          <GaugeChart />
        </ChartContainer>
        <Panel description="Capability coverage by agent surface." title="Capability matrix">
          <ComparisonMatrix />
        </Panel>
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel description="Evaluation metrics for the latest replay." title="Scorecard">
          <EvaluationScorecard />
        </Panel>
        <ChartContainer description="Workspace activity by day and review surface." title="Activity intensity">
          <HeatmapChart />
        </ChartContainer>
      </div>
    </div>
  );
}
