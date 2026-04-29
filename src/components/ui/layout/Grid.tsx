import type { HTMLAttributes, ReactNode } from "react";

type GridColumns = 1 | 2 | 3 | 4;
type GridGap = "sm" | "md" | "lg";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns?: GridColumns;
  gap?: GridGap;
}

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
};

const gapClasses: Record<GridGap, string> = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

export function Grid({ children, className, columns = 3, gap = "md", ...props }: GridProps) {
  return (
    <div className={["grid", columnClasses[columns], gapClasses[gap], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}
