import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Header } from '../../../src';
import testImage from '../../../stories/data/images/storybook-header-bg.png';

describe('Header', () => {
  let componentDidMountSpy;

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(Header.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Default props and rendering - Header with no top border and transparent background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id="test-header-id">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" imageData={testImage}>
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
