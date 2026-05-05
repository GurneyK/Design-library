export function GaugeChart() {
  return (
    <div className="relative mx-auto h-44 w-64">
      <svg aria-label="Gauge chart" className="h-full w-full" role="img" viewBox="0 0 220 150">
        <path className="stroke-gray-100" d="M36 122 A74 74 0 0 1 184 122" fill="none" strokeLinecap="round" strokeWidth="22" />
        <path className="stroke-success-500" d="M36 122 A74 74 0 0 1 92 50" fill="none" strokeLinecap="round" strokeWidth="22" />
        <path className="stroke-warning-500" d="M92 50 A74 74 0 0 1 146 58" fill="none" strokeLinecap="round" strokeWidth="22" />
        <path className="stroke-brand-700" d="M146 58 A74 74 0 0 1 184 122" fill="none" strokeLinecap="round" strokeWidth="22" />
        <line className="stroke-gray-900" strokeLinecap="round" strokeWidth="4" x1="110" x2="158" y1="122" y2="74" />
        <circle className="fill-white stroke-gray-900" cx="110" cy="122" r="7" strokeWidth="3" />
      </svg>
      <div className="absolute inset-x-0 bottom-2 text-center">
        <p className="text-2xl font-semibold text-gray-900">87</p>
        <p className="text-xs font-medium text-gray-500">Quality score</p>
      </div>
    </div>
  );
}
