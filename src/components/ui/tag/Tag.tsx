import { X } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";

type TagTone = "neutral" | "brand" | "success" | "warning" | "error";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  removable?: boolean;
  tone?: TagTone;
}

const toneClasses: Record<TagTone, string> = {
  neutral: "border-gray-200 bg-white text-gray-700",
  brand: "border-brand-200 bg-brand-50 text-brand-700",
  success: "border-success-100 bg-success-50 text-success-700",
  warning: "border-warning-100 bg-warning-50 text-warning-700",
  error: "border-error-100 bg-error-50 text-error-700",
};

export function Tag({ children, className, removable = false, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-habibiSm border px-2.5 py-1 text-xs font-medium",
        toneClasses[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
      {removable ? (
        <button aria-label={`Remove ${children}`} className="focus-ring rounded p-0.5 hover:bg-white/70" type="button">
          <X aria-hidden="true" className="h-3 w-3" />
        </button>
      ) : null}
    </span>
  );
}
