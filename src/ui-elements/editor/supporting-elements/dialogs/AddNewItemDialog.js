import React from 'react';
import PropTypes from 'prop-types';
import DialogWithPageMask from '../../../dialog/DialogWithPageMask';
import DropdownMenu from '../../../form/DropdownMenu';

/**
 * The AddNewItemDialog component renders a dialog for when the user wishes to add a new item to their document
 */
class AddNewItemDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the buttons list for the dialog */
    const dialogButtonsList = [
      {
        id: 'confirm-add-new-item-button',
        onClick: this.props.handleClickConfirmAddItem,
        title: 'Confirm and Add',
        tooltip: 'Add your chosen item to the document.',
        type: 'button',
      },
      {
        id: 'cancel-add-new-item-button',
        onClick: this.props.handleClickCancel,
        title: 'Cancel and Exit',
        tooltip: 'Return to your document without adding any new items.',
        type: 'button',
      }
    ];
    /* Create the options list for the dialog dropdown menu */
    const dialogDropdownMenuOptionsList = [
    //   {
    //     textContent: 'Paragraph',
    //     value: 'paragraph',
    //   },
    //   {
    //     textContent: 'Paragraph Heading',
    //     value: 'paragraph_heading',
    //   },
      {
        textContent: 'Screenshot With Caption Text',
        value: 'screenshot-with-caption',
      },
    ];
    return (
      <DialogWithPageMask id="add-new-item-dialog-id" dialogContentAreaColour={this.props.dialogContentAreaColour} colour={this.props.colour}
        dialogTitle="Add New Document Item" buttonsList={dialogButtonsList} isDisplayed={this.props.isDisplayed}
        onClose={this.props.handleClickClose}>
          <DropdownMenu id="add-new-item-dropdown-menu-id" labelText="Please select an item to be added to your document:" optionsList={dialogDropdownMenuOptionsList} />
      </DialogWithPageMask>
    );
  }
}
AddNewItemDialog.propTypes = {
  /** The colour / theme set to the dialogs panels. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour of the dialogs content area. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** Determines whether the dialog is displayed or not. */
  isDisplayed: PropTypes.bool,
  /** The click functionality for the dialogs cancel button. */
  handleClickCancel: PropTypes.func.isRequired,
  /** The click functionality for the page masks close button. */
  handleClickClose: PropTypes.func,
  /** The click functionality for the dialogs confirm button. */
  handleClickConfirmAddItem: PropTypes.func.isRequired,
};
AddNewItemDialog.defaultProps = {
  colour: 'grey',
  dialogContentAreaColour: 'white',
  isDisplayed: false,
  handleClickClose: undefined,
};
export default AddNewItemDialog;
