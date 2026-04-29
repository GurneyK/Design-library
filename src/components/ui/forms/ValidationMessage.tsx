import { AlertCircle, CheckCircle2, Info } from "lucide-react";

type ValidationMessageTone = "error" | "success" | "info";

export interface ValidationMessageProps {
  children: string;
  tone?: ValidationMessageTone;
}

const toneClasses: Record<ValidationMessageTone, string> = {
  error: "text-error-700",
  success: "text-success-700",
  info: "text-info-700",
};

const icons = {
  error: AlertCircle,
  success: CheckCircle2,
  info: Info,
};

export function ValidationMessage({ children, tone = "error" }: ValidationMessageProps) {
  const Icon = icons[tone];

  return (
    <p className={["flex items-start gap-1.5 text-sm leading-5", toneClasses[tone]].join(" ")}>
      <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      {children}
    </p>
  );
}
