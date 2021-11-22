import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/header.css';

/**
 * Header section template component for a web page template.
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.imageData !== undefined) {
      const fullHdElement = document.querySelector(`div[id="${this.props.id}-root"] > div`);
      fullHdElement.style.backgroundImage = `url(${this.props.imageData})`;
    }
  }

  render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-4k';
    /* Assign the top border styling if required */
    if (this.props.topBorder === 'grey') {
      rootStyling += ' ajc-header-border-grey';
    } else if (this.props.topBorder === 'red') {
      rootStyling += ' ajc-header-border-red';
    }
    /* Assign the background colour styling */
    if (this.props.imageData === undefined) {
      if (this.props.backgroundColour === 'white') {
        rootStyling += ' ajc-background-white';
      } else if (this.props.backgroundColour === 'grey') {
        rootStyling += ' ajc-background-grey-1';
      } else if (this.props.backgroundColour === 'yellow') {
        rootStyling += ' ajc-background-yellow';
      } else {
        rootStyling += ' ajc-background-transparent';
      }
    } else {
      rootStyling += ' ajc-background-transparent';
    }
    const contentFullHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
    const contentHdStyling = 'ajc-flex-row ajc-flex-justify-left ajc-header-content ajc-width-hd';
    const contentStyling = 'ajc-flex-row ajc-flex-justify-left ajc-width-hd-with-padding ajc-text-black ajc-font-default';
    return (
      <div role="banner" id={`${this.props.id}-root`} className={rootStyling}>
        <div className={contentFullHdStyling}>
          <div className={contentHdStyling}>
            <div id={this.props.id} className={contentStyling}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The child components to be rendered within the component. By default no children elements are rendered. */
  children: PropTypes.node,
  /** The background colour of the header panel. By default the background is transparent. */
  backgroundColour: PropTypes.oneOf([ 'transparent', 'white', 'grey', 'yellow' ]),
  /** The border to appear at the top of the panel. By default no border is rendered. */
  topBorder: PropTypes.oneOf([ 'grey', 'red', 'none' ]),
  /** The image to be displayed as the header background. By default no image is rendered. */
  imageData: PropTypes.oneOfType([ PropTypes.node, PropTypes.string, PropTypes.object ]),
};
Header.defaultProps = {
  children: undefined,
  backgroundColour: 'transparent',
  topBorder: 'none',
  imageData: undefined,
};
export default Header;
