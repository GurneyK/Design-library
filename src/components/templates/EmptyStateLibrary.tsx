import { FileSearch, MessageSquareText, Sparkles } from "lucide-react";
import { EmptyState } from "../ui/empty-state/EmptyState";
import { Grid } from "../ui/layout/Grid";

export function EmptyStateLibrary() {
  return (
    <Grid columns={3}>
      <EmptyState
        actionLabel="Start chat"
        description="Ask a question to create the first agent response in this workspace."
        icon={<MessageSquareText className="h-5 w-5" />}
        title="No conversation yet"
      />
      <EmptyState
        actionLabel="Add sources"
        description="Attach files or search the evidence library before generating a sourced answer."
        icon={<FileSearch className="h-5 w-5" />}
        title="No sources attached"
      />
      <EmptyState
        actionLabel="Generate insight"
        description="Run an analysis to populate insight cards for this dashboard."
        icon={<Sparkles className="h-5 w-5" />}
        title="No insights yet"
      />
    </Grid>
  );
}
