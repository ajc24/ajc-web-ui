import React from 'react';
import { PageMaskCloseButton } from '../../../src';

export default {
	component: PageMaskCloseButton,
	title: 'Page Mask Components/Page Mask Close Button',
};

const Template = args => {
	return <React.Fragment>
    <PageMaskCloseButton {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-close-button',
  onClose: () => {
    alert('Default page mask close button has been clicked!');
  },
};

export const RedButton = Template.bind({});
RedButton.args = {
  id: 'red-close-button',
  colour: 'red',
  onClose: () => {
    alert('Red page mask close button has been clicked!');
  },
};
