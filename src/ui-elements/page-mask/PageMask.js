import React from 'react';
import PropTypes from 'prop-types';
import PageMaskCloseButton from './PageMaskCloseButton';
import '../../css/common.css';

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
    const contentStyling = 'ajc-flex-column ajc-flex-justify-start ajc-spacing-top-large ajc-spacing-bottom-large ajc-width-hd-with-padding ajc-text-white ajc-font-default';
    return (
      <React.Fragment>
        {
          this.props.isDisplayed === true &&
            <React.Fragment>
              <div id={`page-mask-${this.props.id}-root`} className={rootStyling}>
                <div className={contentFullHdStyling}>
                  <div className={contentHdStyling}>
                    <div id={`page-mask-${this.props.id}-content`} className={contentStyling}>
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
              <PageMaskCloseButton id={`page-mask-${this.props.id}-close-button`} colour={this.props.colour} onClose={this.props.onClose} />
            </React.Fragment>
        }
      </React.Fragment>
    );
	}
}
PageMask.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The child components to be rendered within the page mask. */
  children: PropTypes.node,
  /** The colour set to the close button of the mask. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** Switch for whether the page mask is displayed (true) or not (false). By default this is false. */
  isDisplayed: PropTypes.bool,
  /** Functionality to be executed on clicking the close button of the page mask. If you do not want this button to be rendered, leave this value as undefined. */
  onClose: PropTypes.func,
};
PageMask.defaultProps = {
  children: undefined,
  colour: 'grey',
  isDisplayed: false,
  onClose: undefined,
};
export default PageMask;
