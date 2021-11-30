import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, PageMask } from '../../../src';

describe('PageMask', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering - Non visible page mask', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Page Mask Accessibility Test</h1>
          <PageMask id="test-id" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with grey theme', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Page Mask Accessibility Test</h1>
          <PageMask id="test-id" isDisplayed={true} colour="grey" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Page Mask Accessibility Test</h1>
          <PageMask id="test-id" isDisplayed={true} colour="red" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - onClose functionality not set', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Page Mask Accessibility Test</h1>
          <PageMask id="test-id" isDisplayed={true}>
            Test Page Mask text.
          </PageMask>
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
