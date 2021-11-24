import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogContentArea } from '../../../src';

describe('DialogContentArea', () => {
  describe('Default props and rendering - Component with white background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogContentArea id="test-dialog-content-area-id">
            Test dialog content area text.
          </DialogContentArea>
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is set correctly to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('test-dialog-content-area-id-root');
    });

    it('verifies that the "ajc-background-white" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(wrapper.find('div div').prop('id')).toBe('test-dialog-content-area-id');
    });

    it('verifies that the children text content is rendered within the content element', () => {
      expect(wrapper.find('div div').children().text()).toBe('Test dialog content area text.');
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogContentArea id="test-dialog-content-area-id" colour="grey">
            Test dialog content area text.
          </DialogContentArea>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-grey-1')).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogContentArea id="test-dialog-content-area-id" colour="yellow">
            Test dialog content area text.
          </DialogContentArea>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-yellow')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-grey-1')).toBeFalsy();
    });
  });
});
