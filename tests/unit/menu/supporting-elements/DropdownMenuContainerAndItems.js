import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TestDev } from 'ajc-jest-enzyme';
import DropdownMenuContainerAndItems from '../../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';

describe('DropdownMenuContainerAndItems', () => {
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
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(1).prop('id')).toBe('test-id');
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-dropdown-menu-hidden" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-hidden')).toBeTruthy();
    });

    it('verifies that the "ajc-dropdown-menu-visible" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-visible')).toBeFalsy();
    });

    it('verifies that the "ajc-visibility-hidden" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visibility-hidden')).toBeTruthy();
    });

    it('verifies that the "ajc-visibility-visible" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visibility-visible')).toBeFalsy();
    });

    it('verifies that the correct number of children menu item links are rendered', () => {
      expect(wrapper.find('div#test-id').children()).toHaveLength(testDropdownMenuItemsList.length);
    });

    it('verifies that the id attribute is set to the first menu item element', () => {
      expect(wrapper.find('a').at(0).prop('id')).toBe('test-id--dropdown-menu-item-0');
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the href attribute is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').prop('href')).toBe(testDropdownMenuItemsList[0].route);
    });

    it('verifies that the title text is rendered correctly within the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').text().indexOf(testDropdownMenuItemsList[0].title)).toBeGreaterThan(-1);
    });

    it('verifies that the id attribute is set to the second menu item element', () => {
      expect(wrapper.find('a').at(1).prop('id')).toBe('test-id--dropdown-menu-item-1');
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the href attribute is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').prop('href')).toBe(testDropdownMenuItemsList[1].route);
    });

    it('verifies that the title text is rendered correctly within the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').text().indexOf(testDropdownMenuItemsList[1].title)).toBeGreaterThan(-1);
    });
  });

  describe('Default props and rendering - Component marked as visible', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-dropdown-menu-hidden" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-hidden')).toBeFalsy();
    });

    it('verifies that the "ajc-visibility-hidden" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visibility-hidden')).toBeFalsy();
    });

    it('verifies that the "ajc-dropdown-menu-visible" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-dropdown-menu-visible')).toBeTruthy();
    });

    it('verifies that the "ajc-visibility-visible" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-visibility-visible')).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as hidden', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-id').hasClass('ajc-background-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the first menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-0').hasClass('ajc-menu-item-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the second menu item element', () => {
      expect(wrapper.find('a#test-id--dropdown-menu-item-1').hasClass('ajc-menu-item-red')).toBeTruthy();
    });
  });

  describe('componentDidMount() method behaviour', () => {
    let addEventListenerSpy;
    let setDropdownItemsListXPositionSpy;
    let setDropdownItemsListYPositionSpy;
    let wrapper;

    beforeAll(() => {
      setDropdownItemsListXPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListXPosition')
        .mockImplementation(() => {});
      setDropdownItemsListYPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListYPosition')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      addEventListenerSpy = jest
        .spyOn(global.window, 'addEventListener');
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      addEventListenerSpy.mockClear();
      jest.runAllTimers();
    });

    afterAll(() => {
      addEventListenerSpy.mockRestore();
      setDropdownItemsListXPositionSpy.mockRestore();
      setDropdownItemsListYPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownItemsListXPosition functionality is invoked', () => {
      expect(setDropdownItemsListXPositionSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the setDropdownItemsListYPosition functionality is invoked', () => {
      expect(setDropdownItemsListYPositionSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the global window addEventListener functionality is invoked', () => {
      expect(addEventListenerSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that an event listener is added for the "resize" event', () => {
      expect(addEventListenerSpy.mock.calls[0][0]).toBe('resize');
    });

    it('verifies that a "resize" event will invoke the setDropdownItemsListYPosition functionality', () => {
      expect(addEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListXPosition);
    });
  });

  describe('componentDidMount() method behaviour - Window resize event functionality', () => {
    let setDropdownItemsListXPositionSpy;
    let setDropdownItemsListYPositionSpy;
    
    beforeAll(() => {
      setDropdownItemsListXPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListXPosition')
        .mockImplementation(() => {});
      setDropdownItemsListYPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListYPosition')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      /* Trigger the event that will launch the functionality being tested */
      setDropdownItemsListXPositionSpy.mockClear();
      setDropdownItemsListYPositionSpy.mockClear();
      window.dispatchEvent(new Event('resize'));
    });

    afterAll(() => {
      setDropdownItemsListXPositionSpy.mockRestore();
      setDropdownItemsListYPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownItemsListYPosition functionality is not invoked', () => {
      expect(setDropdownItemsListYPositionSpy.mock.calls).toHaveLength(0);
    });

    it('verifies that the setDropdownItemsListXPosition functionality is invoked', () => {
      expect(setDropdownItemsListXPositionSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('componentWillUnmount() method behaviour', () => {
    let removeEventListenerSpy;
    let setDropdownItemsListXPositionSpy;
    let setDropdownItemsListYPositionSpy;
    let wrapper;

    beforeAll(() => {
      setDropdownItemsListXPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListXPosition')
        .mockImplementation(() => {});
      setDropdownItemsListYPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListYPosition')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      removeEventListenerSpy = jest
        .spyOn(global.window, 'removeEventListener');
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      /* Invoke the method being tested */
      removeEventListenerSpy.mockClear();
      wrapper.find('DropdownMenuContainerAndItems').instance().componentWillUnmount();
    });

    afterAll(() => {
      removeEventListenerSpy.mockRestore();
      setDropdownItemsListXPositionSpy.mockRestore();
      setDropdownItemsListYPositionSpy.mockRestore();
    });

    it('verifies that the global window removeEventListener functionality is invoked', () => {
      expect(removeEventListenerSpy.mock.calls).toHaveLength(1);
    });
    
    it('verifies that an event listener is removed for the "resize" event', () => {
      expect(removeEventListenerSpy.mock.calls[0][0]).toBe('resize');
    });

    it('verifies that the "resize" event functionality is removed', () => {
      expect(removeEventListenerSpy.mock.calls[0][1]).toBe(wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListXPosition);
    });
  });

  describe('componentWillUnmount() method behaviour - Window resize event functionality', () => {
    let setDropdownItemsListXPositionSpy;
    let setDropdownItemsListYPositionSpy;
    
    beforeAll(() => {
      setDropdownItemsListXPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListXPosition')
        .mockImplementation(() => {});
      setDropdownItemsListYPositionSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'setDropdownItemsListYPosition')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      const wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      setDropdownItemsListXPositionSpy.mockClear();
      wrapper.find('DropdownMenuContainerAndItems').instance().componentWillUnmount();
      /* Trigger the event that will launch the functionality being tested */
      window.dispatchEvent(new Event('resize'));
    });

    afterAll(() => {
      /* Restore all of the spies */
      setDropdownItemsListXPositionSpy.mockRestore();
      setDropdownItemsListYPositionSpy.mockRestore();
    });

    it('verifies that the setDropdownItemsListXPosition functionality is not invoked', () => {
      expect(setDropdownItemsListXPositionSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('setDropdownItemsListXPosition() method behaviour - Component with longer width and rendered within screen boundaries', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let itemsListRootElement;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      /* Set up the mock functions for the test */
      const mainMenuItemElement = document.createElement('div');
      itemsListRootElement = document.createElement('div');
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockReturnValueOnce(mainMenuItemElement)
        .mockReturnValueOnce(itemsListRootElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(mainMenuItemElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 100,
            right: 375,
            bottom: 200,
            width: 375,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(itemsListRootElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 924,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListXPosition();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });
    
    it('verifies that the left css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.left).toBe('100px');
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.minWidth).toBe('924px');
    });
  });

  describe('setDropdownItemsListXPosition() method behaviour - Component with shorter width and rendered within screen boundaries', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let itemsListRootElement;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      /* Set up the mock data for the test */
      const mainMenuItemElement = document.createElement('div');
      itemsListRootElement = document.createElement('div');
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(mainMenuItemElement)
        .mockReturnValueOnce(itemsListRootElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(mainMenuItemElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 100,
            right: 375,
            bottom: 200,
            width: 500,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(itemsListRootElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 100,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListXPosition();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.minWidth).toBe('500px');
    });
  });

  describe('setDropdownItemsListXPosition() method behaviour - Component with longer width and exceeding screen boundaries', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy1;
    let getBoundingClientRectSpy2;
    let itemsListRootElement;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      /* Set up the mock data for the test */
      const mainMenuItemElement = document.createElement('div');
      itemsListRootElement = document.createElement('div');
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(mainMenuItemElement)
        .mockReturnValueOnce(itemsListRootElement);
      getBoundingClientRectSpy1 = jest
        .spyOn(mainMenuItemElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 500,
            right: 1024,
            bottom: 200,
            width: 524,
          };
        });
      getBoundingClientRectSpy2 = jest
        .spyOn(itemsListRootElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 525,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListXPosition();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy1.mockRestore();
      getBoundingClientRectSpy2.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is invoked', () => {
      /* This is invoked twice - once for the parent element search and once for the container element search */
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the left css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.left).toBe('499px');
    });

    it('verifies that the minWidth css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.minWidth).toBe('525px');
    });
  });

  describe('setDropdownItemsListYPosition() method behaviour', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy;
    let itemsListRootElement;
    let querySelectorSpy;
    let windowScrollToSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      windowScrollToSpy = jest
        .spyOn(global.window, 'scrollTo')
        .mockImplementation(() => {});
      jest.useFakeTimers();
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="grey" />
          </BrowserRouter>
        </div>
      );
      jest.runAllTimers();
      /* Set up the mock data for the test */
      const mainMenuItemElement = document.createElement('div');
      itemsListRootElement = document.createElement('div');
      /* Set up the mock functions for the test */
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockReturnValueOnce(mainMenuItemElement)
        .mockReturnValueOnce(itemsListRootElement);
      getBoundingClientRectSpy = jest
        .spyOn(mainMenuItemElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            bottom: 200,
          };
        });
      /* Invoke the functionality being tested */
      wrapper.find('DropdownMenuContainerAndItems').instance().setDropdownItemsListYPosition();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      windowScrollToSpy.mockRestore();
    });

    it('verifies that the window scroll to functionality is invoked', () => {
      expect(windowScrollToSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the window scrollTo functionality ensures that the page is scrolled to the top of the screen', () => {
      expect(windowScrollToSpy.mock.calls[0][0].top).toBe(0);
    });

    it('verifies that the querySelector functionality is invoked', () => {
      expect(querySelectorSpy.mock.calls).toHaveLength(2);
    });

    it('verifies that the top css attribute of the dropdown menu parent element is set correctly', () => {
      expect(itemsListRootElement.style.top).toBe('200px');
    });
  });
});
