module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/testStyleStub.js",
    "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/src/testFileStub.js"
  }
};