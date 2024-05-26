import { test } from "@playwright/test";

test("should first", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.pause();
});