import type { HTMLAttributes, ReactNode } from "react";

export interface PanelProps extends HTMLAttributes<HTMLElement> {
  actions?: ReactNode;
  children: ReactNode;
  description?: string;
  title?: string;
}

export function Panel({ actions, children, className, description, title, ...props }: PanelProps) {
  return (
    <section className={["overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs", className].filter(Boolean).join(" ")} {...props}>
      {(title || description || actions) ? (
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
          <div>
            {title ? <h3 className="text-sm font-semibold text-gray-900">{title}</h3> : null}
            {description ? <p className="mt-1 text-sm text-gray-500">{description}</p> : null}
          </div>
          {actions ? <div className="flex gap-2">{actions}</div> : null}
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}
