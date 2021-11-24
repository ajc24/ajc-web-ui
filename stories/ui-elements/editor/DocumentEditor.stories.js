import React from 'react';
import { DocumentEditor } from '../../../src';

export default {
	component: DocumentEditor,
	title: 'Editing/Document Editor',
};

// const draftEditorItemsParagraphNoContent = [{"characterLimit":1000,"index":0,"isDeleted":false,"itemNumber":1,"itemType":"paragraph","textContent":""}];
// const draftEditorItemsParagraphHeadingNoContent = [{"additionalUpperSpacing":true,"index":0,"isDeleted":false,"itemNumber":1,"itemType":"paragraph-heading","textContent":""}];
// const draftEditorItemsScreenshotWithCaptionNoContent = [{"caption":"","characterLimit":50,"index":0,"isDeleted":false,"itemNumber":1,"itemType":"screenshot"}];

const Template = args => {
	return <div role="region">
    <DocumentEditor {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {
	colour: 'red',
	dialogContentAreaColour: 'grey',
};

// export const RedEditor = Template.bind({});
// RedEditor.args = {
// 	colour: 'red',
// 	dialogBgColour: 'grey',
// };

// export const PopulatedWithPreviousDraftDocument = Template.bind({});
// PopulatedWithPreviousDraftDocument.args = {
// 	colour: 'grey',
// 	dialogBgColour: 'yellow',
// 	previousDraftEditorItems: draftEditorItemsScreenshotWithCaptionNoContent,
// };