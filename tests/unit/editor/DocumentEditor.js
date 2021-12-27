import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DocumentEditor } from '../../../src';

jest.useFakeTimers();

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

    it('verifies that the handleClickAddNewItem functionality is correctly set to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('handleClickAddNewItem')).toBeDefined();
    });

    it('verifies that the upperButtonListAdditionalSpacing property is correctly set to the controls editor element', () => {
      expect(wrapper.find('ControlsEditor').prop('upperButtonListAdditionalSpacing')).toBeFalsy();
    });

    it('verifies that the colour property is correctly passed to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('colour')).toBe('grey');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('dialogContentAreaColour')).toBe('white');
    });

    it('verifies that the isDisplayed property is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });

    it('verifies that the handleClickAddNewItem functionality is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('handleClickClose')).toBeDefined();
    });

    it('verifies that the handleClickAddNewItem functionality is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('handleClickCancel')).toBeDefined();
    });

    it('verifies that the handleClickConfirmAddItem functionality is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('handleClickConfirmAddItem')).toBeDefined();
    });

    it('verifies that the colour property is correctly passed to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('colour')).toBe('grey');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('dialogContentAreaColour')).toBe('white');
    });

    it('verifies that the isDisplayed property is correctly set to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });
  });

  describe('addEditorItem() functionality - Screenshot with caption text item id', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('screenshot-with-caption');
      wrapper.update();
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
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('invalid-item-id');
      wrapper.update();
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
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('screenshot-with-caption');
      wrapper.instance().addEditorItem('screenshot-with-caption');
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
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('screenshot-with-caption');
      wrapper.instance().addEditorItem('screenshot-with-caption');
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
        filename: undefined,
        imageData: undefined,
        index: 0,
        isDeleted: false,
        itemIndex: 1,
        itemType: 'screenshot-with-caption',
      },
    ];
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('screenshot-with-caption');
      copyOfEditorItems = wrapper.instance().generateCopyOfEditorItems();
    });

    it('verifies that a valid copy of the editor items list is generated as expected', () => {
      expect(copyOfEditorItems).toMatchObject(expectedCopyOfEditorItems);
    });
  });

  describe('hideAddNewItemDialog() functionality', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().showAddNewItemDialog();
      wrapper.update();
      wrapper.instance().hideAddNewItemDialog();
      wrapper.update();
    });

    it('verifies that the add new item dialog is marked as hidden as expected', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });
  });

  describe('showAddNewItemDialog() functionality', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      wrapper.instance().showAddNewItemDialog();
      wrapper.update();
    });

    it('verifies that the add new item dialog is marked as visible as expected', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeTruthy();
    });
  });

  describe('showInvalidFileTypeDialog() functionality', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="red" />
        </React.Fragment>
      );
      wrapper.instance().showInvalidFileTypeDialog();
      wrapper.update();
    });

    it('verifies that the invalid file type dialog is marked as visible as expected', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('showLoadingNewItemDialog() functionality', () => {
    let addEditorItemSpy;
    let isAddNewItemDialogDisplayed;
    let isLoadingNewItemDialogDisplayed;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockImplementationOnce(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor colour="grey" />
        </React.Fragment>
      );
      addEditorItemSpy = jest
        .spyOn(wrapper.instance(), 'addEditorItem')
        .mockImplementation(() => {});
      /* Invoke the functionality being tested and gather all data critical to the unit test verifications */
      wrapper.instance().showLoadingNewItemDialog();
      wrapper.update();
      isAddNewItemDialogDisplayed = wrapper.find('AddNewItemDialog').prop('isDisplayed');
      isLoadingNewItemDialogDisplayed = wrapper.find('LoadingNewItemDialog').prop('isDisplayed');
      jest.runAllTimers();
    });

    afterAll(() => {
      addEditorItemSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the add new item dialog is marked as hidden as expected', () => {
      expect(isAddNewItemDialogDisplayed).toBeFalsy();
    });

    it('verifies that the loading new item dialog is marked as visible as expected', () => {
      expect(isLoadingNewItemDialogDisplayed).toBeTruthy();
    });

    it('verifies that the addEditorItem functionality is invoked', () => {
      expect(addEditorItemSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the editor item id is correctly passed to the addEditorItem functionality', () => {
      expect(addEditorItemSpy.mock.calls[0][0]).toBe('screenshot-with-caption');
    });
  });
});

/**
 * Tests to be written / updated  later when more functionality is available
 * --------------------------------------------------------------------------
 * 1. countNumberOfExistingItemTypes() functionality - Include mix of items in the editor items list to ensure counter is very correct
 * 2. countNumberOfValidItemTypes() functionality - Include mix of deleted and non-deleted items to ensure counter is very correct
 * 3. generateCopyOfEditorItems() functionality - Include mix of deleted and non deleted items, mix of item types
 * 4. showInvalidFileTypeDialog() functionality - Write a better test for this when this function is fleshed out a bit more
 * 5. Add test for when the preview panel is displayed and editor items panel is hidden when this functionality it fleshed out
 */
