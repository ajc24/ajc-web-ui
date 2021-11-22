import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TestDev } from 'ajc-jest-enzyme';
import { Menu } from '../../../src';
import DropdownMenuContainerAndItems from '../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('Menu', () => {
  /* Create the test data for the menu */
  let componentDidMountSpy;
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

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} />
          </BrowserRouter>
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering: Component with red background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} colour="red" />
          </BrowserRouter>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
