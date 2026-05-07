import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { IconButton } from "../icon-button/IconButton";
import { Input } from "../input/Input";

export function PasswordField() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700" htmlFor="password-preview">
        Password
      </label>
      <div className="relative">
        <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input className="pl-9 pr-12" defaultValue="projectnorthstar" id="password-preview" type="password" />
        <div className="absolute right-1 top-1">
          <IconButton icon={<Eye className="h-4 w-4" />} label="Show password" size="sm" variant="ghost" />
        </div>
      </div>
      <p className="text-xs leading-5 text-gray-500">Use at least 12 characters with a mix of letters and symbols.</p>
      <div className="flex items-center gap-2 text-xs font-medium text-success-700">
        <EyeOff aria-hidden="true" className="h-3.5 w-3.5" />
        Hidden by default
      </div>
    </div>
  );
}
