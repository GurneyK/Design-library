import { Badge } from "../components/ui/badge/Badge";
import { AreaChart } from "../components/ui/charts/AreaChart";
import { BarChart } from "../components/ui/charts/BarChart";
import { ChartContainer } from "../components/ui/charts/ChartContainer";
import { ChartLegend } from "../components/ui/charts/ChartLegend";
import { ChartTooltip } from "../components/ui/charts/ChartTooltip";
import { DonutChart } from "../components/ui/charts/DonutChart";
import { LineChart } from "../components/ui/charts/LineChart";
import { SummaryChartCard } from "../components/ui/charts/SummaryChartCard";
import type { CatalogEntry } from "./catalog";

function ChartContainerPreview() {
  return (
    <ChartContainer
      description="Shows performance trends over time."
      title="Conversation volume"
      toolbar={<Badge variant="info">Last 30 days</Badge>}
    >
      <LineChart />
      <ChartLegend items={[{ color: "#6941C6", label: "Conversations" }]} />
    </ChartContainer>
  );
}

function LegendPreview() {
  return (
    <ChartLegend
      items={[
        { color: "#6941C6", label: "Current period" },
        { color: "#2E90FA", label: "Previous period" },
        { color: "#12B76A", label: "Target" },
      ]}
    />
  );
}

function TooltipPreview() {
  return <ChartTooltip label="April 2026" value="148 conversations" />;
}

function LineChartPreview() {
  return (
    <ChartContainer title="Response quality">
      <LineChart />
    </ChartContainer>
  );
}

function AreaChartPreview() {
  return (
    <ChartContainer title="Conversation volume">
      <AreaChart />
    </ChartContainer>
  );
}

function BarChartPreview() {
  return (
    <ChartContainer title="Runs by workspace">
      <BarChart />
    </ChartContainer>
  );
}

function DonutChartPreview() {
  return (
    <ChartContainer title="Evaluation completion">
      <DonutChart />
      <ChartLegend items={[{ color: "#6941C6", label: "Passed" }, { color: "#2E90FA", label: "In review" }]} />
    </ChartContainer>
  );
}

function SummaryChartCardPreview() {
  return (
    <div className="max-w-md">
      <SummaryChartCard />
    </div>
  );
}

