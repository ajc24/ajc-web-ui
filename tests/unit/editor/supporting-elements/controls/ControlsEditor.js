import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import ControlsEditor from '../../../../../src/ui-elements/editor/supporting-elements/controls/ControlsEditor';

describe('ControlsEditor', () => {
  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditor addEditorItem={jest.fn()} />
        </React.Fragment>
      );
    });

    it('verifies that the additionalSpacingAboveControls property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('additionalSpacingAboveControls')).toBeFalsy();
    });

    it('verifies that the colour property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('colour')).toBe('grey');
    });

    it('verifies that the addEditorItem property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('addEditorItem')).toBeDefined();
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('dialogContentAreaColour')).toBe('white');
    });

    it('verifies that the reRenderAllowance property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('reRenderAllowance')).toBeDefined();
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let handleClickAddNewItemMock;
    let wrapper;

    beforeAll(() => {
      handleClickAddNewItemMock = jest.fn();
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditor colour="red" addEditorItem={jest.fn()} additionalSpacingAboveControls={true} dialogContentAreaColour="grey" reRenderAllowance={500} />
        </React.Fragment>
      );
    });

    it('verifies that the additionalSpacingAboveControls property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('additionalSpacingAboveControls')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('colour')).toBe('red');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('dialogContentAreaColour')).toBe('grey');
    });

    it('verifies that the reRenderAllowance property is correctly passed to the upper editor controls component', () => {
      expect(wrapper.find('ControlsEditorUpper').prop('reRenderAllowance')).toBe(500);
    });
  });
});
