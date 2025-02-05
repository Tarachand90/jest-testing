/* eslint-disable */
const { add, subtract, multiply, divide } = require("./mathOperations");

describe("Math Operations", () => {
  // Test for add
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3); // Similar to asserting equality in JUnit
  });

  // Test for subtract
  test("subtracts 5 - 2 to equal 3", () => {
    expect(subtract(5, 2)).toBe(3); // Same as JUnit assertEquals
  });

  // Test for multiply
  test("multiplies 2 * 3 to equal 6", () => {
    expect(multiply(2, 3)).toBe(6); // Like JUnit assertEquals
  });

  // Test for divide
  test("divides 6 / 2 to equal 3", () => {
    expect(divide(6, 2)).toBe(3); // Same logic as in JUnit
  });

  // Test for divide by zero error
  test("throws error when dividing by 0", () => {
    expect(() => divide(6, 0)).toThrow("Division by zero"); // Like JUnit's expected exception
  });
});
