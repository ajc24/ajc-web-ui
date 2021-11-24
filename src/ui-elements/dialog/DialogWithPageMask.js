import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import PageMask from '../page-mask/PageMask';
import '../../css/common.css';

/**
 * The DialogWithPageMask component allows you to render a page mask with a dialog. 
 */
class DialogWithPageMask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pageMaskContentStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-hd-inner';
    return (
      <PageMask id={this.props.id} colour={this.props.colour} isDisplayed={this.props.isDisplayed} onClose={this.props.onClose}>
        <div className={pageMaskContentStyling}>
          <Dialog id={this.props.id} colour={this.props.colour} bgColour={this.props.dialogContentAreaColour} titleTextContent={this.props.dialogTitle}
            buttonsList={this.props.buttonsList}>
              {this.props.children}
          </Dialog>
        </div>
      </PageMask>
    );
  }
}
DialogWithPageMask.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The colour set to the background of the dialogs content area. By default this is set to white. */
  dialogContentAreaColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** The content to be displayed within the dialogs content area. */
  children: PropTypes.node,
  /** The colour set to the close button of the page mask as well as the title and footer sections of the dialog. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The text content to be rendered as the dialogs title. */
  dialogTitle: PropTypes.string.isRequired,
  /** The buttons list data for all buttons to be rendered in the dialogs footer. */
  buttonsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ 'button', 'submit' ]).isRequired
  })),
  /** Switch for whether this component is to be displayed or not. By default it is set to not be displayed. */
  isDisplayed: PropTypes.bool,
  /** Functionality to be executed if the close button of the page mask is clicked. By default this is undefined and no close button is displayed. */
  onClose: PropTypes.func,
};
DialogWithPageMask.defaultProps = {
  dialogContentAreaColour: 'white',
  children: undefined,
  colour: 'grey',
  buttonsList: [],
  isDisplayed: false,
  onClose: undefined,
};
export default DialogWithPageMask;
