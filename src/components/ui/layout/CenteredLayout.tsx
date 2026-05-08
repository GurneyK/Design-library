import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../button/Button";

export interface CenteredLayoutProps {
  children?: ReactNode;
}

export function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <section className="flex min-h-[360px] items-center justify-center rounded-habibiLg border border-gray-200 bg-gray-50 p-6">
      <div className="w-full max-w-md text-center">
        {children ?? (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-habibiLg bg-brand-50 text-brand-700">
              <Sparkles aria-hidden="true" className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Start a new workspace</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">Use centered layout for focused empty, auth, onboarding, and confirmation states.</p>
            <div className="mt-5">
              <Button>Create workspace</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
