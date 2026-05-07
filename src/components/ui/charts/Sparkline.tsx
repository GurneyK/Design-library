export function Sparkline() {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Weekly usage</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">24.8k</p>
        </div>
        <span className="rounded-full bg-success-50 px-2 py-1 text-xs font-semibold text-success-700">+8.4%</span>
      </div>
      <svg aria-label="Sparkline chart" className="mt-4 h-16 w-full" role="img" viewBox="0 0 240 64">
        <path
          className="fill-brand-50"
          d="M4 52 L34 44 L64 48 L94 30 L124 34 L154 18 L184 26 L236 14 L236 64 L4 64 Z"
        />
        <polyline
          className="fill-none stroke-brand-700"
          points="4,52 34,44 64,48 94,30 124,34 154,18 184,26 236,14"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
