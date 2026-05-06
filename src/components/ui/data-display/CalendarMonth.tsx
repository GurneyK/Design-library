import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [
  { day: "27", muted: true },
  { day: "28", muted: true },
  { day: "29", muted: true },
  { day: "30", muted: true },
  { day: "1", events: ["Prompt review"] },
  { day: "2" },
  { day: "3" },
  { day: "4" },
  { day: "5", events: ["Analytics sync"] },
  { day: "6", selected: true, events: ["Source audit", "Eval run"] },
  { day: "7" },
  { day: "8", events: ["Stakeholder demo"] },
  { day: "9" },
  { day: "10" },
  { day: "11" },
  { day: "12" },
  { day: "13", events: ["INCI review"] },
  { day: "14" },
  { day: "15" },
  { day: "16" },
  { day: "17" },
  { day: "18" },
  { day: "19" },
  { day: "20", events: ["Model check"] },
  { day: "21" },
  { day: "22" },
  { day: "23" },
  { day: "24" },
  { day: "25" },
  { day: "26" },
  { day: "27" },
  { day: "28" },
  { day: "29" },
  { day: "30", events: ["Launch readout"] },
  { day: "31" },
];

export function CalendarMonth() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Release calendar</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900">May 2026</h3>
        </div>
        <div className="flex items-center gap-2">
          <IconButton icon={<ChevronLeft className="h-4 w-4" />} label="Previous month" size="sm" />
          <IconButton icon={<ChevronRight className="h-4 w-4" />} label="Next month" size="sm" />
        </div>
      </header>
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-500">
        {days.map((day) => (
          <div className="px-2 py-2" key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {dates.map((date, index) => (
          <div
            className={[
              "min-h-[86px] border-b border-r border-gray-100 p-2 text-sm",
              index % 7 === 6 ? "border-r-0" : "",
              date.selected ? "bg-brand-50" : "bg-white",
            ].join(" ")}
            key={`${date.day}-${index}`}
          >
            <span className={["font-semibold", date.muted ? "text-gray-400" : date.selected ? "text-brand-800" : "text-gray-900"].join(" ")}>
              {date.day}
            </span>
            <div className="mt-2 space-y-1">
              {date.events?.map((event) => (
                <Badge key={event} variant={date.selected ? "brand" : "neutral"}>{event}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
