import React from 'react';
import { ParagraphText } from '../../../src';

export default {
	component: ParagraphText,
	title: 'Page Components/Paragraph Text',
};
  
const Template = args => {
	return <div role="region">
    <ParagraphText {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default paragraph text component with left aligned text.'
};

export const CenterAlignedText = Template.bind({});
CenterAlignedText.args = {
  alignment: 'center',
  children: 'This is a paragraph text component with center aligned text.'
};

export const RightAlignedText = Template.bind({});
RightAlignedText.args = {
  alignment: 'right',
  children: 'This is a paragraph text component with right aligned text.'
};

export const BoldText = Template.bind({});
BoldText.args = {
  alignment: 'left',
  style: 'bold',
  children: 'This is a paragraph text component with bold text.'
};

export const TextInItalics = Template.bind({});
TextInItalics.args = {
  alignment: 'left',
  style: 'italics',
  children: 'This is a paragraph text component with text displayed in italics.'
};
