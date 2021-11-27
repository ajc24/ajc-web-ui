import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { Dialog, PageContent } from '../../../src';

describe('Dialog', () => {
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

  describe('Default props and rendering - Component with grey theme, white background', () => {
    let aCheckerResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title">
            Test Dialog Content.
          </Dialog>
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default Dialog');
    }, testTimeout);

    it('verifies the accessibility-checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red theme, grey background and buttons list', () => {
    let aCheckerResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title" colour="red" bgColour="grey" buttonsList={twoButtonsList}>
            Test Dialog Content.
          </Dialog>
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Dialog with red theme, grey background, buttons list');
    }, testTimeout);

    it('verifies the accessibility-checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with grey theme, yellow background and buttons list', () => {
    let aCheckerResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title" colour="grey" bgColour="yellow" buttonsList={twoButtonsList}>
            Test Dialog Content.
          </Dialog>
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Dialog with grey theme, yellow background, buttons list');
    }, testTimeout);

    it('verifies the accessibility-checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
