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
  });
});
