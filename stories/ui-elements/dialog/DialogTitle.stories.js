import React from 'react';
import { DialogTitle } from '../../../src';

export default {
	component: DialogTitle,
	title: 'Dialog Components/Dialog Title',
};

const Template = args => {
	return <React.Fragment>
    <DialogTitle {...args}>
      Dialog Title Text Content
    </DialogTitle>
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-dialog-title',
};

export const RedTheme = Template.bind({});
RedTheme.args = {
  id: 'red-theme-dialog-title',
  colour: 'red',
};
