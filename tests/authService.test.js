import { isInvalidEmail } from "src";

test("valid email should be truthy", () => {
  expect(isInvalidEmail("user@gmail.com")).toBeTruthy();
});
