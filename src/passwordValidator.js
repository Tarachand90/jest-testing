const weakPasswords = ["password123", "123456", "qwerty", "letmein"];

export const isWeakPassword = (password) => weakPasswords.includes(password);
