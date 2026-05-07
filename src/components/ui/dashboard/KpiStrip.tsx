import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Badge } from "../badge/Badge";

const metrics = [
  { delta: "+12.4%", label: "Agent runs", tone: "success" as const, trend: "up", value: "18.4k" },
  { delta: "+4.8%", label: "Source coverage", tone: "success" as const, trend: "up", value: "96%" },
  { delta: "-1.2s", label: "Avg. latency", tone: "brand" as const, trend: "down", value: "1.8s" },
  { delta: "+3", label: "Open reviews", tone: "warning" as const, trend: "up", value: "12" },
];

export function KpiStrip() {
  return (
    <section className="grid overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs md:grid-cols-4">
      {metrics.map((metric) => {
        const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;

        return (
          <article className="border-b border-gray-200 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0" key={metric.label}>
            <p className="text-sm font-medium text-gray-500">{metric.label}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
              <Badge variant={metric.tone}>
                <TrendIcon aria-hidden="true" className="h-3.5 w-3.5" />
                {metric.delta}
              </Badge>
            </div>
          </article>
        );
      })}
    </section>
  );
}
