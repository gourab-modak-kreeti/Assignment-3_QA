# Bug: Cart State Is Not Reflected After Navigating Back From Product Page

## Summary

When a user adds a product to the cart from the product page and then navigates back to the products page using the browser's **Back** button, the cart state is not immediately updated.

The newly added item is only reflected in the cart UI after manually refreshing the page.

## Environment

* **Application:** TTACart
* **URL:** https://app.thetestingacademy.com/playwright/ttacart/
* **Browser:** Chrome
* **OS:** Linux
* **Feature:** Product / Shopping Cart
* **User:** Standard user

## Steps to Reproduce

1. Navigate to the TTACart application.
2. Log in using a valid user account.
3. Navigate to a product's details page.
4. Click **Add to Cart**.
5. Verify that the product is added to the cart.
6. Click the browser's **Back** button to return to the previous page.
7. Observe the shopping cart state.

## Expected Result

After navigating back to the products page, the cart state should immediately reflect the recently added product.

For example:

* The cart badge/count should display the updated number of items.
* The product should remain marked as **Added to Cart** if applicable.
* The UI should reflect the current cart state without requiring a page refresh.

## Actual Result

After clicking the browser's **Back** button, the cart UI does not immediately reflect the recently added item.

The updated cart state becomes visible only after manually refreshing the page.

## Impact

This can cause the UI to display stale cart information and may confuse users because the application appears as though the product was not added successfully.

## Severity

**Medium**

The product is successfully added, but the UI does not immediately reflect the current application state.

## Priority

**Medium**

The issue affects the shopping experience and state consistency but does not appear to prevent the user from completing the purchase.

## Suggested Investigation

Check how cart state is synchronized between:

* Product details page
* Products listing page
* Browser back/forward navigation
* Cart badge/count
* Client-side state or local storage

The application should rehydrate or synchronize the cart state when the products page is restored from the browser's back-forward cache instead of relying only on a full page reload.

## Acceptance Criteria

* [ ] Add a product to the cart from the product details page.
* [ ] Navigate back using the browser's Back button.
* [ ] Cart count is immediately updated.
* [ ] Product's cart state is immediately reflected.
* [ ] No manual page refresh is required.
* [ ] Existing cart functionality continues to work after a normal page refresh.
* [ ] Cart state remains consistent when navigating between product, products, and cart pages.
