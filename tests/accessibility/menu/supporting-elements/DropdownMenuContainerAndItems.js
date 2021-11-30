import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import DropdownMenuContainerAndItems from '../../../../src/ui-elements/menu/supporting-elements/DropdownMenuContainerAndItems';
import { PageContent } from '../../../../src';

describe('DropdownMenuContainerAndItems', () => {
  /* Retrieve the timeout for jest-axe tests */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

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
    let results;

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} />
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Dropdown Menu Container and Items Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component marked as visible', () => {
    let componentDidMountSpy;
    let results;
    
    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} />
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Dropdown Menu Container and Items Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as hidden', () => {
    let componentDidMountSpy;
    let results;
    
    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={false} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Dropdown Menu Container and Items Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component in red and marked as visible', () => {
    let componentDidMountSpy;
    let results;

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(DropdownMenuContainerAndItems.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <DropdownMenuContainerAndItems id="test-id" parentId="test-parent-id" isDisplayed={true} dropdownMenuItemsList={testDropdownMenuItemsList} colour="red" />
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Dropdown Menu Container and Items Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
