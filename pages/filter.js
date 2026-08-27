export class Filter {
  constructor(page) {
    this.page = page;

    this.FILTER_BUTTON=page.locator('[data-test="title-row"] svg');
    this.MAIN_CONTAINER =page.getByRole("main");
    this.PRODUCT_SORT_CONTAINER =page.locator('[data-test="product-sort-container"]');
  }
}