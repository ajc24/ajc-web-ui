import 'jsdom-global/register';
import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import { AccessibilityDev } from 'ajc-accessibility';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../src';

describe('PageContent', () => {
  /* Create the test data for the menu */
  let componentDidMountSpy;
  const testTimeout = AccessibilityDev.getMaximumTimeout();

  /* Extend the expect behaviour of jest */
  expect.extend(toHaveNoViolations);

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(PageContent.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering - Component with white background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Test Title">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Test Title" colour="grey">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with transparent background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Test Title" colour="transparent">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let jestAxeResults;

    beforeAll(async () => {
      const html = TestDev.mountHtmlTemplate(
        <React.Fragment>
          <PageContent title="Test Title" colour="yellow">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
      jestAxeResults = await AccessibilityDev.runJestAxe(html);
    }, testTimeout);

    it('verifies the jest-axe accessibility standards for the component', () => {
      expect(jestAxeResults).toHaveNoViolations();
    });
  });
});
