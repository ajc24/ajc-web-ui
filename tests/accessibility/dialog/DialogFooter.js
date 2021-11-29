import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogFooter, PageContent } from '../../../src';

describe('DialogFooter', () => {
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

  describe('Default props and rendering - Component with grey background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Footer Accessibility Test</h1>
          <DialogFooter id="test-dialog-buttons-list-id" />
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Footer Accessibility Test</h1>
          <DialogFooter id="test-dialog-buttons-list-id" colour="red" />
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Grey component with buttons list', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Footer Accessibility Test</h1>
          <DialogFooter id="test-dialog-buttons-list-id" colour="grey" buttonsList={twoButtonsList} />
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Red component with buttons list', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dialog Footer Accessibility Test</h1>
          <DialogFooter id="test-dialog-buttons-list-id" colour="red" buttonsList={twoButtonsList} />
        </PageContent>
      );
      results = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
