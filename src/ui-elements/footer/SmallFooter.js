import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/footer.css';

/**
 * The SmallFooter component acts as a container for footer-related information for each page in your web application.
 * This footer supports rendering a single line of text content within its boundaries.
 */
class SmallFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-footer-small ajc-width-4k';
    /* Assign the background colour of the root element */
    if (this.props.colour === 'red') {
      rootStyling += ' ajc-background-red';
    } else {
      rootStyling += ' ajc-background-grey-2';
    }
    const contentFullHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
    const contentHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-hd';
    const contentStyling = 'ajc-flex-row ajc-flex-justify-center ajc-footer-small-content ajc-width-hd-with-padding ajc-text-white ajc-font-default';
    return (
      <div role="contentinfo" className={rootStyling}>
        <div className={contentFullHdStyling}>
          <div className={contentHdStyling}>
            <div className={contentStyling}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
	}
}
SmallFooter.propTypes = {
  /** The background colour for the footer. By default it is rendered in grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The children components to be displayed within the footer. */
  children: PropTypes.node.isRequired,
};
SmallFooter.defaultProps = {
	colour: 'grey'
};
export default SmallFooter;
