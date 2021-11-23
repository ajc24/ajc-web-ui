import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { PageMaskCloseButton } from '../../../src';

describe('PageMaskCloseButton', () => {
  describe('Default props and rendering - onClose functionality not set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMaskCloseButton id="test-id" />
        </React.Fragment>
      );
    });

    it('verifies that the button is not rendered when the onClose functionality is not set', () => {
      expect(wrapper.find('button').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Default component with onClose functionality set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMaskCloseButton id="test-id" onClose={() => {}} />
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is set to the button element', () => {
      expect(wrapper.find('button').prop('id')).toBe('test-id');
    });

    it('verifies that the "ajc-button-red" class is not assigned to the button element', () => {
      expect(wrapper.find('button#test-id').hasClass('ajc-button-red')).toBeFalsy();
    });

    it('verifies that the "ajc-button-grey" class is assigned to the button element', () => {
      expect(wrapper.find('button#test-id').hasClass('ajc-button-grey')).toBeTruthy();
    });

    it('verifies that the onClick functionality is set to the button element', () => {
      expect(wrapper.find('button#test-id').prop('onClick')).toBeDefined();
    });
  });

  describe('Transferred props and rendering - Red button with onClose functionality set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMaskCloseButton id="test-id" colour="red" onClose={() => {}} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-button-red" class is assigned to the button element', () => {
      expect(wrapper.find('button#test-id').hasClass('ajc-button-red')).toBeTruthy();
    });

    it('verifies that the "ajc-button-grey" class is not assigned to the button element', () => {
      expect(wrapper.find('button#test-id').hasClass('ajc-button-grey')).toBeFalsy();
    });
  });

  describe('onClose method behaviour', () => {
    let mockOnClose = jest.fn();

    beforeAll(() => {
      const wrapper = TestDev.mount(
        <React.Fragment>
          <PageMaskCloseButton id="test-id" onClose={mockOnClose} />
        </React.Fragment>
      );
      wrapper.find('button#test-id').prop('onClick')();
    });

    it('verifies that the onClose functionality is invoked', () => {
      expect(mockOnClose.mock.calls).toHaveLength(1);
    });
  });
});
