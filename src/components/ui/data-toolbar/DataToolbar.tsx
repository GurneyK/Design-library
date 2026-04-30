import { Download, Filter, RefreshCw } from "lucide-react";
import { Button } from "../button/Button";
import { IconButton } from "../icon-button/IconButton";
import { SearchInput } from "../search-input/SearchInput";
import { Tag } from "../tag/Tag";

export interface DataToolbarProps {
  resultCount?: string;
}

export function DataToolbar({ resultCount = "148 results" }: DataToolbarProps) {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <SearchInput aria-label="Search table" placeholder="Search agents, runs, or sources" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button leadingIcon={<Filter className="h-4 w-4" />} variant="secondaryGray">
            Filters
          </Button>
          <IconButton icon={<RefreshCw className="h-4 w-4" />} label="Refresh data" />
          <IconButton icon={<Download className="h-4 w-4" />} label="Export data" />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <Tag removable tone="brand">Status: active</Tag>
          <Tag removable>Owner: Marketing</Tag>
        </div>
        <p className="text-sm text-gray-500">{resultCount}</p>
      </div>
    </div>
  );
}
