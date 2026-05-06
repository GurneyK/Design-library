type StatusDotTone = "success" | "warning" | "error" | "brand" | "neutral";

export interface StatusDotProps {
  label?: string;
  tone?: StatusDotTone;
}

const toneClasses: Record<StatusDotTone, string> = {
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  brand: "bg-brand-600",
  neutral: "bg-gray-400",
};

export function StatusDot({ label = "Active", tone = "success" }: StatusDotProps) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
      <span aria-hidden="true" className={["h-2.5 w-2.5 rounded-full", toneClasses[tone]].join(" ")} />
      {label}
    </span>
  );
}
