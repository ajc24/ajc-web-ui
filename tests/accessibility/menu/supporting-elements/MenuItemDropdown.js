import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemDropdown from '../../../../src/ui-elements/menu/supporting-elements/MenuItemDropdown';
import DropdownMenuContainerAndItems from '../../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('MenuItemDropdown', () => {
  /* Retrieve the timeout for jest-axe tests */
  let componentDidMountSpy;
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

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering - Component in grey with a hidden container', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Default props and rendering - Component in grey with a visible container', () => {
    let jestAxeResults;

    beforeAll(async () => {
      /* Mount the component and change its state */
      const wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: jest.fn()
      });
      wrapper.update();
      /* Build the HTML template for the component */
      const html = wrapper.html();
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component in red with a hidden container', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" colour="red" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component in red with a visible container', () => {
    let jestAxeResults;

    beforeAll(async () => {
      /* Mount the component and change its state */
      const wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" colour="red" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: jest.fn()
      });
      wrapper.update();
      /* Build the HTML template for the component */
      const html = wrapper.html();
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
