import React from 'react';
import PropTypes from 'prop-types';
import '../../styling/ui-css.css';

/**
 * The PageMask component renders a mask over all other elements on the page.
 */
class PageMask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Set the styling for the page mask component */
    const rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-page-mask ajc-width-4k';
    const contentFullHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
    const contentHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-hd';
    const contentStyling = 'ajc-flex-column ajc-flex-justify-center ajc-width-hd-with-padding ajc-text-white ajc-font-default';
    /* Set the styling for the close button of the page mask */
    let closeButtonStyling = 'ajc-flex-row ajc-button ajc-page-mask-close-button ajc-text-white ajc-font-default';
    if (this.props.colour === 'red') {
      closeButtonStyling += ' ajc-button-red';
    } else {
      closeButtonStyling += ' ajc-button-grey';
    }
    return (
      <React.Fragment>
        {
          this.props.isDisplayed === true &&
            <React.Fragment>
              <div id={`${this.props.id}-root`} className={rootStyling}>
                <div className={contentFullHdStyling}>
                  <div className={contentHdStyling}>
                    <div id={this.props.id} className={contentStyling}>
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
              {
                this.props.onClose !== undefined &&
                  <button id={`${this.props.id}-close-button`} className={closeButtonStyling} onClick={this.props.onClose} title="Click to close">
                    &nbsp;X&nbsp;
                  </button>
              }
            </React.Fragment>
        }
      </React.Fragment>
    );
	}
}
PageMask.propTypes = {
  /** The unique identifier for the page mask component */
  id: PropTypes.string.isRequired,
  /** The child components to be rendered within the component. */
  children: PropTypes.node,
  /** The background colour set to the close button of the mask. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** Switch for whether the page mask is to be displayed or not */
  isDisplayed: PropTypes.bool,
  /** Functionality to be carried out when the close button of the page mask is clicked. */
  onClose: PropTypes.func,
};
PageMask.defaultProps = {
  children: undefined,
  colour: 'grey',
  isDisplayed: false,
  onClose: undefined,
};
export default PageMask;
