import type { ReactNode } from "react";

export interface FormSectionProps {
  children: ReactNode;
  description?: string;
  title: string;
}

export function FormSection({ children, description, title }: FormSectionProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {description ? <p className="mt-1 text-sm leading-6 text-gray-500">{description}</p> : null}
      </div>
      <div className="space-y-5 p-5">{children}</div>
    </section>
  );
}
