import type { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ className, orientation = "horizontal", ...props }: DividerProps) {
  return (
    <div
      aria-orientation={orientation}
      className={[
        "shrink-0 bg-gray-200",
        orientation === "horizontal" ? "h-px w-full" : "h-5 w-px",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="separator"
      {...props}
    />
  );
}
