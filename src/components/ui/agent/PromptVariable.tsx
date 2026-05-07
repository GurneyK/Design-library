import { Braces, X } from "lucide-react";

const variables = [
  { label: "region", value: "North America" },
  { label: "timeframe", value: "Last 30 days" },
  { label: "source_set", value: "Campaign evidence" },
];

export function PromptVariable() {
  return (
    <div className="flex flex-wrap gap-2">
      {variables.map((variable) => (
        <span
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-habibiXs"
          key={variable.label}
        >
          <Braces aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{variable.label}</span>
          <span className="text-brand-400">=</span>
          <span className="truncate text-brand-900">{variable.value}</span>
          <button className="focus-ring rounded-full text-brand-500 hover:text-brand-800" type="button">
            <X aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="sr-only">Remove {variable.label}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
