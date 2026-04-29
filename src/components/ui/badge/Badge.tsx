import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "success" | "error" | "warning" | "brand" | "info" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  dot?: boolean;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, { badge: string; dot: string }> = {
  success: { badge: "bg-success-50 text-success-700", dot: "bg-success-500" },
  error: { badge: "bg-error-50 text-error-700", dot: "bg-error-500" },
  warning: { badge: "bg-warning-50 text-warning-700", dot: "bg-warning-500" },
  brand: { badge: "bg-brand-50 text-brand-700", dot: "bg-brand-500" },
  info: { badge: "bg-info-50 text-info-700", dot: "bg-info-500" },
  neutral: { badge: "bg-gray-100 text-gray-700", dot: "bg-gray-500" },
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Badge({ children, className, dot = false, variant = "neutral", ...props }: BadgeProps) {
  const styles = variantClasses[variant];

  return (
    <span
      className={joinClasses(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles.badge,
        className,
      )}
      {...props}
    >
      {dot ? <span aria-hidden="true" className={joinClasses("h-1.5 w-1.5 rounded-full", styles.dot)} /> : null}
      {children}
    </span>
  );
}
