const users = {
  1: { id: 1, name: "Alice", email: "alice@example.com", role: "admin" },
  2: { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
};

const getUserById = (id) => users[id] || null;

module.exports = { getUserById };
