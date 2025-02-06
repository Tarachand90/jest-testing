export const transform = {
  "^.+\\.js$": "babel-jest",
};

export default {
  moduleNameMapper: {
    "^src$": "<rootDir>/src", // Maps 'src' to the 'src' directory
  },
};
