import { AlertCircle, CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";

type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dismissible?: boolean;
  title?: string;
  variant?: AlertVariant;
}

const styles: Record<AlertVariant, { box: string; icon: string; iconNode: ReactNode }> = {
  success: {
    box: "border-success-300 bg-success-50 text-success-700",
    icon: "text-success-600",
    iconNode: <CheckCircle2 className="h-4 w-4" />,
  },
  error: {
    box: "border-error-300 bg-error-50 text-error-700",
    icon: "text-error-600",
    iconNode: <AlertCircle className="h-4 w-4" />,
  },
  warning: {
    box: "border-warning-300 bg-warning-50 text-warning-700",
    icon: "text-warning-600",
    iconNode: <TriangleAlert className="h-4 w-4" />,
  },
  info: {
    box: "border-brand-200 bg-brand-50 text-brand-700",
    icon: "text-brand-600",
    iconNode: <Info className="h-4 w-4" />,
  },
};

export function Alert({ children, className, dismissible = false, title, variant = "info", ...props }: AlertProps) {
  const style = styles[variant];

  return (
    <div
      className={["flex gap-3 rounded-habibiMd border px-4 py-3 text-sm leading-6", style.box, className]
        .filter(Boolean)
        .join(" ")}
      role={variant === "error" ? "alert" : "status"}
      {...props}
    >
      <span className={["mt-0.5 shrink-0", style.icon].join(" ")}>{style.iconNode}</span>
      <div className="min-w-0 flex-1">
        {title ? <p className="font-semibold">{title}</p> : null}
        <div>{children}</div>
      </div>
      {dismissible ? (
        <button className="focus-ring -mr-1 mt-0.5 rounded-habibiSm p-1 hover:bg-white/50" type="button">
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss alert</span>
        </button>
      ) : null}
    </div>
  );
}
