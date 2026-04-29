import type { HTMLAttributes, ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({ children, className, size = "lg", ...props }: ContainerProps) {
  return (
    <div className={["mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}
