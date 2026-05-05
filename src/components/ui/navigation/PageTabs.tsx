import { Badge } from "../badge/Badge";

const tabs = [
  { active: true, label: "Overview" },
  { count: 12, label: "Runs" },
  { count: 248, label: "Sources" },
  { label: "Settings" },
];

export function PageTabs() {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-1 shadow-habibiXs">
      <div aria-label="Page sections" className="flex flex-wrap gap-1" role="tablist">
        {tabs.map((tab) => (
          <button
            aria-selected={tab.active}
            className={[
              "focus-ring inline-flex h-10 items-center gap-2 rounded-habibiMd px-3 text-sm font-semibold",
              tab.active ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            ].join(" ")}
            key={tab.label}
            role="tab"
            type="button"
          >
            {tab.label}
            {tab.count !== undefined ? <Badge variant={tab.active ? "brand" : "neutral"}>{tab.count}</Badge> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
