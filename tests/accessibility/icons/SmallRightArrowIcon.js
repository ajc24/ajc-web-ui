import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, SmallRightArrowIcon } from '../../../src';

describe('SmallRightArrowIcon', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  describe('Default props and rendering - Component in black colour', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <SmallRightArrowIcon />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default small right arrow icon');
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
          <SmallRightArrowIcon colour="white" />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Small right arrow icon, white');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
