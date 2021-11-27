import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, SmallFooter } from '../../../src';

describe('SmallFooter', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Component with grey background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
          <SmallFooter>
            This is a test.
          </SmallFooter>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default small footer');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
          <SmallFooter colour="red">
            This is a test.
          </SmallFooter>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Small footer with red background');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
