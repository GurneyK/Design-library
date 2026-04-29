export interface ChartLegendItem {
  color: string;
  label: string;
}

export function ChartLegend({ items }: { items: ChartLegendItem[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {items.map((item) => (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700" key={item.label}>
          <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
