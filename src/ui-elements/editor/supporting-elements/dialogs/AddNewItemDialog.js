import React from 'react';
import PropTypes from 'prop-types';
import DialogWithPageMask from '../../../dialog/DialogWithPageMask';
// import DialogDropdownMenu from '../../../dialog/DialogDropdownMenu';
// import PageMaskDialog from '../../../../../../ajc-web-ui/src/ui-elements/dialog/DialogWithPageMask';

/**
 * The AddNewItemDialog component renders a dialog for when the user wishes to add a new item to their document
 */
class AddNewItemDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the buttons list for the generate preview dialog */
    // const dialogAddSectionButtonsList = [
    //   {
    //     id: 'confirm-add-section-button',
    //     onClick: this.props.onClickConfirm,
    //     title: 'Confirm and Add',
    //     tooltip: 'Add your chosen section to the document.',
    //     type: 'button',
    //   },
    //   {
    //     id: 'cancel-add-section-button',
    //     onClick: this.props.onClickCancel,
    //     title: 'Cancel and Exit',
    //     tooltip: 'Return to your document without adding any new sections.',
    //     type: 'button',
    //   }
    // ];
    /* Create the options list for the dialog dropdown menu */
    // const dialogDropdownMenuOptionsList = [
    //   {
    //     textContent: 'Paragraph',
    //     value: 'paragraph',
    //   },
    //   {
    //     textContent: 'Paragraph Heading',
    //     value: 'paragraph_heading',
    //   },
    //   {
    //     textContent: 'Screenshot With Caption Text',
    //     value: 'screenshot',
    //   },
    // ];
    return (
      <DialogWithPageMask id="add-new-item-dialog-id" dialogContentAreaColour={this.props.dialogContentAreaColour} colour={this.props.colour}
        dialogTitle="Add New Document Item" buttonsList={[]} isDisplayed={this.props.isDisplayed}
        onClose={this.props.handleClickClose}>
          <form id={this.props.id}>
            Hello World
            {/* <DialogDropdownMenu id="add-section-dialog-dropdown-menu-id" labelText="Please select a section type to be added to your document:"
              optionsList={dialogDropdownMenuOptionsList} /> */}
          </form>
      </DialogWithPageMask>
    );
  }
}
AddNewItemDialog.propTypes = {
  /** The form containers unique identifier. */
  id: PropTypes.string,
  /** The colour / theme set to the document editor buttons and all relevant items in the preview page. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour of the dialogs content area. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** Determines whether the dialog is displayed or not. */
  isDisplayed: PropTypes.bool,
  /** The click functionality for the dialogs cancel button. */
  handleClickCancel: PropTypes.func,
  /** The click functionality for the page masks close button. */
  handleClickClose: PropTypes.func,
  /** The click functionality for the dialogs confirm button. */
  handleClickConfirmAddItem: PropTypes.func,
};
AddNewItemDialog.defaultProps = {
  id: 'add-new-item-dialog-main-form-id',
  colour: 'grey',
  dialogContentAreaColour: 'white',
  isDisplayed: false,
  handleClickCancel: () => {},
  handleClickClose: undefined,
  handleClickConfirmAddItem: () => {},
};
export default AddNewItemDialog;
