import { test, expect } from "@playwright/test";

test("User logs in", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.fill('input[name="email"]', "test@example.com");

  await page.fill('input[name="password"]', "password");

  await page.click('button[type="submit"]');

  await page.waitForURL("http://localhost:3000/todo");

  await expect(page).toHaveURL("http://localhost:3000/todo");

  await page.fill("#todo", "Sample Todo");

  await page.click('button:has-text("Create")');
});
