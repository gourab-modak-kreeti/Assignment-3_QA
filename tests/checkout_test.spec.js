import { test, expect } from "@playwright/test";

import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";
import { Cart } from "../pages/cart.js";
import { Checkout } from "../pages/checkout.js";

const USERNAME = "standard_user";
const PASSWORD = "tta_secret";

test.beforeEach(async ({ page }) => {
  const login = new Login(page);

  await page.goto(
    "https://app.thetestingacademy.com/playwright/ttacart/"
  );

  await login.login(USERNAME, PASSWORD);
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

  // Proceed to checkout
  await cart.CHECKOUT.click();

  // Enter checkout information
  await checkout.FIRST_NAME.fill("Sample fname");
  await checkout.LAST_NAME.fill("Sample lname");
  await checkout.POSTAL_CODE.fill("12345");

  await checkout.CONTINUE.click();

  // Verify checkout summary
  await expect(
    page.getByText("Test.allTheThings() T-Shirt (")
  ).toBeVisible();

  await expect(
    page.getByText("TTA Practice Backpack")
  ).toBeVisible();

  await expect(
    page.getByText("TTA Junior Tester Onesie")
  ).toBeVisible();

  await expect(
    page.getByText("TTA Bike Light")
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Price Total" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Payment Information:" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Shipping Information:" })
  ).toBeVisible();

  // Complete order
  await checkout.FINISH.click();

  // Verify order confirmation
  await expect(checkout.COMPLETE_HEADER).toBeVisible();
  await expect(checkout.COMPLETE_MESSAGE).toBeVisible();

  // Open cart and verify it is empty
  await checkout.SHOPPING_CART.click();

  await expect(
    page.locator('[data-test="cart-empty"]')
  ).toBeVisible();
});