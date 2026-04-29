import { BarChart3, Home, MessageSquareText, Settings } from "lucide-react";

export type SidebarItem = {
  active?: boolean;
  label: string;
  meta?: string;
};

export interface SidebarProps {
  items?: SidebarItem[];
  title?: string;
}

const defaultItems: SidebarItem[] = [
  { active: true, label: "Overview", meta: "Workspace home" },
  { label: "Agent chat", meta: "Conversations" },
  { label: "Analytics", meta: "Reports" },
  { label: "Settings", meta: "Admin" },
];

const icons = [Home, MessageSquareText, BarChart3, Settings];

export function Sidebar({ items = defaultItems, title = "Design Library" }: SidebarProps) {
  return (
    <aside className="w-full max-w-xs rounded-habibiLg border border-gray-200 bg-white p-3 shadow-habibiXs">
      <div className="border-b border-gray-200 px-2 pb-3">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-1 text-xs text-gray-500">Workspace navigation</p>
      </div>
      <nav aria-label={title} className="mt-3 space-y-1">
        {items.map((item, index) => {
          const Icon = icons[index] ?? Home;

          return (
            <button
              className={[
                "focus-ring flex w-full items-center gap-3 rounded-habibiMd px-3 py-2.5 text-left",
                item.active ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50",
              ].join(" ")}
              key={item.label}
              type="button"
            >
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{item.label}</span>
                {item.meta ? <span className="block truncate text-xs text-gray-500">{item.meta}</span> : null}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
