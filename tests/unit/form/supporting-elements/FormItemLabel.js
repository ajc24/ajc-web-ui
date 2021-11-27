import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import FormItemLabel from '../../../../src/ui-elements/form/supporting-elements/FormItemLabel';

describe('FormItemLabel', () => {
  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" />
        </React.Fragment>
      );
    });

    it('verifies that the htmlFor attribute is set correctly to the label element', () => {
      expect(wrapper.find('label').prop('htmlFor')).toBe('form-item-label-id');
    });

    it('verifies that the "ajc-label-dialog" class is not assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-label-dialog')).toBeFalsy();
    });

    it('verifies that the "ajc-label-standalone" class is assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-label-standalone')).toBeTruthy();
    });

    it('verifies that the "ajc-spacing-top-large" class is not assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-spacing-top-large')).toBeFalsy();
    });

    it('verifies that the label text is rendered correctly in the label element', () => {
      expect(wrapper.find('label').text()).toBe('Test Form Item Label Text:');
    });
  });

  describe('Transferred props and rendering - Dialog component with additional spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" additionalUpperSpacing={true} isDialogFormItem={true} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-label-dialog" class is assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-label-dialog')).toBeTruthy();
    });

    it('verifies that the "ajc-label-standalone" class is not assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-label-standalone')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-top-large" class is assigned to the label element', () => {
      expect(wrapper.find('label').hasClass('ajc-spacing-top-large')).toBeTruthy();
    });
  });
});
