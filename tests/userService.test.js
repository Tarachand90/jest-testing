const { getUserById } = require("../src/userService");

test("returns null if user does not exist", () => {
  expect(getUserById(99)).toBeNull(); // User 99 does not exist, so function returns null
});

test("should  return correct user details for a valid ID", () => {
  const expectedUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "user",
  };

  expect(getUserById(2)).toEqual(expectedUser); //Uses toEqual() for object comparison
});
