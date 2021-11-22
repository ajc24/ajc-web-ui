import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemSingle from '../../../../src/ui-elements/menu/supporting-elements/MenuItemSingle';

describe('MenuItemSingle', () => {
  describe('Default props and rendering - Component with grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Single Menu Item"/>
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div#test-menu-item-single-root').exists()).toBeTruthy();
    });

    it('verifies that the id attribute is set to the content element', () => {
      expect(wrapper.find('div#test-menu-item-single-root div').prop('id')).toBe('test-menu-item-single');
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the content component', () => {
      expect(wrapper.find('div#test-menu-item-single').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the content component', () => {
      expect(wrapper.find('div#test-menu-item-single').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the href attribute is assigned to the menu item content component', () => {
      expect(wrapper.find('a').prop('href')).toBe('/test-route');
    });

    it('verfies that the title text is assigned to the menu item content component', () => {
      expect(wrapper.find('a').text().trim()).toBe('Single Menu Item');
    });
  });

  describe('Transferred props and rendering: Component with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Single Menu Item" colour="red"/>
          </BrowserRouter>
        </div>
      );
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the content component', () => {
      expect(wrapper.find('div#test-menu-item-single').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the content component', () => {
      expect(wrapper.find('div#test-menu-item-single').hasClass('ajc-menu-item-red')).toBeTruthy();
    });
  });
});
