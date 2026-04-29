import type { HTMLAttributes, ReactNode } from "react";

type SectionTone = "plain" | "muted" | "brand";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  description?: string;
  eyebrow?: string;
  title?: string;
  tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  plain: "bg-white",
  muted: "bg-gray-50",
  brand: "bg-brand-50",
};

export function Section({ children, className, description, eyebrow, title, tone = "plain", ...props }: SectionProps) {
  return (
    <section className={[toneClasses[tone], "py-8", className].filter(Boolean).join(" ")} {...props}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) ? (
          <div className="mb-6 max-w-3xl">
            {eyebrow ? <p className="text-xs font-semibold uppercase text-brand-700">{eyebrow}</p> : null}
            {title ? <h2 className="mt-2 text-xl font-semibold text-gray-900">{title}</h2> : null}
            {description ? <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
