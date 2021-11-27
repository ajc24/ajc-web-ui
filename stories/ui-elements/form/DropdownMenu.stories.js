import React from 'react';
import { Dialog, DropdownMenu } from '../../../src';

export default {
	component: DropdownMenu,
	title: 'Form Components/Dropdown Menu',
};
  
const Template = args => {
	return <div role="region">
    <DropdownMenu {...args} />
  </div>
}

const DialogTemplate = args => {
  return <div role="region">
    <Dialog id="dialog-with-dropdown-menu-id" bgColour="yellow" colour="grey" titleTextContent="Dialog with Dropdown Menu Example:">
      <DropdownMenu {...args} />
    </Dialog>
  </div>
}

export const Default = Template.bind({});
Default.args = {
  id: 'dropdown-menu-default-id',
  labelText: 'Please select a number from the menu below:',
  optionsList: [
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
  ],
};

export const WithAdditionalUpperSpacing = Template.bind({});
WithAdditionalUpperSpacing.args = {
  id: 'dropdown-menu-with-additional-upper-spacing-id',
  labelText: 'Please select a car manufacturer from the menu below:',
  optionsList: [
    {
      textContent: 'Peugeot',
      value: 'peugeot',
    },
    {
      textContent: 'Honda',
      value: 'honda',
    },
    {
      textContent: 'Toyota',
      value: 'toyota',
    },
    {
      textContent: 'Citroen',
      value: 'citroen',
    },
    {
      textContent: 'Volkswagen',
      value: 'volkswagen',
    },
  ],
  additionalUpperSpacing: true,
};

export const DialogDropdownMenu = DialogTemplate.bind({});
DialogDropdownMenu.args = {
  id: 'dropdown-menu-dialog-id',
  labelText: 'Please select your favourite Uncharted game from the series:',
  optionsList: [
    {
      textContent: 'Uncharted: Drakes Fortune',
      value: 'uncharted-1',
    },
    {
      textContent: 'Uncharted 2: Among Thieves',
      value: 'uncharted-2',
    },
    {
      textContent: 'Uncharted 3: Drakes Deception',
      value: 'uncharted-3',
    },
    {
      textContent: 'Uncharted 4: A Thiefs End',
      value: 'uncharted-4',
    },
    {
      textContent: 'Uncharted: The Lost Legacy',
      value: 'uncharted-5',
    },
  ],
  isDialogFormItem: true,
};
