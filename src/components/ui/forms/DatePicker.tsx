import { CalendarDays } from "lucide-react";

export interface DatePickerProps {
  value?: string;
}

export function DatePicker({ value = "Apr 29, 2026" }: DatePickerProps) {
  return (
    <button className="focus-ring flex h-11 w-full max-w-xs items-center justify-between rounded-habibiMd border border-gray-300 bg-white px-3.5 text-left text-sm text-gray-900 shadow-habibiXs hover:bg-gray-50" type="button">
      <span>{value}</span>
      <CalendarDays aria-hidden="true" className="h-4 w-4 text-gray-400" />
    </button>
  );
}
