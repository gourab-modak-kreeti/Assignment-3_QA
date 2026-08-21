# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_page_state.spec.js >> Page State >> should display added products in cart
- Location: tests/product_page_state.spec.js:42:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "TTACart" [level=1] [ref=e3]
  - generic [ref=e5]:
    - textbox "Username" [ref=e7]: standard_user
    - textbox "Password" [ref=e9]: password
    - alert [ref=e10]: "Epic sadface: Username and password do not match any user in this service"
    - button "Login" [active] [ref=e11] [cursor=pointer]
  - generic [ref=e12]:
    - generic [ref=e13]:
      - heading "Accepted usernames are:" [level=4] [ref=e14]
      - paragraph [ref=e15]: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
    - generic [ref=e16]:
      - heading "Password for all users:" [level=4] [ref=e17]
      - paragraph [ref=e18]: tta_secret
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | import { Login } from "../pages/login.js";
  4  | import { Products } from "../pages/products.js";
  5  | import { Cart } from "../pages/cart.js";
  6  | 
  7  | const USERNAME = "standard_user";
  8  | const PASSWORD = "password";
  9  | 
  10 | test.describe("Page State", () => {
  11 |   test.beforeEach(async ({ page }) => {
  12 |     const login = new Login(page);
  13 | 
  14 |     await login.login(USERNAME, PASSWORD);
  15 |   });
  16 | 
  17 |   test("should display products page correctly", async ({ page }) => {
  18 |     const products = new Products(page);
  19 | 
  20 |     await expect(products.PRIMARY_HEADER).toBeVisible();
  21 |     await expect(products.HAM_BURGER).toBeVisible();
  22 |     await expect(products.SHOPPING_CART).toBeVisible();
  23 |     await expect(products.MAIN).toBeVisible();
  24 | 
  25 |     await expect(products.PRACTICE_BACKPACK).toBeVisible();
  26 |     await expect(products.JUNIOR_TESTER_ONESIE).toBeVisible();
  27 |     await expect(products.BOLT_T_SHIRT).toBeVisible();
  28 |     await expect(products.FLEECE_JACKET).toBeVisible();
  29 |     await expect(products.BIKE_LIGHT).toBeVisible();
  30 |   });
  31 | 
  32 |   test("should add three products to cart", async ({ page }) => {
  33 |     const products = new Products(page);
  34 | 
  35 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  36 |     await products.ADD_BIKE_LIGHT.click();
  37 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  38 | 
  39 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  40 |   });
  41 | 
  42 |   test("should display added products in cart", async ({ page }) => {
  43 |     const products = new Products(page);
  44 |     const cart = new Cart(page);
  45 | 
> 46 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
     |                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  47 |     await products.ADD_BIKE_LIGHT.click();
  48 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  49 | 
  50 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  51 | 
  52 |     await products.SHOPPING_CART.click();
  53 | 
  54 |     await expect(cart.TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  55 | 
  56 |     await expect(cart.BIKE_LIGHT).toBeVisible();
  57 | 
  58 |     await expect(cart.JUNIOR_TESTER_ONESIE).toBeVisible();
  59 | 
  60 |     await expect(cart.REMOVE_TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  61 | 
  62 |     await expect(cart.REMOVE_BIKE_LIGHT).toBeVisible();
  63 | 
  64 |     await expect(cart.REMOVE_JUNIOR_TESTER_ONESIE).toBeVisible();
  65 | 
  66 |     await expect(cart.CONTINUE_SHOPPING).toBeVisible();
  67 |     await expect(cart.CHECKOUT).toBeVisible();
  68 | 
  69 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  70 |   });
  71 | 
  72 |   test("should preserve cart when continuing shopping", async ({ page }) => {
  73 |     const products = new Products(page);
  74 |     const cart = new Cart(page);
  75 | 
  76 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  77 |     await products.ADD_BIKE_LIGHT.click();
  78 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  79 | 
  80 |     await products.SHOPPING_CART.click();
  81 | 
  82 |     await cart.CONTINUE_SHOPPING.click();
  83 | 
  84 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  85 |   });
  86 | 
  87 |   test("should add Bolt T-Shirt to an empty cart", async ({ page }) => {
  88 |     const products = new Products(page);
  89 | 
  90 |     await products.ADD_BOLT_T_SHIRT.click();
  91 | 
  92 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("1");
  93 |   });
  94 | });
  95 | 
```