import { BarChart3, FileText, LayoutDashboard, Settings } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const navItems = [
  { active: true, icon: LayoutDashboard, label: "Overview" },
  { active: false, icon: BarChart3, label: "Analytics" },
  { active: false, icon: FileText, label: "Sources" },
  { active: false, icon: Settings, label: "Settings" },
];

export function DashboardShell() {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">Design Library workspace</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900">Analytics command center</h3>
        </div>
        <Button size="sm" type="button">Create report</Button>
      </div>
      <div className="grid min-h-[300px] lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="border-b border-gray-200 bg-white p-3 lg:border-b-0 lg:border-r">
          <nav aria-label="Dashboard sections" className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  className={[
                    "focus-ring flex w-full items-center gap-2 rounded-habibiMd px-3 py-2 text-left text-sm font-semibold",
                    item.active ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  ].join(" ")}
                  key={item.label}
                  type="button"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>
        <main className="bg-gray-50 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {["Quality", "Coverage", "Latency"].map((label, index) => (
              <article className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs" key={label}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-gray-500">{label}</p>
                  <Badge variant={index === 2 ? "warning" : "success"}>{index === 2 ? "Watch" : "Healthy"}</Badge>
                </div>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{index === 0 ? "91%" : index === 1 ? "96%" : "1.8s"}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
            <p className="text-sm font-semibold text-gray-900">Primary content region</p>
            <div className="mt-4 h-28 rounded-habibiMd bg-brand-50" />
          </div>
        </main>
      </div>
    </div>
  );
}
