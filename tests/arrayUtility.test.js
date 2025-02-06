import { filterEvenNumbers } from "src";

describe("filterEvenNumbers", () => {
  test("should return only even numbers from an array", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const result = [2, 4, 6];
    expect(filterEvenNumbers(numbers)).toEqual(result);
  });

  test("should return an empty array when there are no even numbers", () => {
    const numbers = [1, 3, 5];
    const result = [];
    expect(filterEvenNumbers(numbers)).toEqual(result);
  });

  test("should throw an error if input is not an array", () => {
    expect(() => filterEvenNumbers("string")).toThrow("Input must be an array");
  });
});
