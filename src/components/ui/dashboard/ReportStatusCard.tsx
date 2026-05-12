import { CheckCircle2, Clock3, FileText, RefreshCw } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const milestones = [
  { label: "Sources synced", status: "Complete" },
  { label: "Agent summary drafted", status: "Complete" },
  { label: "Human review", status: "In review" },
];

export function ReportStatusCard() {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
            <FileText aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900">Quarterly insights report</h3>
              <Badge variant="warning">Needs review</Badge>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600">Draft is ready with source coverage, chart notes, and executive summary.</p>
          </div>
        </div>
        <Button leadingIcon={<RefreshCw aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="tertiaryGray">
          Refresh
        </Button>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Owner", "H3L"],
          ["Sources", "38 linked"],
          ["Confidence", "91%"],
        ].map(([label, value]) => (
          <div className="rounded-habibiMd bg-gray-50 p-3" key={label}>
            <dt className="text-xs font-medium text-gray-500">{label}</dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
      <ol className="mt-5 space-y-3">
        {milestones.map((milestone) => (
          <li className="flex items-center justify-between gap-3" key={milestone.label}>
            <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
              {milestone.status === "Complete" ? (
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success-600" />
              ) : (
                <Clock3 aria-hidden="true" className="h-4 w-4 text-warning-600" />
              )}
              {milestone.label}
            </span>
            <span className="text-xs font-semibold text-gray-500">{milestone.status}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
