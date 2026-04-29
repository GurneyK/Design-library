import { Badge } from "../badge/Badge";
import { LineChart } from "./LineChart";

export function SummaryChartCard() {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">Response quality</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">87.3%</p>
        </div>
        <Badge variant="success">+4.2%</Badge>
      </div>
      <div className="mt-2 h-28 overflow-hidden">
        <LineChart />
      </div>
    </div>
  );
}
