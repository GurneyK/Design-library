export function ChartTooltip({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex flex-col rounded-habibiSm bg-gray-900 px-3 py-2 text-white shadow-habibiMd">
      <span className="text-xs font-semibold">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}
