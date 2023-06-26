import { test, expect, chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let browserPage: Page;

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    browser = await chromium.launch();
    browserPage = await browser.newPage();
    await page.goto("/");
  });

  test.afterEach(async () => {
    await browserPage.close();
    await browser.close();
  });

  test("Homepage is rendered", async ({ page }) => {
    await expect(page).toHaveURL("/");
  });
});

test.describe("User Authentication", () => {
  test.beforeEach(async ({ page }) => {
    browser = await chromium.launch();
    browserPage = await browser.newPage();
    await page.goto("/");
  });

  test.afterEach(async () => {
    await browserPage.close();
    await browser.close();
  });

  test("User is logged in", async ({ page }) => {
    await page.waitForURL("/");

    await page.fill('input[name="email"]', "test@example.com");

    await page.fill('input[name="password"]', "password");

    await page.getByRole("button", { name: "Log in" }).click();

    await page.waitForURL("/todo");

    await expect(page).toHaveURL("/todo");
  });
});

test.describe("User Registration", () => {
  test.beforeEach(async ({ page }) => {
    browser = await chromium.launch();
    browserPage = await browser.newPage();
    await page.goto("/");
  });

  test.afterEach(async () => {
    await browserPage.close();
    await browser.close();
  });

  test("User signs up and logs in", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Switch to Sign Up" }).click();

    await page.fill('input[name="email"]', "test2@example.com");

    await page.fill('input[name="password"]', "password");

    await page.getByRole("button", { name: "Sign up" }).click();

    await page.waitForURL("/todo");

    await expect(page).toHaveURL("/todo");
  });
});

// test.describe("Create Todo", () => {
//   test.beforeEach(async ({ page }) => {
//     browser = await chromium.launch();
//     browserPage = await browser.newPage();
//     await page.goto("/");
//   });

//   test.afterEach(async () => {
//     await browserPage.close();
//     await browser.close();
//   });

//   test("User creates a todo", async ({ page }) => {
//     await page.goto("/");

//     await page.fill('input[name="email"]', "test@example.com");

//     await page.fill('input[name="password"]', "password");

//     await page.getByRole("button", { name: "Log in" }).click();

//     await page.waitForURL("/todo");

//     await page.fill('input[name="todo"]', "Sample Todo");

//     await page.getByRole("button", { name: "Create" }).click();

//     await page.waitForSelector(".todo-list", { state: "visible" });
//     await page.waitForSelector(".todo-list-item", { state: "visible" });
//     await page.waitForSelector(".todo-list-item-text", { state: "visible" });

//     const todoContent = await page.textContent(".todo-list-item-text");
//     expect(todoContent).toContain("Sample Todo");
//   });
// });
