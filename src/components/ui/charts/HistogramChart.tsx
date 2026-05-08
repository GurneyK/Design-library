const buckets = [
  { label: "0-1s", value: 34 },
  { label: "1-2s", value: 72 },
  { label: "2-3s", value: 128 },
  { label: "3-4s", value: 156 },
  { label: "4-5s", value: 108 },
  { label: "5s+", value: 48 },
];

export function HistogramChart() {
  return (
    <svg aria-label="Histogram chart" className="h-48 w-full text-brand-600" role="img" viewBox="0 0 380 180">
      {[40, 80, 120, 160].map((y) => (
        <line className="stroke-gray-100" key={y} strokeWidth="1" x1="36" x2="356" y1={y} y2={y} />
      ))}
      {buckets.map((bucket, index) => {
        const height = bucket.value * 0.78;
        const x = 48 + index * 48;
        const y = 160 - height;

        return (
          <g key={bucket.label}>
            <rect
              className={index === 3 ? "fill-brand-700" : "fill-brand-300"}
              height={height}
              rx="6"
              width="34"
              x={x}
              y={y}
            />
            <text className="fill-gray-500 text-[10px] font-medium" textAnchor="middle" x={x + 17} y="176">
              {bucket.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
