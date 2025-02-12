export const delayThree = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 3000);
};

export const delayOne = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 1000);
};
