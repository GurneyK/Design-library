export type Segment = {
  active?: boolean;
  label: string;
  value: string;
};

export interface SegmentedControlProps {
  label?: string;
  segments?: Segment[];
}

const defaultSegments: Segment[] = [
  { active: true, label: "Components", value: "components" },
  { label: "Templates", value: "templates" },
  { label: "Agents", value: "agents" },
];

export function SegmentedControl({ label = "View", segments = defaultSegments }: SegmentedControlProps) {
  return (
    <div>
      <span className="sr-only">{label}</span>
      <div className="inline-grid rounded-habibiMd bg-gray-100 p-1 text-sm font-semibold text-gray-600" style={{ gridTemplateColumns: `repeat(${segments.length}, minmax(0, 1fr))` }}>
        {segments.map((segment) => (
          <button
            aria-pressed={segment.active}
            className={[
              "focus-ring rounded-habibiSm px-3 py-2 transition-colors",
              segment.active ? "bg-white text-gray-900 shadow-habibiXs" : "hover:text-gray-900",
            ].join(" ")}
            key={segment.value}
            type="button"
          >
            {segment.label}
          </button>
        ))}
      </div>
    </div>
  );
}