const chartDefaults = {
  category: "Charts / Data Viz",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const chartContainerEntry: CatalogEntry = {
  ...chartDefaults,
  id: "chart-container",
  name: "Chart Container",
  subcategory: "Chart anatomy",
  description: "Chart Container wraps chart visuals with title, description, toolbar, border, radius, and spacing.",
  preview: ChartContainerPreview,
  variants: ["Title", "Description", "Toolbar", "Legend slot"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Chart title." },
    { name: "description", type: "string", defaultValue: "-", description: "Optional context under the title." },
    { name: "toolbar", type: "ReactNode", defaultValue: "-", description: "Optional filter or badge slot." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs", "spacing-5"],
  usage: ["Use around every dashboard chart.", "Use description to clarify timeframe or measurement."],
  avoid: ["Do not place charts in unlabelled containers.", "Do not omit empty/loading/error states in production wrappers."],
  accessibility: ["Chart title gives the visualization a text anchor.", "Future wrappers should expose data tables or summaries for screen readers."],
  agentGuidance: ["Use Chart Container before placing any chart in dashboards.", "Add a toolbar only when it changes the chart data."],
  code: `import { ChartContainer } from "./ChartContainer";\n\n<ChartContainer title="Conversation volume">\n  <LineChart />\n</ChartContainer>`,
};

export const chartLegendEntry: CatalogEntry = {
  ...chartDefaults,
  id: "chart-legend",
  name: "Chart Legend",
  subcategory: "Chart anatomy",
  description: "Legend maps chart colors to human-readable series labels.",
  preview: LegendPreview,
  variants: ["Single series", "Multi series", "Inline"],
  props: [
    { name: "items", type: "ChartLegendItem[]", defaultValue: "[]", description: "Label and color pairs." },
  ],
  tokens: ["gray-700", "spacing-4", "radius-full"],
  usage: ["Use when a chart has multiple series or non-obvious colors.", "Keep labels short and specific."],
  avoid: ["Do not rely on legend color alone when labels can be direct.", "Do not use vague labels like Series 1."],
  accessibility: ["Legend text names each series.", "Colors should not be the only differentiator in complex charts."],
  agentGuidance: ["Use legend for multi-series dashboards.", "For one-series charts, title and axis labels may be enough."],
  code: `import { ChartLegend } from "./ChartLegend";\n\n<ChartLegend items={[{ color: "#6941C6", label: "Current period" }]} />`,
};

export const chartTooltipEntry: CatalogEntry = {
  ...chartDefaults,
  id: "chart-tooltip",
  name: "Chart Tooltip",
  subcategory: "Chart anatomy",
  description: "Chart Tooltip shows the active point, category, and value during hover or focus.",
  preview: TooltipPreview,
  variants: ["Single value", "Future: multi-series", "With arrow"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Category or time label." },
    { name: "value", type: "string", defaultValue: "-", description: "Formatted value." },
  ],
  tokens: ["gray-900", "white", "radius-sm", "shadow-md", "spacing-2", "spacing-3"],
  usage: ["Use for precise chart values.", "Format values for the domain."],
  avoid: ["Do not require hover to understand the chart.", "Do not show raw unformatted data."],
  accessibility: ["Tooltips should have keyboard/focus equivalents in production chart wrappers."],
  agentGuidance: ["Use Chart Tooltip for hoverable data points and bars.", "Keep values formatted and concise."],
  code: `import { ChartTooltip } from "./ChartTooltip";\n\n<ChartTooltip label="April 2026" value="148 conversations" />`,
};

export const lineChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "line-chart",
  name: "Line Chart",
  subcategory: "Charts",
  description: "Line Chart shows trend over time with points and a tokenized brand stroke.",
  preview: LineChartPreview,
  variants: ["Trend", "With points", "Dashboard card"],
  props: [],
  tokens: ["brand-700", "gray-100", "white", "stroke-3"],
  usage: ["Use for time-series trends.", "Use points when individual observations matter."],
  avoid: ["Do not use line charts for unrelated categories.", "Do not overload with too many series."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Production charts should expose data summaries."],
  agentGuidance: ["Use Line Chart for quality, latency, cost, and volume trends over time."],
  code: `import { LineChart } from "./LineChart";\n\n<LineChart />`,
};

export const areaChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "area-chart",
  name: "Area Chart",
  subcategory: "Charts",
  description: "Area Chart emphasizes volume or magnitude over time with a subtle filled region.",
  preview: AreaChartPreview,
  variants: ["Volume", "Trend fill"],
  props: [],
  tokens: ["brand-700", "brand-opacity-10", "gray-100"],
  usage: ["Use for volume trends and cumulative-feeling metrics.", "Keep fill opacity low so the chart stays quiet."],
  avoid: ["Do not use area fill when exact comparison matters more than trend shape."],
  accessibility: ["SVG has an image role and label in this first implementation."],
  agentGuidance: ["Use Area Chart for conversation volume, degradation, or response quality over time."],
  code: `import { AreaChart } from "./AreaChart";\n\n<AreaChart />`,
};

export const barChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "bar-chart",
  name: "Bar Chart",
  subcategory: "Charts",
  description: "Bar Chart compares values across categories or time buckets.",
  preview: BarChartPreview,
  variants: ["Vertical", "Highlighted bar", "Dashboard"],
  props: [],
  tokens: ["brand-500", "brand-700", "gray-100", "radius-sm"],
  usage: ["Use for comparisons across categories.", "Highlight the selected or latest bar when useful."],
  avoid: ["Do not use bars for continuous relationships better shown as lines."],
  accessibility: ["SVG has an image role and label in this first implementation."],
  agentGuidance: ["Use Bar Chart for workspace counts, monthly usage, and ranked comparisons."],
  code: `import { BarChart } from "./BarChart";\n\n<BarChart />`,
};

export const donutChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "donut-chart",
  name: "Donut Chart",
  subcategory: "Charts",
  description: "Donut Chart shows part-to-whole progress or distribution with a center value.",
  preview: DonutChartPreview,
  variants: ["Progress", "Distribution", "Center value"],
  props: [],
  tokens: ["brand-700", "info-500", "gray-100", "text-2xl"],
  usage: ["Use for small part-to-whole summaries.", "Use center text for the main value."],
  avoid: ["Do not use donut charts for precise comparison across many categories.", "Do not use more than 4-6 segments."],
  accessibility: ["SVG has an image role and label in this first implementation."],
  agentGuidance: ["Use Donut Chart for completion, distribution, and simple category shares."],
  code: `import { DonutChart } from "./DonutChart";\n\n<DonutChart />`,
};

export const summaryChartCardEntry: CatalogEntry = {
  ...chartDefaults,
  id: "summary-chart-card",
  name: "Summary Chart Card",
  subcategory: "Chart cards",
  description: "Summary Chart Card combines a KPI, trend badge, and compact chart preview.",
  preview: SummaryChartCardPreview,
  variants: ["KPI", "Trend", "Compact line chart"],
  props: [],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "radius-lg", "shadow-xs"],
  usage: ["Use in dashboard overview grids.", "Pair the value with a trend and compact chart."],
  avoid: ["Do not use for detailed analysis; link to a full chart view.", "Do not omit the metric label."],
  accessibility: ["Value and label are visible text.", "Compact chart should be supplemental."],
  agentGuidance: ["Use Summary Chart Card for dashboard overviews and generated analytics sections."],
  code: `import { SummaryChartCard } from "./SummaryChartCard";\n\n<SummaryChartCard />`,
};
