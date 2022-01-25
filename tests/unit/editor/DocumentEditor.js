import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DocumentEditor } from '../../../src';

describe('DocumentEditor', () => {
  describe('Default props and rendering - No custom properties set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-visibility-visible" class is assigned to the main editor container element', () => {
      expect(wrapper.find('div#main-editor-container').hasClass('ajc-visibility-visible')).toBeTruthy();
    });

    it('verifies that the "ajc-visibility-hidden" class is assigned to the preview panel container element', () => {
      expect(wrapper.find('div#preview-panel-container').hasClass('ajc-visibility-hidden')).toBeTruthy();
    });

    it('verifies that by default no children are rendered within the main editor form element', () => {
      expect(wrapper.find('form#main-editor-form-id').children()).toHaveLength(0);
    });

    it('verifies that the colour property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('colour')).toBe('grey');
    });

    it('verifies that the addEditorItem functionality is correctly set to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('addEditorItem')).toBeDefined();
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('dialogContentAreaColour')).toBe('white');
    });

    it('verifies that the additionalSpacingAboveControls property is correctly set to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('additionalSpacingAboveControls')).toBeFalsy();
    });

    it('verifies that the reRenderAllowance property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('reRenderAllowance')).toBeDefined();
    });
  });

  describe('Transferred props and rendering - All custom properties set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" dialogContentAreaColour="grey" reRenderAllowance={500} />
        </React.Fragment>
      );
    });

    it('verifies that the colour property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('colour')).toBe('red');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('dialogContentAreaColour')).toBe('grey');
    });

    it('verifies that the reRenderAllowance property is correctly passed to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('reRenderAllowance')).toBe(500);
    });
  });

  describe('addEditorItem() functionality - Screenshot with caption text item id', () => {
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      wrapper.update();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the main form element contains one child element', () => {
      expect(wrapper.find('form#main-editor-form-id').children()).toHaveLength(1);
    });

    it('verifies that the screenshot with caption text container element is rendered', () => {
      expect(wrapper.find('form#main-editor-form-id div#screenshot-with-caption-0-container').exists()).toBeTruthy();
    });

    it('verifies that two children elements are rendered within the screenshot with caption text container element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container').children()).toHaveLength(2);
    });

    it('verifies that a FileSelection item is rendered', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container FileSelection').exists()).toBeTruthy();
    });

    it('verifies that the id property is correctly passed to the FileSelection element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container FileSelection').prop('id')).toBe('screenshot-with-caption-0');
    });

    it('verifies that the colour property is correctly passed to the FileSelection element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container FileSelection').prop('colour')).toBe('red');
    });

    it('verifies that the validFileTypes property is correctly passed to the FileSelection element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container FileSelection').prop('validFileTypes')).toMatchObject(['png', 'jpg', 'jpeg']);
    });

    it('verifies that the onInvalidFileType functionality is correctly set to the FileSelection element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container FileSelection').prop('onInvalidFileType')).toBeDefined();
    });

    it('verifies that a TextInput item is rendered', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container TextInput').exists()).toBeTruthy();
    });

    it('verifies that the id property is correctly passed to the TextInput element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container TextInput').prop('id')).toBe('screenshot-with-caption-0');
    });

    it('verifies that the characterLimit property is correctly passed to the TextInput element', () => {
      expect(wrapper.find('div#screenshot-with-caption-0-container TextInput').prop('characterLimit')).toBe(50);
    });
  });

  describe('addEditorItem() functionality - Invalid item id', () => {
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            value: 'invalid-item-id',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      wrapper.update();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the main form element does not contain any child elements', () => {
      expect(wrapper.find('form#main-editor-form-id').children()).toHaveLength(0);
    });
  });

  describe('countNumberOfExistingItemTypes() functionality - No existing items', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
    });

    it('verifies that no existing items are found in the list of all editor items', () => {
      expect(wrapper.instance().countNumberOfExistingItemTypes('screenshot-with-caption')).toBe(0);
    });
  });

  describe('countNumberOfExistingItemTypes() functionality - Count of existing items', () => {
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      wrapper.instance().addEditorItem();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that all relevant existing items are found in the list of all editor items', () => {
      expect(wrapper.instance().countNumberOfExistingItemTypes('screenshot-with-caption')).toBe(2);
    });
  });

  describe('countNumberOfValidItemTypes() functionality - No existing items', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
    });

    it('verifies that no existing items are found in the list of all editor items', () => {
      expect(wrapper.instance().countNumberOfValidItemTypes()).toBe(0);
    });
  });

  describe('countNumberOfValidItemTypes() functionality - Count of valid items', () => {
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      wrapper.instance().addEditorItem();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that all valid items are found in the list of all editor items', () => {
      expect(wrapper.instance().countNumberOfValidItemTypes()).toBe(2);
    });
  });

  describe('generateCopyOfEditorItems() functionality', () => {
    let copyOfEditorItems;
    const expectedCopyOfEditorItems = [
      {
        caption: undefined,
        characterLimit: 50,
        fileName: undefined,
        imageData: undefined,
        index: 0,
        isDeleted: false,
        itemIndex: 1,
        itemType: 'screenshot-with-caption',
      },
    ];
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      copyOfEditorItems = wrapper.instance().generateCopyOfEditorItems();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that a valid copy of the editor items list is generated as expected', () => {
      expect(copyOfEditorItems).toMatchObject(expectedCopyOfEditorItems);
    });
  });
});

/**
 * Tests to be written / updated  later when more functionality is available
 * --------------------------------------------------------------------------
 * 1. countNumberOfExistingItemTypes() functionality - Include mix of items in the editor items list to ensure counter is very correct
 * 2. countNumberOfValidItemTypes() functionality - Include mix of deleted and non-deleted items to ensure counter is very correct
 * 3. generateCopyOfEditorItems() functionality - Include mix of deleted and non deleted items, mix of item types
 * 4. Add test for when the preview panel is displayed and editor items panel is hidden when this functionality it fleshed out
 */
