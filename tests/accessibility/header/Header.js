import 'jsdom-global/register';
import React from 'react';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { Header, PageContent } from '../../../src';
import testImage from '../../../stories/data/images/storybook-header-bg.png';

describe('Header', () => {
  /* Create the test data for the component */
  let componentDidMountSpy;
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(Header.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering - Header with no top border and transparent background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" />
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Default header');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white" />
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Header, grey top border, white background');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="red" imageData={testImage} />
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Header, red top border, image background');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey" />
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Header, no top border, grey background');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let aCheckerResults

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow" />
          <PageContent title="Accessibility Test">
            <p>Hello World</p>
          </PageContent>
        </div>
      );
      aCheckerResults = await AccessibilityDev.runAccessibilityChecker(html, 'Header, grey top border, yellow background');
    }, testTimeout);

    it('verifies the accessibility checker standards for the component', () => {
      expect(aCheckerResults).toBeTruthy();
    });
  });
});
