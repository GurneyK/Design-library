import type { ReactNode } from "react";

type FormGroupColumns = 1 | 2 | 3;

export interface FormGroupProps {
  children: ReactNode;
  columns?: FormGroupColumns;
}

const columnClasses: Record<FormGroupColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
};

export function FormGroup({ children, columns = 2 }: FormGroupProps) {
  return <div className={["grid gap-4", columnClasses[columns]].join(" ")}>{children}</div>;
}
