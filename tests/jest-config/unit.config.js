const { configureUnitTests } = require('ajc-jest-enzyme');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/ui-elements/editor/supporting-elements/index.js');

module.exports = jestConfig;
