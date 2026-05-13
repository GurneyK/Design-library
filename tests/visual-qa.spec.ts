import { expect, test } from "@playwright/test";

const representativeEntries = [
  "Button",
  "Chat Surface",
  "Line Chart",
  "Report Status Card",
];

test.describe("Design Library visual QA", () => {
  test("loads the component catalog and representative entries", async ({ page, isMobile }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Design Library", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Button", level: 2 })).toBeVisible();
    await expect(page.getByText("Live React component using Habibi tokens.")).toBeVisible();
    await expect(page.locator("#for-agents")).toBeVisible();

    if (isMobile) {
      await page.getByRole("textbox", { name: "Search components" }).fill("report status");
      await expect(page.getByRole("heading", { name: "Report Status Card", level: 2 })).toBeVisible();
      return;
    }

    for (const entryName of representativeEntries) {
      await page.getByRole("button", { name: new RegExp(`^${entryName}\\b`) }).click();
      await expect(page.getByRole("heading", { name: entryName, level: 2 })).toBeVisible();
      await expect(page.locator("#preview")).toBeVisible();
      await expect(page.locator("#code")).toBeVisible();
      await expect(page.locator("#developer-handoff")).toBeVisible();
      await expect(page.locator("#for-agents")).toBeVisible();
    }
  });

  test("search filters to a known component", async ({ page, isMobile }) => {
    await page.goto("/");

    await page.getByRole("textbox", { name: "Search components" }).fill("citation");

    if (!isMobile) {
      await expect(page.getByRole("button", { name: /^Citation Chip\b/ })).toBeVisible();
      await page.getByRole("button", { name: /^Citation Chip\b/ }).click();
    }

    await expect(page.getByRole("heading", { name: "Citation Chip", level: 2 })).toBeVisible();
    await expect(page.getByRole("article").getByText("Agent UI")).toBeVisible();
    await expect(page.locator("#developer-handoff").getByRole("heading", { name: "Implementation source" })).toBeVisible();
    await expect(page.locator("#developer-handoff").getByRole("heading", { name: "Copy files script" })).toBeVisible();
  });

  test("switches to templates and renders a full template page", async ({ page, isMobile }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Templates" }).click();

    if (!isMobile) {
      await expect(page.getByRole("button", { name: /^Analytics Agent Workspace\b/ })).toBeVisible();
      await page.getByRole("button", { name: /^Analytics Agent Workspace\b/ }).click();
    }

    await expect(page.getByRole("heading", { name: "Analytics Agent Workspace", level: 2 })).toBeVisible();
    await expect(page.locator("#preview")).toBeVisible();
    await expect(page.locator("#developer-handoff")).toBeVisible();
    await expect(page.locator("#for-agents")).toBeVisible();
  });

  test("publishes a readable manifest", async ({ request }) => {
    const response = await request.get("/manifest.json");
    expect(response.ok()).toBeTruthy();

    const manifest = await response.json();
    expect(manifest.counts.entries).toBe(224);
    expect(manifest.kindCounts.component).toBe(194);
    expect(manifest.kindCounts.template).toBe(16);
    expect(manifest.entries.some((entry: { id: string }) => entry.id === "button")).toBeTruthy();
    expect(manifest.entries.some((entry: { id: string }) => entry.id === "template-analytics-agent-workspace")).toBeTruthy();
    const button = manifest.entries.find((entry: { id: string }) => entry.id === "button");
    expect(button.developerHandoff.copyStatus).toBe("source-available");
    expect(button.developerHandoff.sourcePaths).toContain("src/components/ui/button/Button.tsx");
  });

  test("publishes standalone developer handoff data", async ({ request }) => {
    const response = await request.get("/developer-handoff.json");
    expect(response.ok()).toBeTruthy();

    const handoff = await response.json();
    expect(handoff["run-card"].copyStatus).toBe("source-available");
    expect(handoff["run-card"].sourcePaths).toContain("src/components/ui/dashboard/RunCard.tsx");
    expect(handoff["run-card"].dependencyPaths).toContain("src/components/ui/progress/Progress.tsx");
    expect(handoff["run-card"].copyScript).toContain("Invoke-WebRequest");
    expect(handoff["agent-manifest"].copyStatus).toBe("reference-endpoint");
  });
});
