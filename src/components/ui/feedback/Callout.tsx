import { Lightbulb, ShieldAlert } from "lucide-react";
import { Badge } from "../badge/Badge";

export interface CalloutProps {
  children?: string;
  title?: string;
  tone?: "tip" | "policy";
}

export function Callout({
  children = "Use approved source material before publishing generated content to a shared workspace.",
  title = "Source guidance",
  tone = "tip",
}: CalloutProps) {
  const Icon = tone === "policy" ? ShieldAlert : Lightbulb;

  return (
    <aside className={["rounded-habibiLg border p-5", tone === "policy" ? "border-warning-300 bg-warning-50" : "border-brand-200 bg-brand-50"].join(" ")}>
      <div className="flex items-start gap-3">
        <div className={["rounded-habibiMd bg-white/70 p-2", tone === "policy" ? "text-warning-700" : "text-brand-700"].join(" ")}>
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={["text-sm font-semibold", tone === "policy" ? "text-warning-900" : "text-brand-900"].join(" ")}>{title}</h3>
            <Badge variant={tone === "policy" ? "warning" : "brand"}>{tone === "policy" ? "Policy" : "Tip"}</Badge>
          </div>
          <p className={["mt-2 text-sm leading-6", tone === "policy" ? "text-warning-700" : "text-brand-800"].join(" ")}>{children}</p>
        </div>
      </div>
    </aside>
  );
}
