import type { InputHTMLAttributes } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Switch({ className, label, ...props }: SwitchProps) {
  return (
    <label className={["inline-flex cursor-pointer items-center gap-2", className].filter(Boolean).join(" ")}>
      <span className="relative inline-flex h-5 w-9 shrink-0">
        <input className="peer sr-only" type="checkbox" {...props} />
        <span className="h-5 w-9 rounded-full bg-gray-200 transition peer-checked:bg-brand-600 peer-focus-visible:shadow-[0_0_0_4px_#F4EBFF] peer-disabled:cursor-not-allowed peer-disabled:opacity-50" />
        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-habibiXs transition peer-checked:translate-x-4" />
      </span>
      {label ? <span className="text-sm text-gray-700">{label}</span> : null}
    </label>
  );
}
