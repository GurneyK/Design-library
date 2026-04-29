export interface ProgressProps {
  label?: string;
  max?: number;
  value: number;
}

export function Progress({ label, max = 100, value }: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-gray-700">{label}</span>
          <span className="font-mono text-xs text-gray-500">{Math.round(percent)}%</span>
        </div>
      ) : null}
      <div
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value}
        className="h-2 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
      >
        <div className="h-full rounded-full bg-brand-700 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
