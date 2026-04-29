import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  description?: string;
  label: string;
}

export function Checkbox({ className, description, label, ...props }: CheckboxProps) {
  return (
    <label className={["flex cursor-pointer gap-2.5", className].filter(Boolean).join(" ")}>
      <span className="relative mt-0.5 inline-flex h-4 w-4 shrink-0">
        <input className="peer sr-only" type="checkbox" {...props} />
        <span className="h-4 w-4 rounded border-2 border-gray-300 bg-white peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-focus-visible:shadow-[0_0_0_4px_#F4EBFF] peer-disabled:cursor-not-allowed peer-disabled:opacity-50" />
        <Check className="pointer-events-none absolute left-0.5 top-0.5 hidden h-3 w-3 text-brand-600 peer-checked:block" />
      </span>
      <span>
        <span className="block text-sm font-medium text-gray-700">{label}</span>
        {description ? <span className="block text-sm leading-5 text-gray-500">{description}</span> : null}
      </span>
    </label>
  );
}
