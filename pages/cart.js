export class Cart {
  constructor(page) {
    this.page = page;

    // Header
    this.PRIMARY_HEADER = page.locator('[data-test="primary-header"]');

    this.HAM_BURGER = page.locator('[data-test="open-menu"]');

    this.SHOPPING_CART = page.locator('[data-test="shopping-cart-link"]');

    this.SHOPPING_CART_BADGE = page.locator(
      '[data-test="shopping-cart-badge"]',
    );

    // Cart products
    this.TEST_ALLTHETHINGS_TSHIRT = page.getByText(
      "1Test.allTheThings() T-Shirt",
    );

    this.BIKE_LIGHT = page.getByText("1TTA Bike LightA red light");

    this.JUNIOR_TESTER_ONESIE = page.getByText("1TTA Junior Tester OnesieRib");

    // Remove buttons
    this.REMOVE_TEST_ALLTHETHINGS_TSHIRT = page.locator(
      '[data-test="remove-test-allthethings-tshirt-red"]',
    );

    this.REMOVE_BIKE_LIGHT = page.locator(
      '[data-test="remove-tta-bike-light"]',
    );

    this.REMOVE_JUNIOR_TESTER_ONESIE = page.locator(
      '[data-test="remove-tta-junior-tester-onesie"]',
    );

    // Cart actions
    this.CONTINUE_SHOPPING = page.getByText("Continue Shopping");

    this.CHECKOUT = page.getByText("Checkout");

    // Main
    this.MAIN = page.getByRole("main");

    // Footer
    this.FOOTER = page.locator('[data-test="footer"]');

    this.FOOTER_DIV = page.locator('[data-test="footer"] div');

    this.FOOTER_COPY = page.locator('[data-test="footer-copy"]');
  }
}
