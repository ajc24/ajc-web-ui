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
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" />
          <PageContent title="Accessibility Test">
            <h1>Header Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white" />
          <PageContent title="Accessibility Test">
            <h1>Header Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="red" imageData={testImage} />
          <PageContent title="Accessibility Test">
            <h1>Header Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey" />
          <PageContent title="Accessibility Test">
            <h1>Header Accessibility Test</h1>
          </PageContent>
        </div>
      );
      results = await AccessibilityDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let results;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <div>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow" />
          <PageContent title="Accessibility Test">
            <h1>Header Accessibility Test</h1>
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
