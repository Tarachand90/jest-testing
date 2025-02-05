const { isInvalidEmail } = require("../src/authService");

test("valid email should be truthy", () => {
  expect(isInvalidEmail("user@gmail.com")).toBeTruthy();
});
