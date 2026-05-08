const steps = [
  { label: "Base", value: 84, type: "total" },
  { label: "New", value: 36, type: "increase" },
  { label: "Fixes", value: 18, type: "increase" },
  { label: "Drop", value: -24, type: "decrease" },
  { label: "Final", value: 114, type: "total" },
];

export function WaterfallChart() {
  let running = 0;

  return (
    <svg aria-label="Waterfall chart" className="h-48 w-full" role="img" viewBox="0 0 400 190">
      {[42, 82, 122, 162].map((y) => (
        <line className="stroke-gray-100" key={y} strokeWidth="1" x1="34" x2="370" y1={y} y2={y} />
      ))}
      {steps.map((step, index) => {
        const previous = running;
        running = step.type === "total" ? step.value : running + step.value;
        const start = step.type === "total" ? 0 : previous;
        const end = running;
        const top = Math.max(start, end);
        const bottom = Math.min(start, end);
        const x = 48 + index * 66;
        const y = 164 - top;
        const height = Math.max((top - bottom) * 0.95, 8);
        const fill =
          step.type === "total" ? "fill-brand-700" : step.type === "decrease" ? "fill-error-500" : "fill-success-500";

        return (
          <g key={step.label}>
            {index > 0 && (
              <line className="stroke-gray-300" strokeDasharray="4 4" strokeWidth="1.5" x1={x - 28} x2={x - 6} y1={164 - start} y2={164 - start} />
            )}
            <rect className={fill} height={height} rx="6" width="36" x={x} y={y} />
            <text className="fill-gray-500 text-[10px] font-medium" textAnchor="middle" x={x + 18} y="182">
              {step.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
