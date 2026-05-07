const bars = [
  { label: "Mon", segments: ["w-7/12 bg-brand-700", "w-3/12 bg-info-500", "w-2/12 bg-success-500"] },
  { label: "Tue", segments: ["w-6/12 bg-brand-700", "w-4/12 bg-info-500", "w-2/12 bg-success-500"] },
  { label: "Wed", segments: ["w-8/12 bg-brand-700", "w-2/12 bg-info-500", "w-2/12 bg-success-500"] },
  { label: "Thu", segments: ["w-5/12 bg-brand-700", "w-5/12 bg-info-500", "w-2/12 bg-success-500"] },
];

export function StackedBarChart() {
  return (
    <div aria-label="Stacked bar chart" className="space-y-4" role="img">
      {bars.map((bar) => (
        <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-3" key={bar.label}>
          <span className="text-xs font-medium text-gray-500">{bar.label}</span>
          <div className="flex h-8 overflow-hidden rounded-habibiMd bg-gray-100">
            {bar.segments.map((segment, index) => (
              <span className={segment} key={`${bar.label}-${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
