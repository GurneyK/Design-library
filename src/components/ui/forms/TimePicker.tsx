import { Clock3 } from "lucide-react";

export interface TimePickerProps {
  timezone?: string;
  value?: string;
}

export function TimePicker({ timezone = "ET", value = "09:30" }: TimePickerProps) {
  return (
    <button
      className="focus-ring flex h-11 w-full max-w-xs items-center justify-between rounded-habibiMd border border-gray-300 bg-white px-3.5 text-left text-sm text-gray-900 shadow-habibiXs hover:bg-gray-50"
      type="button"
    >
      <span className="inline-flex items-center gap-2">
        <Clock3 aria-hidden="true" className="h-4 w-4 text-gray-400" />
        <span className="font-medium">{value}</span>
      </span>
      <span className="text-xs font-semibold text-gray-500">{timezone}</span>
    </button>
  );
}
