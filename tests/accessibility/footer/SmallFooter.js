import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, SmallFooter } from '../../../src';

describe('SmallFooter', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Component with grey background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <PageContent title="Accessibility Test">
            <h1>Small Footer Accessibility Test</h1>
          </PageContent>
          <SmallFooter>
            This is a test.
          </SmallFooter>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <PageContent title="Accessibility Test">
            <h1>Small Footer Accessibility Test</h1>
          </PageContent>
          <SmallFooter colour="red">
            This is a test.
          </SmallFooter>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
