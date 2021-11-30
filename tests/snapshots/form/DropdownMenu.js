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
    {
      textContent: 'Three',
      value: 'three',
    },
    {
      textContent: 'Four',
      value: 'four',
    },
    {
      textContent: 'Five',
      value: 'five',
    },
  ];

  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} accessibleMenuName="Number" />
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Standalone component with additional spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} additionalUpperSpacing={true}
            accessibleMenuName="Number" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Dialog component, no additional spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DropdownMenu id="dropdown-menu-id" labelText="Test Dropdown Menu Label Text:" optionsList={mockOptionsList} isDialogFormItem={true}
            accessibleMenuName="Number" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
