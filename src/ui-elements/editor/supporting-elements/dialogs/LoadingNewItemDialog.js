import React from 'react';
import PropTypes from 'prop-types';
import DialogWithPageMask from '../../../dialog/DialogWithPageMask';

/**
 * The LoadingNewItemDialog component renders a dialog for when the application is in the process of adding a new item to the editor
 */
class LoadingNewItemDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DialogWithPageMask id="loading-new-item-dialog-id" dialogContentAreaColour={this.props.dialogContentAreaColour} colour={this.props.colour}
        dialogTitle="Please Wait... Adding Your New Item" buttonsList={[]} isDisplayed={this.props.isDisplayed} onClose={undefined}>
      </DialogWithPageMask>
    );
  }
}
LoadingNewItemDialog.propTypes = {
  /** The colour / theme set to the dialogs panels. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The background colour of the dialogs content area. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** Determines whether the dialog is displayed or not. */
  isDisplayed: PropTypes.bool,
};
LoadingNewItemDialog.defaultProps = {
  colour: 'grey',
  dialogContentAreaColour: 'white',
  isDisplayed: false,
};
export default LoadingNewItemDialog;
