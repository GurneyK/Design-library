import { FileUp } from "lucide-react";

export interface FileUploadProps {
  description?: string;
  label?: string;
}

export function FileUpload({ description = "SVG, PNG, CSV, or PDF up to 10 MB.", label = "Upload a file" }: FileUploadProps) {
  return (
    <label className="focus-within:focus-ring block cursor-pointer rounded-habibiLg border border-dashed border-gray-300 bg-white p-6 text-center shadow-habibiXs hover:bg-gray-50">
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-habibiMd bg-brand-50 text-brand-700">
        <FileUp aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="mt-3 block text-sm font-semibold text-gray-900">{label}</span>
      <span className="mt-1 block text-sm text-gray-500">{description}</span>
      <input className="sr-only" type="file" />
    </label>
  );
}
