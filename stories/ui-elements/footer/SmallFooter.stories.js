import React from 'react';
import { SmallFooter } from '../../../src';

export default {
	component: SmallFooter,
	title: 'Footer Panel/Small Footer',
};

const Template = args => {
	return <React.Fragment>
    <SmallFooter {...args}>
      You may render any text content you wish inside the small footer component.
    </SmallFooter>
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {};

export const RedFooter = Template.bind({});
RedFooter.args = {
  colour: 'red'
};
