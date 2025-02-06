export const filterEvenNumbers = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.filter(num => num % 2 === 0);
};
