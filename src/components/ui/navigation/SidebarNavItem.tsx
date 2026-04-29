import { MessageSquareText } from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarNavItemProps {
  active?: boolean;
  badge?: ReactNode;
  icon?: ReactNode;
  label: string;
  meta?: string;
}

export function SidebarNavItem({ active = false, badge, icon = <MessageSquareText className="h-4 w-4" />, label, meta }: SidebarNavItemProps) {
  return (
    <button
      className={[
        "focus-ring flex w-full items-center justify-between gap-3 rounded-habibiMd px-3 py-2.5 text-left",
        active ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
      ].join(" ")}
      type="button"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="shrink-0">{icon}</span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">{label}</span>
          {meta ? <span className="block truncate text-xs text-gray-500">{meta}</span> : null}
        </span>
      </span>
      {badge ? <span className="shrink-0">{badge}</span> : null}
    </button>
  );
}
