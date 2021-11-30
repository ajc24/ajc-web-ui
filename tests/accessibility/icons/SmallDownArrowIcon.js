import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent, SmallDownArrowIcon } from '../../../src';

describe('SmallDownArrowIcon', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  describe('Default props and rendering - Component in black colour', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Accessibility Test">
            <h1>Small Down Arrow Icon Accessibility Test</h1>
            <SmallDownArrowIcon />
          </PageContent>
        </React.Fragment>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in white colour', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Accessibility Test">
            <h1>Small Down Arrow Icon Accessibility Test</h1>
            <SmallDownArrowIcon colour="white" />
          </PageContent>
        </React.Fragment>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
