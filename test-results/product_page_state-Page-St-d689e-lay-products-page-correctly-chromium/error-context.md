# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_page_state.spec.js >> Page State >> should display products page correctly
- Location: tests/product_page_state.spec.js:17:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('article').filter({ hasText: 'TTA Practice Backpack' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('article').filter({ hasText: 'TTA Practice Backpack' })

```

```yaml
- heading "TTACart" [level=1]
- textbox "Username": standard_user
- textbox "Password": password
- alert: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- paragraph: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- paragraph: tta_secret
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
  18 |     const login = new Login(page);
  19 | 
  20 |     await login.login(USERNAME, PASSWORD);
  21 |     const products = new Products(page);
  22 | 
  23 |     // await expect(products.PRIMARY_HEADER).toBeVisible();
  24 |     // await expect(products.HAM_BURGER).toBeVisible();
  25 |     // await expect(products.SHOPPING_CART).toBeVisible();
  26 |     // await expect(products.MAIN).toBeVisible();
  27 | 
> 28 |     await expect(products.PRACTICE_BACKPACK).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  29 |     await expect(products.JUNIOR_TESTER_ONESIE).toBeVisible();
  30 |     await expect(products.BOLT_T_SHIRT).toBeVisible();
  31 |     await expect(products.FLEECE_JACKET).toBeVisible();
  32 |     await expect(products.BIKE_LIGHT).toBeVisible();
  33 |   });
  34 | 
  35 |   test("should add three products to cart", async ({ page }) => {
  36 |     const products = new Products(page);
  37 | 
  38 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  39 |     await products.ADD_BIKE_LIGHT.click();
  40 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  41 | 
  42 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  43 |   });
  44 | 
  45 |   test("should display added products in cart", async ({ page }) => {
  46 |     const products = new Products(page);
  47 |     const cart = new Cart(page);
  48 | 
  49 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  50 |     await products.ADD_BIKE_LIGHT.click();
  51 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  52 | 
  53 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  54 | 
  55 |     await products.SHOPPING_CART.click();
  56 | 
  57 |     await expect(cart.TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  58 | 
  59 |     await expect(cart.BIKE_LIGHT).toBeVisible();
  60 | 
  61 |     await expect(cart.JUNIOR_TESTER_ONESIE).toBeVisible();
  62 | 
  63 |     await expect(cart.REMOVE_TEST_ALLTHETHINGS_TSHIRT).toBeVisible();
  64 | 
  65 |     await expect(cart.REMOVE_BIKE_LIGHT).toBeVisible();
  66 | 
  67 |     await expect(cart.REMOVE_JUNIOR_TESTER_ONESIE).toBeVisible();
  68 | 
  69 |     await expect(cart.CONTINUE_SHOPPING).toBeVisible();
  70 |     await expect(cart.CHECKOUT).toBeVisible();
  71 | 
  72 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  73 |   });
  74 | 
  75 |   test("should preserve cart when continuing shopping", async ({ page }) => {
  76 |     const products = new Products(page);
  77 |     const cart = new Cart(page);
  78 | 
  79 |     await products.ADD_TEST_ALLTHETHINGS_TSHIRT.click();
  80 |     await products.ADD_BIKE_LIGHT.click();
  81 |     await products.ADD_JUNIOR_TESTER_ONESIE.click();
  82 | 
  83 |     await products.SHOPPING_CART.click();
  84 | 
  85 |     await cart.CONTINUE_SHOPPING.click();
  86 | 
  87 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("3");
  88 |   });
  89 | 
  90 |   test("should add Bolt T-Shirt to an empty cart", async ({ page }) => {
  91 |     const products = new Products(page);
  92 | 
  93 |     await products.ADD_BOLT_T_SHIRT.click();
  94 | 
  95 |     await expect(products.SHOPPING_CART_BADGE).toHaveText("1");
  96 |   });
  97 | });
  98 | 
```