import { CalendarDays, Filter, Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Select } from "../select/Select";

export function FilterBar() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-64 flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search runs, sources, or agents" />
        </div>
        <Select className="w-full sm:w-44" defaultValue="all">
          <option value="all">All statuses</option>
          <option value="running">Running</option>
          <option value="review">Needs review</option>
        </Select>
        <Button leadingIcon={<CalendarDays aria-hidden="true" className="h-4 w-4" />} type="button" variant="secondaryGray">
          Last 30 days
        </Button>
        <Button leadingIcon={<SlidersHorizontal aria-hidden="true" className="h-4 w-4" />} type="button" variant="secondaryGray">
          Filters
        </Button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
          <Filter aria-hidden="true" className="h-3.5 w-3.5" />
          Active
        </span>
        <Badge variant="brand">Marketing Agent</Badge>
        <Badge variant="info">North America</Badge>
        <Badge variant="success">Approved sources</Badge>
      </div>
    </section>
  );
}
