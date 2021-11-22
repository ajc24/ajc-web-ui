import React from 'react';
import { Header } from '../../../src';
import testImage from '../../data/images/storybook-header-bg.png';

export default {
	component: Header,
	title: 'Header Panel/Header',
};
  
const Template = args => {
	return <React.Fragment>
		<Header {...args} >
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%', color: '#000000' }}>
      	This component is designed to act as a header component for your web applications UI. You can render any content you wish inside the header.
    	</div>
		</Header>
		{
			args.imageData !== undefined ?
				<div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop: '20px' }}>
        	<span>Photo by <a href="https://unsplash.com/@huper?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Huper by Joshua Earle</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      	</div> : null
		}
	</React.Fragment>;
}

export const Default = Template.bind({});
Default.args = {
	id: 'default-header-id',
};

export const WithTopBorder = Template.bind({});
WithTopBorder.args = {
	backgroundColour: 'grey',
	id: 'header-with-top-border-id',
	topBorder: 'red'
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
	id: 'header-id',
	imageData: testImage,
};
