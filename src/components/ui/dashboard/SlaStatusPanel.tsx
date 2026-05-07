import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "../badge/Badge";

const rows = [
  { icon: CheckCircle2, label: "Answer quality", meta: "91% passing", status: "On target", variant: "success" as const },
  { icon: Clock3, label: "Median response", meta: "1.8s over 24h", status: "Watching", variant: "warning" as const },
  { icon: AlertTriangle, label: "Policy reviews", meta: "2 high priority", status: "Action needed", variant: "error" as const },
];

export function SlaStatusPanel() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">SLA status</h3>
          <p className="mt-1 text-sm text-gray-500">Operational targets for production agent workspaces.</p>
        </div>
        <Badge variant="warning">2 warnings</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <article className="flex flex-wrap items-center justify-between gap-3 px-5 py-4" key={row.label}>
              <div className="flex min-w-0 items-center gap-3">
                <div className="rounded-habibiMd bg-gray-50 p-2 text-brand-700">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{row.label}</h4>
                  <p className="mt-1 text-sm text-gray-500">{row.meta}</p>
                </div>
              </div>
              <Badge variant={row.variant}>{row.status}</Badge>
            </article>
          );
        })}
      </div>
    </section>
  );
}
