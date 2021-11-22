const { configureSnapshotTests } = require('ajc-jest-enzyme');

const jestConfig = configureSnapshotTests();
module.exports = jestConfig;
