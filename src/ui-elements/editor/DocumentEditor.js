import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import AddNewItemDialog from './supporting-elements/dialogs/AddNewItemDialog';
import ControlsEditor from './supporting-elements/controls/ControlsEditor';
import LoadingNewItemDialog from './supporting-elements/dialogs/LoadingNewItemDialog';
import FileSelection from '../form/FileSelection';
import TextInput from '../form/TextInput';

/* Data for use with the editor */
const reRenderAllowance = 100;

/**
 * The DocumentEditor component allows a user to generate a written article which can then be rendered in your web application.
 */
class DocumentEditor extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      dialogAddNewItem: false,
      dialogLoadingNewItem: false,
      editorItems: [],
      showEditorPanel: true,
    };

    /* Bind all of the relevant functionality to this component */
    this.addEditorItem = this.addEditorItem.bind(this);
    this.countNumberOfExistingItemTypes = this.countNumberOfExistingItemTypes.bind(this);
    this.countNumberOfValidItemTypes = this.countNumberOfValidItemTypes.bind(this);
    this.generateCopyOfEditorItems = this.generateCopyOfEditorItems.bind(this);
    this.hideAddNewItemDialog = this.hideAddNewItemDialog.bind(this);
    this.showAddNewItemDialog = this.showAddNewItemDialog.bind(this);
    this.showLoadingNewItemDialog = this.showLoadingNewItemDialog.bind(this);
	}

  /**
   * Adds a new editor item to the list of all editor items
   * @param {string} itemId 
   */
  addEditorItem(itemId) {
    const editorItemsCopy = this.generateCopyOfEditorItems();
    const numberOfExistingItemTypes = this.countNumberOfExistingItemTypes(itemId);
    if (itemId === 'screenshot-with-caption') {
      /* Add a new screenshot with caption editor item */
      editorItemsCopy.push({
        caption: undefined,
        characterLimit: this.props.screenshotCaptionCharacterLimit,
        filename: undefined,
        imageData: undefined,
      });
    }
    /* Add the common data key and value pairs to the latest editor item */
    editorItemsCopy[this.state.editorItems.length].index = this.state.editorItems.length;
    editorItemsCopy[this.state.editorItems.length].isDeleted = false;
    editorItemsCopy[this.state.editorItems.length].itemIndex = numberOfExistingItemTypes + 1;
    editorItemsCopy[this.state.editorItems.length].itemType = itemId;
    /* Update state to include the new editor items list and set the loading dialog as hidden */
    const newState = Object.assign({}, this.state, {
      dialogLoadingNewItem: false,
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

  /**
   * Marks the loading dialog for adding a new item as visible.
   * Then proceeds to determine the itemId for the newly selected item and
   * forwards that value to the addEditorItem function.
   */
  showLoadingNewItemDialog() {
    /* Now work on adding the new item to the editor */
    const itemId = document.querySelector('select[id="add-new-item-dropdown-menu-id"]').value;
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: false,
      dialogLoadingNewItem: true,
    });
    this.setState(newState);
    /* Invoke the functionality to add the new editor item */
    setTimeout(() => {
      this.addEditorItem(itemId);
    }, reRenderAllowance);
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
    let upperControlsEditorAdditionalSpacing = this.countNumberOfValidItemTypes() > 0;
    return (
      <div className={rootStyling}>
        {/* Editor panel */}
        <div className={editorPanelRootStyling}>
          <form id="main-editor-form-id">
            {
              this.state.editorItems.map((item, index) => {
                if (item.itemType === 'screenshot-with-caption' && item.isDeleted === false) {
                  /** Render the screenshot with caption form item */
                  return (
                    <React.Fragment>
                      <FileSelection id={`screenshot-with-caption-${index}`} key={`screenshot-with-caption-item-${index}-0`} colour={this.props.colour} />
                      <TextInput id={`screenshot-with-caption-${index}`} key={`screenshot-with-caption-item-${index}-1`} />
                    </React.Fragment>
                  );
                }
              })
            }
          </form>
          <ControlsEditor colour={this.props.colour} handleClickAddNewItem={this.showAddNewItemDialog}
            upperButtonListAdditionalSpacing={upperControlsEditorAdditionalSpacing} />
        </div>

        {/* Add new item dialog */}
        <AddNewItemDialog colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour} isDisplayed={this.state.dialogAddNewItem}
          handleClickClose={this.hideAddNewItemDialog} handleClickCancel={this.hideAddNewItemDialog} handleClickConfirmAddItem={this.showLoadingNewItemDialog} />
        
        {/* Loading new item dialog */}
        <LoadingNewItemDialog colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour} isDisplayed={this.state.dialogLoadingNewItem} />

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
  /** The character limit to be set to any screenshot caption text entered in the editor. By default this is set to 50 characters. */
  screenshotCaptionCharacterLimit: PropTypes.number,
};
DocumentEditor.defaultProps = {
	colour: 'grey',
  dialogContentAreaColour: 'white',
  screenshotCaptionCharacterLimit: 50,
};
export default DocumentEditor;
