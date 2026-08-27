export class Checkout {
  constructor(page) {
    this.page = page;

    // Header
    this.PRIMARY_HEADER = page.locator(
      '[data-test="primary-header"]'
    );

    this.HAM_BURGER = page.locator(
      '[data-test="open-menu"]'
    );

    this.SHOPPING_CART = page.locator(
      '[data-test="shopping-cart-link"]'
    );

    this.SHOPPING_CART_BADGE = page.locator(
      '[data-test="shopping-cart-badge"]'
    );

    // Main content
    this.MAIN = page.getByRole("main");

    // Checkout information
    this.FIRST_NAME = page.locator(
      '[data-test="firstName"]'
    );

    this.LAST_NAME = page.locator(
      '[data-test="lastName"]'
    );

    this.POSTAL_CODE = page.locator(
      '[data-test="postalCode"]'
    );

    // Checkout buttons
    this.CONTINUE = page.locator(
      '[data-test="continue"]'
    );

    this.CANCEL = page.locator(
      '[data-test="cancel"]'
    );

    this.FINISH = page.locator(
      '[data-test="finish"]'
    );

    // Checkout summary
    this.ITEMS = page.locator(
      '[data-test="inventory-item"]'
    );

    this.SUBTOTAL = page.getByText(/Item total:/);

    this.TAX = page.getByText(/Tax:/);

    this.TOTAL = page.getByText(/Total:/);

    // Order confirmation
    this.COMPLETE_HEADER = page.getByText(
      "Thank you for your order!"
    );

    this.COMPLETE_MESSAGE = page.getByText(
      "Your order has been dispatched"
    );

    // Footer
    this.FOOTER = page.locator(
      '[data-test="footer"]'
    );

    this.FOOTER_DIV = page.locator(
      '[data-test="footer"] div'
    );

    this.FOOTER_COPY = page.locator(
      '[data-test="footer-copy"]'
    );


    //Items
    this.TSHIRT_TEXT =page.getByText("Test.allTheThings() T-Shirt (");
    this.PRACTICE_BACKPACK_TEXT =page.getByText("TTA Practice Backpack");
    this.JUNIOR_ONESIE_TEXT =page.getByText("TTA Junior Tester Onesie");
    this.BIKELIGHT_TEXT =page.getByText("TTA Bike Light");
  }
}