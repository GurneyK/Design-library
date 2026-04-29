import type { ReactNode } from "react";
import { Button } from "../button/Button";

export interface FormActionsProps {
  children?: ReactNode;
}

export function FormActions({ children }: FormActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3 border-t border-gray-200 pt-5">
      {children ?? (
        <>
          <Button variant="secondaryGray">Cancel</Button>
          <Button>Save changes</Button>
        </>
      )}
    </div>
  );
}
