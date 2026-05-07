import { ChevronDown, Factory, FlaskConical, Megaphone } from "lucide-react";
import { Badge } from "../badge/Badge";

const contexts = [
  { label: "Nexus", description: "Agent delivery", active: true, icon: Factory },
  { label: "Marketing", description: "Campaign work", icon: Megaphone },
  { label: "INCI", description: "Ingredient review", icon: FlaskConical },
];

export function ContextSwitcher() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-3 shadow-habibiXs">
      <button className="focus-ring flex w-full items-center justify-between gap-3 rounded-habibiMd border border-gray-200 bg-gray-50 px-3 py-2 text-left" type="button">
        <span>
          <span className="block text-xs font-medium text-gray-500">Current context</span>
          <span className="block text-sm font-semibold text-gray-900">Nexus workspace</span>
        </span>
        <ChevronDown aria-hidden="true" className="h-4 w-4 text-gray-500" />
      </button>
      <div className="mt-3 space-y-1">
        {contexts.map((context) => {
          const Icon = context.icon;
          return (
            <button
              className={[
                "focus-ring flex w-full items-center gap-3 rounded-habibiMd px-3 py-2 text-left",
                context.active ? "bg-brand-50 text-brand-800" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              ].join(" ")}
              key={context.label}
              type="button"
            >
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{context.label}</span>
                <span className="block text-xs text-gray-500">{context.description}</span>
              </span>
              {context.active ? <Badge variant="brand">Current</Badge> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
