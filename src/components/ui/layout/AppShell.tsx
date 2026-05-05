import { Bell, Search } from "lucide-react";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { NavRail } from "../navigation/NavRail";

export function AppShell() {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-gray-50 shadow-habibiXs">
      <div className="flex min-h-[360px]">
        <div className="border-r border-gray-200 bg-white p-3">
          <NavRail />
        </div>
        <div className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Workspace</p>
              <h3 className="text-base font-semibold text-gray-900">Analytics command center</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input className="h-9 w-56 pl-9" placeholder="Search workspace" />
              </div>
              <Button aria-label="Notifications" leadingIcon={<Bell aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="secondaryGray" />
              <Avatar initials="GK" size="sm" />
            </div>
          </header>
          <main className="grid gap-4 p-4 md:grid-cols-[1fr_240px]">
            <section className="rounded-habibiLg border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-gray-900">Run summary</h4>
                <Badge variant="success">Healthy</Badge>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Conversations", "Quality", "Sources"].map((label) => (
                  <div className="rounded-habibiMd bg-gray-50 p-3" key={label}>
                    <p className="text-xs font-medium text-gray-500">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{label === "Quality" ? "87.3%" : label === "Sources" ? "248" : "148"}</p>
                  </div>
                ))}
              </div>
            </section>
            <aside className="rounded-habibiLg border border-gray-200 bg-white p-4">
              <h4 className="text-sm font-semibold text-gray-900">Review</h4>
              <p className="mt-2 text-sm leading-6 text-gray-500">Two generated answers need citation review before publishing.</p>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
