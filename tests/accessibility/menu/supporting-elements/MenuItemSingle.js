import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuItemSingle from '../../../../src/ui-elements/menu/supporting-elements/MenuItemSingle';

describe('MenuItemSingle', () => {
  /* Retrieve the timeout for jest-axe tests */
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  describe('Default props and rendering', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item Single"/>
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering: MenuItemSingle with red background', () => {
    let jestAxeResults;
    
    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div role="navigation">
          <BrowserRouter>
            <MenuItemSingle id="test-menu-item-single" route="/test-route" title="Menu Item Single" colour="red"/>
          </BrowserRouter>
        </div>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
