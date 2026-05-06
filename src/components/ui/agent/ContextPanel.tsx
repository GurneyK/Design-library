import { Database, FileText, Globe2, UserRound } from "lucide-react";
import { Badge } from "../badge/Badge";

const contextItems = [
  { icon: UserRound, label: "Audience", value: "North America marketing team" },
  { icon: Database, label: "Knowledge base", value: "Brand claims library" },
  { icon: FileText, label: "Source policy", value: "Approved docs only" },
  { icon: Globe2, label: "Market", value: "US + Canada" },
];

export function ContextPanel() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Agent context</h3>
        <Badge variant="success">Grounded</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        {contextItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="flex gap-3 p-4" key={item.label}>
              <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
