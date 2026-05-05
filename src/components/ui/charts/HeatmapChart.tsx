const cells = [
  ["bg-brand-50", "bg-brand-100", "bg-brand-200", "bg-brand-300", "bg-brand-500", "bg-brand-200", "bg-brand-100"],
  ["bg-brand-100", "bg-brand-200", "bg-brand-300", "bg-brand-600", "bg-brand-700", "bg-brand-300", "bg-brand-100"],
  ["bg-brand-50", "bg-brand-100", "bg-brand-200", "bg-brand-300", "bg-brand-500", "bg-brand-600", "bg-brand-200"],
  ["bg-brand-25", "bg-brand-50", "bg-brand-100", "bg-brand-200", "bg-brand-300", "bg-brand-500", "bg-brand-300"],
];

export function HeatmapChart() {
  return (
    <div aria-label="Heatmap chart" className="space-y-3" role="img">
      <div className="grid grid-cols-7 gap-2">
        {cells.flatMap((row, rowIndex) =>
          row.map((tone, columnIndex) => (
            <div
              className={["aspect-square rounded-habibiSm border border-white shadow-habibiXs", tone].join(" ")}
              key={`${rowIndex}-${columnIndex}`}
            />
          )),
        )}
      </div>
      <div className="flex items-center justify-between text-xs font-medium text-gray-500">
        <span>Low activity</span>
        <span>High activity</span>
      </div>
    </div>
  );
}
