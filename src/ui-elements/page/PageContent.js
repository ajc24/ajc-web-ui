import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/page.css';

/**
 * The PageContent template component acts as a container for the main content of each page in your web application.
 */
class PageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Set the title for the current webpage */
    document.title = this.props.title;

    /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */
    document.body.classList.add('ajc-width-body');
    document.activeElement.blur();
  }

  render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-page-content-panel ajc-spacing-top-small ajc-spacing-bottom-small ajc-width-4k';
    /* Assign the background colour of the root element */
    if (this.props.colour === 'grey') {
      rootStyling += ' ajc-background-grey-1';
    } else if (this.props.colour === 'white') {
      rootStyling += ' ajc-background-white';
    } else if (this.props.colour === 'yellow') {
      rootStyling += ' ajc-background-yellow';
    } else {
      rootStyling += ' ajc-background-transparent';
    }
    const skipNavStyling = 'ajc-visibility-hidden';
    const contentFullHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
    const contentHdStyling = 'ajc-flex-row ajc-flex-justify-left ajc-width-hd';
    const contentStyling = 'ajc-flex-column ajc-width-hd-with-padding ajc-text-black ajc-font-default';
    return (
      <div id="main-content" role="region" className={rootStyling} aria-label={this.props.title}>
        <a href="#main-content" className={skipNavStyling}>Skip to main content</a>
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
PageContent.propTypes = {
  /** The children components to be displayed as the content of the web page */
  children: PropTypes.node.isRequired,
  /** The background colour for the content panel. By default this is set to white. */
  colour: PropTypes.oneOf([ 'grey', 'white', 'transparent', 'yellow' ]),
  /** The title text content to be rendered in the browser tab. */
  title: PropTypes.string.isRequired,
};
PageContent.defaultProps = {
  colour: 'white'
};
export default PageContent;
