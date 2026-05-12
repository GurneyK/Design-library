import { BarChart3, Database, MessageSquareText, ShieldCheck } from "lucide-react";
import { Badge } from "../badge/Badge";

const metrics = [
  { icon: MessageSquareText, label: "Agent chats", value: "1.8k", tone: "brand" },
  { icon: Database, label: "Sources", value: "286", tone: "info" },
  { icon: BarChart3, label: "Reports", value: "42", tone: "success" },
  { icon: ShieldCheck, label: "Reviews", value: "7", tone: "warning" },
];

const toneClasses: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700",
  info: "bg-info-50 text-info-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
};

export function WorkspaceSummary() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">Workspace summary</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">Design Library operations</h3>
          <p className="mt-1 text-sm leading-6 text-gray-600">Shared project health across agents, sources, reports, and open reviews.</p>
        </div>
        <Badge variant="success">Healthy</Badge>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={metric.label}>
              <div className={["inline-flex rounded-habibiSm p-2", toneClasses[metric.tone]].join(" ")}>
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <p className="mt-3 text-2xl font-semibold text-gray-900">{metric.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">{metric.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
