import React from 'react';
import { HorizontalButtonList } from '../../../src';

export default {
	component: HorizontalButtonList,
	title: 'Form Components/Horizontal Button List',
};

const singleButtonList = [
  {
    id: `default-single-button-1`,
    onClick: () => { alert('Clicked Test Button 1'); },
    title: 'Test Button 1',
    tooltip: 'Click here to activate test button 1.',
    type: 'button',
  }
];
const singleSubmitButtonList = [
  {
    id: 'single-red-submit-button-1',
    onClick: (event) => { event.preventDefault(); alert('Clicked Submit Button 1'); },
    title: 'Submit Button 1',
    tooltip: 'Click here to activate the submit button.',
    type: 'submit',
  }
];
const multipleButtonsList = [
  {
    id: 'multiple-buttons-1',
    onClick: () => { alert('Clicked Test Button 1'); },
    title: 'Test Button 1',
    tooltip: 'Click on the first test button.',
    type: 'button',
  },
  {
    id: 'multiple-buttons-2',
    onClick: () => { alert('Clicked Test Button 2'); },
    title: 'Test Button 2',
    tooltip: 'Click on the second test button.',
    type: 'button',
  },
  {
    id: 'multiple-buttons-3',
    onClick: () => { alert('Clicked Test Button 3'); },
    title: 'Test Button 3',
    tooltip: 'Click on the third test button.',
    type: 'button',
  }
];
  
const Template = args => {
	return <div role="region">
    <HorizontalButtonList {...args} />
  </div>
}

export const SingleHorizontalButton = Template.bind({});
SingleHorizontalButton.args = {
  buttonList: singleButtonList,
};

export const MultipleHorizontalButtons = Template.bind({});
MultipleHorizontalButtons.args = {
  buttonList: multipleButtonsList,
};

export const CenteredRedHorizontalButtons = Template.bind({});
CenteredRedHorizontalButtons.args = {
  alignment: 'center',
  colour: 'red',
  buttonList: multipleButtonsList,
};

export const RightAlignedHorizontalButtons = Template.bind({});
RightAlignedHorizontalButtons.args = {
  alignment: 'right',
  buttonList: multipleButtonsList,
};

export const SingleRedSubmitButton = Template.bind({});
SingleRedSubmitButton.args = {
  colour: 'red',
  buttonList: singleSubmitButtonList,
};

export const HorizontalButtonsWithLabelText = Template.bind({});
HorizontalButtonsWithLabelText.args = {
  additionalUpperSpacing: false,
  labelText: 'Custom Horizontal Buttons Label Text',
  buttonList: multipleButtonsList,
};

export const LabelTextWithAdditionalUpperSpacing = Template.bind({});
LabelTextWithAdditionalUpperSpacing.args = {
  additionalUpperSpacing: true,
  labelText: 'Label Text With Additional Upper Spacing',
  colour: 'red',
  buttonList: multipleButtonsList,
};

export const CenteredHorizontalButtonsWithLabelText = Template.bind({});
CenteredHorizontalButtonsWithLabelText.args = {
  labelText: 'Center Aligned Horizontal Buttons With Label Text',
  alignment: 'center',
  buttonList: multipleButtonsList,
};

export const RightAlignedHorizontalButtonsWithLabelText = Template.bind({});
RightAlignedHorizontalButtonsWithLabelText.args = {
  labelText: 'Right Aligned Horizontal Buttons With Label Text',
  alignment: 'right',
  colour: 'red',
  buttonList: multipleButtonsList,
};
