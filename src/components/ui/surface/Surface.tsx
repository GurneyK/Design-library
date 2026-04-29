import type { HTMLAttributes, ReactNode } from "react";

type SurfaceVariant = "plain" | "raised" | "brand";
type SurfacePadding = "sm" | "md" | "lg";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: SurfacePadding;
  variant?: SurfaceVariant;
}

const variantClasses: Record<SurfaceVariant, string> = {
  plain: "border-gray-200 bg-white shadow-habibiXs",
  raised: "border-gray-200 bg-white shadow-habibiSm",
  brand: "border-brand-200 bg-brand-50 shadow-habibiXs",
};

const paddingClasses: Record<SurfacePadding, string> = {
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Surface({ children, className, padding = "md", variant = "plain", ...props }: SurfaceProps) {
  return (
    <div
      className={[
        "rounded-habibiLg border",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
