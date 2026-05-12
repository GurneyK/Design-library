import { FlaskConical, Gauge, Users } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { Progress } from "../progress/Progress";

export function ExperimentCard() {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
            <FlaskConical aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900">Prompt variant test</h3>
              <Badge variant="brand">Running</Badge>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600">Compares concise and evidence-forward answers for the marketing agent.</p>
          </div>
        </div>
        <Button size="sm" type="button" variant="secondaryColor">
          Open
        </Button>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gray-900">Sample coverage</p>
          <p className="text-sm font-semibold text-brand-700">68%</p>
        </div>
        <div className="mt-2">
          <Progress value={68} />
        </div>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-habibiMd bg-gray-50 p-3">
          <dt className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <Gauge aria-hidden="true" className="h-3.5 w-3.5" />
            Winning signal
          </dt>
          <dd className="mt-1 text-sm font-semibold text-gray-900">+8.4% source clarity</dd>
        </div>
        <div className="rounded-habibiMd bg-gray-50 p-3">
          <dt className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <Users aria-hidden="true" className="h-3.5 w-3.5" />
            Audience
          </dt>
          <dd className="mt-1 text-sm font-semibold text-gray-900">124 reviewers</dd>
        </div>
      </dl>
    </article>
  );
}
