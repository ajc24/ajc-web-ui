import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/dialog.css';

/**
 * The DialogContentArea component acts as the main content area for a dialog.
 */
class DialogContentArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-left ajc-dialog-content ajc-width-dialog-content';
    if (this.props.colour === 'white') {
      rootStyling += ' ajc-background-white';
    } else if (this.props.colour === 'yellow') {
      rootStyling += ' ajc-background-yellow';
    } else {
      rootStyling += ' ajc-background-grey-1';
    }
    const contentStyling = 'ajc-flex-column ajc-flex-justify-left ajc-text-black ajc-font-default';
		return (
			<div id={`${this.props.id}-root`} className={rootStyling}>
        <div id={this.props.id} className={contentStyling}>
          {this.props.children}
        </div>
			</div>
		);
	}
}
DialogContentArea.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The background colour for the dialog content area. By default this is set to white. */
  colour: PropTypes.oneOf([ 'grey', 'white', 'yellow' ]),
  /** The content to be displayed within the content area. */
  children: PropTypes.node,
};
DialogContentArea.defaultProps = {
	colour: 'white'
};
export default DialogContentArea;
