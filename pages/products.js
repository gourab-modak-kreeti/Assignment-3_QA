export class Products {
  constructor(page) {
    this.page = page;

    // Header
    this.PRIMARY_HEADER = page.locator('[data-test="primary-header"]');
    this.HAM_BURGER = page.locator('[data-test="open-menu"]');
    this.SHOPPING_CART = page.locator('[data-test="shopping-cart-link"]');
    this.SHOPPING_CART_BADGE = page.locator(
      '[data-test="shopping-cart-badge"]',
    );

    // Main content
    this.MAIN = page.getByRole("main");
    this.ALL_TESTS = page.getByText("test.all()Test.allTheThings");

    // Product articles
    this.PRACTICE_BACKPACK = page
      .getByRole("article")
      .filter({ hasText: "TTA Practice Backpack" });

    this.JUNIOR_TESTER_ONESIE = page
      .getByRole("article")
      .filter({ hasText: "TTA Junior Tester Onesie" });

    this.BOLT_T_SHIRT = page
      .getByRole("article")
      .filter({ hasText: "TTA Bolt T-Shirt" });

    this.FLEECE_JACKET = page
      .getByRole("article")
      .filter({ hasText: "TTA Fleece Jacket" });

    this.BIKE_LIGHT = page
      .getByRole("article")
      .filter({ hasText: "TTA Bike Light" });

    // Add to cart buttons
    this.ADD_TEST_ALLTHETHINGS_TSHIRT = page.locator(
      '[data-test="add-to-cart-test-allthethings-tshirt-red"]',
    );
    this.ADD_BIKE_LIGHT = page.locator('[data-test="add-to-cart-tta-bike-light"]');

    this.ADD_PRACTICE_BACKPACK = page.locator(
      '[data-test="add-to-cart-tta-practice-backpack"]',
    );

    this.ADD_FLEECE_JACKET = page.locator(
      '[data-test="add-to-cart-tta-fleece-jacket"]',
    );

    this.ADD_BOLT_T_SHIRT = page.locator(
      '[data-test="add-to-cart-tta-bolt-tshirt"]',
    );

    this.ADD_JUNIOR_TESTER_ONESIE = page.locator(
      '[data-test="add-to-cart-tta-junior-tester-onesie"]',
    );

    // Remove from cart buttons
    this.REMOVE_TEST_ALLTHETHINGS_TSHIRT = page.locator(
      '[data-test="remove-test-allthethings-tshirt-red"]',
    );

    this.REMOVE_FLEECE_JACKET = page.locator(
      '[data-test="remove-tta-fleece-jacket"]',
    );

    this.REMOVE_BOLT_T_SHIRT = page.locator(
      '[data-test="remove-tta-bolt-tshirt"]',
    );

    this.REMOVE_JUNIOR_TESTER_ONESIE = page.locator(
      '[data-test="remove-tta-junior-tester-onesie"]',
    );

    // Footer
    this.FOOTER = page.locator('[data-test="footer"]');
    this.FOOTER_DIV = page.locator('[data-test="footer"] div');
    this.FOOTER_COPY = page.locator('[data-test="footer-copy"]');
  }
}
