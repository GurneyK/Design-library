import { BarChart3, FileText, MessageSquareText, Settings } from "lucide-react";

export type MenuItem = {
  active?: boolean;
  label: string;
  meta?: string;
};

export interface MenuProps {
  items?: MenuItem[];
}

const defaultItems: MenuItem[] = [
  { active: true, label: "Analytics", meta: "Campaign and agent metrics" },
  { label: "Agent chat", meta: "Conversation workspace" },
  { label: "Sources", meta: "Citations and evidence" },
  { label: "Settings", meta: "Workspace preferences" },
];

const icons = [BarChart3, MessageSquareText, FileText, Settings];

export function Menu({ items = defaultItems }: MenuProps) {
  return (
    <div className="w-full max-w-sm rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs" role="menu">
      {items.map((item, index) => {
        const Icon = icons[index] ?? FileText;

        return (
          <button
            className={[
              "focus-ring flex w-full items-start gap-3 rounded-habibiMd px-3 py-2.5 text-left",
              item.active ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50",
            ].join(" ")}
            key={item.label}
            role="menuitem"
            type="button"
          >
            <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{item.label}</span>
              {item.meta ? <span className="mt-0.5 block text-xs leading-5 text-gray-500">{item.meta}</span> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
