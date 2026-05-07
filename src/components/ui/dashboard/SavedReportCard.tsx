import { BarChart3, Clock3, Copy, Star } from "lucide-react";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

export function SavedReportCard() {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
          <BarChart3 aria-hidden="true" className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2">
          <IconButton icon={<Star aria-hidden="true" className="h-4 w-4" />} label="Favorite report" size="sm" variant="ghost" />
          <IconButton icon={<Copy aria-hidden="true" className="h-4 w-4" />} label="Copy report link" size="sm" variant="ghost" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-gray-900">Campaign performance summary</h3>
          <Badge variant="brand">Shared</Badge>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">Weekly view of campaign lift, source coverage, and recommended budget actions.</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Views", "842"],
          ["Sources", "38"],
          ["Owner", "H3L"],
        ].map(([label, value]) => (
          <div className="rounded-habibiMd bg-gray-50 p-3" key={label}>
            <p className="text-xs font-medium text-gray-500">{label}</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-500">
        <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
        Updated 18 minutes ago
      </p>
    </article>
  );
}
