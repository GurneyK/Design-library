import { useState } from "react";
import { Button } from "../components/ui/button/Button";
import { Drawer } from "../components/ui/drawer/Drawer";
import { Modal } from "../components/ui/modal/Modal";
import { Popconfirm } from "../components/ui/popconfirm/Popconfirm";
import { Popover } from "../components/ui/popover/Popover";
import { Toast } from "../components/ui/toast/Toast";
import type { CatalogEntry } from "./catalog";

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        description="Review the deployment details before making this agent available."
        onOpenChange={setOpen}
        open={open}
        title="Deploy agent"
      >
        <p className="text-sm leading-6 text-gray-600">
          This modal blocks the workflow until the user confirms or cancels. Use it for decisions
          that need focused attention.
        </p>
      </Modal>
    </div>
  );
}

function DrawerPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="secondaryGray">Open source drawer</Button>
      <Drawer onOpenChange={setOpen} open={open} title="Source details">
        <div className="space-y-4">
          <p className="text-sm leading-6 text-gray-600">
            Drawers keep the user in context while exposing supporting details, citations, filters,
            or trace information.
          </p>
          <div className="rounded-habibiLg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-900">Knowledge Base</p>
            <p className="mt-1 text-sm text-gray-500">Formulation Stability Report · 92% relevance</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

function PopoverPreview() {
  return (
    <Popover
      content={
        <div>
          <p className="font-semibold text-gray-900">Model settings</p>
          <p className="mt-1">These settings affect only the current workspace and can be changed later.</p>
        </div>
      }
    >
      <Button variant="secondaryGray">Hover or focus</Button>
    </Popover>
  );
}

function PopconfirmPreview() {
  return (
    <Popconfirm
      description="This removes the draft agent from the workspace. This action cannot be undone."
      title="Delete draft agent?"
    >
      <Button variant="destructive">Delete draft</Button>
    </Popconfirm>
  );
}

function ToastPreview() {
  return (
    <div className="space-y-3">
      <Toast title="Saved" variant="success">Your agent configuration has been updated.</Toast>
      <Toast title="Publishing" variant="loading">Deployment is being prepared.</Toast>
      <Toast title="Could not publish" variant="error">Check the required fields and try again.</Toast>
    </div>
  );
}

