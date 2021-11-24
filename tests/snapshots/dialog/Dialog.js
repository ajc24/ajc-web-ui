import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Dialog } from '../../../src';

describe('Dialog', () => {
  const twoButtonsList = [
    {
      id: 'save-button',
      onClick: () => {},
      title: 'Save',
      type: 'submit',
    },
    {
      id: 'cancel-button',
      onClick: () => {},
      title: 'Cancel',
      type: 'button',
    }
  ];

  describe('Default props and rendering - Component with grey theme, white background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title">
            Test Dialog Content.
          </Dialog>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with red theme, grey background and buttons list', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title" colour="red" bgColour="grey" buttonsList={twoButtonsList}>
            Test Dialog Content.
          </Dialog>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with grey theme, yellow background and buttons list', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title" colour="grey" bgColour="yellow" buttonsList={twoButtonsList}>
            Test Dialog Content.
          </Dialog>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
