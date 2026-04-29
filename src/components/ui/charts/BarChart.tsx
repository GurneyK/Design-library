const values = [82, 124, 96, 148, 132, 172];

export function BarChart() {
  return (
    <svg aria-label="Bar chart" className="h-48 w-full" role="img" viewBox="0 0 360 180">
      {[30, 70, 110, 150].map((y) => (
        <line key={y} stroke="#F2F4F7" strokeWidth="1" x1="30" x2="340" y1={y} y2={y} />
      ))}
      {values.map((value, index) => {
        const height = value * 0.7;
        const x = 48 + index * 48;
        const y = 160 - height;
        return <rect fill={index === 5 ? "#6941C6" : "#9E77ED"} height={height} key={value} rx="6" width="26" x={x} y={y} />;
      })}
    </svg>
  );
}
