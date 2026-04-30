import type { HTMLAttributes, ReactNode } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd
      className={[
        "inline-flex min-h-6 items-center justify-center rounded-habibiSm border border-gray-200 bg-white px-1.5 font-mono text-[11px] font-semibold text-gray-500 shadow-habibiXs",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </kbd>
  );
}
