import { ExternalLink } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type CitationChipTone = "neutral" | "brand" | "success";

export interface CitationChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  confidence?: string;
  index?: number;
  label: string;
  source?: string;
  tone?: CitationChipTone;
}

const toneClasses: Record<CitationChipTone, string> = {
  neutral: "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
  brand: "border-brand-200 bg-brand-50 text-brand-700 hover:bg-brand-100",
  success: "border-success-100 bg-success-50 text-success-700 hover:bg-success-100",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function CitationChip({
  className,
  confidence,
  index,
  label,
  source,
  tone = "neutral",
  ...props
}: CitationChipProps) {
  return (
    <button
      className={joinClasses(
        "focus-ring inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-habibiXs transition-colors",
        toneClasses[tone],
        className,
      )}
      type="button"
      {...props}
    >
      {index ? (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold text-gray-600">
          {index}
        </span>
      ) : null}
      <span className="min-w-0 truncate">{label}</span>
      {source ? <span className="hidden text-gray-400 sm:inline">{source}</span> : null}
      {confidence ? <span className="text-gray-400">{confidence}</span> : null}
      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
    </button>
  );
}
