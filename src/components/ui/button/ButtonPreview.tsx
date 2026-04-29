import { ArrowRight, Download, Plus, Save } from "lucide-react";
import { Button } from "./Button";

export function ButtonPreview() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-3 text-sm font-semibold text-gray-900">Variants</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondaryColor">Secondary color</Button>
          <Button variant="secondaryGray">Secondary gray</Button>
          <Button variant="tertiaryColor">Tertiary color</Button>
          <Button variant="tertiaryGray">Tertiary gray</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-gray-900">Sizes and slots</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm" leadingIcon={<Plus className="h-4 w-4" />}>
            Create
          </Button>
          <Button size="md" trailingIcon={<ArrowRight className="h-4 w-4" />}>
            Continue
          </Button>
          <Button size="lg" variant="secondaryGray" leadingIcon={<Download className="h-4 w-4" />}>
            Export report
          </Button>
          <Button size="icon" aria-label="Save" leadingIcon={<Save className="h-4 w-4" />} />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-gray-900">States</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>Saving</Button>
          <Button disabled variant="secondaryGray">
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}
