import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DocumentEditor, PageContent } from '../../../src';

describe('DocumentEditor', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Component with grey theme', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with all custom properties set', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor colour="red" dialogContentAreaColour="grey" reRenderAllowance={500} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Editor displaying screenshot with caption item', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          return {
            textContent: 'screenshot-with-caption',
          };
        });
      const wrapper = TestDev.mount(
        <PageContent title="Accessibility Test">
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor />
        </PageContent>
      );
      wrapper.find('DocumentEditor').instance().addEditorItem();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      const html = TestDev.mountHtmlTemplate(wrapperHtml);
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
