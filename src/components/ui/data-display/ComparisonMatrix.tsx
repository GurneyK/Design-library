import { CheckCircle2, CircleMinus } from "lucide-react";

const rows = [
  { label: "Source citations", analytics: true, marketing: true, inci: true },
  { label: "Chart generation", analytics: true, marketing: true, inci: false },
  { label: "Ingredient lookup", analytics: false, marketing: false, inci: true },
  { label: "Review workflow", analytics: true, marketing: true, inci: true },
];

export function ComparisonMatrix() {
  return (
    <div className="overflow-x-auto rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <table className="min-w-[640px] w-full border-collapse text-sm">
        <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          <tr>
            <th className="px-4 py-3" scope="col">Capability</th>
            <th className="px-4 py-3" scope="col">Analytics</th>
            <th className="px-4 py-3" scope="col">Marketing</th>
            <th className="px-4 py-3" scope="col">INCI</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr className="text-gray-700" key={row.label}>
              <th className="px-4 py-3 text-left font-semibold text-gray-900" scope="row">{row.label}</th>
              <MatrixCell enabled={row.analytics} />
              <MatrixCell enabled={row.marketing} />
              <MatrixCell enabled={row.inci} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MatrixCell({ enabled }: { enabled: boolean }) {
  return (
    <td className="px-4 py-3">
      <span className={["inline-flex items-center gap-1.5 text-sm font-medium", enabled ? "text-success-700" : "text-gray-400"].join(" ")}>
        {enabled ? <CheckCircle2 aria-hidden="true" className="h-4 w-4" /> : <CircleMinus aria-hidden="true" className="h-4 w-4" />}
        {enabled ? "Included" : "Not included"}
      </span>
    </td>
  );
}
