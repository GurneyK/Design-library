import { Download, Filter, RefreshCw, Search } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { IconButton } from "../icon-button/IconButton";

export function Toolbar() {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-3 shadow-habibiXs">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-habibiMd border border-gray-300 bg-white px-3 py-2 shadow-habibiXs">
          <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400" />
          <span className="truncate text-sm text-gray-500">Search runs, sources, or owners</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button leadingIcon={<Filter className="h-4 w-4" />} variant="secondaryGray">
            Filters
          </Button>
          <Badge variant="brand">Status: active</Badge>
          <IconButton icon={<RefreshCw className="h-4 w-4" />} label="Refresh" />
          <IconButton icon={<Download className="h-4 w-4" />} label="Export" />
        </div>
      </div>
    </div>
  );
}
