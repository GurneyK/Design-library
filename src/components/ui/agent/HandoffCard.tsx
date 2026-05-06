import { ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export function HandoffCard() {
  return (
    <article className="rounded-habibiLg border border-warning-300 bg-warning-50 p-5 shadow-habibiXs">
      <div className="flex items-start gap-3">
        <div className="rounded-habibiLg bg-white/70 p-3 text-warning-700">
          <UserCheck aria-hidden="true" className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-warning-900">Human review required</h3>
            <Badge variant="warning">Approval gate</Badge>
          </div>
          <p className="mt-2 text-sm leading-6 text-warning-700">
            The answer contains a claim with medium confidence. Send it to a reviewer before publishing.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button leadingIcon={<ShieldCheck aria-hidden="true" className="h-4 w-4" />} size="sm" type="button">
              Request review
            </Button>
            <Button trailingIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="secondaryGray">
              Open details
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
