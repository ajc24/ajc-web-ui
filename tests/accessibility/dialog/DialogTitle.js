import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogTitle, PageContent } from '../../../src';

describe('DialogTitle', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Component with grey theme', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Title Accessibility Test</h1>
          <DialogTitle id="test-dialog-title-id">
            Test Dialog Title Text
          </DialogTitle>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Title Accessibility Test</h1>
          <DialogTitle id="test-dialog-title-id" colour="red">
            Test Dialog Title Text
          </DialogTitle>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
