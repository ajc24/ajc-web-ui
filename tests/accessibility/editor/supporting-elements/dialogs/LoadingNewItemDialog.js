import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../../../src';
import LoadingNewItemDialog from '../../../../../src/ui-elements/editor/supporting-elements/dialogs/LoadingNewItemDialog';

describe('LoadingNewItemDialog', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Loading New Item Dialog Accessibility Test</h1>
          <LoadingNewItemDialog />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Loading New Item Dialog Accessibility Test</h1>
          <LoadingNewItemDialog colour="red" dialogContentAreaColour="grey" isDisplayed={true} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
