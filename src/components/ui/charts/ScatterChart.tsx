const points = [
  { x: 58, y: 126, size: 6 },
  { x: 96, y: 108, size: 8 },
  { x: 138, y: 116, size: 6 },
  { x: 176, y: 82, size: 10 },
  { x: 216, y: 92, size: 7 },
  { x: 258, y: 54, size: 9 },
  { x: 306, y: 66, size: 6 },
];

export function ScatterChart() {
  return (
    <svg aria-label="Scatter chart" className="h-48 w-full text-brand-700" role="img" viewBox="0 0 360 180">
      {[32, 70, 108, 146].map((y) => (
        <line className="stroke-gray-100" key={y} strokeWidth="1" x1="32" x2="340" y1={y} y2={y} />
      ))}
      <line className="stroke-gray-200" strokeWidth="1.5" x1="32" x2="32" y1="22" y2="150" />
      <line className="stroke-gray-200" strokeWidth="1.5" x1="32" x2="340" y1="150" y2="150" />
      <path className="stroke-info-500" d="M42 138 C112 122 138 104 184 88 C230 72 274 54 330 44" fill="none" strokeDasharray="5 6" strokeLinecap="round" strokeWidth="2" />
      {points.map((point) => (
        <circle
          className="fill-brand-600 stroke-white"
          cx={point.x}
          cy={point.y}
          key={`${point.x}-${point.y}`}
          r={point.size}
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}
