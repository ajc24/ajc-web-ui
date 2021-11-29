import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogContentArea, PageContent } from '../../../src';

describe('DialogContentArea', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Component with white background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Content Area Accessibility Test</h1>
          <DialogContentArea id="test-dialog-content-area-id">
            Test dialog content area text.
          </DialogContentArea>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Content Area Accessibility Test</h1>
          <DialogContentArea id="test-dialog-content-area-id" colour="grey">
            Test dialog content area text.
          </DialogContentArea>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Content Area Accessibility Test</h1>
          <DialogContentArea id="test-dialog-content-area-id" colour="yellow">
            Test dialog content area text.
          </DialogContentArea>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
