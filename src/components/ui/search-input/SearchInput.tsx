import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function SearchInput({ className, invalid = false, ...props }: SearchInputProps) {
  return (
    <span className="relative block">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        className={[
          "focus-ring h-11 w-full rounded-habibiMd border bg-white py-2.5 pl-9 pr-3.5 text-sm text-gray-900 shadow-habibiXs placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          invalid ? "border-error-300 focus-visible:shadow-[var(--habibi-error-ring)]" : "border-gray-300 focus-visible:border-brand-300",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        type="search"
        {...props}
      />
    </span>
  );
}
