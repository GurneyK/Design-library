import { Clock3 } from "lucide-react";

export interface TimestampProps {
  label?: string;
  value?: string;
}

export function Timestamp({ label = "Updated", value = "18 minutes ago" }: TimestampProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
      <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
      <span>{label}</span>
      <span className="text-gray-300">·</span>
      <time dateTime="2026-05-07T14:18:00-04:00">{value}</time>
    </span>
  );
}
