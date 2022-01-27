import React from 'react';
import { FileSelection } from '../../../src';

export default {
	component: FileSelection,
	title: 'Form Components/File Selection',
};
  
const Template = args => {
	return <div role="region">
    <FileSelection {...args} imagePath="Cobra-Speccy3.png" />
  </div>
}

export const Default = Template.bind({});
Default.args = {
  id: 'default-file-selection-id',
  labelText: 'Default File Selection Sample:',
};

// export const RedButtonsAndUpperSpacing = Template.bind({});
// RedButtonsAndUpperSpacing.args = {
//   id: 'red-file-uploader-with-upper-spacing-id',
//   additionalUpperSpacing: true,
//   colour: 'red',
// };

// export const WithCustomLabelText = Template.bind({});
// WithCustomLabelText.args = {
//   id: 'file-uploader-with-custom-label-text-id',
//   labelText: 'Custom File Uploader Label Text:'
// };
