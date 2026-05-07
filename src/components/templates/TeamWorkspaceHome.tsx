import { AppLauncher } from "../ui/navigation/AppLauncher";
import { NotificationMenu } from "../ui/navigation/NotificationMenu";
import { RecentItems } from "../ui/navigation/RecentItems";
import { ShortcutGrid } from "../ui/navigation/ShortcutGrid";
import { NavigationHeader } from "../ui/navigation/NavigationHeader";
import { ActivityFeed } from "../ui/dashboard/ActivityFeed";
import { HealthSummary } from "../ui/dashboard/HealthSummary";
import { SavedReportCard } from "../ui/dashboard/SavedReportCard";

export function TeamWorkspaceHome() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <NavigationHeader />
      <HealthSummary />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <AppLauncher />
          <ShortcutGrid />
          <SavedReportCard />
        </div>
        <div className="space-y-5">
          <NotificationMenu />
          <RecentItems />
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
}
