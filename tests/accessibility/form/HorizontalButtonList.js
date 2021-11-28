import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { HorizontalButtonList } from '../../../src';

describe('HorizontalButtonList', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  /* Set the data for use in the tests */
  const singleButtonList = [
    {
      id: 'test-single-button-id',
      onClick: jest.fn(),
      title: 'Test Default Single Grey Button',
      tooltip: 'This is a test tooltip',
      type: 'button',
    }
  ];
  const singleSubmitButtonList = [
    {
      id: 'test-single-submit-button-id',
      onClick: jest.fn(),
      title: 'Test Submit Button',
      tooltip: 'This is a test tooltip',
      type: 'submit',
    }
  ];
  const twoButtonsList = [
    {
      id: 'test-button-1-id',
      onClick: jest.fn(),
      title: 'Test Button 1',
      tooltip: 'This is a test tooltip',
      type: 'button',
    },
    {
      id: 'test-button-2-id',
      onClick: jest.fn(),
      title: 'Test Button 2',
      tooltip: 'This is a test tooltip',
      type: 'button',
    }
  ];

  describe('Default props and rendering - Single left aligned grey button', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList buttonList={singleButtonList} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Multiple center aligned red buttons', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList colour="red" alignment="center" buttonList={twoButtonsList} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Single right aligned grey submit button', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList colour="grey" alignment="right" buttonList={singleSubmitButtonList} />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Left aligned multiple red buttons with label text, default upper spacing', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList colour="red" alignment="left" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Center aligned multiple grey buttons with label text, added upper spacing', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList colour="grey" additionalUpperSpacing={true} alignment="center" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Right aligned multiple red buttons with label text, no upper spacing', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="region">
          <HorizontalButtonList colour="red" additionalUpperSpacing={false} alignment="right" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
