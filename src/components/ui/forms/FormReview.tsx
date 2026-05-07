import { CheckCircle2, FileText, Settings2, UserRound } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const rows = [
  { icon: Settings2, label: "Workspace", value: "Analytics command center" },
  { icon: UserRound, label: "Owner", value: "H3L product team" },
  { icon: FileText, label: "Sources", value: "42 approved documents" },
];

export function FormReview() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Review submission</h3>
          <p className="mt-1 text-sm text-gray-500">Confirm the final values before this workflow is saved.</p>
        </div>
        <Badge variant="success">
          <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5" />
          Ready
        </Badge>
      </div>
      <dl className="divide-y divide-gray-100">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[220px_minmax(0,1fr)]" key={row.label}>
              <dt className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <Icon aria-hidden="true" className="h-4 w-4 text-brand-700" />
                {row.label}
              </dt>
              <dd className="text-sm font-semibold text-gray-900">{row.value}</dd>
            </div>
          );
        })}
      </dl>
      <div className="flex flex-wrap justify-end gap-3 border-t border-gray-200 px-5 py-4">
        <Button variant="secondaryGray">Back</Button>
        <Button>Submit workflow</Button>
      </div>
    </section>
  );
}
