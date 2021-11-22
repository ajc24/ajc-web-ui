import React from 'react';
import { SmallDownArrowIcon } from '../../../src';

export default {
	component: SmallDownArrowIcon,
	title: 'Icons/SmallDownArrowIcon',
};
  
const Template = args => {
	return <React.Fragment>
    <SmallDownArrowIcon {...args} />
  </React.Fragment>
}

export const Default = Template.bind({});
