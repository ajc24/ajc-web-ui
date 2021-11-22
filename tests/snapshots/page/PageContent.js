import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../src';

describe('PageContent', () => {
  describe('Default props and rendering - Component with white background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageContent title="Test Title">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageContent title="Test Title" colour="grey">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with transparent background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageContent title="Test Title" colour="transparent">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <PageContent title="Test Title" colour="yellow">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
