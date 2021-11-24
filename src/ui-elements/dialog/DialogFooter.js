import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/dialog.css';
import '../../css/menu.css';

/**
 * The DialogFooter component acts as the footer display for a dialog.
 */
class DialogFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-dialog-footer ajc-width-dialog ajc-font-default';
    if (this.props.colour === 'red') {
      rootStyling += ' ajc-background-red';
    } else {
      rootStyling += ' ajc-background-grey-2';
    }
    let buttonStyling = 'ajc-dialog-footer-button ajc-text-white';
    if (this.props.colour === 'red') {
      buttonStyling += ' ajc-menu-item-red';
    } else {
      buttonStyling += ' ajc-menu-item-grey';
    }
		return (
			<div id={this.props.id} className={rootStyling}>
        {
          this.props.buttonsList.map((button, index) => {
            return <button id={button.id} key={`${button.id}-${index}`} className={buttonStyling} type={button.type} onClick={button.onClick}>{button.title}</button>
          })
        }
			</div>
		);
  }
}
DialogFooter.propTypes = {
  /** The unique identifier for the dialog footer component */
  id: PropTypes.string.isRequired,
  /** The background colour for the dialog footer section */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The buttons list data for all buttons to be rendered in the footer */
  buttonsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ 'button', 'submit' ]).isRequired
  })),
};
DialogFooter.defaultProps = {
  buttonsList: [],
	colour: 'grey'
};
export default DialogFooter;
