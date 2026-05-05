import { BarChart3, Bot, Database, Home, Settings } from "lucide-react";

const items = [
  { active: true, icon: Home, label: "Home" },
  { icon: Bot, label: "Agents" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Database, label: "Sources" },
  { icon: Settings, label: "Settings" },
];

export function NavRail() {
  return (
    <nav aria-label="Primary" className="flex w-20 flex-col items-center gap-2 rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            aria-label={item.label}
            className={[
              "focus-ring flex h-12 w-12 items-center justify-center rounded-habibiMd",
              item.active ? "bg-brand-50 text-brand-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
            ].join(" ")}
            key={item.label}
            type="button"
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
          </button>
        );
      })}
    </nav>
  );
}
