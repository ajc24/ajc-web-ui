import React from 'react';
import PropTypes from 'prop-types';
import ParagraphHeading from '../page/ParagraphHeading';
import '../../css/button.css';
import '../../css/common.css';

/**
 * The HorizontalButtonList component allows you to render any number of buttons including a single button, all aligned horizontally with left, centered or right alignment.
 */
class HorizontalButtonList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* Create the styling for the button container element */
    let rootButtonStyling = 'ajc-flex-row ajc-spacing-bottom-small ajc-background-transparent ajc-width-hd-inner';
    if (this.props.alignment === 'center') {
      rootButtonStyling += ' ajc-flex-justify-center';
    } else if (this.props.alignment === 'right') {
      rootButtonStyling += ' ajc-flex-justify-right';
    } else {
      rootButtonStyling += ' ajc-flex-justify-left';
    }
    if (this.props.labelText !== undefined) {
      rootButtonStyling += ' ajc-spacing-top-reduced';
    }
    /* Create the styling for each of the buttons in the list */
    let generalButtonStyling = 'ajc-button ajc-font-default';
    let rightmostButtonStyling = 'ajc-button ajc-font-default';
    if (this.props.colour === 'red') {
      generalButtonStyling += ' ajc-button-red';
      rightmostButtonStyling += ' ajc-button-red';
    } else {
      generalButtonStyling += ' ajc-button-grey';
      rightmostButtonStyling += ' ajc-button-grey';
    }
    if (this.props.buttonList.length > 1) {
      generalButtonStyling += ' ajc-spacing-right-small';
    }
    return (
      <React.Fragment>
        {
          this.props.labelText &&
            <ParagraphHeading additionalUpperSpacing={this.props.additionalUpperSpacing} alignment={this.props.alignment}>
              {this.props.labelText}
            </ParagraphHeading>
        }
        <div className={rootButtonStyling}>
          {
            this.props.buttonList.map((button, index) => {
              if (this.props.buttonList.length > 1 && index === this.props.buttonList.length - 1) {
                /* Render the rightmost button in the list */
                return <button id={button.id} key={`${button.id}-${index}`} className={rightmostButtonStyling} type={button.type} onClick={button.onClick} title={button.tooltip}>
                  {button.title}
                </button>
              }
              /* Render all other buttons in the list */
              return <button id={button.id} key={`${button.id}-${index}`} className={generalButtonStyling} type={button.type} onClick={button.onClick} title={button.tooltip}>
                {button.title}
              </button>
            })
          }
        </div>
      </React.Fragment>
    );
  }
}
HorizontalButtonList.propTypes = {
  /** Sets the upper spacing above the buttons list (or label if it is rendered) to 30px. By default the upper spacing is set to a lower value of 15px. */
  additionalUpperSpacing: PropTypes.bool,
  /** The horizontal alignment for the buttons list: left aligned (default), center aligned or right aligned. */
  alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  /** The background colour for each of the buttons rendered. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The data for all buttons to be rendered in the list */
  buttonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    type: PropTypes.oneOf([ 'button', 'submit' ]).isRequired
  })).isRequired,
  /** The label text to be rendered for this buttons list */
  labelText: PropTypes.string,
};
HorizontalButtonList.defaultProps = {
  additionalUpperSpacing: false,
  alignment: 'left',
  colour: 'grey',
  labelText: undefined,
};
export default HorizontalButtonList;
