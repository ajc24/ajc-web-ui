import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import DropdownMenuContainerAndItems from '../../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('DropdownMenuContainerAndItems', () => {
  /* Retrieve the timeout for jest-axe tests */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  /* Test data */
  const testDropdownMenuItemsList = [
    {
      route: '/test-menu-item-1',
      title: 'Dropdown Menu Item 1',
    },
    {
      route: '/test-menu-item-2',
      title: 'Dropdown Menu Item 2',
    },
  ];

  describe('Default props and rendering - Component marked as hidden', () => {
    let componentDidMountSpy;
    let jestAxeResults;

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component marked as visible', () => {
    let componentDidMountSpy;
    let jestAxeResults;
    
    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as hidden', () => {
    let componentDidMountSpy;
    let jestAxeResults;
    
    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as visible', () => {
    let componentDidMountSpy;
    let jestAxeResults;

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
