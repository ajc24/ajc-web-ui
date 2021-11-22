import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { Menu } from '../../../src';
import DropdownMenuContainerAndItems from '../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('Menu', () => {
  /* Create the test data for the menu */
  let componentDidMountSpy;
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  const testMenuItemsList = [
    {
      route: '/test-item-1',
      title: 'Menu Item 1',
    },
    {
      title: 'Dropdown Menu Item 1',
      dropdownMenuItemsList: [
        {
          route: '/test-dropdown-item-1-1',
          title: 'Dropdown Menu Item 1.1',
        },
        {
          route: '/test-dropdown-item-1-2',
          title: 'Dropdown Menu Item 1.2',
        },
      ],
    },
    {
      route: '/test-item-2',
      title: 'Menu Item 2',
    },
    {
      title: 'Dropdown Menu Item 2',
      dropdownMenuItemsList: [
        {
          route: '/test-dropdown-item-2-1',
          title: 'Dropdown Menu Item 2.1',
        },
        {
          route: '/test-dropdown-item-2-2',
          title: 'Dropdown Menu Item 2.2',
        },
      ],
    },
  ];

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} />
          </BrowserRouter>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering: Component with red background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} colour="red" />
          </BrowserRouter>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
