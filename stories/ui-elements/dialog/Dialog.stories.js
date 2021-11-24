import React from 'react';
import { Dialog } from '../../../src';

export default {
	component: Dialog,
	title: 'Dialog Components/Dialog',
};

const twoButtonsList = [
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
];

const Template = args => {
	return <React.Fragment>
    <Dialog {...args}>
      This is an example of a full dialog display.
    </Dialog>
  </React.Fragment>
}

export const GreyThemeWhiteBackground = Template.bind({});
GreyThemeWhiteBackground.args = {
  id: 'default-dialog',
  titleTextContent: 'Dialog Title (Grey Theme, White Background)',
  buttonsList: twoButtonsList,
};

export const RedThemeGreyBackground = Template.bind({});
RedThemeGreyBackground.args = {
  id: 'red-theme-dialog',
  bgColour: 'grey',
  colour: 'red',
  titleTextContent: 'Dialog Title (Red Theme, Grey Background)',
  buttonsList: twoButtonsList,
};

export const GreyThemeYellowBackground = Template.bind({});
GreyThemeYellowBackground.args = {
  id: 'grey-theme-dialog-yellow-background',
  bgColour: 'yellow',
  colour: 'grey',
  titleTextContent: 'Dialog Title (Grey Theme, Yellow Background)',
  buttonsList: twoButtonsList,
};
