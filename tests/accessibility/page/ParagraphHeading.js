import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { ParagraphHeading } from '../../../src';

describe('ParagraphHeading', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering - Component with left aligned text', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <ParagraphHeading>
            Test paragraph heading.
          </ParagraphHeading>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with center aligned text and reduced upper spacing', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <ParagraphHeading alignment="center" additionalUpperSpacing={false}>
            Test paragraph heading.
          </ParagraphHeading>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with right aligned text', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <ParagraphHeading alignment="right">
            Test paragraph heading.
          </ParagraphHeading>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
