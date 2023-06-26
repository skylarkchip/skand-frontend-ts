import { test, expect } from "@playwright/test";

test("User logs in", async ({ page }) => {
  await page.goto("/");

  await page.fill('input[name="email"]', "test@example.com");

  await page.fill('input[name="password"]', "password");

  await page.click('button[type="submit"]');

  await page.waitForURL("/todo");

  await expect(page).toHaveURL("/todo");

  await page.fill("#todo", "Sample Todo");

  await page.click('button:has-text("Create")');
});
