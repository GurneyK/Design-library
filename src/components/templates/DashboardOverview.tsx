import { ActivityFeed } from "../ui/dashboard/ActivityFeed";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { InsightCard } from "../ui/dashboard/InsightCard";
import { QuickActionPanel } from "../ui/dashboard/QuickActionPanel";
import { WorkspaceSwitcher } from "../ui/dashboard/WorkspaceSwitcher";
import { SummaryChartCard } from "../ui/charts/SummaryChartCard";
import { BarChart } from "../ui/charts/BarChart";
import { DonutChart } from "../ui/charts/DonutChart";
import { Panel } from "../ui/layout/Panel";
import { Topbar } from "../ui/layout/Topbar";
import { Sidebar } from "../ui/layout/Sidebar";
import { Grid } from "../ui/layout/Grid";

export function DashboardOverview() {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-gray-50 shadow-habibiXs">
      <Topbar title="North Star dashboard" />
      <div className="grid gap-5 p-4 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar title="Project North Star" />
        <main className="min-w-0 space-y-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <DashboardHeader title="Delivery overview" description="Monitor active workstreams, agent runs, and evidence-backed insights." />
            <WorkspaceSwitcher />
          </div>
          <Grid columns={3}>
            <SummaryChartCard />
            <InsightCard
              description="Agent-assisted analysis is reducing review time across dashboard and marketing workflows."
              metric="-38%"
              title="Cycle time is down"
            />
            <InsightCard
              description="Two workspaces need source coverage before the next leadership review."
              metric="2 risks"
              title="Evidence review needed"
              tone="warning"
            />
          </Grid>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            <Panel description="Regional engagement for active campaigns." title="Campaign volume">
              <div className="h-56">
                <BarChart />
              </div>
            </Panel>
            <Panel description="Agent run distribution by workspace." title="Run mix">
              <div className="h-56">
                <DonutChart />
              </div>
            </Panel>
          </div>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            <ActivityFeed />
            <QuickActionPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
