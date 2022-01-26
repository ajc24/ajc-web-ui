import React from 'react';
import PropTypes from 'prop-types';
import HorizontalButtonList from '../../../../form/HorizontalButtonList';
import AddNewItemDialog from '../../dialogs/AddNewItemDialog';
import LoadingNewItemDialog from '../../dialogs/LoadingNewItemDialog';
import '../../../../../css/common.css';

/**
 * The ControlsEditorUpper component renders the controls / buttons for the upper section of the editor panel.
 */
class ControlsEditorUpper extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      dialogAddNewItem: false,
      dialogLoadingNewItem: false,
    };
    this.handleClickConfirmAddItem = this.handleClickConfirmAddItem.bind(this);
    this.hideAddNewItemDialog = this.hideAddNewItemDialog.bind(this);
    this.hideLoadingNewItemDialog = this.hideLoadingNewItemDialog.bind(this);
    this.showAddNewItemDialog = this.showAddNewItemDialog.bind(this);
    this.showLoadingNewItemDialog = this.showLoadingNewItemDialog.bind(this);
  }

  /**
   * Handles click actions to confirm adding a new item from the dialog dropdown selection
   */
  handleClickConfirmAddItem() {
    /* Set the user value to the hidden input field */
    document.querySelector('span[id="add-new-item-user-value"]').textContent = document.querySelector('select[id="add-new-item-dropdown-menu-id"]').value;
    /* Invoke the functionality to add the new editor item */
    this.showLoadingNewItemDialog();
    setTimeout(() => {
      this.props.addEditorItem();
      this.hideLoadingNewItemDialog();
    }, this.props.reRenderAllowance);
  }

  /**
   * Marks the add new item dialog as hidden.
   */
  hideAddNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: false,
    });
    this.setState(newState);
  }

  /**
   * Marks the loading dialog for adding a new item as hidden.
   */
   hideLoadingNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogLoadingNewItem: false,
    });
    this.setState(newState);
  }

  /**
   * Marks the add new item dialog as visible.
   */
   showAddNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: true,
    });
    this.setState(newState);
  }

  /**
   * Marks the loading dialog for adding a new item as visible.
   */
   showLoadingNewItemDialog() {
    const newState = Object.assign({}, this.state, {
      dialogAddNewItem: false,
      dialogLoadingNewItem: true,
    });
    this.setState(newState);
  }

  render() {
    /* Set the buttons list for the editor controls */
    const upperEditorButtonsList = [
      {
        id: 'add-new-item-button',
        onClick: this.showAddNewItemDialog,
        title: 'Add New Item',
        tooltip: 'Add a new item to your document.',
        type: 'button',
      },
    ];
    /* Set the CSS styling for the span element to hold the value of the item to be added */
    const hiddenSpanStyling = 'ajc-display-none';
    return (
      <React.Fragment>
        <HorizontalButtonList alignment="left" additionalUpperSpacing={this.props.additionalSpacingAboveControls} colour={this.props.colour}
          buttonList={upperEditorButtonsList} labelText="Click the button below to add new items to your document:" />      
        <span id="add-new-item-user-value" className={hiddenSpanStyling} />
  
        {/* Add new item dialog */}
        <AddNewItemDialog colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour} isDisplayed={this.state.dialogAddNewItem}
          handleClickClose={this.hideAddNewItemDialog} handleClickCancel={this.hideAddNewItemDialog} handleClickConfirmAddItem={this.handleClickConfirmAddItem} />
        
        {/* Loading new item dialog */}
        <LoadingNewItemDialog colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour} isDisplayed={this.state.dialogLoadingNewItem} />
      </React.Fragment>
    );
  }
}
ControlsEditorUpper.propTypes = {
  /** The functionality to be carried out to add a new item to the editor. */
  addEditorItem: PropTypes.func.isRequired,
  /** The colour / theme set to the document editor buttons and all relevant items in the preview page. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour for the content area of any dialogs rendered in the editor. By default this is set to white. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** The time allowance between a state change and a re-render occurring. */
  reRenderAllowance: PropTypes.number,
  /** Use additional spacing above the upper buttons. */
  additionalSpacingAboveControls: PropTypes.bool,
};
ControlsEditorUpper.defaultProps = {
  colour: 'grey',
  dialogContentAreaColour: 'white',
  reRenderAllowance: 100,
  additionalSpacingAboveControls: false,
};
export default ControlsEditorUpper;
