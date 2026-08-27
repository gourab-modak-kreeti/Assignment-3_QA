import { test, expect } from "@playwright/test";

import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";
import { Cart } from "../pages/cart.js";
import { Checkout } from "../pages/checkout.js";

import { cart_url } from "../urls/base.js";

import {
  product_page_url,
  cart_page_url,
  checkout_form_url,
  checkout_overview_url,
  checkout_complete_url,
} from "../Routes/routes.js";

const USERNAME = "standard_user";
const PASSWORD = "tta_secret";

test.beforeEach(async ({ page }) => {
  const login = new Login(page);

  await page.goto(cart_url);
  await login.login(USERNAME, PASSWORD);

  // Verify login navigates to products page
  await expect(page).toHaveURL(new RegExp(`${product_page_url}$`));
});

test("should complete checkout successfully", async ({ page }) => {
  const products = new Products(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);

  // Add products
  await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  await products.ADD_PRACTICE_BACKPACK.click();
  await products.ADD_JUNIOR_TESTER_ONESIE.click();
  await products.ADD_BIKE_LIGHT.click();

  // Open cart
  await products.SHOPPING_CART.click();

  // Verify Products -> Cart navigation
  await expect(page).toHaveURL(new RegExp(`${cart_page_url}$`));

  // Proceed to checkout
  await cart.CHECKOUT.click();

  // Verify Cart -> Checkout Form navigation
  await expect(page).toHaveURL(new RegExp(`${checkout_form_url}$`));

  // Enter checkout information
  await checkout.FIRST_NAME.fill("Sample fname");
  await checkout.LAST_NAME.fill("Sample lname");
  await checkout.POSTAL_CODE.fill("12345");

  await checkout.CONTINUE.click();

  // Verify Checkout Form -> Checkout Overview navigation
  await expect(page).toHaveURL(new RegExp(`${checkout_overview_url}$`));

  // Verify checkout summary
  await expect(checkout.TSHIRT_TEXT).toBeVisible();
  await expect(checkout.PRACTICE_BACKPACK_TEXT).toBeVisible();
  await expect(checkout.JUNIOR_ONESIE_TEXT).toBeVisible();
  await expect(checkout.BIKELIGHT_TEXT).toBeVisible();

  await expect(checkout.HEADING_PRICE_TOTAL).toBeVisible();

  await expect(checkout.PAYMENT_INFO_HEADING).toBeVisible();

  await expect(checkout.SHIPPING_INFO_HEADING).toBeVisible();

  // Complete order
  await checkout.FINISH.click();

  // Verify Checkout Overview -> Checkout Complete navigation
  await expect(page).toHaveURL(new RegExp(`${checkout_complete_url}$`));

  // Verify order confirmation
  await expect(checkout.COMPLETE_HEADER).toBeVisible();
  await expect(checkout.COMPLETE_MESSAGE).toBeVisible();

  // Open cart
  await checkout.SHOPPING_CART.click();

  // Verify navigation back to cart
  await expect(page).toHaveURL(new RegExp(`${cart_page_url}$`));

  // Verify cart is empty
  await expect(checkout.CART_EMPTY).toBeVisible();
});
