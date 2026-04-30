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
  avatarGroupEntry,
  avatarEntry,
  badgeEntry,
  dividerEntry,
  iconButtonEntry,
  kbdEntry,
  surfaceEntry,
  tagEntry,
  tooltipEntry,
} from "./primitiveEntries";
import {
  checkboxEntry,
  formFieldEntry,
  inputEntry,
  radioGroupEntry,
  searchInputEntry,
  selectEntry,
  segmentedControlEntry,
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
import { agentManifestEntry } from "./agentReferenceEntries";
import {
  accordionEntry,
  dataToolbarEntry,
  descriptionListEntry,
  emptyStateEntry,
  listEntry,
  statCardEntry,
  tableEntry,
  timelineEntry,
  treeEntry,
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
  comboboxEntry,
  datePickerEntry,
  fileUploadEntry,
  formActionsEntry,
  formGroupEntry,
  formSectionEntry,
  validationMessageEntry,
} from "./formEntries";
import {
  drawerEntry,
  modalEntry,
  popconfirmEntry,
  popoverEntry,
  toastEntry,
} from "./feedbackOverlayEntries";
import {
  cardEntry,
  containerEntry,
  gridEntry,
  panelEntry,
  sectionEntry,
  sidebarEntry,
  stackEntry,
  topbarEntry,
} from "./layoutEntries";
import {
  breadcrumbEntry,
  commandPaletteEntry,
  menuEntry,
  paginationEntry,
  sidebarNavItemEntry,
  stepsEntry,
  tabsEntry,
} from "./navigationEntries";
import {
  analyticsAgentWorkspaceEntry,
  authScreenEntry,
  citationReviewBlockEntry,
  dashboardOverviewEntry,
  emptyStateLibraryEntry,
  inciLookupViewEntry,
  marketingWorkspaceEntry,
  settingsFormScreenEntry,
} from "./templateEntries";

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
  iconButtonEntry,
  tagEntry,
  kbdEntry,
  avatarGroupEntry,
  containerEntry,
  stackEntry,
  gridEntry,
  cardEntry,
  panelEntry,
  sectionEntry,
  sidebarEntry,
  topbarEntry,
  tabsEntry,
  breadcrumbEntry,
  paginationEntry,
  menuEntry,
  stepsEntry,
  sidebarNavItemEntry,
  commandPaletteEntry,
  formFieldEntry,
  inputEntry,
  textareaEntry,
  selectEntry,
  checkboxEntry,
  switchEntry,
  sliderEntry,
  searchInputEntry,
  radioGroupEntry,
  segmentedControlEntry,
  formSectionEntry,
  formGroupEntry,
  validationMessageEntry,
  fileUploadEntry,
  comboboxEntry,
  datePickerEntry,
  formActionsEntry,
  tableEntry,
  listEntry,
  descriptionListEntry,
  statCardEntry,
  emptyStateEntry,
  timelineEntry,
  accordionEntry,
  treeEntry,
  dataToolbarEntry,
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
  agentManifestEntry,
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
  analyticsAgentWorkspaceEntry,
  dashboardOverviewEntry,
  inciLookupViewEntry,
  emptyStateLibraryEntry,
  marketingWorkspaceEntry,
  authScreenEntry,
  citationReviewBlockEntry,
  settingsFormScreenEntry,
] satisfies CatalogEntry[];
