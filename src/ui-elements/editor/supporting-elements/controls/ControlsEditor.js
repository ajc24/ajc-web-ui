import React from 'react';
import PropTypes from 'prop-types';
import ControlsEditorUpper from './supporting-elements/ControlsEditorUpper';

/**
 * The ControlsEditor component renders the controls / buttons for the editor panel of the document editor.
 */
class ControlsEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Set the buttons list for the editor controls */
    // const middleEditorButtonsList = [
    //   {
    //     id: 'save-as-draft-button',
    //     onClick: () => { alert('Clicked save as draft button.'); },
    //     title: 'Save as Draft',
    //     tooltip: 'Save your document in its current incomplete state. You may return to finish it later.',
    //     type: 'button',
    //   },
    //   {
    //     id: 'generate-preview-button',
    //     onClick: () => { alert('Clicked generate preview button.'); },
    //     title: 'Generate Preview',
    //     tooltip: 'Generate a preview of your document in its current state.',
    //     type: 'button',
    //   },
    //   {
    //     id: 'publish-document-button',
    //     onClick: () => { alert('Clicked publish document button.'); },
    //     title: 'Publish Document',
    //     tooltip: 'When you are finished with your document, click here to publish it.',
    //     type: 'button',
    //   },
    // ];
    // const lowerEditorButtonsList = [
    //   {
    //     id: 'discard-draft-button',
    //     onClick: () => { alert('Clicked discard draft button.'); },
    //     title: 'Discard Draft',
    //     tooltip: 'Discard your current working document. Please note you will not be able to return to it after discarding it.',
    //     type: 'button',
    //   }
    // ];
    return (
      <React.Fragment>
        <ControlsEditorUpper additionalSpacingAboveControls={this.props.additionalSpacingAboveControls} colour={this.props.colour}
          addEditorItem={this.props.addEditorItem} dialogContentAreaColour={this.props.dialogContentAreaColour} reRenderAllowance={this.props.reRenderAllowance} />
        {/* <HorizontalButtonList alignment="left" additionalUpperSpacing={true} colour={this.props.colour} buttonList={middleEditorButtonsList}
          labelText="Save your current draft, generate a preview or publish your document:" />
        <HorizontalButtonList alignment="left" additionalUpperSpacing={true} colour={this.props.colour} buttonList={lowerEditorButtonsList}
          labelText="Click the button below to discard this current draft:" /> */}
      </React.Fragment>
    );
  }
}
ControlsEditor.propTypes = {
  /** The functionality to be carried out to add a new item to the editor. */
  addEditorItem: PropTypes.func.isRequired,
  /** The colour / theme set to the document editor buttons and all relevant items in the preview page. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour for the content area of any dialogs rendered. By default this is set to white. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** The time allowance between a state change and a re-render occurring. */
  reRenderAllowance: PropTypes.number,
  /** Use additional spacing above the upper buttons. */
  additionalSpacingAboveControls: PropTypes.bool,
};
ControlsEditor.defaultProps = {
  colour: 'grey',
  dialogContentAreaColour: 'white',
  reRenderAllowance: 100,
  additionalSpacingAboveControls: false,
};
export default ControlsEditor;
