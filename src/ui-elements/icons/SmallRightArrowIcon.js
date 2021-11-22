import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/icon.css';

/**
 * The small right arrow icon can be used to highlight smaller links or buttons in your application UI. This icon is developed from pure CSS.
 */
class SmallRightArrowIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootStyling = 'ajc-flex-row ajc-justify-left';
    let arrowIconStyling = 'ajc-flex-row ajc-small-right-arrow-icon';
    if (this.props.colour === 'white') {
      arrowIconStyling += ' ajc-border-colour-white';
    } else {
      arrowIconStyling += ' ajc-border-colour-black';
    }
    return (
      <div role="presentation" className={rootStyling}>
        <div className={arrowIconStyling}></div>
      </div>
    );
  }
}
SmallRightArrowIcon.propTypes = {
  /** The colour of the small icon. By default the icon is rendered in black. */
  colour: PropTypes.oneOf([ 'white', 'black' ]),
};
SmallRightArrowIcon.defaultProps = {
	colour: 'black'
};
export default SmallRightArrowIcon;
