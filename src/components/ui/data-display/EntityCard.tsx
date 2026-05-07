import { ArrowUpRight, Building2, Users } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export function EntityCard() {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-habibiLg bg-brand-50 text-brand-700">
            <Building2 aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900">Beauty Intelligence</h3>
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-500">Shared workspace for analytics, claims support, and marketing agent review.</p>
          </div>
        </div>
        <Button size="sm" trailingIcon={<ArrowUpRight className="h-4 w-4" />} variant="secondaryGray">
          Open
        </Button>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Agents", value: "8" },
          { label: "Sources", value: "248" },
          { label: "Owners", value: "12" },
        ].map((item) => (
          <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={item.label}>
            <dt className="text-xs font-medium text-gray-500">{item.label}</dt>
            <dd className="mt-1 text-xl font-semibold text-gray-900">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <Users aria-hidden="true" className="h-4 w-4" />
        Product, Marketing, R&D
      </div>
    </article>
  );
}
