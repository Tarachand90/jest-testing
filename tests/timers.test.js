import { delayThree, delayOne } from "../src/timers";

let cb;

beforeEach(() => {
  jest.useFakeTimers();
  cb = jest.fn(); // Create a fresh mock before each test
});

afterEach(() => {
  jest.clearAllTimers(); // Ensure no stray timers remain
  jest.resetAllMocks(); // Reset mock function to a clean state
});

describe("test timers", () => {
  test("delay three seconds", () => {
    delayThree("test3", cb);
    jest.advanceTimersByTime(3000);
    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledTimes(1); // Ensure callback is called only once
    expect(cb).toHaveBeenCalledWith("test3"); // Check for correct argument "test3"
  });

  test("delay one second", () => {
    delayOne("test1", cb);
    jest.advanceTimersByTime(1000);
    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledTimes(1); // Ensure callback is called only once
    expect(cb).toHaveBeenCalledWith("test1"); // Check for correct argument
  });
});
