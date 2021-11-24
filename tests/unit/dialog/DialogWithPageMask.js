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
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" onClose={() => {}}>
            Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </React.Fragment>
      );
    });

    it('verifies that the id property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('id')).toBe('test-page-mask-dialog-id');
    });

    it('verifies that the colour property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('colour')).toBe('grey');
    });

    it('verifies that the isDisplayed property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('isDisplayed')).toBeFalsy();
    });

    it('verifies that the onClose property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('onClose')).toBeDefined();
    });

    it('verifies that the Dialog component is not rendered due to the isDisplayed property setting', () => {
      expect(wrapper.find('Dialog').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - All properties set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogWithPageMask id="test-page-mask-dialog-id" dialogTitle="Test Page Mask Dialog Title" dialogContentAreaColour="grey" colour="red"
            buttonsList={twoButtonsList} onClose={() => {}} isDisplayed={true}>
              Test Page Mask Dialog Content.
          </DialogWithPageMask>
        </React.Fragment>
      );
    });

    it('verifies that the colour property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('colour')).toBe('red');
    });

    it('verifies that the isDisplayed property is correctly passed to the PageMask element', () => {
      expect(wrapper.find('PageMask').prop('isDisplayed')).toBeTruthy();
    });

    it('verifies that the Dialog component is rendered due to the isDisplayed property setting', () => {
      expect(wrapper.find('Dialog').exists()).toBeTruthy();
    });

    it('verifies that the id property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').prop('id')).toBe('test-page-mask-dialog-id');
    });

    it('verifies that the colour property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').prop('colour')).toBe('red');
    });

    it('verifies that the bgColour property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').prop('bgColour')).toBe('grey');
    });

    it('verifies that the titleTextContent property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').prop('titleTextContent')).toBe('Test Page Mask Dialog Title');
    });

    it('verifies that the buttonsList property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').prop('buttonsList')).toHaveLength(2);
    });

    it('verifies that the children property is correctly passed to the Dialog element', () => {
      expect(wrapper.find('Dialog').children()).toBeDefined();
    });
  });
});
