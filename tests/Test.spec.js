import { test, expect } from "@playwright/test";
import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";

const USERNAME = "standard_user";
const PASSWORD = "password";

test("should add three products to cart", async ({ page }) => {
  const login = new Login(page);

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

  await login.login("standard_user", "tta_secret");

  const products = new Products(page);

  await expect(page.locator('[data-test="primary-header"]')).toBeVisible();
  await expect(products.HAM_BURGER).toBeVisible();
  await expect(products.SHOPPING_CART).toBeVisible();
  await expect(products.MAIN).toBeVisible();

  await expect(products.PRACTICE_BACKPACK).toBeVisible();
  await expect(products.JUNIOR_TESTER_ONESIE).toBeVisible();
  await expect(products.BOLT_T_SHIRT).toBeVisible();
  await expect(products.FLEECE_JACKET).toBeVisible();
  await expect(products.BIKE_LIGHT).toBeVisible();
});
