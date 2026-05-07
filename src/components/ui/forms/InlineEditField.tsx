import { Check, Pencil, X } from "lucide-react";
import { IconButton } from "../icon-button/IconButton";
import { Input } from "../input/Input";

export function InlineEditField() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Workspace name</h3>
          <p className="mt-1 text-xs text-gray-500">Inline edit keeps users in context.</p>
        </div>
        <IconButton icon={<Pencil className="h-4 w-4" />} label="Edit workspace name" size="sm" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input defaultValue="Analytics workspace" />
        <div className="flex gap-2">
          <IconButton icon={<Check className="h-4 w-4" />} label="Save workspace name" size="sm" variant="primary" />
          <IconButton icon={<X className="h-4 w-4" />} label="Cancel editing" size="sm" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
