import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";

const available = ["Claims archive", "Legacy campaign exports", "Research notes"];
const selected = ["Brand evidence pack", "Regional performance data"];

export function TransferList() {
  return (
    <div className="grid w-full max-w-4xl gap-3 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs lg:grid-cols-[1fr_auto_1fr]">
      <TransferColumn items={available} title="Available sources" />
      <div className="flex items-center justify-center gap-2 lg:flex-col">
        <Button aria-label="Add selected sources" leadingIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="secondaryGray" />
        <Button aria-label="Remove selected sources" leadingIcon={<ArrowLeft aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="secondaryGray" />
      </div>
      <TransferColumn items={selected} title="Selected sources" />
    </div>
  );
}

function TransferColumn({ items, title }: { items: string[]; title: string }) {
  return (
    <section className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 space-y-3">
        {items.map((item, index) => (
          <div className="rounded-habibiMd border border-gray-200 bg-white p-3" key={item}>
            <Checkbox defaultChecked={index === 0} label={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
