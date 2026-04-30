import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary: "border-brand-700 bg-brand-700 text-white shadow-habibiXs hover:bg-brand-600",
  secondary: "border-gray-300 bg-white text-gray-700 shadow-habibiXs hover:bg-gray-50",
  ghost: "border-transparent bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700",
  destructive: "border-error-600 bg-error-600 text-white shadow-habibiXs hover:bg-error-700",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-11 w-11",
};

export function IconButton({ className, icon, label, size = "md", variant = "secondary", ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={[
        "focus-ring inline-flex shrink-0 items-center justify-center rounded-habibiMd border transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      {...props}
    >
      {icon}
    </button>
  );
}
