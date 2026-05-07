import { MoreHorizontal, Share2 } from "lucide-react";
import { AgentAvatar } from "./AgentAvatar";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

export function ConversationHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex min-w-0 items-center gap-3">
        <AgentAvatar status="active" />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-base font-semibold text-gray-900">Analytics Chat Agent</h3>
            <Badge dot variant="brand">Live</Badge>
          </div>
          <p className="mt-1 text-sm text-gray-500">Campaign analysis · 42 sources attached</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IconButton icon={<Share2 aria-hidden="true" className="h-4 w-4" />} label="Share conversation" size="sm" />
        <IconButton icon={<MoreHorizontal aria-hidden="true" className="h-4 w-4" />} label="More conversation actions" size="sm" variant="ghost" />
      </div>
    </header>
  );
}
