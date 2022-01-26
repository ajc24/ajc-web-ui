import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DocumentEditor, PageContent } from '../../../src';

jest.useFakeTimers();

describe('Document Editor: Reference 001', () => {
  describe('Add Screenshot With Caption', () => {
    let optionElement;
    let selectElement;
    let spanHiddenElement;
    let wrapper;

    beforeAll(() => {
      /* Add the relevant elements to the document body */
      optionElement = document.createElement('option');
      optionElement.setAttribute('value', 'screenshot-with-caption');

      selectElement = document.createElement('select');
      selectElement.setAttribute('id', 'add-new-item-dropdown-menu-id');
      selectElement.appendChild(optionElement);
      document.body.appendChild(selectElement);

      spanHiddenElement = document.createElement('span');
      spanHiddenElement.setAttribute('id', 'add-new-item-user-value');
      spanHiddenElement.textContent = '';
      document.body.appendChild(spanHiddenElement);
      /* Mount the component being tested */
      wrapper = TestDev.mount(
        <PageContent title="DE001 - Add Screenshot With Caption">
          <DocumentEditor />
        </PageContent>
      );
    });

    afterAll(() => {
      selectElement.removeChild(optionElement);
      document.body.removeChild(selectElement);
      document.body.removeChild(spanHiddenElement);
    });

    it('verifies that a screenshot with caption element can be added to the document editor', () => {
      /* Step 1: The user selects the "Add New Item" option in the document editor. */
      wrapper.find('button#add-new-item-button').prop('onClick')();
      wrapper.update();
      
      /* Step 2: A modal dialog opens titled "Add New Document Item". */
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeTruthy();

      /* Step 3: The user selects the "Screenshot with Caption" option from the dropdown menu labelled "Please select an item to be added to your document:" */
      selectElement.value = 'screenshot-with-caption';

      /* Step 4: The user clicks on the button labelled "Confirm and Add". */
      wrapper.find('button#confirm-add-new-item-button').prop('onClick')();
      wrapper.update();
      
      /* Step 5: The modal dialog closes. */
      /* Step 5.1: The Add New Item modal dialog closes and the Loading New Item modal dialog is displayed. */
      expect(wrapper.find('AddNewItemDialog').prop('isDisplayed')).toBeFalsy();
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeTruthy();

      /* Step 5.2: The Loading New Item modal dialog closes on completion of all internal processes. */
      jest.runAllTimers();
      wrapper.update();
      expect(wrapper.find('LoadingNewItemDialog').prop('isDisplayed')).toBeFalsy();

      /* Step 6: The document editor renders the screenshot with caption form item. */
      expect(wrapper.find('div#screenshot-with-caption-0-file-selection-root').exists()).toBeTruthy();
      expect(wrapper.find('div#screenshot-with-caption-0-text-input-root').exists()).toBeTruthy();

      /* Step 7: The use case then concludes. */
    });
  });
});
