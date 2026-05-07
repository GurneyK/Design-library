import { Badge } from "../badge/Badge";
import { Checkbox } from "../checkbox/Checkbox";

export function Fieldset() {
  return (
    <fieldset className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <legend className="text-sm font-semibold text-gray-900">Agent permissions</legend>
          <p className="mt-1 text-sm leading-6 text-gray-500">Choose which actions this workspace agent can perform.</p>
        </div>
        <Badge variant="brand">3 options</Badge>
      </div>
      <div className="space-y-3">
        <Checkbox defaultChecked label="Search approved sources" />
        <Checkbox defaultChecked label="Draft workspace insights" />
        <Checkbox label="Publish without review" />
      </div>
    </fieldset>
  );
}
