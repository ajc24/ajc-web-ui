import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogWithPageMask } from '../../../src';

describe('DialogWithPageMask', () => {
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

  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" onClose={() => {}}>
            Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - All properties set', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <div role="region">
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" dialogContentAreaColour="grey" colour="red"
            buttonsList={twoButtonsList} onClose={() => {}} isDisplayed={true}>
              Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </div>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
