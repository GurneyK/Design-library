import { Loader2 } from "lucide-react";

export interface LoadingOverlayProps {
  description?: string;
  label?: string;
}

export function LoadingOverlay({
  description = "Replaying test conversations and checking source coverage.",
  label = "Evaluation running",
}: LoadingOverlayProps) {
  return (
    <section className="relative min-h-56 overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="grid h-56 place-items-center bg-gray-50 p-5">
        <div className="h-24 w-full max-w-lg rounded-habibiLg bg-white shadow-habibiXs" />
      </div>
      <div className="absolute inset-0 grid place-items-center bg-white/80 p-5 backdrop-blur-sm">
        <div className="max-w-sm rounded-habibiLg border border-gray-200 bg-white p-5 text-center shadow-habibiMd">
          <Loader2 aria-hidden="true" className="mx-auto h-6 w-6 animate-spin text-brand-700" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">{label}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
        </div>
      </div>
    </section>
  );
}
