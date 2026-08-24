import { test, expect } from "@playwright/test";
import { Products } from "../pages/products.js";
import { Login } from "../pages/login.js";
import { cart_url } from "../urls/base.js";
test("Products page should display all required elements", async ({ page }) => {
  const login = new Login(page);

  await page.goto(cart_url);

  await expect(login.USER_NAME).toBeVisible();
  await expect(login.PASSWORD).toBeVisible();
  await expect(login.LOGIN_BUTTON).toBeVisible();

  await expect(login.USER_NAME).toBeEnabled();
  await expect(login.PASSWORD).toBeEnabled();
  await expect(login.LOGIN_BUTTON).toBeEnabled();

  await login.login("standard_user", "tta_secret");

  const products = new Products(page);

  await expect(products.PRIMARY_HEADER).toBeVisible();
  await expect(products.HAM_BURGER).toBeVisible();
  await expect(products.SHOPPING_CART).toBeVisible();

  await expect(products.MAIN).toBeVisible();
  await expect(products.ALL_TESTS).toBeVisible();

  await expect(products.PRACTICE_BACKPACK).toBeVisible();
  await expect(products.JUNIOR_TESTER_ONESIE).toBeVisible();
  await expect(products.BOLT_T_SHIRT).toBeVisible();
  await expect(products.FLEECE_JACKET).toBeVisible();
  await expect(products.BIKE_LIGHT).toBeVisible();

  await expect(products.FOOTER).toBeVisible();
  await expect(products.FOOTER_DIV).toBeVisible();
  await expect(products.FOOTER_COPY).toBeVisible();

  await expect(products.ADD_TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  await expect(products.ADD_PRACTICE_BACKPACK).toBeVisible();
});
