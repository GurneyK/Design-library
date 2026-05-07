import { Badge } from "../badge/Badge";
import { Progress } from "../progress/Progress";

const metrics = [
  { label: "Answer quality", value: 92, tone: "success" },
  { label: "Source coverage", value: 84, tone: "brand" },
  { label: "Policy readiness", value: 76, tone: "warning" },
];

export function MetricBreakdown() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Evaluation</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900">Run quality breakdown</h3>
        </div>
        <Badge variant="success">Ready</Badge>
      </div>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={metric.label}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-gray-900">{metric.label}</span>
              <Badge variant={metric.tone as "success" | "brand" | "warning"}>{metric.value}%</Badge>
            </div>
            <Progress value={metric.value} />
          </div>
        ))}
      </div>
    </section>
  );
}
