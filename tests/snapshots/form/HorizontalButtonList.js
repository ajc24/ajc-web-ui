import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { HorizontalButtonList } from '../../../src';

describe('HorizontalButtonList', () => {
  const singleButtonList = [
    {
      id: 'test-single-button-id',
      onClick: jest.fn(),
      title: 'Test Default Single Grey Button',
      tooltip: 'This is a test tooltip',
      type: 'button',
    }
  ];
  const singleSubmitButtonList = [
    {
      id: 'test-single-submit-button-id',
      onClick: jest.fn(),
      title: 'Test Submit Button',
      tooltip: 'This is a test tooltip',
      type: 'submit',
    }
  ];
  const twoButtonsList = [
    {
      id: 'test-button-1-id',
      onClick: jest.fn(),
      title: 'Test Button 1',
      tooltip: 'This is a test tooltip',
      type: 'button',
    },
    {
      id: 'test-button-2-id',
      onClick: jest.fn(),
      title: 'Test Button 2',
      tooltip: 'This is a test tooltip',
      type: 'button',
    }
  ];
  describe('Default props and rendering - Single left aligned grey button', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList buttonList={singleButtonList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Multiple center aligned red buttons', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList colour="red" alignment="center" buttonList={twoButtonsList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Single right aligned grey submit button', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList colour="grey" alignment="right" buttonList={singleSubmitButtonList} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Left aligned multiple red buttons with label text, default upper spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList colour="red" alignment="left" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Center aligned multiple grey buttons with label text, added upper spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList colour="grey" additionalUpperSpacing={true} alignment="center" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Right aligned multiple red buttons with label text, no upper spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HorizontalButtonList colour="red" additionalUpperSpacing={false} alignment="right" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
