import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogWithPageMask, PageContent } from '../../../src';

describe('DialogWithPageMask', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Create the buttons list */
  const twoButtonsList = [
    {
      id: 'save-button',
      onClick: () => {},
      title: 'Save',
      type: 'submit',
    },
    {
      id: 'cancel-button',
      onClick: () => {},
      title: 'Cancel',
      type: 'button',
    }
  ];

  describe('Default props and rendering', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog with Page Mask Accessibility Test</h1>
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" onClose={() => {}}>
            Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - All properties set', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog with Page Mask Accessibility Test</h1>
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" dialogContentAreaColour="grey" colour="red"
            buttonsList={twoButtonsList} onClose={() => {}} isDisplayed={true}>
              Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
