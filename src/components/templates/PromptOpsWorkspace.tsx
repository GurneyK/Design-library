import { ArtifactCard } from "../ui/agent/ArtifactCard";
import { ContextPanel } from "../ui/agent/ContextPanel";
import { HandoffCard } from "../ui/agent/HandoffCard";
import { PromptLibrary } from "../ui/agent/PromptLibrary";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { FormField } from "../ui/form-field/FormField";
import { TokenInput } from "../ui/forms/TokenInput";
import { Textarea } from "../ui/textarea/Textarea";
import { Panel } from "../ui/layout/Panel";

export function PromptOpsWorkspace() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        description="Draft, ground, review, and publish reusable prompts for cross-project agent workflows."
        title="Prompt ops workspace"
      />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <Panel description="Create a reusable prompt with tags and review guidance." title="Prompt draft">
            <div className="space-y-4">
              <FormField label="Prompt instructions">
                <Textarea placeholder="Summarize the evaluation run with risks, source coverage, and next actions." />
              </FormField>
              <FormField label="Tags">
                <TokenInput tokens={["Evaluation", "Review", "Analytics"]} />
              </FormField>
            </div>
          </Panel>
          <PromptLibrary />
        </div>
        <div className="space-y-5">
          <ContextPanel />
          <HandoffCard />
          <ArtifactCard title="Approved prompt pack" type="report" />
        </div>
      </div>
    </div>
  );
}
