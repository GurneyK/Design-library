import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid = false, ...props }: InputProps) {
  return (
    <input
      className={[
        "focus-ring h-10 w-full rounded-habibiMd border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-habibiXs placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
        invalid ? "border-error-300 focus-visible:shadow-[0_0_0_4px_#FEE4E2]" : "border-gray-300 focus-visible:border-brand-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
