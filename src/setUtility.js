export const filterEvenNumbersFromSet = (set) => {
  if (!(set instanceof Set)) {
    throw new Error("Input must be a Set");
  }

  return new Set([...set].filter((num) => num % 2 === 0));
};
