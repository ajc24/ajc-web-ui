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
    let jsonSnapshot;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jsonSnapshot = TestDev.createSnapshot(
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

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component marked as visible', () => {
    let componentDidMountSpy;
    let jsonSnapshot;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jsonSnapshot = TestDev.createSnapshot(
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

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as hidden', () => {
    let componentDidMountSpy;
    let jsonSnapshot;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jsonSnapshot = TestDev.createSnapshot(
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

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as visible', () => {
    let componentDidMountSpy;
    let jsonSnapshot;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      jsonSnapshot = TestDev.createSnapshot(
        <div role="navigation">
          <BrowserRouter>
            <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
          </BrowserRouter>
        </div>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
