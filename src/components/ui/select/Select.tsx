import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export function Select({ children, className, invalid = false, ...props }: SelectProps) {
  return (
    <span className="relative block">
      <select
        className={[
          "focus-ring h-10 w-full appearance-none rounded-habibiMd border bg-white px-3.5 py-2.5 pr-9 text-sm text-gray-900 shadow-habibiXs disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          invalid ? "border-error-300 focus-visible:shadow-[0_0_0_4px_#FEE4E2]" : "border-gray-300 focus-visible:border-brand-300",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
      />
    </span>
  );
}
