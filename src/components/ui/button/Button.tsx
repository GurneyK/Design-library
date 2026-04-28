import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondaryColor"
  | "secondaryGray"
  | "tertiaryColor"
  | "tertiaryGray"
  | "destructive";

type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
}

const baseClasses =
  "focus-ring inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-habibiMd font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-brand-700 bg-brand-700 text-white shadow-habibiXs hover:bg-brand-600 hover:border-brand-600 active:bg-brand-800",
  secondaryColor:
    "border border-brand-200 bg-brand-50 text-brand-700 shadow-habibiXs hover:bg-brand-100 active:bg-brand-200",
  secondaryGray:
    "border border-gray-300 bg-white text-gray-700 shadow-habibiXs hover:bg-gray-50 active:bg-gray-100",
  tertiaryColor:
    "border border-transparent bg-transparent text-brand-700 hover:bg-brand-50 active:bg-brand-100",
  tertiaryGray:
    "border border-transparent bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100",
  destructive:
    "border border-error-600 bg-error-600 text-white shadow-habibiXs hover:bg-error-700 hover:border-error-700 active:bg-error-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-[18px] text-sm",
  lg: "h-11 px-5 text-base",
  icon: "h-10 w-10 p-0 text-sm",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  disabled,
  leadingIcon,
  loading = false,
  size = "md",
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isIconOnly = size === "icon";
  const showLeading = loading ? (
    <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
  ) : (
    leadingIcon
  );

  return (
    <button
      className={joinClasses(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {showLeading}
      {!isIconOnly && children}
      {!loading && trailingIcon}
    </button>
  );
}
