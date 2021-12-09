import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DropdownMenu } from '../../../src';

describe('DropdownMenu', () => {
  const mockOptionsList = [
    {
      textContent: 'One',
      value: 'one',
    },
    {
      textContent: 'Two',
      value: 'two',
    },
  ];

  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} />
        </React.Fragment>
      );
    });

    it('verifies that the id property is passed correctly to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('id')).toBe('dropdown-menu-id');
    });

    it('verifies that the labelText property is passed correctly to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('labelText')).toBe('Test Dropdown Menu Label Text:');
    });

    it('verifies that the default additionalUpperSpacing property value is passed to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('additionalUpperSpacing')).toBeFalsy();
    });

    it('verifies that the default isDialogFormItem property value is passed to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('isDialogFormItem')).toBeFalsy();
    });

    it('verifies that the id attribute is set to the select element', () => {
      expect(wrapper.find('select').prop('id')).toBe('dropdown-menu-id');
    });

    it('verifies that the name attribute is set to the select element', () => {
      expect(wrapper.find('select').prop('name')).toBe('dropdown-menu-id');
    });

    it('verifies that the defaultValue attribute is set to the select element', () => {
      expect(wrapper.find('select').prop('defaultValue')).toBe(mockOptionsList[0].value);
    });

    it('verifies that the correct number of option elements are rendered', () => {
      expect(wrapper.find('select').children()).toHaveLength(mockOptionsList.length);
    });

    it('verifies that the value attribute is set to the first option element', () => {
      expect(wrapper.find('option').at(0).prop('value')).toBe(mockOptionsList[0].value);
    });

    it('verifies that the title attribute is set to the first option element', () => {
      expect(wrapper.find('option').at(0).prop('title')).toBe(mockOptionsList[0].textContent);
    });

    it('verifies that the text content is rendered correctly in the first option element', () => {
      expect(wrapper.find('option').at(0).text()).toBe(mockOptionsList[0].textContent);
    });

    it('verifies that the value attribute is set to the second option element', () => {
      expect(wrapper.find('option').at(1).prop('value')).toBe(mockOptionsList[1].value);
    });

    it('verifies that the title attribute is set to the second option element', () => {
      expect(wrapper.find('option').at(1).prop('title')).toBe(mockOptionsList[1].textContent);
    });

    it('verifies that the text content is rendered correctly in the second option element', () => {
      expect(wrapper.find('option').at(1).text()).toBe(mockOptionsList[1].textContent);
    });
  });

  describe('Transferred props and rendering - Dialog component with additional spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} additionalUpperSpacing={true}
            isDialogFormItem={true} />
        </React.Fragment>
      );
    });

    it('verifies that the additionalUpperSpacing property is passed to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the isDialogFormItem property is passed to the FormItemLabel element', () => {
      expect(wrapper.find('FormItemLabel').prop('isDialogFormItem')).toBeTruthy();
    });
  });
});
