import { test, expect } from "@playwright/test";

import { Products } from "../pages/products.js";
import { Login } from "../pages/login.js";

import { cart_url } from "../urls/base.js";
import { product_page_url } from "../Routes/routes.js";

test("Products page should display all required elements", async ({ page }) => {
  const login = new Login(page);

  await page.goto(cart_url);

  // Verify login page URL
  await expect(page).toHaveURL(cart_url);

  // Verify login elements
  await expect(login.USER_NAME).toBeVisible();
  await expect(login.PASSWORD).toBeVisible();
  await expect(login.LOGIN_BUTTON).toBeVisible();

  await expect(login.USER_NAME).toBeEnabled();
  await expect(login.PASSWORD).toBeEnabled();
  await expect(login.LOGIN_BUTTON).toBeEnabled();

  // Login
  await login.login("standard_user", "tta_secret");

  // Verify navigation to Products page
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  const products = new Products(page);

  // Verify Products page elements
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

  // Verify Add to Cart buttons
  await expect(
    products.ADD_TEST_ALLTHETHINGS_TSHIRT
  ).toBeVisible();

  await expect(
    products.ADD_PRACTICE_BACKPACK
  ).toBeVisible();
});