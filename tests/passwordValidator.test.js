import { isWeakPassword } from "src";

test("should return true for weak passwords", () => {
  expect(isWeakPassword("password123")).toBe(true);
  expect(isWeakPassword("qwerty")).toBe(true);
});

test("should NOT return true for strong passwords", () => {
  expect(isWeakPassword("SecurePass@2025")).not.toBe(true);
  expect(isWeakPassword("MySecretpassword")).not.toBeTruthy();
});
