import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/dialog.css';

/**
 * The DialogTitle component acts as the title text content display for a dialog.
 */
class DialogTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-left ajc-dialog-title ajc-width-dialog ajc-text-white ajc-font-default';
    if (this.props.colour === 'red') {
      rootStyling += ' ajc-background-red';
    } else {
      rootStyling += ' ajc-background-grey-2';
    }
    const headingStyling = 'ajc-font-dialog-title';
		return (
			<div id={this.props.id} className={rootStyling}>
        <h1 className={headingStyling}>{this.props.children}</h1>
			</div>
		);
	}
}
DialogTitle.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The background colour for the dialog title section. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The title text content of the dialog title. */
  children: PropTypes.string.isRequired,
};
DialogTitle.defaultProps = {
	colour: 'grey'
};
export default DialogTitle;
