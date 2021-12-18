const { configureUnitTests } = require('ajc-jest-enzyme');

const jestConfig = configureUnitTests();
jestConfig.testMatch = [
  '<rootDir>/tests/integration/**/*.js',
];

module.exports = jestConfig;