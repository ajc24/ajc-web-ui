import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import ControlsEditor from '../../../../../src/ui-elements/editor/supporting-elements/controls/ControlsEditor';

describe('ControlsEditor', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ControlsEditor addEditorItem={jest.fn()} />
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
          <ControlsEditor colour="red" addEditorItem={jest.fn()} additionalSpacingAboveControls={true} dialogContentAreaColour="grey" reRenderAllowance={500} />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
