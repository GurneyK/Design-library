import { ChevronRight, FileText, Folder } from "lucide-react";
import type { ReactNode } from "react";

export type TreeNode = {
  children?: TreeNode[];
  label: string;
  meta?: ReactNode;
  selected?: boolean;
};

export interface TreeProps {
  nodes?: TreeNode[];
}

const defaultNodes: TreeNode[] = [
  {
    label: "Nexus",
    children: [
      { label: "Analytics Agent", selected: true, meta: "12 sources" },
      { label: "Marketing Agent", meta: "8 sources" },
    ],
  },
  {
    label: "Product Intelligence",
    children: [
      { label: "INCI Lookup", meta: "4 datasets" },
      { label: "Ingredient Sources", meta: "18 files" },
    ],
  },
];

export function Tree({ nodes = defaultNodes }: TreeProps) {
  return (
    <nav aria-label="Workspace tree" className="rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <TreeList nodes={nodes} />
    </nav>
  );
}

function TreeList({ depth = 0, nodes }: { depth?: number; nodes: TreeNode[] }) {
  return (
    <ul className="space-y-1">
      {nodes.map((node) => {
        const hasChildren = Boolean(node.children?.length);

        return (
          <li key={`${depth}-${node.label}`}>
            <button
              className={[
                "focus-ring flex w-full items-center gap-2 rounded-habibiMd px-2 py-2 text-left text-sm",
                node.selected ? "bg-brand-50 font-semibold text-brand-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              ].join(" ")}
              style={{ paddingLeft: `${8 + depth * 18}px` }}
              type="button"
            >
              {hasChildren ? <ChevronRight aria-hidden="true" className="h-4 w-4 text-gray-400" /> : <span className="h-4 w-4" />}
              {hasChildren ? <Folder aria-hidden="true" className="h-4 w-4 shrink-0" /> : <FileText aria-hidden="true" className="h-4 w-4 shrink-0" />}
              <span className="min-w-0 flex-1 truncate">{node.label}</span>
              {node.meta ? <span className="shrink-0 text-xs text-gray-400">{node.meta}</span> : null}
            </button>
            {hasChildren ? <TreeList depth={depth + 1} nodes={node.children ?? []} /> : null}
          </li>
        );
      })}
    </ul>
  );
}
