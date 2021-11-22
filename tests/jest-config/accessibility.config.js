const { configureAccessibilityTests } = require('ajc-accessibility');

const jestConfig = configureAccessibilityTests();
module.exports = jestConfig;
