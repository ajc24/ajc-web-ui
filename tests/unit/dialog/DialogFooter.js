import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DialogFooter } from '../../../src';

describe('DialogFooter', () => {
  const mockOnClickSave = jest.fn();
  const mockOnClickCancel = jest.fn();
  const twoButtonsList = [
    {
      id: 'save-button',
      onClick: mockOnClickSave,
      title: 'Save',
      type: 'submit',
    },
    {
      id: 'cancel-button',
      onClick: mockOnClickCancel,
      title: 'Cancel',
      type: 'button',
    }
  ];

  describe('Default props and rendering - Component with grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogFooter id="test-dialog-buttons-list-id" />
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is set correctly to the root element', () => {
      expect(wrapper.find('div').prop('id')).toBe('test-dialog-buttons-list-id');
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that no children are rendered within the root element', () => {
      expect(wrapper.find('div').children()).toHaveLength(0);
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogFooter id="test-dialog-buttons-list-id" colour="red" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-dialog-buttons-list-id').hasClass('ajc-background-red')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-dialog-buttons-list-id').hasClass('ajc-background-grey-2')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Grey component with buttons list', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogFooter id="test-dialog-buttons-list-id" buttonsList={twoButtonsList} colour="grey" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-dialog-buttons-list-id').hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-dialog-buttons-list-id').hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that two children components are rendered within the root element', () => {
      expect(wrapper.find('div').children()).toHaveLength(2);
    });

    it('verifies that the id attribute is set correctly to the first button element', () => {
      expect(wrapper.find('button').at(0).prop('id')).toBe('save-button');
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the first button element', () => {
      expect(wrapper.find('button#save-button').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the first button element', () => {
      expect(wrapper.find('button#save-button').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the type attribute is set correctly to the first button element', () => {
      expect(wrapper.find('button#save-button').prop('type')).toBe('submit');
    });

    it('verifies that the on click functionality is correctly set to the first button element', () => {
      expect(wrapper.find('button#save-button').prop('onClick')).toBeDefined();
    });

    it('verifies that the button text label is set correctly to the first button element', () => {
      expect(wrapper.find('button#save-button').text()).toBe('Save');
    });

    it('verifies that the id attribute is correctly set to the second button element', () => {
      expect(wrapper.find('button').at(1).prop('id')).toBe('cancel-button');
    });

    it('verifies that the "ajc-menu-item-red" class is not assigned to the second button element', () => {
      expect(wrapper.find('button#cancel-button').hasClass('ajc-menu-item-red')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-grey" class is assigned to the second button element', () => {
      expect(wrapper.find('button#cancel-button').hasClass('ajc-menu-item-grey')).toBeTruthy();
    });

    it('verifies that the type attribute is set correctly to the second button element', () => {
      expect(wrapper.find('button#cancel-button').prop('type')).toBe('button');
    });

    it('verifies that the on click functionality is correctly set to the second button element', () => {
      expect(wrapper.find('button#cancel-button').prop('onClick')).toBeDefined();
    });

    it('verifies that the button text label is set correctly to the second button element', () => {
      expect(wrapper.find('button#cancel-button').text()).toBe('Cancel');
    });
  });

  describe('Transferred props and rendering - Red component with buttons list', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DialogFooter id="test-dialog-buttons-list-id" buttonsList={twoButtonsList} colour="red" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the first button element', () => {
      expect(wrapper.find('button#save-button').hasClass('ajc-menu-item-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the first button element', () => {
      expect(wrapper.find('button#save-button').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-menu-item-red" class is assigned to the second button element', () => {
      expect(wrapper.find('button#cancel-button').hasClass('ajc-menu-item-red')).toBeTruthy();
    });

    it('verifies that the "ajc-menu-item-grey" class is not assigned to the second button element', () => {
      expect(wrapper.find('button#cancel-button').hasClass('ajc-menu-item-grey')).toBeFalsy();
    });
  });

  describe('onClick method behaviour', () => {
    beforeAll(() => {
      const wrapper = TestDev.mount(
        <React.Fragment>
          <DialogFooter id="test-dialog-buttons-list-id" buttonsList={twoButtonsList} />
        </React.Fragment>
      );
      /* Invoke both on click functions for both buttons */
      wrapper.find('button#save-button').prop('onClick')();
      wrapper.find('button#cancel-button').prop('onClick')();
    });

    afterAll(() => {
      mockOnClickCancel.mockClear();
      mockOnClickSave.mockClear();
    });

    it('verifies that the on click functionality for the first button element is invoked', () => {
      expect(mockOnClickSave.mock.calls).toHaveLength(1);
    });

    it('verifies that the on click functionality for the second button element is invoked', () => {
      expect(mockOnClickCancel.mock.calls).toHaveLength(1);
    });
  });
});
