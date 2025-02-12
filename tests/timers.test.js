import { delayThree, delayOne } from "../src/timers";

const cb = jest.fn();

jest.useFakeTimers();

describe("test timers", () => {
  test("delay three seconds", () => {
    delayThree("test", cb);
    jest.advanceTimersByTime(3000);
    expect(cb).toHaveBeenCalled();
  });

  test("delay one second", () => {
    delayOne("test", cb);
    jest.advanceTimersByTime(1000);
    expect(cb).toHaveBeenCalled();
  });
});
