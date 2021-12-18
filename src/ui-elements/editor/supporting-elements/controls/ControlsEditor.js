import React from 'react';
import PropTypes from 'prop-types';
import HorizontalButtonList from '../../../form/HorizontalButtonList';

/**
 * The ControlsEditor component renders the controls / buttons for the editor panel of the document editor.
 */
class ControlsEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Set the buttons list for the editor controls */
    const upperEditorButtonsList = [
      {
        id: 'add-new-item-button',
        onClick: this.props.handleClickAddNewItem,
        title: 'Add New Item',
        tooltip: 'Add a new item to your document.',
        type: 'button',
      },
    ];
    const middleEditorButtonsList = [
      {
        id: 'save-as-draft-button',
        onClick: () => {},// this.props.onClickSaveAsDraft,
        title: 'Save as Draft',
        tooltip: 'Save your document in its current incomplete state. You may return to finish it later.',
        type: 'button',
      },
      {
        id: 'generate-preview-button',
        onClick: () => {},// this.props.onClickGeneratePreview,
        title: 'Generate Preview',
        tooltip: 'Generate a preview of your document in its current state.',
        type: 'button',
      },
      {
        id: 'publish-document-button',
        onClick: () => {},// this.props.onClickPublishDocument,
        title: 'Publish Document',
        tooltip: 'When you are finished with your document, click here to publish it.',
        type: 'button',
      },
    ];
    const lowerEditorButtonsList = [
      {
        id: 'discard-draft-button',
        onClick: () => {},// this.props.onClickDiscardDraft,
        title: 'Discard Draft',
        tooltip: 'Discard your current working document. Please note you will not be able to return to it after discarding it.',
        type: 'button',
      }
    ];
    return (
      <React.Fragment>
        <HorizontalButtonList alignment="left" additionalUpperSpacing={this.props.upperButtonListAdditionalSpacing} colour={this.props.colour}
          buttonList={upperEditorButtonsList} labelText="Click the button below to add new items to your document:" />
        <HorizontalButtonList alignment="left" additionalUpperSpacing={true} colour={this.props.colour} buttonList={middleEditorButtonsList}
          labelText="Save your current draft, generate a preview or publish your document:" />
        <HorizontalButtonList alignment="left" additionalUpperSpacing={true} colour={this.props.colour} buttonList={lowerEditorButtonsList}
          labelText="Click the button below to discard this current draft:" />
      </React.Fragment>
    );
  }
}
ControlsEditor.propTypes = {
  /** The colour / theme set to the document editor buttons and all relevant items in the preview page. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The click functionality for the add new item button. */
  handleClickAddNewItem: PropTypes.func,
  /** The click functionality for the discard draft button. */
  // onClickDiscardDraft: PropTypes.func,
  // /** The click functionality for the generate preview button. */
  // onClickGeneratePreview: PropTypes.func,
  // /** The click functionality for the publish document button. */
  // onClickPublishDocument: PropTypes.func,
  // /** The click functionality for the save as draft button. */
  // onClickSaveAsDraft: PropTypes.func,
  /** Use additional spacing above the upper editor button list. */
  upperButtonListAdditionalSpacing: PropTypes.bool,
};
ControlsEditor.defaultProps = {
  colour: 'grey',
  handleClickAddNewItem: () => {},
  // onClickDiscardDraft: () => {},
  // onClickGeneratePreview: () => {},
  // onClickPublishDocument: () => {},
  // onClickSaveAsDraft: () => {},
  upperButtonListAdditionalSpacing: false,
};
export default ControlsEditor;
