import { test, expect } from "@playwright/test";

import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";
import { Cart } from "../pages/cart.js";

const USERNAME = "standard_user";
const PASSWORD = "password";

test.describe("Page State", () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);

    await login.login(USERNAME, PASSWORD);
  });

  test("should display products page correctly", async ({ page }) => {
    const login = new Login(page);

    await login.login(USERNAME, PASSWORD);
    const products = new Products(page);

    // await expect(products.PRIMARY_HEADER).toBeVisible();
    // await expect(products.HAM_BURGER).toBeVisible();
    // await expect(products.SHOPPING_CART).toBeVisible();
    // await expect(products.MAIN).toBeVisible();

    await expect(products.PRACTICE_BACKPACK).toBeVisible();
    await expect(products.JUNIOR_TESTER_ONESIE).toBeVisible();
    await expect(products.BOLT_T_SHIRT).toBeVisible();
    await expect(products.FLEECE_JACKET).toBeVisible();
    await expect(products.BIKE_LIGHT).toBeVisible();
  });

  test("should add three products to cart", async ({ page }) => {
    const products = new Products(page);

    await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
    await products.ADD_BIKE_LIGHT.click();
    await products.ADD_JUNIOR_TESTER_ONESIE.click();

    await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  });

  test("should display added products in cart", async ({ page }) => {
    const products = new Products(page);
    const cart = new Cart(page);

    await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
    await products.ADD_BIKE_LIGHT.click();
    await products.ADD_JUNIOR_TESTER_ONESIE.click();

    await expect(products.SHOPPING_CART_BADGE).toHaveText("3");

    await products.SHOPPING_CART.click();

    await expect(cart.TEST_ALLTHETHINGS_TSHIRT).toBeVisible();

    await expect(cart.BIKE_LIGHT).toBeVisible();

    await expect(cart.JUNIOR_TESTER_ONESIE).toBeVisible();

    await expect(cart.REMOVE_TEST_ALLTHETHINGS_TSHIRT).toBeVisible();

    await expect(cart.REMOVE_BIKE_LIGHT).toBeVisible();

    await expect(cart.REMOVE_JUNIOR_TESTER_ONESIE).toBeVisible();

    await expect(cart.CONTINUE_SHOPPING).toBeVisible();
    await expect(cart.CHECKOUT).toBeVisible();

    await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  });

  test("should preserve cart when continuing shopping", async ({ page }) => {
    const products = new Products(page);
    const cart = new Cart(page);

    await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
    await products.ADD_BIKE_LIGHT.click();
    await products.ADD_JUNIOR_TESTER_ONESIE.click();

    await products.SHOPPING_CART.click();

    await cart.CONTINUE_SHOPPING.click();

    await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  });

  test("should add Bolt T-Shirt to an empty cart", async ({ page }) => {
    const products = new Products(page);

    await products.ADD_BOLT_T_SHIRT.click();

    await expect(products.SHOPPING_CART_BADGE).toHaveText("1");
  });
});
