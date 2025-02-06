import { getProduct } from "src";

test("product object must have an id ", () => {
  expect(getProduct().id).toBeDefined(); // Ensuring the product has an ID
});
