export function AreaChart() {
  return (
    <svg aria-label="Area chart" className="h-48 w-full" role="img" viewBox="0 0 360 180">
      {[30, 70, 110, 150].map((y) => (
        <line key={y} stroke="#F2F4F7" strokeWidth="1" x1="30" x2="340" y1={y} y2={y} />
      ))}
      <path d="M35 140 L85 108 L135 118 L185 72 L235 84 L285 50 L335 58 L335 160 L35 160 Z" fill="#6941C6" opacity="0.1" />
      <polyline
        fill="none"
        points="35,140 85,108 135,118 185,72 235,84 285,50 335,58"
        stroke="#6941C6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}
