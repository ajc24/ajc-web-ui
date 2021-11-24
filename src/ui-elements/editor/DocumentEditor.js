import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import AddNewItemDialog from './supporting-elements/dialogs/AddNewItemDialog';
import ControlsEditor from './supporting-elements/controls/ControlsEditor';


/**
 * The DocumentEditor component allows a user to generate a written article which can then be rendered in your web application.
 */
class DocumentEditor extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      dialogAddNewItem: false,
      editorItems: [],
      showEditorPanel: true,
    };

    /* Bind all of the relevant functionality to this component */
    this.addEditorItem = this.addEditorItem.bind(this);
    this.hideAddNewItemDialog = this.hideAddNewItemDialog.bind(this);
    this.showAddNewItemDialog = this.showAddNewItemDialog.bind(this);
	}

  /**
   * Adds a new editor item to the list of all editor items
   * @param {string} itemId 
   */
  addEditorItem(itemId) {
    alert('Add editor item');
  }

  /**
   * Marks the add new item dialog as hidden
   */
  hideAddNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: false,
    });
    this.setState(newState);
  }

  /**
   * Marks the add new item dialog as visible
   */
  showAddNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: true,
    });
    this.setState(newState);
  }

	render() {
    /* Set the styling for the root component */
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-background-transparent ajc-width-hd-inner ajc-spacing-bottom-small ajc-text-black ajc-font-default';
    
    /* Generate the styling for the preview and editor root panel components */
    let editorPanelRootStyling;
    let previewPanelRootStyling;
    if (this.state.showEditorPanel === false) {
      editorPanelRootStyling = 'ajc-visibility-hidden';
      previewPanelRootStyling = 'ajc-visibility-visible';
    } else {
      editorPanelRootStyling = 'ajc-visibility-visible';
      previewPanelRootStyling = 'ajc-visibility-hidden';
    }
    return (
      <div className={rootStyling}>
        {/* Editor panel */}
        <div className={editorPanelRootStyling}>
          <ControlsEditor colour={this.props.colour} handleClickAddNewItem={this.showAddNewItemDialog} upperButtonListAdditionalSpacing={false} />
        </div>

        {/* Add new item dialog */}
        <AddNewItemDialog colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour} isDisplayed={this.state.dialogAddNewItem}
          handleClickClose={this.hideAddNewItemDialog} handleClickCancel={this.hideAddNewItemDialog} handleClickConfirmAddItem={this.addEditorItem} />

        {/* Preview panel */}
        <div className={previewPanelRootStyling}>
          Hello World
        </div>
      </div>
    );
	}
}
DocumentEditor.propTypes = {
  /** The colour to be applied to all form controls. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour for the content area of any dialogs rendered in the editor. By default this is set to white. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
};
DocumentEditor.defaultProps = {
	colour: 'grey',
  dialogContentAreaColour: 'white',
};
export default DocumentEditor;
