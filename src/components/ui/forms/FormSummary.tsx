import { CheckCircle2, FileText, Settings2 } from "lucide-react";
import { Badge } from "../badge/Badge";

const rows = [
  { label: "Workspace", value: "Beauty Intelligence", icon: Settings2 },
  { label: "Primary agent", value: "Analytics Agent", icon: CheckCircle2 },
  { label: "Sources", value: "248 approved docs", icon: FileText },
];

export function FormSummary() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Review before saving</h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">Confirm the key settings that will be applied.</p>
        </div>
        <Badge variant="success">Valid</Badge>
      </div>
      <dl className="space-y-3">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div className="flex items-center gap-3 rounded-habibiMd bg-gray-50 p-3" key={row.label}>
              <span className="rounded-habibiSm bg-white p-2 text-brand-700 shadow-habibiXs">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <dt className="text-xs font-medium text-gray-500">{row.label}</dt>
                <dd className="mt-0.5 truncate text-sm font-semibold text-gray-900">{row.value}</dd>
              </div>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
