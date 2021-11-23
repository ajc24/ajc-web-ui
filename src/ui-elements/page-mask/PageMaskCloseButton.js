import React from 'react';
import PropTypes from 'prop-types';
import '../../css/button.css';
import '../../css/common.css';

/**
 * The PageMaskCloseButton component acts as a close button for a PageMask component. It can also be used with
 * any other component you require.
 */
class PageMaskCloseButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Set the styling for the close button */
    let closeButtonStyling = 'ajc-flex-row ajc-button ajc-button-page-mask-close ajc-text-white ajc-font-default';
    if (this.props.colour === 'red') {
      closeButtonStyling += ' ajc-button-red';
    } else {
      closeButtonStyling += ' ajc-button-grey';
    }
    return (
      <React.Fragment>
        {
          this.props.onClose !== undefined &&
            <button id={this.props.id} className={closeButtonStyling} onClick={this.props.onClose} title="Click to close">
              &nbsp;X&nbsp;
            </button>
        }
      </React.Fragment>
    );
	}
}
PageMaskCloseButton.propTypes = {
  /** The components unique identifier */
  id: PropTypes.string.isRequired,
  /** The background colour set to the button. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** Functionality to be carried out when the button is clicked. The button is only rendered if this functionality is set. By default this functionality is undefined. */
  onClose: PropTypes.func,
};
PageMaskCloseButton.defaultProps = {
  colour: 'grey',
  onClose: undefined,
};
export default PageMaskCloseButton;
