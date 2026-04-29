import type { ReactNode } from "react";

export interface ChartContainerProps {
  children: ReactNode;
  description?: string;
  title: string;
  toolbar?: ReactNode;
}

export function ChartContainer({ children, description, title, toolbar }: ChartContainerProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          {description ? <p className="mt-1 text-sm leading-5 text-gray-500">{description}</p> : null}
        </div>
        {toolbar ? <div className="shrink-0">{toolbar}</div> : null}
      </div>
      {children}
    </section>
  );
}
