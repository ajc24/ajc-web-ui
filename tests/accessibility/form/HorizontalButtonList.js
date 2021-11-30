import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { HorizontalButtonList, PageContent } from '../../../src';

describe('HorizontalButtonList', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

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
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList buttonList={singleButtonList} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Multiple center aligned red buttons', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList colour="red" alignment="center" buttonList={twoButtonsList} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Single right aligned grey submit button', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList colour="grey" alignment="right" buttonList={singleSubmitButtonList} />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Left aligned multiple red buttons with label text, default upper spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList colour="red" alignment="left" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Center aligned multiple grey buttons with label text, added upper spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList colour="grey" additionalUpperSpacing={true} alignment="center" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Right aligned multiple red buttons with label text, no upper spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Horizontal Button List Accessibility Test</h1>
          <HorizontalButtonList colour="red" additionalUpperSpacing={false} alignment="right" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
