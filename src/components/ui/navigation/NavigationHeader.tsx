import { Bell, Search, Settings } from "lucide-react";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

export function NavigationHeader() {
  return (
    <header className="rounded-habibiLg border border-gray-200 bg-white px-4 py-3 shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">Design Library</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900">H3L workspace</h3>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <label className="hidden min-w-0 max-w-xs flex-1 items-center gap-2 rounded-habibiMd border border-gray-300 bg-white px-3 py-2 text-sm text-gray-500 shadow-habibiXs sm:flex">
            <Search aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span className="truncate">Search components, agents, templates</span>
          </label>
          <IconButton icon={<Bell aria-hidden="true" className="h-4 w-4" />} label="Open notifications" />
          <IconButton icon={<Settings aria-hidden="true" className="h-4 w-4" />} label="Open settings" variant="ghost" />
          <div className="flex items-center gap-2 rounded-habibiMd border border-gray-200 bg-gray-50 px-2 py-1.5">
            <Avatar alt="Gurney" initials="GK" size="sm" status="online" />
            <Badge variant="success">Live</Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
