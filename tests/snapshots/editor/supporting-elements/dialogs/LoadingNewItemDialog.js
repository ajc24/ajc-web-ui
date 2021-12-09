import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import LoadingNewItemDialog from '../../../../../src/ui-elements/editor/supporting-elements/dialogs/LoadingNewItemDialog';

describe('LoadingNewItemDialog', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <LoadingNewItemDialog />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <LoadingNewItemDialog colour="red" dialogContentAreaColour="grey" isDisplayed={true} />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
