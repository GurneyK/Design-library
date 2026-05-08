import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const facts = [
  ["Owner", "H3L product"],
  ["Sources", "42 approved"],
  ["Status", "Ready"],
];

export function DetailLayout() {
  return (
    <div className="grid gap-5 rounded-habibiLg bg-gray-50 p-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <main className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Badge variant="brand">Workspace detail</Badge>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Analytics evidence review</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">Primary content sits first in DOM order with a supporting aside for metadata and actions.</p>
          </div>
          <Button variant="secondaryGray">Open review</Button>
        </div>
        <div className="mt-5 h-40 rounded-habibiMd bg-brand-50" />
      </main>
      <aside className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
        <h4 className="text-sm font-semibold text-gray-900">Details</h4>
        <dl className="mt-4 space-y-3">
          {facts.map(([label, value]) => (
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0" key={label}>
              <dt className="text-sm text-gray-500">{label}</dt>
              <dd className="text-sm font-semibold text-gray-900">{value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
