import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogFooter } from '../../../src';

describe('DialogFooter', () => {
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

  describe('Default props and rendering - Component with grey background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogFooter id="test-dialog-buttons-list-id" />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogFooter id="test-dialog-buttons-list-id" />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Grey component with buttons list', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogFooter id="test-dialog-buttons-list-id" colour="grey" buttonsList={twoButtonsList} />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Red component with buttons list', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogFooter id="test-dialog-buttons-list-id" colour="red" buttonsList={twoButtonsList} />
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
