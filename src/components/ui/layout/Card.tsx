import type { HTMLAttributes, ReactNode } from "react";

type CardTone = "plain" | "brand" | "muted";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  footer?: ReactNode;
  title?: string;
  tone?: CardTone;
}

const toneClasses: Record<CardTone, string> = {
  plain: "border-gray-200 bg-white",
  brand: "border-brand-200 bg-brand-50",
  muted: "border-gray-200 bg-gray-50",
};

export function Card({ children, className, footer, title, tone = "plain", ...props }: CardProps) {
  return (
    <article className={["rounded-habibiLg border p-5 shadow-habibiXs", toneClasses[tone], className].filter(Boolean).join(" ")} {...props}>
      {title ? <h3 className="mb-3 text-sm font-semibold text-gray-900">{title}</h3> : null}
      <div className="text-sm leading-6 text-gray-600">{children}</div>
      {footer ? <div className="mt-4 border-t border-gray-200 pt-4">{footer}</div> : null}
    </article>
  );
}
