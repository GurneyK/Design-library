export function DonutChart() {
  return (
    <div className="relative mx-auto h-48 w-48">
      <svg aria-label="Donut chart" className="h-full w-full -rotate-90" role="img" viewBox="0 0 120 120">
        <circle cx="60" cy="60" fill="none" r="42" stroke="#F2F4F7" strokeWidth="18" />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="42"
          stroke="#6941C6"
          strokeDasharray="182 264"
          strokeLinecap="round"
          strokeWidth="18"
        />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="42"
          stroke="#2E90FA"
          strokeDasharray="58 264"
          strokeDashoffset="-188"
          strokeLinecap="round"
          strokeWidth="18"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-gray-900">69%</span>
        <span className="text-xs font-medium text-gray-500">Complete</span>
      </div>
    </div>
  );
}
