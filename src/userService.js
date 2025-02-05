const users = {
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
};

const getUserById = (id) => users[id] || null;

module.exports = { getUserById };
