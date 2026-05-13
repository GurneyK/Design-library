import { expect, test } from "@playwright/test";

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

    await page.getByRole("textbox", { name: "Search components" }).fill("run card");
    await expect(page.getByRole("heading", { name: "Run Card", level: 2 })).toBeVisible();

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
});
