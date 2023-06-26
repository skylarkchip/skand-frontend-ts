import { test, expect } from "@playwright/test";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://skand-frontend-ts.vercel.app/"
    : "http://localhost:3000";

test("User logs in", async ({ page }) => {
  await page.goto(`${BASE_URL}`);

  await page.fill('input[name="email"]', "test@example.com");

  await page.fill('input[name="password"]', "password");

  await page.click('button[type="submit"]');

  await page.waitForURL(`${BASE_URL}/todo`);

  await expect(page).toHaveURL(`${BASE_URL}/todo`);

  await page.fill("#todo", "Sample Todo");

  await page.click('button:has-text("Create")');
});
