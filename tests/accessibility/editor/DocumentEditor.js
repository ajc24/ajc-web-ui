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
          <DocumentEditor colour="red" dialogContentAreaColour="grey" />
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
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor />
        </PageContent>
      );
      wrapper.find('DocumentEditor').instance().showAddNewItemDialog();
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
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockImplementationOnce(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      const wrapper = TestDev.mount(
        <PageContent title="Accessibility Test">
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor />
        </PageContent>
      );
      wrapper.find('DocumentEditor').instance().showLoadingNewItemDialog();
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

  describe('Transferred props and rendering - Editor displaying screenshot with caption item', () => {
    let results;

    beforeAll(async () => {
      const wrapper = TestDev.mount(
        <PageContent title="Accessibility Test">
          <h1>Document Editor Accessibility Test</h1>
          <DocumentEditor />
        </PageContent>
      );
      wrapper.find('DocumentEditor').instance().addEditorItem('screenshot-with-caption');
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
