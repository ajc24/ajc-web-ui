import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import FormItemLabel from '../../../../src/ui-elements/form/supporting-elements/FormItemLabel';
import { PageContent } from '../../../../src';

describe('FormItemLabel', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" />
          <input id="form-item-label-id" type="text" />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Standalone form item, no additional spacing');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Dialog component with additional spacing', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" additionalUpperSpacing={true} isDialogFormItem={true} />
          <input id="form-item-label-id" type="text" />
        </PageContent>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Dialog form item with additional spacing');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
