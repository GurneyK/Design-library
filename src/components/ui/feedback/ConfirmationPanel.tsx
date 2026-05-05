import { TriangleAlert } from "lucide-react";
import { Button } from "../button/Button";

type ConfirmationTone = "warning" | "danger" | "info";

export interface ConfirmationPanelProps {
  description?: string;
  tone?: ConfirmationTone;
  title: string;
}

const toneClasses: Record<ConfirmationTone, string> = {
  warning: "border-warning-300 bg-warning-50 text-warning-700",
  danger: "border-error-300 bg-error-50 text-error-700",
  info: "border-brand-200 bg-brand-50 text-brand-700",
};

export function ConfirmationPanel({
  description = "Review the consequences before confirming this action.",
  tone = "warning",
  title,
}: ConfirmationPanelProps) {
  return (
    <section className={["rounded-habibiLg border p-5", toneClasses[tone]].join(" ")}>
      <div className="flex items-start gap-3">
        <div className="rounded-habibiMd bg-white/70 p-2">
          <TriangleAlert aria-hidden="true" className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button size="sm" variant="secondaryGray">Cancel</Button>
            <Button size="sm" variant={tone === "danger" ? "destructive" : "primary"}>Confirm</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
