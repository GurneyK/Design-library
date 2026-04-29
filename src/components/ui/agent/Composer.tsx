import { ArrowUp, Mic, Paperclip } from "lucide-react";
import { Button } from "../button/Button";

export function Composer() {
  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-end gap-2">
          <Button aria-label="Attach file" leadingIcon={<Paperclip className="h-4 w-4" />} size="icon" variant="secondaryGray" />
          <textarea
            className="focus-ring min-h-12 max-h-40 flex-1 resize-none rounded-habibiLg border border-gray-300 bg-white px-4 py-3 text-sm leading-6 text-gray-900 shadow-habibiXs placeholder:text-gray-400 focus-visible:border-brand-300"
            placeholder="Ask about campaign performance..."
            rows={1}
          />
          <Button aria-label="Use microphone" leadingIcon={<Mic className="h-4 w-4" />} size="icon" variant="secondaryGray" />
          <Button aria-label="Send message" leadingIcon={<ArrowUp className="h-4 w-4" />} size="icon" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>Press Enter to send, Shift+Enter for new line</span>
          <span>0 / 2,000</span>
        </div>
      </div>
    </div>
  );
}
