const tiles = [
  { label: "Analytics", className: "fill-brand-700", height: 96, width: 168, x: 18, y: 18 },
  { label: "Marketing", className: "fill-info-500", height: 96, width: 116, x: 194, y: 18 },
  { label: "INCI", className: "fill-success-500", height: 58, width: 118, x: 18, y: 122 },
  { label: "Ops", className: "fill-warning-500", height: 58, width: 82, x: 144, y: 122 },
  { label: "QA", className: "fill-brand-300", height: 58, width: 84, x: 234, y: 122 },
];

export function TreemapChart() {
  return (
    <svg aria-label="Treemap chart" className="h-48 w-full" role="img" viewBox="0 0 336 198">
      {tiles.map((tile) => (
        <g key={tile.label}>
          <rect className={tile.className} height={tile.height} rx="10" width={tile.width} x={tile.x} y={tile.y} />
          <text className="fill-white text-[11px] font-semibold" x={tile.x + 12} y={tile.y + 24}>
            {tile.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
