import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import LoadingNewItemDialog from '../../../../../src/ui-elements/editor/supporting-elements/dialogs/LoadingNewItemDialog';

describe('LoadingNewItemDialog', () => {
  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <LoadingNewItemDialog />
        </React.Fragment>
      );
    });

    it('verifies that the id property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('id')).toBe('loading-new-item-dialog-id');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('dialogContentAreaColour')).toBe('white');
    });

    it('verifies that the colour property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('colour')).toBe('grey');
    });

    it('verifies that the dialogTitle property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('dialogTitle')).toBe('Adding Your New Item');
    });

    it('verifies that the buttonsList property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('buttonsList')).toHaveLength(0);
    });

    it('verifies that the isDisplayed property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('isDisplayed')).toBeFalsy();
    });

    it('verifies that the onClose property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('onClose')).toBeUndefined();
    });

    it('verifies that the paragraph text element is not rendered', () => {
      expect(wrapper.find('ParagraphText').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <LoadingNewItemDialog colour="red" dialogContentAreaColour="grey" isDisplayed={true} />
        </React.Fragment>
      );
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('dialogContentAreaColour')).toBe('grey');
    });

    it('verifies that the colour property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('colour')).toBe('red');
    });

    it('verifies that the isDisplayed property is correctly passed to the dialog with page mask element', () => {
      expect(wrapper.find('DialogWithPageMask').prop('isDisplayed')).toBeTruthy();
    });

    it('verifies that the paragraph text element is rendered', () => {
      expect(wrapper.find('ParagraphText').exists()).toBeTruthy();
    });
  });
});
