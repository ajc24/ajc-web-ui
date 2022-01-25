import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import ControlsEditorUpper from '../../../../../../src/ui-elements/editor/supporting-elements/controls/supporting-elements/ControlsEditorUpper';

jest.useFakeTimers();

describe('ControlsEditorUpper', () => {
  describe('Default props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
    });

    it('verifies that the alignment property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('alignment')).toBe('left');
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('additionalUpperSpacing')).toBeFalsy();
    });

    it('verifies that the colour property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('colour')).toBe('grey');
    });

    it('verifies that the buttonList property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('buttonList')).toHaveLength(1);
    });

    it('verfies that the onClick functionality is set to the add new item button', () => {
      expect(wrapper.find('button#add-new-item-button').prop('onClick')).toBeDefined();
    });

    it('verifies that the labelText property is correctly passed to the first horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('labelText')).toBe('Click the button below to add new items to your document:');
    });

    it('verifies that the hidden input field element is rendered', () => {
      expect(wrapper.find('input#add-new-item-user-value').exists()).toBeTruthy();
    });

    it('verifies that by default, there is no value set to the hidden input field element', () => {
      expect(wrapper.find('input#add-new-item-user-value').instance().value).toBe('');
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

  describe('Transferred props and rendering', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} colour="red" dialogContentAreaColour="grey" additionalSpacingAboveControls={true} />
        </React.Fragment>
      );
    });

    it('verifies that the additionalUpperSpacing property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the colour property is correctly passed to the horizontal button list element', () => {
      expect(wrapper.find('HorizontalButtonList').prop('colour')).toBe('red');
    });

    it('verifies that the colour property is correctly passed to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('colour')).toBe('red');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('dialogContentAreaColour')).toBe('grey');
    });

    it('verifies that the colour property is correctly passed to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('colour')).toBe('red');
    });

    it('verifies that the dialogContentAreaColour property is correctly passed to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('dialogContentAreaColour')).toBe('grey');
    });
  });

  describe('hideAddNewItemDialog() method behaviour', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      /* Execute the function being tested */
      wrapper.find('ControlsEditorUpper').instance().hideAddNewItemDialog();
      wrapper.update();
    });

    it('verifies that the isDisplayed property is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });
  });

  describe('hideLoadingNewItemDialog() method behaviour', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      /* Execute the function being tested */
      wrapper.find('ControlsEditorUpper').instance().hideLoadingNewItemDialog();
      wrapper.update();
    });

    it('verifies that the isDisplayed property is correctly set to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });
  });

  describe('showAddNewItemDialog() method behaviour', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      /* Execute the function being tested */
      wrapper.find('ControlsEditorUpper').instance().showAddNewItemDialog();
      wrapper.update();
    });

    it('verifies that the isDisplayed property is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeTruthy();
    });
  });

  describe('showLoadingNewItemDialog() method behaviour', () => {
    let wrapper;

    beforeAll(() => {
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      /* Execute the function being tested */
      wrapper.find('ControlsEditorUpper').instance().showLoadingNewItemDialog();
      wrapper.update();
    });

    it('verifies that the isDisplayed property is correctly set to the add new item dialog element', () => {
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });

    it('verifies that the isDisplayed property is correctly set to the loading new item dialog element', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeTruthy();
    });
  });

  describe('handleClickConfirmAddItem() method behaviour', () => {
    let isDisplayedAddNewItemDialogBeforeReRender;
    let isDisplayedLoadingAddNewItemDialogBeforeReRender;
    let mockAddEditorItem;
    let querySelectorSpy;
    let wrapper;

    beforeAll(() => {
      mockAddEditorItem = jest.fn();
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(cssSelector => {
          let response;
          if (cssSelector === 'input[id="add-new-item-user-value"]') {
            response = {
              value: '',
            };
          } else if (cssSelector === 'select[id="add-new-item-dropdown-menu-id"]') {
            response = {
              value: 'mock-return-value',
            };
          } else {
            response = {};
          }
          return response;
        });
      /* Mount the component */
      wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={mockAddEditorItem} />
        </React.Fragment>
      );
      /* Execute the function being tested */
      wrapper.find('ControlsEditorUpper').instance().handleClickConfirmAddItem();
      wrapper.update();
      /* Determine which dialogs are visible before the underlying re-render happens */
      isDisplayedAddNewItemDialogBeforeReRender = wrapper.find('AddNewItemDialog').prop('isDisplayed');
      isDisplayedLoadingAddNewItemDialogBeforeReRender = wrapper.find('LoadingNewItemDialog').prop('isDisplayed');
      /* Finish execution of all functionality and ensure the re-render happens */
      jest.runAllTimers();
      wrapper.update();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that after the first state change, the add new item dialog is marked as hidden', () => {
      expect(isDisplayedAddNewItemDialogBeforeReRender).toBeFalsy();
    });

    it('verifies that after the first state change, the loading add new item dialog is marked as visible', () => {
      expect(isDisplayedLoadingAddNewItemDialogBeforeReRender).toBeTruthy();
    });

    it('verifies that the addEditorItem functionality is invoked', () => {
      expect(mockAddEditorItem.mock.calls).toHaveLength(1);
    });

    it('verifies that after the second state change, the loading add new item dialog is marked as hidden', () => {
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeFalsy();
    });
  });
});
