import { CheckCircle2 } from "lucide-react";
import { Button } from "../button/Button";

export function StickyFooterBar() {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="space-y-3 p-5">
        <h3 className="text-sm font-semibold text-gray-900">Workspace settings</h3>
        <p className="text-sm leading-6 text-gray-500">Use a sticky footer bar when users may scroll through a long configuration surface but still need clear save and cancel actions.</p>
        <div className="h-24 rounded-habibiMd bg-gray-50" />
      </div>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-medium text-success-700">
          <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
          All required fields complete
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="secondaryGray">Cancel</Button>
          <Button type="button">Save changes</Button>
        </div>
      </footer>
    </section>
  );
}
