import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Dialog } from '../../../src';

describe('Dialog', () => {
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

  describe('Default props and rendering - Component with grey theme, white background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title">
            Test Dialog Content.
          </Dialog>
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is set correctly to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('test-dialog-id-root');
    });

    it('verifies that the id property is correctly passed to the DialogTitle element', () => {
      expect(wrapper.find('DialogTitle').prop('id')).toBe('test-dialog-id-title');
    });

    it('verifies that the colour property is correctly passed to the DialogTitle element', () => {
      expect(wrapper.find('DialogTitle').prop('colour')).toBe('grey');
    });

    it('verifies that the titleTextContent property is correctly passed to the DialogTitle element', () => {
      expect(wrapper.find('DialogTitle').children().text()).toBe('Test Dialog Title');
    });

    it('verifies that the id property is correctly passed to the DialogContentArea element', () => {
      expect(wrapper.find('DialogContentArea').prop('id')).toBe('test-dialog-id-content-area');
    });

    it('verifies that the colour property is correctly passed to the DialogContentArea element', () => {
      expect(wrapper.find('DialogContentArea').prop('colour')).toBe('white');
    });

    it('verifies that the children property is correctly passed to the DialogContentArea element', () => {
      expect(wrapper.find('DialogContentArea').children().text()).toBe('Test Dialog Content.');
    });

    it('verifies that the id property is correctly passed to the DialogFooter element', () => {
      expect(wrapper.find('DialogFooter').prop('id')).toBe('test-dialog-id-footer');
    });

    it('verifies that the colour property is correctly passed to the DialogFooter element', () => {
      expect(wrapper.find('DialogFooter').prop('colour')).toBe('grey');
    });

    it('verifies that the buttonsList property is correctly passed to the DialogFooter element', () => {
      expect(wrapper.find('DialogFooter').prop('buttonsList')).toHaveLength(0);
    });
  });

  describe('Transferred props and rendering - All properties set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <Dialog id="test-dialog-id" titleTextContent="Test Dialog Title" colour="red" bgColour="grey" buttonsList={twoButtonsList}>
            Test Dialog Content.
          </Dialog>
        </React.Fragment>
      );
    });

    it('verifies that the colour property is correctly passed to the DialogTitle element', () => {
      expect(wrapper.find('DialogTitle').prop('colour')).toBe('red');
    });

    it('verifies that the colour property is correctly passed to the DialogContentArea element', () => {
      expect(wrapper.find('DialogContentArea').prop('colour')).toBe('grey');
    });

    it('verifies that the colour property is correctly passed to the DialogFooter element', () => {
      expect(wrapper.find('DialogFooter').prop('colour')).toBe('red');
    });

    it('verifies that the buttonsList property is correctly passed to the DialogFooter element', () => {
      expect(wrapper.find('DialogFooter').prop('buttonsList')).toHaveLength(twoButtonsList.length);
    });
  });
});
