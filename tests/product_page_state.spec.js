import { test, expect } from "@playwright/test";

import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";
import { Cart } from "../pages/cart.js";

import { cart_url } from "../urls/base.js";

import { product_page_url, cart_page_url } from "../Routes/routes.js";

const USERNAME = "standard_user";
const PASSWORD = "tta_secret";

test.beforeEach(async ({ page }) => {
  const login = new Login(page);

  await page.goto(cart_url);
  await login.login(USERNAME, PASSWORD);

  // Verify we landed on the products page after login
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));
});

test("should display products page correctly", async ({ page }) => {
  const products = new Products(page);

  await expect.soft(products.PRIMARY_HEADER).toBeVisible();
  await expect.soft(products.HAM_BURGER).toBeVisible();
  await expect.soft(products.SHOPPING_CART).toBeVisible();
  await expect.soft(products.MAIN).toBeVisible();

  await expect.soft(products.PRACTICE_BACKPACK).toBeVisible();
  await expect.soft(products.JUNIOR_TESTER_ONESIE).toBeVisible();
  await expect.soft(products.BOLT_T_SHIRT).toBeVisible();
  await expect.soft(products.FLEECE_JACKET).toBeVisible();
  await expect.soft(products.BIKE_LIGHT).toBeVisible();
});

test("should add three products to cart", async ({ page }) => {
  const products = new Products(page);

  // We are still on products page
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  await products.ADD_BIKE_LIGHT.click();
  await products.ADD_JUNIOR_TESTER_ONESIE.click();

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("3");

  // Adding items should not navigate away
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));
});

test("should display added products in cart", async ({ page }) => {
  const products = new Products(page);
  const cart = new Cart(page);

  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  await products.ADD_BIKE_LIGHT.click();
  await products.ADD_JUNIOR_TESTER_ONESIE.click();

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("3");

  await products.SHOPPING_CART.click();

  // Verify navigation to cart
  await expect(page).toHaveURL(new RegExp(`${cart_page_url}$`));

  await expect.soft(cart.TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  await expect.soft(cart.BIKE_LIGHT).toBeVisible();
  await expect.soft(cart.JUNIOR_TESTER_ONESIE).toBeVisible();

  await expect.soft(cart.REMOVE_TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  await expect.soft(cart.REMOVE_BIKE_LIGHT).toBeVisible();
  await expect.soft(cart.REMOVE_JUNIOR_TESTER_ONESIE).toBeVisible();

  await expect.soft(cart.CONTINUE_SHOPPING).toBeVisible();
  await expect.soft(cart.CHECKOUT).toBeVisible();

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("3");
});

test("should preserve cart when continuing shopping", async ({ page }) => {
  const products = new Products(page);
  const cart = new Cart(page);

  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  await products.ADD_BIKE_LIGHT.click();
  await products.ADD_JUNIOR_TESTER_ONESIE.click();

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("3");

  await products.SHOPPING_CART.click();

  // Products -> Cart
  await expect(page).toHaveURL(new RegExp(`${cart_page_url}$`));

  await cart.CONTINUE_SHOPPING.click();

  // Cart -> Products
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("3");
});

test("should add Bolt T-Shirt to an empty cart", async ({ page }) => {
  const products = new Products(page);

  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));

  await products.ADD_BOLT_T_SHIRT.click();

  await expect.soft(products.SHOPPING_CART_BADGE).toHaveText("1");

  // Adding product does not navigate
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));
});
