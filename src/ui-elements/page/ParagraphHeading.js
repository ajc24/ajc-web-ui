import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/page.css';

/**
 * The ParagraphHeading component allows you to render a heading for any paragraphs rendered in your web application UI.
 */
class ParagraphHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rootStyling = 'ajc-flex-row ajc-spacing-bottom-small ajc-width-hd-inner ajc-text-black ajc-font-default';
    if (this.props.alignment === 'right') {
      rootStyling += ' ajc-flex-justify-right';
    } else if (this.props.alignment === 'center') {
      rootStyling += ' ajc-flex-justify-center';
    } else {
      rootStyling += ' ajc-flex-justify-left';
    }
    if (this.props.additionalUpperSpacing === true) {
      rootStyling += ' ajc-spacing-top-large';
    }
    const headingStyling = 'ajc-font-paragraph-heading';
    return (
      <div className={rootStyling}>
        <h2 className={headingStyling}>{this.props.children}</h2>
      </div>
    );
  }
}
ParagraphHeading.propTypes = {
  /** Sets the upper spacing above the heading to 30px. By default the upper spacing is set to a lower value of 15px. */
  additionalUpperSpacing: PropTypes.bool,
  /** The alignment for the heading: left aligned (default), center aligned or right aligned. */
  alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  /** The text content to be rendered for the heading. */
  children: PropTypes.node.isRequired,
};
ParagraphHeading.defaultProps = {
  additionalUpperSpacing: true,
  alignment: 'left',
};
export default ParagraphHeading;
