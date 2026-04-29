import { buttonEntry } from "../components/ui/button/button.meta";
import {
  colorFoundationEntry,
  darkModeFoundationEntry,
  radiusFoundationEntry,
  shadowFoundationEntry,
  spacingFoundationEntry,
  typographyFoundationEntry,
} from "./foundationEntries";
import {
  avatarEntry,
  badgeEntry,
  dividerEntry,
  surfaceEntry,
  tooltipEntry,
} from "./primitiveEntries";
import {
  checkboxEntry,
  formFieldEntry,
  inputEntry,
  searchInputEntry,
  selectEntry,
  sliderEntry,
  switchEntry,
  textareaEntry,
} from "./dataEntryEntries";
import {
  areaChartEntry,
  barChartEntry,
  chartContainerEntry,
  chartLegendEntry,
  chartTooltipEntry,
  donutChartEntry,
  lineChartEntry,
  summaryChartCardEntry,
} from "./chartEntries";
import {
  agentAvatarEntry,
  chatMessageEntry,
  chatSurfaceEntry,
  composerEntry,
  citationChipEntry,
  sourceDrawerEntry,
  streamingStateEntry,
  suggestionChipsEntry,
  thinkingStateEntry,
  toolCallCardEntry,
} from "./agentEntries";
import {
  descriptionListEntry,
  emptyStateEntry,
  listEntry,
  statCardEntry,
  tableEntry,
  timelineEntry,
} from "./dataDisplayEntries";
import {
  activityFeedEntry,
  dashboardHeaderEntry,
  insightCardEntry,
  quickActionPanelEntry,
  runStatusPillEntry,
  workspaceSwitcherEntry,
} from "./dashboardEntries";
import {
  alertEntry,
  bannerEntry,
  progressEntry,
  skeletonEntry,
  spinnerEntry,
} from "./feedbackEntries";
import {
  drawerEntry,
  modalEntry,
  popconfirmEntry,
  popoverEntry,
  toastEntry,
} from "./feedbackOverlayEntries";

export type PropRow = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};

export type CatalogEntry = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  status: string;
  source: readonly string[];
  description: string;
  preview: () => JSX.Element;
  variants: readonly string[];
  props: readonly PropRow[];
  tokens: readonly string[];
  usage: readonly string[];
  avoid: readonly string[];
  accessibility: readonly string[];
  agentGuidance: readonly string[];
  code: string;
};

export const catalog = [
  colorFoundationEntry,
  typographyFoundationEntry,
  spacingFoundationEntry,
  radiusFoundationEntry,
  shadowFoundationEntry,
  darkModeFoundationEntry,
  buttonEntry,
  badgeEntry,
  avatarEntry,
  dividerEntry,
  tooltipEntry,
  surfaceEntry,
  formFieldEntry,
  inputEntry,
  textareaEntry,
  selectEntry,
  checkboxEntry,
  switchEntry,
  sliderEntry,
  searchInputEntry,
  tableEntry,
  listEntry,
  descriptionListEntry,
  statCardEntry,
  emptyStateEntry,
  timelineEntry,
  chartContainerEntry,
  chartLegendEntry,
  chartTooltipEntry,
  lineChartEntry,
  areaChartEntry,
  barChartEntry,
  donutChartEntry,
  summaryChartCardEntry,
  chatSurfaceEntry,
  chatMessageEntry,
  composerEntry,
  suggestionChipsEntry,
  streamingStateEntry,
  citationChipEntry,
  toolCallCardEntry,
  sourceDrawerEntry,
  agentAvatarEntry,
  thinkingStateEntry,
  dashboardHeaderEntry,
  workspaceSwitcherEntry,
  runStatusPillEntry,
  activityFeedEntry,
  insightCardEntry,
  quickActionPanelEntry,
  alertEntry,
  bannerEntry,
  spinnerEntry,
  progressEntry,
  skeletonEntry,
  modalEntry,
  drawerEntry,
  popoverEntry,
  popconfirmEntry,
  toastEntry,
] satisfies CatalogEntry[];
