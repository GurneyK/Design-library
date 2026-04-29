import { Megaphone, X } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";

type BannerVariant = "info" | "success" | "warning" | "error";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  action?: ReactNode;
  children: ReactNode;
  dismissible?: boolean;
  title?: string;
  variant?: BannerVariant;
}

const styles: Record<BannerVariant, string> = {
  info: "border-brand-200 bg-brand-50 text-brand-900",
  success: "border-success-300 bg-success-50 text-success-700",
  warning: "border-warning-300 bg-warning-50 text-warning-700",
  error: "border-error-300 bg-error-50 text-error-700",
};

export function Banner({ action, children, className, dismissible = false, title, variant = "info", ...props }: BannerProps) {
  return (
    <div
      className={[
        "flex flex-col gap-3 rounded-habibiLg border px-5 py-4 text-sm leading-6 sm:flex-row sm:items-center sm:justify-between",
        styles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role={variant === "error" ? "alert" : "status"}
      {...props}
    >
      <div className="flex min-w-0 gap-3">
        <Megaphone className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          {title ? <p className="font-semibold">{title}</p> : null}
          <div>{children}</div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {action}
        {dismissible ? (
          <button className="focus-ring rounded-habibiSm p-1 hover:bg-white/50" type="button">
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss banner</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
