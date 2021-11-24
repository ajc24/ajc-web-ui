import React from 'react';
import { DialogContentArea } from '../../../src';

export default {
	component: DialogContentArea,
	title: 'Dialog Components/Dialog Content Area',
};

const Template = args => {
	return <React.Fragment>
    <DialogContentArea {...args}>
      <span>This is an example of text rendered within the dialog content area container.</span>
      <span style={{ paddingTop: 10 }}>Another example of dialog content area text.</span>
    </DialogContentArea>
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-dialog-content-area',
};

export const WithGreyBackground = Template.bind({});
WithGreyBackground.args = {
  id: 'white-background-dialog-content-area',
  colour: 'grey',
};

export const WithYellowBackground = Template.bind({});
WithYellowBackground.args = {
  id: 'yellow-background-dialog-content-area',
  colour: 'yellow',
};
