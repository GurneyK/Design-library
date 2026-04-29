import type { HTMLAttributes, ReactNode } from "react";

type StackGap = "xs" | "sm" | "md" | "lg";
type StackDirection = "vertical" | "horizontal";
type StackAlign = "start" | "center" | "end" | "stretch";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  align?: StackAlign;
  children: ReactNode;
  direction?: StackDirection;
  gap?: StackGap;
}

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export function Stack({ align = "stretch", children, className, direction = "vertical", gap = "md", ...props }: StackProps) {
  return (
    <div
      className={[
        "flex",
        direction === "horizontal" ? "flex-row flex-wrap" : "flex-col",
        gapClasses[gap],
        alignClasses[align],
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
