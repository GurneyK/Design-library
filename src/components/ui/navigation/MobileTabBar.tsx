import { BarChart3, Home, MessageSquareText, Search, Settings } from "lucide-react";

const tabs = [
  { active: true, icon: Home, label: "Home" },
  { active: false, icon: MessageSquareText, label: "Chat" },
  { active: false, icon: BarChart3, label: "Data" },
  { active: false, icon: Search, label: "Search" },
  { active: false, icon: Settings, label: "Settings" },
];

export function MobileTabBar() {
  return (
    <nav aria-label="Mobile navigation" className="mx-auto max-w-md rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <div className="grid grid-cols-5 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              className={[
                "focus-ring flex flex-col items-center gap-1 rounded-habibiMd px-2 py-2 text-xs font-semibold",
                tab.active ? "bg-brand-50 text-brand-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
              ].join(" ")}
              key={tab.label}
              type="button"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
