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
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Form Item Label Accessibility Test</h1>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Dialog component with additional spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Form Item Label Accessibility Test</h1>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" additionalUpperSpacing={true} isDialogFormItem={true} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
