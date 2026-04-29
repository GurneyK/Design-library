export function SuggestionChips({ suggestions }: { suggestions: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          className="focus-ring rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-habibiXs hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
          key={suggestion}
          type="button"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
