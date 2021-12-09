import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/page.css';

/**
 * The ParagraphText component allows you to render text content in a paragraph in your web application UI.
 */
class ParagraphText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let contentStyling = 'ajc-flex-row ajc-background-transparent ajc-page-content-text ajc-spacing-bottom-small ajc-text-black ajc-font-default';
    if (this.props.alignment === 'right') {
      contentStyling += ' ajc-flex-justify-right';
    } else if (this.props.alignment === 'center') {
      contentStyling += ' ajc-flex-justify-center';
    } else {
      contentStyling += ' ajc-flex-justify-left';
    }
    let paragraphTextContent;
    if (this.props.style === 'bold') {
      paragraphTextContent = <b>{this.props.children}</b>;
    } else if (this.props.style === 'italics') {
      paragraphTextContent = <i>{this.props.children}</i>;
    } else {
      paragraphTextContent = this.props.children; 
    }
    return (
      <p className={contentStyling}>
        {paragraphTextContent}
      </p>
    );
  }
}
ParagraphText.propTypes = {
  /** The alignment for the text content: left aligned (default), center aligned or right aligned. */
  alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  /** The text content to be rendered within the paragraph. */
  children: PropTypes.node.isRequired,
  /** Determines whether the text is to be displayed as normal paragraph text (default), in bold or in italics. */
  style: PropTypes.oneOf([ 'default', 'bold', 'italics' ]),
};
ParagraphText.defaultProps = {
  alignment: 'left',
  style: 'default',
};
export default ParagraphText;
