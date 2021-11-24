import React from 'react';
import { DialogFooter } from '../../../src';

export default {
	component: DialogFooter,
	title: 'Dialog Components/Dialog Footer',
};

const Template = args => {
	return <React.Fragment>
    <DialogFooter {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-dialog-footer-id',
};

export const RedTheme = Template.bind({});
RedTheme.args = {
  id: 'red-theme-dialog-footer-id',
  colour: 'red',
};

export const GreyThemeWithButtons = Template.bind({});
GreyThemeWithButtons.args = {
  id: 'grey-theme-buttons-dialog-footer-id',
  colour: 'grey',
  buttonsList: [
    {
      id: 'save-button',
      onClick: () => { alert('Clicked Dialog Save Button'); },
      title: 'Save',
      type: 'button',
    },
    {
      id: 'cancel-button',
      onClick: () => { alert('Clicked Dialog Cancel Button'); },
      title: 'Cancel',
      type: 'button',
    }
  ]
};

export const RedThemeWithButtons = Template.bind({});
RedThemeWithButtons.args = {
  id: 'red-theme-buttons-dialog-footer-id',
  colour: 'red',
  buttonsList: [
    {
      id: 'save-button',
      onClick: () => { alert('Clicked Dialog Save Button'); },
      title: 'Save',
      type: 'button',
    },
    {
      id: 'cancel-button',
      onClick: () => { alert('Clicked Dialog Cancel Button'); },
      title: 'Cancel',
      type: 'button',
    }
  ]
};
