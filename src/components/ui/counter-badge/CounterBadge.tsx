export interface CounterBadgeProps {
  count?: number;
  max?: number;
  tone?: "brand" | "neutral" | "error";
}

const toneClasses = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200",
  neutral: "bg-gray-100 text-gray-700 ring-gray-200",
  error: "bg-error-50 text-error-700 ring-error-100",
};

export function CounterBadge({ count = 12, max = 99, tone = "brand" }: CounterBadgeProps) {
  const label = count > max ? `${max}+` : String(count);

  return (
    <span className={["inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold ring-1", toneClasses[tone]].join(" ")}>
      {label}
    </span>
  );
}
