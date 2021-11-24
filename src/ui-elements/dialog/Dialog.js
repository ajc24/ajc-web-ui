import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from './DialogTitle';
import DialogContentArea from './DialogContentArea';
import DialogFooter from './DialogFooter';
import '../../css/common.css';
import '../../css/dialog.css';

/**
 * The Dialog component allows you to render a dialog conveying immediate important information to your users. 
 */
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-width-dialog-parent';
    return (
      <div id={`${this.props.id}-root`} className={rootStyling}>
        <DialogTitle id={`${this.props.id}-title`} colour={this.props.colour}>
          {this.props.titleTextContent}
        </DialogTitle>
        <DialogContentArea id={`${this.props.id}-content-area`} colour={this.props.bgColour}>
          {this.props.children}
        </DialogContentArea>
        <DialogFooter id={`${this.props.id}-footer`} colour={this.props.colour} buttonsList={this.props.buttonsList} />
      </div>
    );
  }
}
Dialog.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The colour set to the background of the dialogs content area. By default this is set to white. */
  bgColour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** The content to be displayed within the dialogs content area. */
  children: PropTypes.node,
  /** The colour set to the background of the title and footer sections of the dialog. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The text content to be rendered as the title for the dialog. */
  titleTextContent: PropTypes.string.isRequired,
  /** The buttons list data for all buttons to be rendered within the dialogs footer. */
  buttonsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ 'button', 'submit' ]).isRequired
  })),
};
Dialog.defaultProps = {
  bgColour: 'white',
  children: undefined,
  colour: 'grey',
  buttonsList: [],
};
export default Dialog;
