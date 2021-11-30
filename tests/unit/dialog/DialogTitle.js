import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogTitle } from '../../../src';

describe('DialogTitle', () => {
  describe('Default props and rendering - Component with grey theme', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogTitle id="test-dialog-title-id">
            Test Dialog Title Text
          </DialogTitle>
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is assigned to the root element', () => {
      expect(wrapper.find('div').prop('id')).toBe('test-dialog-title-id');
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the title text content is rendered within the heading element', () => {
      expect(wrapper.find('h2').text()).toBe('Test Dialog Title Text');
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogTitle id="test-dialog-title-id" colour="red">
            Test Dialog Title Text
          </DialogTitle>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-red')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-grey-2')).toBeFalsy();
    });
  });
});
