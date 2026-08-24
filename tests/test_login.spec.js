import { test, expect } from "@playwright/test";
import { Login } from "../pages/login";
import { cart_url } from "../urls/base.js";
const users = [
  "standard_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];

for (const username of users) {
  test(`${username} should login and logout successfully`, async ({ page }) => {
    const login = new Login(page);
    await page.goto(cart_url);
    await expect(login.USER_NAME).toBeVisible();
    await expect(login.PASSWORD).toBeVisible();
    await expect(login.LOGIN_BUTTON).toBeVisible();
    await expect(login.USER_NAME).toBeEnabled();
    await expect(login.PASSWORD).toBeEnabled();
    await expect(login.LOGIN_BUTTON).toBeEnabled();
    await login.login(username, "tta_secret");
    await login.logout();
    await expect(login.USER_NAME).toBeVisible();
    await expect(login.PASSWORD).toBeVisible();
  });
}

test("locked out user should not be able to login", async ({ page }) => {
  const login = new Login(page);

  await page.goto(cart_url);

  await expect(login.USER_NAME).toBeVisible();
  await expect(login.PASSWORD).toBeVisible();
  await expect(login.LOGIN_BUTTON).toBeVisible();

  await login.login("locked_out_user", "tta_secret");

  await expect(login.ERROR_MESSAGE).toBeVisible();
  await expect(login.ERROR_MESSAGE).toContainText("locked out");

  // User should still be on login page
  await expect(login.USER_NAME).toBeVisible();
});
