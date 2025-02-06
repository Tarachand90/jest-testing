import { getProduct } from "../src/productService.js";

test("product object must have an id ", () => {
  expect(getProduct().id).toBeDefined(); // Ensuring the product has an ID
});
