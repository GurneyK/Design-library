import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "../badge/Badge";

const items = [
  { icon: CheckCircle2, label: "Source coverage", value: "96%", variant: "success" as const },
  { icon: Clock3, label: "Average latency", value: "1.8s", variant: "brand" as const },
  { icon: AlertTriangle, label: "Open risks", value: "2", variant: "warning" as const },
];

export function HealthSummary() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Workspace health</h3>
          <p className="mt-1 text-sm text-gray-500">Readiness signals for publishing and dashboard review.</p>
        </div>
        <Badge variant="success">Healthy</Badge>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-4" key={item.label}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-gray-500">{item.label}</span>
                <Icon aria-hidden="true" className="h-4 w-4 text-brand-700" />
              </div>
              <p className="mt-3 text-2xl font-semibold text-gray-900">{item.value}</p>
              <div className="mt-2">
                <Badge variant={item.variant}>In range</Badge>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
