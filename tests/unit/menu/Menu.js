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
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} />
          </BrowserRouter>
        </React.Fragment>
      );
    });
    it('verifies that the id attribute is set correctly to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('test-menu-root');
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-menu-root').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-menu-root').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(wrapper.find('div#test-menu').exists()).toBeTruthy();
    });

    it('verifies that the expected number of menu items are rendered as children of the menu inner content element', () => {
      expect(wrapper.find('div#test-menu').children()).toHaveLength(testMenuItemsList.length);
    });

    it('verifies that the expected number of single menu item elements are rendered as children of the menu inner content element', () => {
      expect(wrapper.find('div#test-menu').children('MenuItemSingle')).toHaveLength(2);
    });

    it('verifies that the id property is correctly passed to the MenuItemSingle elements', () => {
      expect(wrapper.find('MenuItemSingle').at(0).prop('id')).toBe('menu-item-0');
    });

    it('verifies that the route property is correctly passed to the MenuItemSingle elements', () => {
      expect(wrapper.find('MenuItemSingle').at(0).prop('route')).toBe(testMenuItemsList[0].route);
    });

    it('verifies that the title property is correctly passed to the MenuItemSingle elements', () => {
      expect(wrapper.find('MenuItemSingle').at(0).prop('title')).toBe(testMenuItemsList[0].title);
    });

    it('verifies that the colour property is correctly passed to the MenuItemSingle elements', () => {
      expect(wrapper.find('MenuItemSingle').at(0).prop('colour')).toBe('grey');
    });

    it('verifies that the expected number of dropdown menu item elements are rendered as children of the menu inner content element', () => {
      expect(wrapper.find('div#test-menu').children('MenuItemDropdown')).toHaveLength(2);
    });

    it('verifies that the id property is correctly passed to the MenuItemDropdown elements', () => {
      expect(wrapper.find('MenuItemDropdown').at(1).prop('id')).toBe('dropdown-menu-3');
    });

    it('verifies that the colour property is correctly passed to the MenuItemDropdown elements', () => {
      expect(wrapper.find('MenuItemDropdown').at(1).prop('colour')).toBe('grey');
    });

    it('verifies that the title property is correctly passed to the MenuItemDropdown elements', () => {
      expect(wrapper.find('MenuItemDropdown').at(1).prop('title')).toBe(testMenuItemsList[3].title);
    });

    it('verifies that the id property is correctly passed to the MenuItemDropdown elements', () => {
      expect(wrapper.find('MenuItemDropdown').at(1).prop('dropdownMenuItemsList')).toStrictEqual(testMenuItemsList[3].dropdownMenuItemsList);
    });
  });

  describe('Transferred props and rendering: Component with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <BrowserRouter>
            <Menu id="test-menu" menuItemsList={testMenuItemsList} colour="red" />
          </BrowserRouter>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-menu-root').hasClass('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-menu-root').hasClass('ajc-background-red')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the MenuItemSingle elements', () => {
      expect(wrapper.find('MenuItemSingle').at(0).prop('colour')).toBe('red');
    });

    it('verifies that the colour property is correctly passed to the MenuItemDropdown elements', () => {
      expect(wrapper.find('MenuItemDropdown').at(1).prop('colour')).toBe('red');
    });
  });
});
