import { Bell, HelpCircle, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar } from "../avatar/Avatar";
import { SearchInput } from "../search-input/SearchInput";

export interface TopbarProps {
  actions?: ReactNode;
  title?: string;
}

export function Topbar({ actions, title = "Nexus workspace" }: TopbarProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 rounded-habibiLg border border-gray-200 bg-white px-4 py-3 shadow-habibiXs">
      <div className="flex min-w-0 items-center gap-3">
        <button aria-label="Open navigation" className="focus-ring rounded-habibiMd p-2 text-gray-500 hover:bg-gray-50" type="button">
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">Design library reference</p>
        </div>
      </div>
      <div className="min-w-[220px] flex-1 sm:max-w-sm">
        <SearchInput aria-label="Search workspace" placeholder="Search" />
      </div>
      <div className="flex items-center gap-2">
        {actions ?? (
          <>
            <button aria-label="Help" className="focus-ring rounded-habibiMd p-2 text-gray-500 hover:bg-gray-50" type="button">
              <HelpCircle aria-hidden="true" className="h-5 w-5" />
            </button>
            <button aria-label="Notifications" className="focus-ring rounded-habibiMd p-2 text-gray-500 hover:bg-gray-50" type="button">
              <Bell aria-hidden="true" className="h-5 w-5" />
            </button>
            <Avatar alt="Gurney" initials="GK" />
          </>
        )}
      </div>
    </header>
  );
}
