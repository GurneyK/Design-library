import { ShieldCheck } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Progress } from "../progress/Progress";

export type EvaluationMetric = {
  label: string;
  value: number;
};

export interface EvaluationScorecardProps {
  metrics?: EvaluationMetric[];
  score?: string;
}

const defaultMetrics: EvaluationMetric[] = [
  { label: "Answer quality", value: 87 },
  { label: "Source coverage", value: 92 },
  { label: "Policy checks", value: 96 },
];

export function EvaluationScorecard({ metrics = defaultMetrics, score = "91%" }: EvaluationScorecardProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-habibiMd bg-success-50 p-2 text-success-700">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Evaluation scorecard</h3>
            <p className="mt-1 text-sm leading-6 text-gray-500">Quality, source, and policy checks for the latest agent run.</p>
          </div>
        </div>
        <Badge variant="success">Overall {score}</Badge>
      </div>
      <div className="mt-5 space-y-4">
        {metrics.map((metric) => (
          <Progress key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>
    </section>
  );
}
