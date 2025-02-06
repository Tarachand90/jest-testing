import { filterEvenNumbersFromSet } from "src";

describe("filterEvenNumbersFromSet", () => {
  it("should return only even numbers from a Set", () => {
    const numberSet = new Set([1, 2, 3, 4, 5, 6]);
    const result = filterEvenNumbersFromSet(numberSet);
    const actualResult = new Set([2, 4, 6]);
    expect(result).toEqual(actualResult);
  });

  it("should return an empty Set when there are no even numbers", () => {
    const numberSet = new Set([1, 3, 5]);
    const result = filterEvenNumbersFromSet(numberSet);
    const actualResult = new Set();
    expect(result).toEqual(actualResult);
  });

  it("should throw an error if input is not a Set", () => {
    const numbers = [1, 3, 5, 6];
    expect(() => filterEvenNumbersFromSet(numbers)).toThrow(
      "Input must be a Set"
    );
  });
});
