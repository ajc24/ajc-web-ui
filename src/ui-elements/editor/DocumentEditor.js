import React from 'react';
import PropTypes from 'prop-types';
import ControlsEditor from './supporting-elements/controls/ControlsEditor';
import ScreenshotWithCaption from './supporting-elements/form-items/ScreenshotWithCaption';
import '../../css/common.css';

/* Data for use with the editor */
const screenshotCaptionTextCharacterLimit = 50;
const validImageFileTypes = ['png', 'jpg', 'jpeg'];

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
    this.countNumberOfExistingItemTypes = this.countNumberOfExistingItemTypes.bind(this);
    this.countNumberOfValidItemTypes = this.countNumberOfValidItemTypes.bind(this);
    this.generateCopyOfEditorItems = this.generateCopyOfEditorItems.bind(this);
	}

  /**
   * Adds a new editor item to the list of all editor items
   */
  addEditorItem() {
    const itemId = document.querySelector('span[id="add-new-item-user-value"]').textContent;
    const editorItemsCopy = this.generateCopyOfEditorItems();
    const numberOfExistingItemTypes = this.countNumberOfExistingItemTypes(itemId);
    let isInvalidItem = false;
    if (itemId === 'screenshot-with-caption') {
      /* Add a new screenshot with caption editor item */
      editorItemsCopy.push({
        caption: undefined,
        characterLimit: screenshotCaptionTextCharacterLimit,
        fileName: undefined,
        imageData: undefined,
        reviewIndex: undefined,
      });
    } else {
      /* Mark this item as invalid - this also marks the item as deleted so as it can never be rendered */
      isInvalidItem = true;
      editorItemsCopy.push({});
    }
    /* Add the common data key and value pairs to the latest editor item */
    editorItemsCopy[this.state.editorItems.length].index = this.state.editorItems.length;
    editorItemsCopy[this.state.editorItems.length].isDeleted = isInvalidItem;
    editorItemsCopy[this.state.editorItems.length].itemIndex = numberOfExistingItemTypes + 1;
    editorItemsCopy[this.state.editorItems.length].itemType = itemId;
    /* Update state to include the new editor items list and set the loading dialog as hidden */
    const newState = Object.assign({}, this.state, {
      editorItems: editorItemsCopy,
    });
    this.setState(newState);
  }

  /**
   * Counts the number of existing editor items which are of the specified type
   * @param {string} itemType
   * @returns {number} 
   */
  countNumberOfExistingItemTypes(itemType) {
    let numberOfItemTypes = 0;
    for (let index = 0; index < this.state.editorItems.length; index += 1) {
      if (this.state.editorItems[index].itemType === itemType) {
        numberOfItemTypes += 1;
      }
    }
    return numberOfItemTypes;
  }

  /**
   * Counts the number of valid (ie. non-deleted) editor items
   * @returns {number}
   */
  countNumberOfValidItemTypes() {
    let numberOfItemTypes = 0;
    for (let index = 0; index < this.state.editorItems.length; index += 1) {
      if (this.state.editorItems[index].isDeleted === false) {
        numberOfItemTypes += 1;
      }
    }
    return numberOfItemTypes;
  }

  /**
   * Generates a copy of the current editor items list stored in state
   * @returns {Array.<JSON>}
   */
   generateCopyOfEditorItems() {
    const editorItemsCopy = [];
    this.state.editorItems.map(item => {
      editorItemsCopy.push(item);
    });
    return editorItemsCopy;
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
    /* Determine whether any valid items are displayed or not */
    let additionalSpacingAboveControls = this.countNumberOfValidItemTypes() > 0;
    return (
      <div className={rootStyling}>
        {/* Editor panel */}
        <div id="main-editor-container" className={editorPanelRootStyling}>
          <form id="main-editor-form-id">
            {
              this.state.editorItems.map(item => {
                if (item.itemType === 'screenshot-with-caption' && item.isDeleted === false) {
                  /** Render the screenshot with caption form item */
                  return <React.Fragment key={`screenshot-with-caption-${item.index}-container`}>
                    <ScreenshotWithCaption item={item} colour={this.props.colour} validFileTypes={validImageFileTypes}
                      characterLimit={screenshotCaptionTextCharacterLimit} />
                  </React.Fragment>;
                }
              })
            }
          </form>
          <ControlsEditor colour={this.props.colour} addEditorItem={this.addEditorItem} dialogContentAreaColour={this.props.dialogContentAreaColour}
            additionalSpacingAboveControls={additionalSpacingAboveControls} reRenderAllowance={this.props.reRenderAllowance} />
        </div>

        {/* Preview panel */}
        <div id="preview-panel-container" className={previewPanelRootStyling}>
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
  /** The time allowance between a state change and a re-render occurring. */
  reRenderAllowance: PropTypes.number,
};
DocumentEditor.defaultProps = {
	colour: 'grey',
  dialogContentAreaColour: 'white',
  reRenderAllowance: 100,
};
export default DocumentEditor;
