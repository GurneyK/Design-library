import { Clock3, ExternalLink } from "lucide-react";
import { Button } from "../button/Button";
import { Progress } from "../progress/Progress";
import { RunStatusPill } from "./RunStatusPill";

export interface RunCardProps {
  description?: string;
  progress?: number;
  status?: "queued" | "running" | "complete" | "failed";
  title: string;
}

export function RunCard({
  description = "Evaluating generated answers against source coverage, quality, and policy checks.",
  progress = 72,
  status = "running",
  title,
}: RunCardProps) {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">{description}</p>
        </div>
        <RunStatusPill status={status} />
      </div>
      <div className="mt-5">
        <Progress label="Run progress" value={progress} />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
          <Clock3 aria-hidden="true" className="h-4 w-4" />
          Started 8 min ago
        </span>
        <Button size="sm" trailingIcon={<ExternalLink className="h-4 w-4" />} variant="secondaryGray">
          Open run
        </Button>
      </div>
    </article>
  );
}
