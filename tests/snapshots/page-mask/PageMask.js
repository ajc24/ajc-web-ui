import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { PageMask } from '../../../src';

describe('PageMask', () => {
  describe('Default props and rendering - Non visible page mask', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageMask id="test-id" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with grey theme', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true} colour="grey" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true} colour="red" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - onClose functionality not set', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
