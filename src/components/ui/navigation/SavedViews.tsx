import { Bookmark, Filter, Star } from "lucide-react";
import { Badge } from "../badge/Badge";

const views = [
  { label: "Open reviews", meta: "12 items", active: true, icon: Star },
  { label: "High confidence sources", meta: "248 docs", icon: Bookmark },
  { label: "Failed runs", meta: "3 runs", icon: Filter },
];

export function SavedViews() {
  return (
    <nav aria-label="Saved views" className="rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <div className="px-2 py-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Saved views</p>
      </div>
      <div className="space-y-1">
        {views.map((view) => {
          const Icon = view.icon;
          return (
            <button
              className={[
                "focus-ring flex w-full items-center gap-3 rounded-habibiMd px-3 py-2 text-left transition-colors",
                view.active ? "bg-brand-50 text-brand-800" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              ].join(" ")}
              key={view.label}
              type="button"
            >
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{view.label}</span>
                <span className="block text-xs text-gray-500">{view.meta}</span>
              </span>
              {view.active ? <Badge variant="brand">Active</Badge> : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
