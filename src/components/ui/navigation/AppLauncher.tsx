import { BarChart3, Bot, Grid3X3, Microscope, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";

const apps = [
  { icon: Bot, label: "Analytics Agent", meta: "Reports and insights" },
  { icon: Sparkles, label: "Marketing Agent", meta: "Campaign drafting" },
  { icon: Microscope, label: "INCI Agent", meta: "Ingredient lookup" },
  { icon: BarChart3, label: "Dashboards", meta: "Workspace metrics" },
];

export function AppLauncher() {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Grid3X3 aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">Apps</h3>
        </div>
        <Badge variant="brand">4</Badge>
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-2">
        {apps.map((app) => {
          const Icon = app.icon;

          return (
            <button className="focus-ring rounded-habibiMd p-3 text-left hover:bg-gray-50" key={app.label} type="button">
              <span className="inline-flex rounded-habibiMd bg-brand-50 p-2 text-brand-700">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="mt-3 block text-sm font-semibold text-gray-900">{app.label}</span>
              <span className="mt-1 block text-xs leading-5 text-gray-500">{app.meta}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
