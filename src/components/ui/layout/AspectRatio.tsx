import type { ReactNode } from "react";

export interface AspectRatioProps {
  children?: ReactNode;
  ratio?: "video" | "square" | "wide";
}

const ratioClasses: Record<NonNullable<AspectRatioProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function AspectRatio({ children, ratio = "video" }: AspectRatioProps) {
  return (
    <div className={["overflow-hidden rounded-habibiLg border border-gray-200 bg-gray-50 shadow-habibiXs", ratioClasses[ratio]].join(" ")}>
      {children ?? (
        <div className="flex h-full items-center justify-center bg-brand-50 p-6 text-center">
          <div>
            <p className="text-sm font-semibold text-brand-800">Preview media</p>
            <p className="mt-1 text-sm text-brand-700">Stable {ratio} frame for charts, images, and generated previews.</p>
          </div>
        </div>
      )}
    </div>
  );
}
