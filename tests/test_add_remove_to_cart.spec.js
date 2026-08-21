import { test, expect } from "@playwright/test";
import { Products } from "../pages/products.js";
import { Login } from "../pages/login.js";

test("standard_user should login and logout successfully", async ({ page }) => {
  const login = new Login(page);

  await page.goto(
    "https://app.thetestingacademy.com/playwright/ttacart/"
  );

  await login.login("standard_user", "tta_secret");

  const products = new Products(page);

  await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();

  await expect(products.SHOPPING_CART_BADGE).toContainText("1");

  await products.ADD_FLEECE_JACKET.click();

  await expect(products.SHOPPING_CART_BADGE).toContainText("2");

  await products.REMOVE_TEST_ALLTHETHINGS_TSHIRT.click();

  await expect(products.SHOPPING_CART_BADGE).toContainText("1");

  await products.ADD_BOLT_T_SHIRT.click();

  await products.ADD_JUNIOR_TESTER_ONESIE.click();

  await expect(products.REMOVE_BOLT_T_SHIRT).toContainText("Remove");

  await expect(products.REMOVE_FLEECE_JACKET).toContainText("Remove");
});