import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../../css/common.css';
import '../../../css/menu.css';

/**
 * The MenuItemSingle component acts as a standard menu item for the MenuBar component
 */
class MenuItemSingle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootStyling = 'ajc-flex-row ajc-justify-left';
    let contentStyling = 'ajc-flex-row ajc-menu-item';
    if (this.props.colour === 'red') {
      contentStyling += ' ajc-menu-item-red';
    } else {
      contentStyling += ' ajc-menu-item-grey';
    }
    const linkStyling = 'ajc-flex-row ajc-menu-item-content ajc-font-menu ajc-text-white';
    return (
      <div id={`${this.props.id}-root`} className={rootStyling}>
        <div id={this.props.id} className={contentStyling}>
          <Link to={this.props.route} className={linkStyling} tabIndex={0}>
            &nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;
          </Link>
        </div>
      </div>
    );
  }
}
MenuItemSingle.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The background colour for the menu item. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The route to navigate to on clicking on the menu item. */
  route: PropTypes.string.isRequired,
  /** The title for the menu item being displayed. */
  title: PropTypes.string.isRequired,
};
MenuItemSingle.defaultProps = {
  colour: 'grey'
};
export default MenuItemSingle;
