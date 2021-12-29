import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import ControlsEditor from '../../../../../src/ui-elements/editor/supporting-elements/controls/ControlsEditor';

describe('ControlsEditor', () => {
  describe('Default props and rendering', () => {
    let alertDefaultFunction;
    let windowAlertSpy;
    let wrapper;

    beforeAll(() => {
      /* Set up the spy for the alert */
      alertDefaultFunction = global.alert;
      windowAlertSpy = jest.fn();
      global.alert = windowAlertSpy;
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditor />
        </React.Fragment>
      );
    });

    afterAll(() => {
      global.alert = alertDefaultFunction;
    });

    it('verifies that the alignment property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('alignment')).toBe('left');
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('additionalUpperSpacing')).toBeFalsy();
    });

    it('verifies that the colour property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('colour')).toBe('grey');
    });

    it('verifies that the buttonList property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('buttonList')).toHaveLength(1);
    });

    it('verfies that the default onClick functionality is invoked when the add new item button is clicked', () => {
      wrapper.find('button#add-new-item-button').prop('onClick')();
      const numberOfAlerts = windowAlertSpy.mock.calls.length;
      windowAlertSpy.mockClear();
      expect(numberOfAlerts).toBe(1);
    });

    it('verifies that the labelText property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('labelText')).toBe('Click the button below to add new items to your document:');
    });

    it('verifies that the alignment property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('alignment')).toBe('left');
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('colour')).toBe('grey');
    });

    it('verifies that the buttonList property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('buttonList')).toHaveLength(3);
    });

    it('verfies that the default onClick functionality is invoked when the save as draft button is clicked', () => {
      wrapper.find('button#save-as-draft-button').prop('onClick')();
      const numberOfAlerts = windowAlertSpy.mock.calls.length;
      windowAlertSpy.mockClear();
      expect(numberOfAlerts).toBe(1);
    });

    it('verfies that the default onClick functionality is invoked when the generate preview button is clicked', () => {
      wrapper.find('button#generate-preview-button').prop('onClick')();
      const numberOfAlerts = windowAlertSpy.mock.calls.length;
      windowAlertSpy.mockClear();
      expect(numberOfAlerts).toBe(1);
    });

    it('verfies that the default onClick functionality is invoked when the publish document button is clicked', () => {
      wrapper.find('button#publish-document-button').prop('onClick')();
      const numberOfAlerts = windowAlertSpy.mock.calls.length;
      windowAlertSpy.mockClear();
      expect(numberOfAlerts).toBe(1);
    });

    it('verifies that the labelText property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('labelText')).toBe('Save your current draft, generate a preview or publish your document:');
    });

    it('verifies that the alignment property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('alignment')).toBe('left');
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('colour')).toBe('grey');
    });

    it('verifies that the buttonList property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('buttonList')).toHaveLength(1);
    });

    it('verfies that the default onClick functionality is invoked when the discard draft button is clicked', () => {
      wrapper.find('button#discard-draft-button').prop('onClick')();
      const numberOfAlerts = windowAlertSpy.mock.calls.length;
      windowAlertSpy.mockClear();
      expect(numberOfAlerts).toBe(1);
    });

    it('verifies that the labelText property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('labelText')).toBe('Click the button below to discard this current draft:');
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let handleClickAddNewItemMock;
    let wrapper;

    beforeAll(() => {
      handleClickAddNewItemMock = jest.fn();
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditor colour="red" handleClickAddNewItem={handleClickAddNewItemMock} upperButtonListAdditionalSpacing={true} />
        </React.Fragment>
      );
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(0).prop('colour')).toBe('red');
    });

    it('verfies that the custom onClick functionality is invoked when the add new item button is clicked', () => {
      wrapper.find('button#add-new-item-button').prop('onClick')();
      expect(handleClickAddNewItemMock.mock.calls).toHaveLength(1);
    });

    it('verifies that the colour property is correctly passed to the second horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(1).prop('colour')).toBe('red');
    });

    // it('verfies that the custom onClick functionality is invoked when the save as draft button is clicked', () => {
    //   wrapper.find('button#save-as-draft-button').prop('onClick')();
    //   expect(handleClickAddNewItemMock.mock.calls).toHaveLength(1);
    // });

    // it('verfies that the custom onClick functionality is invoked when the generate preview button is clicked', () => {
    //   wrapper.find('button#generate-preview-button').prop('onClick')();
    //   expect(handleClickAddNewItemMock.mock.calls).toHaveLength(1);
    // });

    // it('verfies that the custom onClick functionality is invoked when the publish document button is clicked', () => {
    //   wrapper.find('button#publish-document-button').prop('onClick')();
    //   expect(handleClickAddNewItemMock.mock.calls).toHaveLength(1);
    // });

    it('verifies that the colour property is correctly passed to the third horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').at(2).prop('colour')).toBe('red');
    });

    // it('verfies that the default onClick functionality is invoked when the discard draft button is clicked', () => {
    //   wrapper.find('button#discard-draft-button').prop('onClick')();
    //   expect(handleClickAddNewItemMock.mock.calls).toHaveLength(1);
    // });
  });
});
