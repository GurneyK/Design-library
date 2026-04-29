import type { InputHTMLAttributes } from "react";

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Slider({ className, label, ...props }: SliderProps) {
  return (
    <label className={["block space-y-2", className].filter(Boolean).join(" ")}>
      {label ? <span className="text-sm font-medium text-gray-700">{label}</span> : null}
      <input
        className="h-2 w-full cursor-pointer accent-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        type="range"
        {...props}
      />
    </label>
  );
}
