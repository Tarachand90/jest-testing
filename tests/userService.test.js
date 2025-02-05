const { getUserById } = require("../src/userService");

test("returns null if user does not exist", () => {
  expect(getUserById(99)).toBeNull(); // User 99 does not exist, so function returns null
});
