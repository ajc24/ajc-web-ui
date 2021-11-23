import React from 'react';
import { ParagraphHeading } from '../../../src';

export default {
	component: ParagraphHeading,
	title: 'Page Components/Paragraph Heading',
};
  
const Template = args => {
	return <div role="region">
    <ParagraphHeading {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default paragraph heading component with left aligned text.'
};

export const LeftAlignedNoAdditionalUpperSpacing = Template.bind({});
LeftAlignedNoAdditionalUpperSpacing.args = {
  additionalUpperSpacing: false,
  alignment: 'left',
  children: 'This is a default paragraph heading component with reduced upper spacing.'
};

export const CenterAlignedHeading = Template.bind({});
CenterAlignedHeading.args = {
  alignment: 'center',
  children: 'This is a default paragraph heading component with center aligned text.'
};

export const RightAlignedHeading = Template.bind({});
RightAlignedHeading.args = {
  alignment: 'right',
  children: 'This is a default paragraph heading component with right aligned text.'
};
