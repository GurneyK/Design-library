export function RangeSlider() {
  return (
    <div className="max-w-xl space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-700">Confidence range</p>
        <p className="text-sm font-semibold text-gray-900">72% - 96%</p>
      </div>
      <div className="relative h-8">
        <div className="absolute left-0 right-0 top-3 h-2 rounded-full bg-gray-100" />
        <div className="absolute left-[22%] right-[4%] top-3 h-2 rounded-full bg-brand-700" />
        <button
          aria-label="Minimum confidence"
          className="focus-ring absolute left-[22%] top-1 h-6 w-6 rounded-full border-2 border-brand-700 bg-white shadow-habibiSm"
          type="button"
        />
        <button
          aria-label="Maximum confidence"
          className="focus-ring absolute right-[4%] top-1 h-6 w-6 rounded-full border-2 border-brand-700 bg-white shadow-habibiSm"
          type="button"
        />
      </div>
      <div className="flex justify-between text-xs font-medium text-gray-500">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
