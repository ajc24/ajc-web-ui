import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageMask } from '../../../src';

describe('PageMask', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Non visible page mask', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <PageMask id="test-id" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with grey theme', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <PageMask id="test-id" isDisplayed={true} colour="grey" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <PageMask id="test-id" isDisplayed={true} colour="red" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - onClose functionality not set', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <PageMask id="test-id" isDisplayed={true}>
            Test Page Mask text.
          </PageMask>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
