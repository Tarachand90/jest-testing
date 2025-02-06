import { getConfig } from "../src/config.js";

test("returns undefined for missing environment variable", () => {
  expect(getConfig("NON_EXISTENT_ENV")).toBeUndefined(); // This variable is not set
});
