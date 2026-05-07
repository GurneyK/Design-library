import { AreaChart } from "../ui/charts/AreaChart";
import { DonutChart } from "../ui/charts/DonutChart";
import { Badge } from "../ui/badge/Badge";
import { Button } from "../ui/button/Button";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { InsightCard } from "../ui/dashboard/InsightCard";
import { KpiStrip } from "../ui/dashboard/KpiStrip";
import { Panel } from "../ui/layout/Panel";
import { Timeline } from "../ui/timeline/Timeline";

export function ExecutiveBriefing() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        actions={
          <div className="flex flex-wrap gap-2">
            <Button variant="secondaryGray">Export PDF</Button>
            <Button>Share briefing</Button>
          </div>
        }
        description="Leadership-ready view of delivery velocity, source readiness, and AI-assisted recommendations."
        status={<Badge variant="success">Ready for review</Badge>}
        title="Executive briefing"
      />
      <KpiStrip />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel description="Weekly trend for active product and campaign workstreams." title="Delivery momentum">
          <AreaChart />
        </Panel>
        <Panel description="Distribution of work by agent-assisted surface." title="Workspace mix">
          <DonutChart />
        </Panel>
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <InsightCard
          description="Evidence-backed agent workflows are reducing review time while keeping source coverage above target."
          metric="-38%"
          title="Review cycle time is improving"
          tone="success"
        />
        <Timeline
          items={[
            {
              badge: <Badge variant="success">Complete</Badge>,
              content: "Analytics and marketing summaries were refreshed from approved source packs.",
              time: "09:00",
              title: "Source refresh",
            },
            {
              badge: <Badge variant="brand">Ready</Badge>,
              content: "Executive summary is ready for stakeholder review and PDF export.",
              time: "10:30",
              title: "Briefing generated",
            },
          ]}
        />
      </div>
    </div>
  );
}
