import type { ReactNode } from "react";

export interface FormFieldProps {
  children: ReactNode;
  description?: string;
  error?: string;
  htmlFor?: string;
  label: string;
  optional?: boolean;
}

export function FormField({ children, description, error, htmlFor, label, optional = false }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700" htmlFor={htmlFor}>
        {label}
        {optional ? <span className="font-normal text-gray-500"> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm leading-5 text-error-700">{error}</p>
      ) : description ? (
        <p className="text-sm leading-5 text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}
