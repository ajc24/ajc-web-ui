import React from 'react';
import PropTypes from 'prop-types';
import MenuItemDropdown from './supporting-elements/MenuItemDropdown';
import MenuItemSingle from './supporting-elements/MenuItemSingle';
import '../../css/common.css';
import '../../css/menu.css';

/**
 * Menu bar component for rendering navigation links for your web application.
 */
class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let rootStyling = 'ajc-flex-row ajc-flex-justify-center ajc-menu ajc-width-4k';
    /* Assign the background colour styling to the menu root component */
    if (this.props.colour === 'red') {
      rootStyling += ' ajc-background-red';
    } else {
      rootStyling += ' ajc-background-grey-2';
    }
    const contentFullHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
    const contentHdStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-hd';
    const contentStyling = 'ajc-flex-row ajc-flex-justify-center ajc-width-hd-with-padding ajc-menu-content';
		return (
      <div role="navigation" id={`${this.props.id}-root`} className={rootStyling}>
        <div className={contentFullHdStyling}>
          <div className={contentHdStyling}>
            <div id={this.props.id} className={contentStyling}>
              {
                this.props.menuItemsList.map((item, index) => {
                  if (item.dropdownMenuItemsList === undefined) {
                    return <MenuItemSingle id={`menu-item-${index}`} key={`menu-item-${index}`} route={item.route} title={item.title} colour={this.props.colour} />
                  }
                  return <MenuItemDropdown id={`dropdown-menu-${index}`} key={`dropdown-menu-${index}`} colour={this.props.colour} title={item.title} dropdownMenuItemsList={item.dropdownMenuItemsList} />
                })
              }
            </div> 
          </div>
        </div>
      </div>
		);
	}
}
Menu.propTypes = {
  /** The background colour for the menu bar */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The custom id for the menu bar being displayed */
  id: PropTypes.string.isRequired,
  /** The menu data for all menu items and defines the routes and titles for each item */
  menuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string.isRequired,
    dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string,
    })),
  })).isRequired,
};
Menu.defaultProps = {
	colour: 'grey'
};
export default Menu;
