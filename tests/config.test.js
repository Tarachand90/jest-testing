const { getConfig } = require("../src/config");

test("returns undefined for missing environment variable", () => {
  expect(getConfig("NON_EXISTENT_ENV")).toBeUndefined(); // This variable is not set
});
