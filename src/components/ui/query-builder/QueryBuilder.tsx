import { Plus, X } from "lucide-react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Select } from "../select/Select";

export function QueryBuilder() {
  return (
    <section className="w-full max-w-4xl rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Filter rules</h3>
          <p className="mt-1 text-sm text-gray-500">Build reusable filters for runs, sources, and review queues.</p>
        </div>
        <Button leadingIcon={<Plus aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="secondaryGray">
          Add rule
        </Button>
      </div>
      <div className="mt-4 space-y-3">
        <Rule field="Status" operator="is" value="Needs review" />
        <Rule field="Market" operator="contains" value="North America" />
      </div>
    </section>
  );
}

function Rule({ field, operator, value }: { field: string; operator: string; value: string }) {
  return (
    <div className="grid gap-2 rounded-habibiMd border border-gray-200 bg-gray-50 p-3 md:grid-cols-[1fr_1fr_minmax(0,1.5fr)_auto]">
      <Select defaultValue={field}>
        <option>{field}</option>
        <option>Agent</option>
        <option>Source</option>
      </Select>
      <Select defaultValue={operator}>
        <option>{operator}</option>
        <option>is not</option>
        <option>contains</option>
      </Select>
      <Input defaultValue={value} />
      <Button aria-label="Remove rule" leadingIcon={<X aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="tertiaryGray" />
    </div>
  );
}
