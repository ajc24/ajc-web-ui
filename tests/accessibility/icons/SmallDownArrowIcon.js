import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, SmallDownArrowIcon } from '../../../src';

describe('SmallDownArrowIcon', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  describe('Default props and rendering - Component in black colour', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <SmallDownArrowIcon />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default small down arrow icon');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in white colour', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <SmallDownArrowIcon colour="white" />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Small down arrow icon, white');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
