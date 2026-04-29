import { AlertCircle, CheckCircle2, Info, Loader2, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

type ToastVariant = "success" | "error" | "warning" | "info" | "loading";

export interface ToastProps {
  children: ReactNode;
  title: string;
  variant?: ToastVariant;
}

const styles: Record<ToastVariant, { box: string; icon: ReactNode }> = {
  success: {
    box: "border-success-300 bg-white text-gray-900",
    icon: <CheckCircle2 className="h-5 w-5 text-success-600" />,
  },
  error: {
    box: "border-error-300 bg-white text-gray-900",
    icon: <AlertCircle className="h-5 w-5 text-error-600" />,
  },
  warning: {
    box: "border-warning-300 bg-white text-gray-900",
    icon: <TriangleAlert className="h-5 w-5 text-warning-600" />,
  },
  info: {
    box: "border-brand-200 bg-white text-gray-900",
    icon: <Info className="h-5 w-5 text-brand-700" />,
  },
  loading: {
    box: "border-gray-200 bg-white text-gray-900",
    icon: <Loader2 className="h-5 w-5 animate-spin text-brand-700" />,
  },
};

export function Toast({ children, title, variant = "info" }: ToastProps) {
  const style = styles[variant];

  return (
    <div className={["flex w-full max-w-sm gap-3 rounded-habibiLg border p-4 shadow-habibiMd", style.box].join(" ")} role="status">
      <span className="shrink-0">{style.icon}</span>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        <div className="mt-1 text-sm leading-5 text-gray-500">{children}</div>
      </div>
    </div>
  );
}
