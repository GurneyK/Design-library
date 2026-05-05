const stages = [
  { label: "Runs", value: "1,240", width: "w-full", tone: "bg-brand-700" },
  { label: "Passed", value: "982", width: "w-4/5", tone: "bg-brand-600" },
  { label: "Reviewed", value: "621", width: "w-3/5", tone: "bg-info-500" },
  { label: "Published", value: "408", width: "w-2/5", tone: "bg-success-500" },
];

export function FunnelChart() {
  return (
    <div aria-label="Funnel chart" className="space-y-3" role="img">
      {stages.map((stage) => (
        <div className="space-y-1.5" key={stage.label}>
          <div className="flex items-center justify-between gap-3 text-xs font-medium">
            <span className="text-gray-600">{stage.label}</span>
            <span className="text-gray-900">{stage.value}</span>
          </div>
          <div className="h-8 rounded-habibiMd bg-gray-100 p-1">
            <div className={["h-full rounded-habibiSm", stage.width, stage.tone].join(" ")} />
          </div>
        </div>
      ))}
    </div>
  );
}
