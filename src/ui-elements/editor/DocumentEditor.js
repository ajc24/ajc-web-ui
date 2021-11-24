import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import ControlsEditor from './supporting-elements/ControlsEditor';

/**
 * The DocumentEditor component allows a user to generate a written article which can then be rendered in your web application.
 */
class DocumentEditor extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      editorItems: [],
      showEditorPanel: true,
    };

    /* Bind all of the relevant functionality to this component */
    this.addEditorItem = this.addEditorItem.bind(this);
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
   * Marks the add new item dialog as visible
   */
  showAddNewItemDialog() {
    alert('Clicked');
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

        {/* Preview panel */}
        <div className={previewPanelRootStyling}>
          Hello World
        </div>
      </div>
    );
	}
}
DocumentEditor.propTypes = {
  /** The colour to be applied to all form controls. By default these are rendered in grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
};
DocumentEditor.defaultProps = {
	colour: 'grey'
};
export default DocumentEditor;
