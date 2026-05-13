import { Badge } from "../components/ui/badge/Badge";
import { AreaChart } from "../components/ui/charts/AreaChart";
import { BarChart } from "../components/ui/charts/BarChart";
import { BoxPlotChart } from "../components/ui/charts/BoxPlotChart";
import { ChartContainer } from "../components/ui/charts/ChartContainer";
import { ChartLegend } from "../components/ui/charts/ChartLegend";
import { ChartTooltip } from "../components/ui/charts/ChartTooltip";
import { DonutChart } from "../components/ui/charts/DonutChart";
import { FunnelChart } from "../components/ui/charts/FunnelChart";
import { GaugeChart } from "../components/ui/charts/GaugeChart";
import { HeatmapChart } from "../components/ui/charts/HeatmapChart";
import { HistogramChart } from "../components/ui/charts/HistogramChart";
import { LineChart } from "../components/ui/charts/LineChart";
import { PieChart } from "../components/ui/charts/PieChart";
import { RadarChart } from "../components/ui/charts/RadarChart";
import { ScatterChart } from "../components/ui/charts/ScatterChart";
import { Sparkline } from "../components/ui/charts/Sparkline";
import { StackedBarChart } from "../components/ui/charts/StackedBarChart";
import { SummaryChartCard } from "../components/ui/charts/SummaryChartCard";
import { TreemapChart } from "../components/ui/charts/TreemapChart";
import { WaterfallChart } from "../components/ui/charts/WaterfallChart";
import type { CatalogEntry } from "./catalog";

function ChartContainerPreview() {
  return (
    <ChartContainer
      description="Shows performance trends over time."
      title="Conversation volume"
      toolbar={<Badge variant="info">Last 30 days</Badge>}
    >
      <LineChart />
      <ChartLegend items={[{ color: "var(--habibi-brand-700)", label: "Conversations" }]} />
    </ChartContainer>
  );
}

