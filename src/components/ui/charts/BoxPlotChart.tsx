const plots = [
  { label: "A", max: 142, median: 92, min: 48, q1: 72, q3: 116 },
  { label: "B", max: 128, median: 78, min: 36, q1: 58, q3: 104 },
  { label: "C", max: 158, median: 104, min: 52, q1: 86, q3: 132 },
  { label: "D", max: 118, median: 68, min: 28, q1: 48, q3: 96 },
];

function scale(value: number) {
  return 170 - value;
}

export function BoxPlotChart() {
  return (
    <svg aria-label="Box plot chart" className="h-48 w-full" role="img" viewBox="0 0 360 190">
      {[50, 90, 130, 170].map((y) => (
        <line className="stroke-gray-100" key={y} strokeWidth="1" x1="32" x2="332" y1={y} y2={y} />
      ))}
      {plots.map((plot, index) => {
        const x = 62 + index * 74;

        return (
          <g key={plot.label}>
            <line className="stroke-brand-700" strokeWidth="3" x1={x} x2={x} y1={scale(plot.max)} y2={scale(plot.min)} />
            <line className="stroke-brand-700" strokeWidth="3" x1={x - 13} x2={x + 13} y1={scale(plot.max)} y2={scale(plot.max)} />
            <line className="stroke-brand-700" strokeWidth="3" x1={x - 13} x2={x + 13} y1={scale(plot.min)} y2={scale(plot.min)} />
            <rect
              className="fill-brand-100 stroke-brand-700"
              height={scale(plot.q1) - scale(plot.q3)}
              rx="8"
              strokeWidth="2"
              width="44"
              x={x - 22}
              y={scale(plot.q3)}
            />
            <line className="stroke-brand-700" strokeWidth="3" x1={x - 22} x2={x + 22} y1={scale(plot.median)} y2={scale(plot.median)} />
            <text className="fill-gray-500 text-[10px] font-medium" textAnchor="middle" x={x} y="184">
              {plot.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
