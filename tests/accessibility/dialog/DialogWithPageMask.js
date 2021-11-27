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
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" onClose={() => {}}>
            Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default dialog with page mask');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - All properties set', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" dialogContentAreaColour="grey" colour="red"
            buttonsList={twoButtonsList} onClose={() => {}} isDisplayed={true}>
              Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Dialog with page mask, all properties set');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
