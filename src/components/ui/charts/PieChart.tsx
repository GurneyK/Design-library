const segments = [
  { color: "fill-brand-700", d: "M60 60 L60 14 A46 46 0 0 1 103 76 Z" },
  { color: "fill-info-500", d: "M60 60 L103 76 A46 46 0 0 1 43 103 Z" },
  { color: "fill-success-500", d: "M60 60 L43 103 A46 46 0 0 1 60 14 Z" },
];

export function PieChart() {
  return (
    <div className="flex items-center justify-center">
      <svg aria-label="Pie chart" className="h-48 w-48" role="img" viewBox="0 0 120 120">
        {segments.map((segment) => (
          <path className={segment.color} d={segment.d} key={segment.d} />
        ))}
        <circle className="fill-white" cx="60" cy="60" r="1.5" />
      </svg>
    </div>
  );
}
