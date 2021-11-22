import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { Header } from '../../../src';
import testImage from '../../../stories/data/images/storybook-header-bg.png';

describe('Header', () => {
  /* Create the test data for the component */
  let componentDidMountSpy;
  const testTimeout = AccessibilityDev.getMaximumTimeout();
  
  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(Header.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering - Header with no top border and transparent background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Header id="test-header-id" />
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white" />
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" imageData={testImage} />
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey" />
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow" />
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
