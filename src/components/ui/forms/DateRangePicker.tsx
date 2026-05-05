import { CalendarDays, MoveRight } from "lucide-react";

export interface DateRangePickerProps {
  end?: string;
  start?: string;
}

export function DateRangePicker({ end = "May 5, 2026", start = "Apr 5, 2026" }: DateRangePickerProps) {
  return (
    <button
      className="focus-ring flex w-full max-w-lg flex-wrap items-center justify-between gap-3 rounded-habibiMd border border-gray-300 bg-white px-3.5 py-3 text-left text-sm text-gray-900 shadow-habibiXs hover:bg-gray-50"
      type="button"
    >
      <span className="inline-flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="h-4 w-4 text-gray-400" />
        <span className="font-medium">{start}</span>
      </span>
      <MoveRight aria-hidden="true" className="h-4 w-4 text-gray-400" />
      <span className="font-medium">{end}</span>
    </button>
  );
}