const overlayDefaults = {
  category: "Feedback",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const modalEntry: CatalogEntry = {
  ...overlayDefaults,
  id: "modal",
  name: "Modal / Dialog",
  subcategory: "Overlays",
  description: "Modal interrupts the current workflow for focused confirmation, forms, or high-priority information.",
  preview: ModalPreview,
  variants: ["Base", "Confirmation", "Form", "Destructive", "With footer"],
  props: [
    { name: "open", type: "boolean", defaultValue: "-", description: "Controls dialog visibility." },
    { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "-", description: "Receives visibility changes." },
    { name: "title", type: "string", defaultValue: "-", description: "Dialog heading." },
    { name: "description", type: "string", defaultValue: "-", description: "Optional supporting copy." },
  ],
  tokens: ["gray-900/60", "white", "gray-200", "radius-lg", "shadow-lg", "spacing-6"],
  usage: ["Use for blocking decisions or focused forms.", "Use clear action labels in the footer.", "Use destructive variants only for irreversible actions."],
  avoid: ["Do not use modals for lightweight hints.", "Do not stack modals.", "Do not hide long workflows inside a small modal."],
  accessibility: ["Uses dialog semantics and aria-modal.", "Close control has an accessible label.", "Future Radix implementation should add focus trapping and Escape handling."],
  agentGuidance: ["Use Modal when the user must decide before continuing.", "Use Drawer when context should remain visible."],
  code: `import { Modal } from "./Modal";\n\n<Modal open={open} onOpenChange={setOpen} title="Deploy agent">\n  Review deployment details.\n</Modal>`,
};

export const drawerEntry: CatalogEntry = {
  ...overlayDefaults,
  id: "drawer",
  name: "Drawer",
  subcategory: "Overlays",
  description: "Drawer exposes supporting details without fully removing the user from the current surface.",
  preview: DrawerPreview,
  variants: ["Right", "Left", "Source drawer", "Filter drawer", "Detail drawer"],
  props: [
    { name: "open", type: "boolean", defaultValue: "-", description: "Controls drawer visibility." },
    { name: "side", type: '"right" | "left"', defaultValue: '"right"', description: "Controls drawer edge." },
    { name: "title", type: "string", defaultValue: "-", description: "Drawer heading." },
  ],
  tokens: ["white", "gray-900/50", "gray-200", "shadow-lg", "spacing-6"],
  usage: ["Use for source details, trace panels, filters, and inspectors.", "Use when users need to keep page context."],
  avoid: ["Do not use drawers for small tooltips.", "Do not use drawers when a full page is needed."],
  accessibility: ["Uses dialog semantics and aria-modal.", "Close control has an accessible label.", "Future Radix implementation should add focus trapping."],
  agentGuidance: ["Use Drawer for citations, source inspection, and dashboard detail panels.", "Keep drawer content scannable and sectioned."],
  code: `import { Drawer } from "./Drawer";\n\n<Drawer open={open} onOpenChange={setOpen} title="Source details">\n  Source metadata\n</Drawer>`,
};

export const popoverEntry: CatalogEntry = {
  ...overlayDefaults,
  id: "popover",
  name: "Popover",
  subcategory: "Overlays",
  description: "Popover shows anchored supporting content for compact explanations, quick settings, or lightweight panels.",
  preview: PopoverPreview,
  variants: ["Hover", "Focus", "Anchored panel"],
  props: [
    { name: "content", type: "ReactNode", defaultValue: "-", description: "Popover panel content." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Trigger element." },
  ],
  tokens: ["white", "gray-200", "gray-600", "shadow-md", "radius-lg", "spacing-4"],
  usage: ["Use for lightweight contextual panels.", "Use when content is more substantial than a tooltip."],
  avoid: ["Do not use for destructive confirmations; use Popconfirm.", "Do not put long workflows in popovers."],
  accessibility: ["Appears on hover and focus-within in this first implementation.", "Future headless implementation should manage open state and focus."],
  agentGuidance: ["Use Popover for short settings, compact metadata, and contextual detail.", "Use Tooltip for a sentence of help text."],
  code: `import { Popover } from "./Popover";\n\n<Popover content={<p>Workspace-only settings.</p>}>\n  <button>Open</button>\n</Popover>`,
};

export const popconfirmEntry: CatalogEntry = {
  ...overlayDefaults,
  id: "popconfirm",
  name: "Popconfirm",
  subcategory: "Overlays",
  description: "Popconfirm asks for lightweight confirmation near the action that triggered it.",
  preview: PopconfirmPreview,
  variants: ["Destructive", "Warning", "With cancel", "With confirm"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Confirmation title." },
    { name: "description", type: "string", defaultValue: "-", description: "Consequence and recovery text." },
    { name: "onConfirm", type: "() => void", defaultValue: "-", description: "Called when confirm is selected." },
  ],
  tokens: ["white", "warning-100", "warning-700", "error-600", "gray-200", "shadow-md", "radius-lg"],
  usage: ["Use for quick confirmation of risky actions.", "Keep the confirmation close to the triggering control."],
  avoid: ["Do not use for irreversible high-impact actions that need full context.", "Do not use generic labels like OK or Yes."],
  accessibility: ["Confirmation buttons are keyboard reachable.", "Future headless implementation should manage focus and dismiss behavior."],
  agentGuidance: ["Use Popconfirm for table/list delete actions.", "Use Modal when consequences need a longer explanation."],
  code: `import { Popconfirm } from "./Popconfirm";\n\n<Popconfirm title="Delete draft?" description="This cannot be undone.">\n  <button>Delete</button>\n</Popconfirm>`,
};

export const toastEntry: CatalogEntry = {
  ...overlayDefaults,
  id: "toast",
  name: "Toast / Message",
  subcategory: "Transient feedback",
  description: "Toast communicates short-lived feedback after an action, without blocking the workflow.",
  preview: ToastPreview,
  variants: ["Success", "Error", "Warning", "Info", "Loading"],
  props: [
    { name: "variant", type: '"success" | "error" | "warning" | "info" | "loading"', defaultValue: '"info"', description: "Controls icon and semantic border." },
    { name: "title", type: "string", defaultValue: "-", description: "Short feedback summary." },
  ],
  tokens: ["white", "gray-200", "success-600", "error-600", "warning-600", "brand-700", "shadow-md", "radius-lg"],
  usage: ["Use after actions like save, copy, publish, or refresh.", "Keep copy short and action-specific."],
  avoid: ["Do not use toasts for information the user must act on later.", "Do not show silent success when a toast is needed."],
  accessibility: ["Uses status role.", "Loading variant includes spinner animation."],
  agentGuidance: ["Use Toast for short post-action confirmation.", "Use Alert or Banner when feedback needs to remain visible."],
  code: `import { Toast } from "./Toast";\n\n<Toast title="Saved" variant="success">\n  Your changes were saved.\n</Toast>`,
};
