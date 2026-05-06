import { CheckCircle2, Clock3, Database, MessageSquareText } from "lucide-react";
import { Badge } from "../badge/Badge";

const trace = [
  { icon: MessageSquareText, label: "Prompt received", meta: "User asked for regional performance", status: "complete" },
  { icon: Database, label: "Sources retrieved", meta: "8 approved documents matched", status: "complete" },
  { icon: Clock3, label: "Analysis running", meta: "Aggregating KPI deltas", status: "active" },
];

export function TracePanel() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Execution trace</h3>
        <Badge variant="brand">Live</Badge>
      </div>
      <ol className="divide-y divide-gray-100">
        {trace.map((item) => {
          const Icon = item.icon;
          const done = item.status === "complete";

          return (
            <li className="flex gap-3 p-4" key={item.label}>
              <div className={["rounded-habibiMd p-2", done ? "bg-success-50 text-success-700" : "bg-brand-50 text-brand-700"].join(" ")}>
                {done ? <CheckCircle2 aria-hidden="true" className="h-4 w-4" /> : <Icon aria-hidden="true" className="h-4 w-4" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                <p className="mt-1 text-sm text-gray-500">{item.meta}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
