import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../../../../src';
import ControlsEditorUpper from '../../../../../../src/ui-elements/editor/supporting-elements/controls/supporting-elements/ControlsEditorUpper';

describe('ControlsEditorUpper', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Controls Editor Upper Accessibility Test</h1>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
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
          <h1>Controls Editor Upper Accessibility Test</h1>
          <ControlsEditorUpper addEditorItem={jest.fn()} colour="red" dialogContentAreaColour="grey" additionalSpacingAboveControls={true} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Dialog visible - Add new item dialog', () => {
    let results;

    beforeAll(async () => {
      const wrapper = TestDev.mount(
        <PageContent title="Accessibility Test">
          <h1>Controls Editor Upper Accessibility Test</h1>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </PageContent>
      );
      wrapper.find('ControlsEditorUpper').instance().showAddNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      const html = TestDev.mountHtmlTemplate(wrapperHtml);
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Dialog visible - Loading new item dialog', () => {
    let results;

    beforeAll(async () => {
      const wrapper = TestDev.mount(
        <PageContent title="Accessibility Test">
          <h1>Controls Editor Upper Accessibility Test</h1>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </PageContent>
      );
      wrapper.find('ControlsEditorUpper').instance().showLoadingNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      const html = TestDev.mountHtmlTemplate(wrapperHtml);
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
