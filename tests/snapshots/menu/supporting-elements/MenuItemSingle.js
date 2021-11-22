import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemSingle from '../../../../src/ui-elements/menu/supporting-elements/MenuItemSingle';

describe('MenuItemSingle', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item (Single)"/>
          </BrowserRouter>
        </div>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering: MenuItemSingle in red', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item (Single)" colour="red"/>
          </BrowserRouter>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
