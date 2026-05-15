import { expect, test, type Page } from "@playwright/test";

test.describe("Design Library accessibility smoke", () => {
  test("exposes core landmarks and keyboard skip path", async ({ page }) => {
    await page.goto("/");

    const skipLink = page.getByRole("link", { name: "Skip to main content" });

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");

    await expect(page.locator("#main-content")).toBeFocused();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Search components" })).toBeVisible();
    await expect(page.getByRole("group", { name: "Catalog section" })).toBeVisible();
  });

  test("communicates selected navigation and section state", async ({ page, isMobile }) => {
    await page.goto("/");

    await expect(page.getByRole("button", { name: "Components" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByRole("button", { name: "Templates" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );

    await page.getByRole("button", { name: "Templates" }).click();
    await expect(page.getByRole("button", { name: "Templates" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    if (!isMobile) {
      await expect(page.getByRole("navigation", { name: "Catalog entries" })).toBeVisible();
      await expect(page.getByRole("button", { name: /^Analytics Agent Workspace\b/ })).toHaveAttribute(
        "aria-current",
        "page",
      );
      await expect(page.getByRole("navigation", { name: "Entry sections" })).toBeVisible();
    }
  });

  test("keeps copy actions keyboard reachable", async ({ page }) => {
    await page.goto("/");

    await openEntry(page, "run card", "Run Card");

    const copyButton = page.locator("#code").getByRole("button", { name: "Copy" });
    await copyButton.focus();
    await expect(copyButton).toBeFocused();

    const handoffCopyButton = page
      .locator("#developer-handoff")
      .getByRole("button", { name: "Copy script" })
      .first();

    await handoffCopyButton.focus();
    await expect(handoffCopyButton).toBeFocused();
  });

  test("exposes representative component semantics", async ({ page }) => {
    await page.goto("/");

    await openEntry(page, "button", "Button");
    await expect(page.locator("#preview").getByRole("button", { name: "Primary" })).toBeVisible();
    await expect(page.locator("#preview").getByRole("button", { name: "Save" })).toBeVisible();

    await openEntry(page, "short text values", "Input");
    await expect(page.locator("#preview").getByRole("textbox", { name: "Default" })).toBeVisible();
    await expect(page.locator("#preview").getByRole("textbox", { name: "Error" })).toHaveAttribute(
      "aria-invalid",
      "true",
    );

    await openEntry(page, "immediate on/off", "Switch");
    await expect(page.locator("#preview").getByRole("checkbox", { name: "Enable live tool calls" })).toBeChecked();
    await expect(page.locator("#preview").getByRole("checkbox", { name: "Locked by policy" })).toBeDisabled();

    await openEntry(page, "interrupts the current workflow", "Modal / Dialog");
    await page.locator("#preview").getByRole("button", { name: "Open modal" }).click();
    await expect(page.getByRole("dialog", { name: "Deploy agent" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Close dialog" })).toBeVisible();

    await openEntry(page, "structured rows and columns", "Table");
    await expect(page.locator("#preview").getByRole("table", { name: "Data table" })).toBeVisible();
    await expect(page.locator("#preview").getByRole("columnheader", { name: "Agent" })).toBeVisible();

    await openEntry(page, "chat surface", "Chat Surface");
    await expect(
      page.locator("#preview").getByRole("region", { name: "Analytics Agent conversation" }),
    ).toBeVisible();
    await expect(page.locator("#preview").getByRole("button", { name: "Show sources" })).toBeVisible();
  });
});

async function openEntry(page: Page, query: string, heading: string) {
  await page.getByRole("textbox", { name: "Search components" }).fill(query);
  const exactNavMatch = page.getByRole("button", { exact: false, name: new RegExp(`^${escapeRegExp(heading)}\\b`) });

  if (await exactNavMatch.first().isVisible()) {
    await exactNavMatch.first().click();
  }

  await expect(page.getByRole("heading", { name: heading, level: 2 })).toBeVisible({ timeout: 15000 });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
