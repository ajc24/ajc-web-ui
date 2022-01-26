import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../../../src';
import ControlsEditor from '../../../../../src/ui-elements/editor/supporting-elements/controls/ControlsEditor';

describe('ControlsEditor', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Controls Editor Accessibility Test</h1>
          <ControlsEditor addEditorItem={jest.fn()} />
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
          <h1>Controls Editor Accessibility Test</h1>
          <ControlsEditor colour="red" addEditorItem={jest.fn()} additionalSpacingAboveControls={true} dialogContentAreaColour="grey" reRenderAllowance={500} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
