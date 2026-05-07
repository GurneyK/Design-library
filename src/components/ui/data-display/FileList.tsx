import { Download, FileSpreadsheet, FileText, MoreHorizontal } from "lucide-react";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

const files = [
  { name: "Brand evidence pack.pdf", size: "12.4 MB", type: "PDF", status: "Approved", tone: "success", icon: FileText },
  { name: "Campaign performance.xlsx", size: "4.8 MB", type: "Sheet", status: "Synced", tone: "brand", icon: FileSpreadsheet },
  { name: "INCI source notes.docx", size: "840 KB", type: "Doc", status: "Review", tone: "warning", icon: FileText },
];

export function FileList() {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Source files</h3>
          <p className="mt-0.5 text-xs text-gray-500">Files attached to this agent workspace</p>
        </div>
        <IconButton icon={<Download className="h-4 w-4" />} label="Download selected files" size="sm" />
      </header>
      <ul className="divide-y divide-gray-100">
        {files.map((file) => {
          const Icon = file.icon;
          return (
            <li className="flex items-center gap-3 px-4 py-3" key={file.name}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-habibiMd bg-brand-50 text-brand-700">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">{file.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{file.type} · {file.size}</p>
              </div>
              <Badge variant={file.tone as "success" | "brand" | "warning"}>{file.status}</Badge>
              <IconButton icon={<MoreHorizontal className="h-4 w-4" />} label={`${file.name} actions`} size="sm" variant="ghost" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
