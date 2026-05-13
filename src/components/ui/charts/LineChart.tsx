import { chartTokens } from "./chartTokens";

export function LineChart() {
  return (
    <svg aria-label="Line chart" className="h-48 w-full" role="img" viewBox="0 0 360 180">
      {[30, 70, 110, 150].map((y) => (
        <line key={y} stroke={chartTokens.grid} strokeWidth="1" x1="30" x2="340" y1={y} y2={y} />
      ))}
      <polyline
        fill="none"
        points="35,132 85,112 135,118 185,78 235,86 285,52 335,60"
        stroke={chartTokens.brand}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      {[["35", "132"], ["85", "112"], ["135", "118"], ["185", "78"], ["235", "86"], ["285", "52"], ["335", "60"]].map(
        ([cx, cy]) => (
          <circle cx={cx} cy={cy} fill="white" key={`${cx}-${cy}`} r="4" stroke={chartTokens.brand} strokeWidth="2" />
        ),
      )}
    </svg>
  );
}
