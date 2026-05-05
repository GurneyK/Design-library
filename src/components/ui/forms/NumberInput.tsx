import { Minus, Plus } from "lucide-react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

export interface NumberInputProps {
  label?: string;
  max?: number;
  min?: number;
  suffix?: string;
  value?: number;
}

export function NumberInput({ label = "Temperature", max = 100, min = 0, suffix = "%", value = 35 }: NumberInputProps) {
  return (
    <div className="w-full max-w-xs space-y-1.5">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-gray-700" htmlFor="number-input-demo">{label}</label>
        <span className="text-xs font-medium text-gray-500">
          {min}-{max}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button aria-label="Decrease value" leadingIcon={<Minus aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="secondaryGray" />
        <div className="relative flex-1">
          <Input className="pr-10 text-center" id="number-input-demo" max={max} min={min} type="number" value={value} readOnly />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm font-medium text-gray-500">{suffix}</span>
        </div>
        <Button aria-label="Increase value" leadingIcon={<Plus aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="secondaryGray" />
      </div>
    </div>
  );
}
