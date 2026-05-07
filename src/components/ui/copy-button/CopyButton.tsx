import { Check, Copy } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  copied?: boolean;
  label?: string;
}

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function CopyButton({ className, copied = false, label = "Copy", ...props }: CopyButtonProps) {
  const Icon = copied ? Check : Copy;

  return (
    <button
      className={joinClasses(
        "focus-ring inline-flex h-9 items-center gap-2 rounded-habibiMd border px-3 text-sm font-semibold shadow-habibiXs transition-colors",
        copied
          ? "border-success-200 bg-success-50 text-success-700"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        className,
      )}
      type="button"
      {...props}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {copied ? "Copied" : label}
    </button>
  );
}