function LegendPreview() {
  return (
    <ChartLegend
      items={[
        { color: "var(--habibi-brand-700)", label: "Current period" },
        { color: "var(--habibi-info-500)", label: "Previous period" },
        { color: "var(--habibi-success-500)", label: "Target" },
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

function HistogramChartPreview() {
  return (
    <ChartContainer description="Distribution of answer latency across completed runs." title="Latency distribution">
      <HistogramChart />
    </ChartContainer>
  );
}

function WaterfallChartPreview() {
  return (
    <ChartContainer description="Shows the deltas that move a starting value to its final total." title="Quality score movement">
      <WaterfallChart />
    </ChartContainer>
  );
}

function TreemapChartPreview() {
  return (
    <ChartContainer description="Compares workspace volume by relative area." title="Usage by workspace">
      <TreemapChart />
    </ChartContainer>
  );
}

function BoxPlotChartPreview() {
  return (
    <ChartContainer description="Compares spread, median, and outlier range across model runs." title="Run duration spread">
      <BoxPlotChart />
    </ChartContainer>
  );
}

function DonutChartPreview() {
  return (
    <ChartContainer title="Evaluation completion">
      <DonutChart />
      <ChartLegend items={[{ color: "var(--habibi-brand-700)", label: "Passed" }, { color: "var(--habibi-info-500)", label: "In review" }]} />
    </ChartContainer>
  );
}

function PieChartPreview() {
  return (
    <ChartContainer title="Source mix">
      <PieChart />
      <ChartLegend
        items={[
          { color: "var(--habibi-brand-700)", label: "Research" },
          { color: "var(--habibi-info-500)", label: "Campaigns" },
          { color: "var(--habibi-success-500)", label: "Claims" },
        ]}
      />
    </ChartContainer>
  );
}

function StackedBarChartPreview() {
  return (
    <ChartContainer title="Usage by channel">
      <StackedBarChart />
      <ChartLegend
        items={[
          { color: "var(--habibi-brand-700)", label: "Analytics" },
          { color: "var(--habibi-info-500)", label: "Marketing" },
          { color: "var(--habibi-success-500)", label: "INCI" },
        ]}
      />
    </ChartContainer>
  );
}

function ScatterChartPreview() {
  return (
    <ChartContainer title="Latency by answer quality">
      <ScatterChart />
    </ChartContainer>
  );
}

function RadarChartPreview() {
  return (
    <ChartContainer title="Capability coverage">
      <RadarChart />
    </ChartContainer>
  );
}

function GaugeChartPreview() {
  return (
    <ChartContainer title="Quality score">
      <GaugeChart />
    </ChartContainer>
  );
}

function FunnelChartPreview() {
  return (
    <ChartContainer title="Run conversion">
      <FunnelChart />
    </ChartContainer>
  );
}

function HeatmapChartPreview() {
  return (
    <ChartContainer title="Workspace activity">
      <HeatmapChart />
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

function SparklinePreview() {
  return (
    <div className="max-w-md">
      <Sparkline />
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
  code: `import { ChartLegend } from "./ChartLegend";\n\n<ChartLegend items={[{ color: "var(--habibi-brand-700)", label: "Current period" }]} />`,
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

export const histogramChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "histogram-chart",
  name: "Histogram Chart",
  subcategory: "Charts",
  description: "Histogram Chart groups continuous values into buckets so teams can scan distribution and concentration.",
  preview: HistogramChartPreview,
  variants: ["Distribution", "Highlighted bucket", "Labeled buckets"],
  props: [],
  tokens: ["brand-300", "brand-700", "gray-100", "gray-500", "radius-sm"],
  usage: ["Use for latency, confidence, score, or duration distributions.", "Highlight the modal or selected bucket when it helps explain the shape."],
  avoid: ["Do not use histograms for categorical comparisons.", "Do not choose bucket sizes that hide important outliers."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Production versions should expose bucket labels and counts as text or table data."],
  agentGuidance: ["Use Histogram Chart when generated analytics need to explain how values are distributed, not just the average."],
  code: `import { HistogramChart } from "./HistogramChart";\n\n<HistogramChart />`,
};

export const waterfallChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "waterfall-chart",
  name: "Waterfall Chart",
  subcategory: "Charts",
  description: "Waterfall Chart explains how positive and negative deltas move a baseline to a final value.",
  preview: WaterfallChartPreview,
  variants: ["Baseline", "Increase", "Decrease", "Final total"],
  props: [],
  tokens: ["brand-700", "success-500", "error-500", "gray-100", "gray-300", "gray-500", "radius-sm"],
  usage: ["Use for score movement, budget change, attribution, and before-to-after explanations.", "Label every step so the visual tells a complete story."],
  avoid: ["Do not use when values are independent categories.", "Do not hide whether a bar is a delta or a total."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Positive, negative, and total states should be available as text in production."],
  agentGuidance: ["Use Waterfall Chart when an agent needs to explain why a metric changed between two states."],
  code: `import { WaterfallChart } from "./WaterfallChart";\n\n<WaterfallChart />`,
};

export const treemapChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "treemap-chart",
  name: "Treemap Chart",
  subcategory: "Charts",
  description: "Treemap Chart compares part-to-whole composition using nested or tiled areas.",
  preview: TreemapChartPreview,
  variants: ["Workspace mix", "Tiled area", "Labeled groups"],
  props: [],
  tokens: ["brand-700", "brand-300", "info-500", "success-500", "warning-500", "white", "radius-md"],
  usage: ["Use for portfolio mix, workspace usage, source coverage, or grouped share of total.", "Keep labels short and reserve treemaps for overview scanning."],
  avoid: ["Do not use when exact comparison is the primary task.", "Do not include many tiny tiles without a drill-down pattern."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Tile names and values should be mirrored in accessible summaries in production."],
  agentGuidance: ["Use Treemap Chart for compact part-to-whole summaries when the relative size pattern matters."],
  code: `import { TreemapChart } from "./TreemapChart";\n\n<TreemapChart />`,
};

export const boxPlotChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "box-plot-chart",
  name: "Box Plot Chart",
  subcategory: "Charts",
  description: "Box Plot Chart compares median, spread, and range across groups.",
  preview: BoxPlotChartPreview,
  variants: ["Distribution spread", "Median line", "Range whiskers"],
  props: [],
  tokens: ["brand-100", "brand-700", "gray-100", "gray-500", "radius-sm"],
  usage: ["Use for run duration, score distribution, model quality spread, and experiment comparison.", "Use when the spread matters as much as the center value."],
  avoid: ["Do not use box plots for audiences that need simple totals only.", "Do not omit labels that explain what the quartiles mean."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Median, quartile, minimum, and maximum values should be provided as data in production."],
  agentGuidance: ["Use Box Plot Chart when comparing variability across models, workspaces, teams, or time periods."],
  code: `import { BoxPlotChart } from "./BoxPlotChart";\n\n<BoxPlotChart />`,
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

export const pieChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "pie-chart",
  name: "Pie Chart",
  subcategory: "Charts",
  description: "Pie Chart shows a small part-to-whole distribution when categories are few and clearly labelled.",
  preview: PieChartPreview,
  variants: ["Distribution", "Three segment", "With legend"],
  props: [],
  tokens: ["brand-700", "info-500", "success-500", "white"],
  usage: ["Use for simple distribution snapshots with three to five categories.", "Pair with a legend or direct labels."],
  avoid: ["Do not use pie charts for precise comparisons.", "Do not use many thin slices that are hard to scan."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Legend text names each segment."],
  agentGuidance: ["Use Pie Chart for lightweight source mix, category share, or audience split summaries."],
  code: `import { PieChart } from "./PieChart";\n\n<PieChart />`,
};

export const stackedBarChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "stacked-bar-chart",
  name: "Stacked Bar Chart",
  subcategory: "Charts",
  description: "Stacked Bar Chart compares totals while showing how each total breaks down by segment.",
  preview: StackedBarChartPreview,
  variants: ["Horizontal", "Segmented", "With legend"],
  props: [],
  tokens: ["brand-700", "info-500", "success-500", "gray-100", "gray-500", "radius-md"],
  usage: ["Use for channel mix, workspace activity, and grouped usage comparisons.", "Keep segment count low so the pattern stays readable."],
  avoid: ["Do not use stacked bars when exact segment comparison is the main task.", "Do not rely on color without labels."],
  accessibility: ["Rows include visible category labels.", "Production versions should expose segment values as text or table data."],
  agentGuidance: ["Use Stacked Bar Chart when a dashboard needs total plus composition in the same view."],
  code: `import { StackedBarChart } from "./StackedBarChart";\n\n<StackedBarChart />`,
};

export const scatterChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "scatter-chart",
  name: "Scatter Chart",
  subcategory: "Charts",
  description: "Scatter Chart plots relationships between two metrics, such as latency and answer quality.",
  preview: ScatterChartPreview,
  variants: ["Correlation", "Trend line", "Point sizing", "Dashboard"],
  props: [],
  tokens: ["brand-600", "info-500", "gray-100", "gray-200", "white"],
  usage: ["Use for correlation and distribution analysis.", "Use when two numeric measures need to be compared together."],
  avoid: ["Do not use for simple category comparison.", "Do not make critical insight depend on color alone."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Production charts should expose the plotted data as a table or summary."],
  agentGuidance: ["Use Scatter Chart for quality versus latency, cost versus usage, or confidence versus impact patterns."],
  code: `import { ScatterChart } from "./ScatterChart";\n\n<ScatterChart />`,
};

export const radarChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "radar-chart",
  name: "Radar Chart",
  subcategory: "Charts",
  description: "Radar Chart compares multiple bounded dimensions in one compact profile.",
  preview: RadarChartPreview,
  variants: ["Capability profile", "Five axis", "Filled area"],
  props: [],
  tokens: ["brand-100", "brand-700", "gray-100", "gray-200", "white"],
  usage: ["Use for capability coverage, maturity scores, and multi-factor evaluations.", "Use when each axis shares the same bounded scale."],
  avoid: ["Do not use for exact numeric comparison.", "Do not compare many profiles in one radar chart."],
  accessibility: ["SVG has an image role and label in this first implementation.", "Production versions should expose each axis value in text."],
  agentGuidance: ["Use Radar Chart for compact multi-metric profile summaries, not for detailed analytics tables."],
  code: `import { RadarChart } from "./RadarChart";\n\n<RadarChart />`,
};

export const gaugeChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "gauge-chart",
  name: "Gauge Chart",
  subcategory: "Charts",
  description: "Gauge Chart shows a bounded score against qualitative ranges with a large center value.",
  preview: GaugeChartPreview,
  variants: ["Score", "Threshold ranges", "Needle", "Center value"],
  props: [],
  tokens: ["success-500", "warning-500", "brand-700", "gray-100", "gray-900", "white"],
  usage: ["Use for quality scores, readiness, risk, or health metrics with a known range.", "Use text labels so users understand the score meaning."],
  avoid: ["Do not use for unbounded values.", "Do not use many gauges together when a table would scan better."],
  accessibility: ["SVG has an image role and label, and the value is visible text.", "Do not rely on range color without labels in production."],
  agentGuidance: ["Use Gauge Chart for single bounded metrics such as quality score, risk score, or readiness."],
  code: `import { GaugeChart } from "./GaugeChart";\n\n<GaugeChart />`,
};

export const funnelChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "funnel-chart",
  name: "Funnel Chart",
  subcategory: "Charts",
  description: "Funnel Chart shows drop-off across sequential workflow stages.",
  preview: FunnelChartPreview,
  variants: ["Four stages", "Labeled values", "Workflow conversion"],
  props: [],
  tokens: ["brand-700", "brand-600", "info-500", "success-500", "gray-100", "gray-600", "gray-900", "radius-md"],
  usage: ["Use for agent run pipelines, approval flows, and campaign conversion stages.", "Label every stage with both name and value."],
  avoid: ["Do not use when stages are not sequential.", "Do not hide large drop-offs without explanatory copy nearby."],
  accessibility: ["Stage labels and values are rendered as visible text.", "Bar width is supplemental to the numeric value."],
  agentGuidance: ["Use Funnel Chart for run-to-review-to-publish pipelines and other sequential conversion flows."],
  code: `import { FunnelChart } from "./FunnelChart";\n\n<FunnelChart />`,
};

export const heatmapChartEntry: CatalogEntry = {
  ...chartDefaults,
  id: "heatmap-chart",
  name: "Heatmap Chart",
  subcategory: "Charts",
  description: "Heatmap Chart shows activity or intensity across a compact two-dimensional grid.",
  preview: HeatmapChartPreview,
  variants: ["Activity grid", "Intensity scale", "Compact dashboard"],
  props: [],
  tokens: ["brand-25", "brand-50", "brand-100", "brand-200", "brand-300", "brand-500", "brand-600", "brand-700", "gray-500", "white"],
  usage: ["Use for workspace activity, usage by time bucket, or coverage density.", "Pair color intensity with labels or summaries in production."],
  avoid: ["Do not use when exact values are more important than pattern recognition.", "Do not use inaccessible color ramps without text support."],
  accessibility: ["Grid has an image role and label in this first implementation.", "Production versions should expose each cell value to assistive tech."],
  agentGuidance: ["Use Heatmap Chart for activity, coverage, or intensity patterns across days, workspaces, or source types."],
  code: `import { HeatmapChart } from "./HeatmapChart";\n\n<HeatmapChart />`,
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

export const sparklineEntry: CatalogEntry = {
  ...chartDefaults,
  id: "sparkline",
  name: "Sparkline",
  subcategory: "Chart cards",
  description: "Sparkline pairs a compact trend line with a headline metric for dashboard overview cards.",
  preview: SparklinePreview,
  variants: ["Metric card", "Trend fill", "Delta badge"],
  props: [],
  tokens: ["white", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use in dense dashboard grids when trend context matters but full chart analysis is not needed.", "Keep supporting copy short."],
  avoid: ["Do not use sparklines as the only way to understand a critical metric.", "Do not place many unlabeled sparklines together."],
  accessibility: ["Metric value and trend badge are visible text.", "The miniature chart is supplemental."],
  agentGuidance: ["Use Sparkline for compact overview cards in dashboards, workspaces, and analytics summaries."],
  code: `import { Sparkline } from "./Sparkline";\n\n<Sparkline />`,
};
