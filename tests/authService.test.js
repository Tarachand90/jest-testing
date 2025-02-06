import { isInvalidEmail } from "../src/authService.js";

test("valid email should be truthy", () => {
  expect(isInvalidEmail("user@gmail.com")).toBeTruthy();
});
