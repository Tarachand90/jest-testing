import { isCartEmpty } from "src";

test("empty cart should be falsy", () => {
  expect(isCartEmpty([])).toBeTruthy(); // An empty cart means `true` (cart is empty)
  expect(isCartEmpty(["Item 1"])).toBeFalsy(); // A cart with an item is NOT empty
});
