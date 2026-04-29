import type { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  shape?: "line" | "circle" | "block";
}

export function Skeleton({ className, shape = "line", ...props }: SkeletonProps) {
  const shapeClass =
    shape === "circle" ? "h-10 w-10 rounded-full" : shape === "block" ? "h-28 rounded-habibiLg" : "h-4 rounded-full";

  return (
    <div
      className={["animate-pulse bg-gray-200", shapeClass, className].filter(Boolean).join(" ")}
      aria-hidden="true"
      {...props}
    />
  );
}
