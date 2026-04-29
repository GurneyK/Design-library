import { Loader2 } from "lucide-react";

export interface SpinnerProps {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

export function Spinner({ label = "Loading", size = "md" }: SpinnerProps) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600" role="status">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-brand-700`} />
      {label ? <span>{label}</span> : <span className="sr-only">Loading</span>}
    </span>
  );
}
