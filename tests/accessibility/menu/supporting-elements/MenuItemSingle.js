import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemSingle from '../../../../src/ui-elements/menu/supporting-elements/MenuItemSingle';
import { PageContent } from '../../../../src';

describe('MenuItemSingle', () => {
  /* Retrieve the timeout for jest-axe tests */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  describe('Default props and rendering', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item Single"/>
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Menu Item Single Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering: MenuItemSingle with red background', () => {
    let results;
    
    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <div role="navigation">
            <BrowserRouter>
              <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item Single" colour="red"/>
            </BrowserRouter>
          </div>
          <PageContent title="Accessibility Test">
            <h1>Menu Item Single Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
