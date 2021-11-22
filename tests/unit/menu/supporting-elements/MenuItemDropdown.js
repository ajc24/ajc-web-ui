import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TestDev } from 'ajc-jest-enzyme';
import MenuItemDropdown from '../../../../src/ui-elements/menu/supporting-elements/MenuItemDropdown';
import DropdownMenuContainerAndItems from '../../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('MenuItemDropdown', () => {
  /* Test data */
  let componentDidMountSpy;
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

  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(1).prop('id')).toBe('test-id');
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the "data-expanded" attribute is set to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').prop('data-expanded')).toBe('false');
    });

    it('verifies that the tab index attribute is set to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').prop('tabIndex')).toBe(0);
    });

    it('verifies that the title property is set to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').text().indexOf('Dropdown Menu')).toBeGreaterThan(-1);
    });

    it('verifies that the id property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('id').indexOf('test-id')).toBe(0);
    });

    it('verifies that the colour property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('colour')).toBe('grey');
    });

    it('verifies that the parentId property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('parentId')).toBe('test-id');
    });

    it('verifies that the isDisplayed property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('isDisplayed')).toBeFalsy();
    });
    
    it('verifies that the dropdownMenuItemsList property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('dropdownMenuItemsList')).toStrictEqual(testDropdownMenuItemsList);
    });
  });

  describe('Transferred props and rendering - Component in a red colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" colour="red" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').hasClass('ajc-menu-item-red')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('colour')).toBe('red');
    });
  });

  describe('showDropdownMenu() method behaviour', () => {
    let addEventListenerSpy;
    let mockPreventDefault;
    let wrapper;

    beforeAll(() => {
      addEventListenerSpy = jest
        .spyOn(document, 'addEventListener');
      mockPreventDefault = jest.fn();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault
      });
      wrapper.update();
    });

    afterAll(() => {
      addEventListenerSpy.mockRestore();
    });

    it('verifies that the preventDefault functionality is invoked', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(1);
    });

    it('verifies that the addEventListener functionality is invoked', () => {
      expect(addEventListenerSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that an event listener is added for the "click" event', () => {
      expect(addEventListenerSpy.mock.calls[0][0]).toBe('click');
    });

    it('verifies that a "click" event will invoke the hideDropdownMenu functionality', () => {
      expect(addEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('MenuItemDropdown').instance().hideDropdownMenu);
    });

    it('verifies that the "data-expanded" attribute is set to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').prop('data-expanded')).toBe('true');
    });

    it('verifies that the isDisplayed property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('isDisplayed')).toBeTruthy();
    });
  });

  describe('hideDropdownMenu() method behaviour - Clicking on the dropdown menu content element', () => {
    let mockPreventDefault;
    let mockStopPropagation;
    let removeEventListenerSpy;
    let wrapper;

    beforeAll(() => {
      removeEventListenerSpy = jest
        .spyOn(document, 'removeEventListener');
      mockPreventDefault = jest.fn();
      mockStopPropagation = jest.fn();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Click to expand the dropdown menu */
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
      });
      mockPreventDefault.mockClear();
      wrapper.update();
      /* Attempt a click to hide the dropdown menu - this click won't hide the container */
      const targetElement = document.createElement('div');
      targetElement.setAttribute('id', 'test-id--content-parent');
      targetElement.setAttribute('data-expanded', 'true');
      targetElement.classList.add('ajc-menu-item-content');
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
        stopPropagation: mockStopPropagation,
        target: targetElement
      });
      wrapper.update();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
    });

    it('verifies that the preventDefault functionality is invoked', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(1);
    });

    it('verifies that the event propagation is invoked so as to prevent duplicate clicks', () => {
      expect(mockStopPropagation.mock.calls).toHaveLength(1);
    });

    it('verifies that the removeEventListener functionality is not invoked', () => {
      expect(removeEventListenerSpy.mock.calls).toHaveLength(0);
    });

    it('verifies that the "data-expanded" attribute is unchanged on the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').prop('data-expanded')).toBe('true');
    });

    it('verifies that the isDisplayed property is unchanged and is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('isDisplayed')).toBeTruthy();
    });
  });

  describe('hideDropdownMenu() method behaviour - Clicking on an element other than the dropdown menu content element', () => {
    let mockPreventDefault;
    let removeEventListenerSpy;
    let wrapper;

    beforeAll(() => {
      removeEventListenerSpy = jest
        .spyOn(document, 'removeEventListener');
      mockPreventDefault = jest.fn();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Click to expand the dropdown menu */
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault
      });
      mockPreventDefault.mockClear();
      wrapper.update();
      /* Attempt a click to hide the dropdown menu - this click will hide the container */
      const targetElement = document.createElement('div');
      targetElement.setAttribute('id', 'different-id--content-parent');
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
        target: targetElement
      });
      wrapper.update();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
    });

    it('verifies that the preventDefault functionality is invoked', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(1);
    });

    it('verifies that the removeEventListener functionality is invoked', () => {
      expect(removeEventListenerSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that an event listener is removed for the "click" event', () => {
      expect(removeEventListenerSpy.mock.calls[0][0]).toBe('click');
    });

    it('verifies that the "click" event functionality is removed', () => {
      expect(removeEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('MenuItemDropdown').instance().hideDropdownMenu);
    });

    it('verifies that the "data-expanded" attribute is set to the dropdown menu element', () => {
      expect(wrapper.find('div.ajc-menu-item-content').prop('data-expanded')).toBe('false');
    });

    it('verifies that the isDisplayed property is correctly passed to the DropdownMenuContainerAndItems element', () => {
      expect(wrapper.find('DropdownMenuContainerAndItems').prop('isDisplayed')).toBeFalsy();
    });
  });

  describe('hideDropdownMenu() method behaviour - Route redirect occurs when clicking on a dropdown menu item element', () => {
    let mockOnClick;
    let mockPreventDefault;
    let mockStopPropagation;
    let removeEventListenerSpy;
    let wrapper;

    beforeAll(() => {
      mockOnClick = jest.fn();
      removeEventListenerSpy = jest
        .spyOn(document, 'removeEventListener');
      mockPreventDefault = jest.fn();
      mockStopPropagation = jest.fn();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Click to expand the dropdown menu */
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
      });
      mockPreventDefault.mockClear();
      wrapper.update();
      /* Click to hide the dropdown menu - this click is registered on a dropdown menu item and will prompt a redirect */
      const targetElement = document.createElement('a');
      targetElement.setAttribute('id', 'test-id--content-parent--dropdown-menu-item-0');
      targetElement.setAttribute('href', '/sample-route');
      targetElement.onclick = mockOnClick;
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
        stopPropagation: mockStopPropagation,
        target: targetElement
      });
      wrapper.update();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
    });

    it('verifies that the dropdown menu item onClick functionality is invoked', () => {
      expect(mockOnClick.mock.calls).toHaveLength(1);
    });
  });

  describe('hideDropdownMenu() method behaviour - Route redirect occurs when clicking on a standalone / single menu item element', () => {
    let mockOnClick;
    let mockPreventDefault;
    let mockStopPropagation;
    let removeEventListenerSpy;
    let wrapper;

    beforeAll(() => {
      mockOnClick = jest.fn();
      removeEventListenerSpy = jest
        .spyOn(document, 'removeEventListener');
      mockPreventDefault = jest.fn();
      mockStopPropagation = jest.fn();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Click to expand the dropdown menu */
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
      });
      mockPreventDefault.mockClear();
      wrapper.update();
      /* Click to hide the dropdown menu - this click is registered on a single / standalone menu item and will prompt a redirect */
      const targetElement = document.createElement('a');
      targetElement.classList.add('mock-class-1');
      targetElement.classList.add('ajc-menu-item-content');
      targetElement.classList.add('ajc-font-menu');
      targetElement.classList.add('mock-class-2');
      targetElement.onclick = mockOnClick;
      wrapper.find('div.ajc-menu-item-content').prop('onClick')({
        preventDefault: mockPreventDefault,
        stopPropagation: mockStopPropagation,
        target: targetElement
      });
      wrapper.update();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
    });

    it('verifies that the single / standalone menu item onClick functionality is invoked', () => {
      expect(mockOnClick.mock.calls).toHaveLength(1);
    });
  });

  describe('handleMenuBarItemKeyPress() method behaviour - Key press on any key other than the enter key', () => {
    let mockClick;
    let mockMenuBarItemElement;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      mockClick = jest.fn();
      mockMenuBarItemElement = {
        click: mockClick,
      };
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return mockMenuBarItemElement;
        });
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Simulate a key press on the dropdown item */
      wrapper.find('div.ajc-menu-item-content').prop('onKeyPress')({
        key: 'Delete'
      });
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the document querySelector functionality is not invoked', () => {
      expect(querySelectorSpy.mock.calls).toHaveLength(0);
    });

    it('verifies that the on click functionality for the menu bar item content element is not invoked', () => {
      expect(mockClick.mock.calls).toHaveLength(0);
    });
  });

  describe('handleMenuBarItemKeyPress() method behaviour - Key press on the enter key', () => {
    let mockClick;
    let mockMenuBarItemElement;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      mockClick = jest.fn();
      mockMenuBarItemElement = {
        click: mockClick,
      };
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return mockMenuBarItemElement;
        });
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemDropdown id="test-id" title="Dropdown Menu" dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
      /* Simulate a key press on the dropdown item */
      wrapper.find('div.ajc-menu-item-content').prop('onKeyPress')({
        key: 'Enter'
      });
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the document querySelector functionality is invoked', () => {
      expect(querySelectorSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the on click functionality for the menu bar item content element is invoked', () => {
      expect(mockClick.mock.calls).toHaveLength(1);
    });
  });
});
