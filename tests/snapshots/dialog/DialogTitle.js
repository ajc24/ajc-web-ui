import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogTitle } from '../../../src';

describe('DialogTitle', () => {
  describe('Default props and rendering - Component with grey theme', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DialogTitle id="test-dialog-title-id">
            Test Dialog Title Text
          </DialogTitle>
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
          <DialogTitle id="test-dialog-title-id" colour="red">
            Test Dialog Title Text
          </DialogTitle>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
