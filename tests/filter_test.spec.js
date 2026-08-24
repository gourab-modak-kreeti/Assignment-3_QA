import { test, expect } from "@playwright/test";
import { Login } from "../pages/login.js";
import { Products } from "../pages/products.js";
import { Cart } from "../pages/cart.js";

const USERNAME = "standard_user";
const PASSWORD = "tta_secret";

test.beforeEach(async ({ page }) => {
  const login = new Login(page);

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

  await login.login(USERNAME, PASSWORD);
});
test("test", async ({ page }) => {
  await page.locator('[data-test="title-row"] svg').click();
  await page.locator('[data-test="product-sort-container"]').selectOption("za");
  await expect(page.getByRole("main")).toMatchAriaSnapshot(`
    - main:
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - link "TTA Practice Backpack":
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - link "TTA Junior Tester Onesie":
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - link "TTA Fleece Jacket":
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - text: /It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - link "TTA Bolt T-Shirt":
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - text: /Get your testing superhero on with the TTA bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bike-light
        - link "TTA Bike Light":
          - /url: ./inventory-item.html?id=tta-bike-light
        - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - link "Test.allTheThings() T-Shirt (Red)":
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - text: /This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
    `);
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("lohi");
  await expect(page.getByRole("main")).toMatchAriaSnapshot(`
    - main:
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - link "TTA Junior Tester Onesie":
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bike-light
        - link "TTA Bike Light":
          - /url: ./inventory-item.html?id=tta-bike-light
        - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - link "TTA Bolt T-Shirt":
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - text: /Get your testing superhero on with the TTA bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - link "Test.allTheThings() T-Shirt (Red)":
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - text: /This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - link "TTA Practice Backpack":
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - link "TTA Fleece Jacket":
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - text: /It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
    `);
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("hilo");
  await expect(page.getByRole("main")).toMatchAriaSnapshot(`
    - main:
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - link "TTA Fleece Jacket":
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - text: /It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - link "TTA Practice Backpack":
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - link "TTA Bolt T-Shirt":
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - text: /Get your testing superhero on with the TTA bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - link "Test.allTheThings() T-Shirt (Red)":
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - text: /This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bike-light
        - link "TTA Bike Light":
          - /url: ./inventory-item.html?id=tta-bike-light
        - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - link "TTA Junior Tester Onesie":
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
    `);
});
