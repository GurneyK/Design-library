import { LogOut, Settings, ShieldCheck, UserRound } from "lucide-react";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";

const menuItems = [
  { icon: UserRound, label: "Profile", meta: "Account and preferences" },
  { icon: Settings, label: "Workspace settings", meta: "Project access and defaults" },
  { icon: ShieldCheck, label: "Governance", meta: "Policies and approvals" },
];

export function UserMenu() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <Avatar alt="Gurney" initials="GK" status="online" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">Gurney Kapoor</p>
          <p className="truncate text-xs text-gray-500">Horizon 3 Labs</p>
        </div>
        <Badge variant="brand">Admin</Badge>
      </div>
      <div className="p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button className="focus-ring flex w-full items-center gap-3 rounded-habibiMd px-3 py-2 text-left hover:bg-gray-50" key={item.label} type="button">
              <Icon aria-hidden="true" className="h-4 w-4 text-gray-500" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-gray-900">{item.label}</span>
                <span className="block truncate text-xs text-gray-500">{item.meta}</span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="border-t border-gray-200 p-2">
        <button className="focus-ring flex w-full items-center gap-3 rounded-habibiMd px-3 py-2 text-left text-sm font-semibold text-error-700 hover:bg-error-50" type="button">
          <LogOut aria-hidden="true" className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  );
}
