import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { DropdownMenu, PageContent } from '../../../src';

describe('DropdownMenu', () => {
  /* Create the test data for the menu */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Create the mock data for use with the test */
  const mockOptionsList = [
    {
      textContent: 'One',
      value: 'one',
    },
    {
      textContent: 'Two',
      value: 'two',
    },
    {
      textContent: 'Three',
      value: 'three',
    },
    {
      textContent: 'Four',
      value: 'four',
    },
    {
      textContent: 'Five',
      value: 'five',
    },
  ];

  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dropdown Menu Accessibility Test</h1>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} accessibleMenuName="Number" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Standalone component with additional spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dropdown Menu Accessibility Test</h1>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} additionalUpperSpacing={true}
            accessibleMenuName="Number" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Dialog component, no additional spacing', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <PageContent title="Accessibility Test">
          <h1>Dropdown Menu Accessibility Test</h1>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} isDialogFormItem={true}
            accessibleMenuName="Number" />
        </PageContent>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
