const weakPasswords = ["password123", "123456", "qwerty", "letmein"];

const isWeakPassword = (password) => weakPasswords.includes(password);

module.exports = { isWeakPassword };
