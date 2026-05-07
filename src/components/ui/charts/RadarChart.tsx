const rings = [
  "60,18 100,43 86,92 34,92 20,43",
  "60,32 88,49 78,83 42,83 32,49",
  "60,46 76,55 70,74 50,74 44,55",
];

const spokes = [
  ["60", "60", "60", "18"],
  ["60", "60", "100", "43"],
  ["60", "60", "86", "92"],
  ["60", "60", "34", "92"],
  ["60", "60", "20", "43"],
];

export function RadarChart() {
  return (
    <svg aria-label="Radar chart" className="h-52 w-full" role="img" viewBox="0 0 120 120">
      {rings.map((points) => (
        <polygon className="fill-none stroke-gray-200" key={points} points={points} strokeWidth="1" />
      ))}
      {spokes.map(([x1, y1, x2, y2]) => (
        <line className="stroke-gray-100" key={`${x2}-${y2}`} strokeWidth="1" x1={x1} x2={x2} y1={y1} y2={y2} />
      ))}
      <polygon
        className="fill-brand-100 stroke-brand-700"
        points="60,28 91,48 78,84 38,86 29,47"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      {[
        ["60", "28"],
        ["91", "48"],
        ["78", "84"],
        ["38", "86"],
        ["29", "47"],
      ].map(([cx, cy]) => (
        <circle className="fill-white stroke-brand-700" cx={cx} cy={cy} key={`${cx}-${cy}`} r="3" strokeWidth="2" />
      ))}
    </svg>
  );
}
