import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuContainerAndItems from './DropdownMenuContainerAndItems';
import SmallDownArrowIcon from '../../icons/SmallDownArrowIcon';
import '../../../css/common.css';
import '../../../css/menu.css';

class MenuItemDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    /* Bind all relevant functions to the component */
    this.handleMenuBarItemKeyPress = this.handleMenuBarItemKeyPress.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }

  /**
   * Handles key press events on the dropdown menu bar item
   * @param {Event} event 
   */
  handleMenuBarItemKeyPress(event) {
    if (event.key === 'Enter'){
      const menuBarItemContent = document.querySelector(`div[id="${this.props.id}"] > div[class*="ajc-menu-item-content"]`);
      menuBarItemContent.click();
    }
  }

  /**
   * Hides the dropdown menu from the UI
   * @param {Event}
   */
  hideDropdownMenu(event) {
    event.preventDefault();
    if (event.target.classList.contains('ajc-menu-item-content') && event.target.getAttribute('data-expanded') === 'true') {
      /* Clicks on expanded dropdown menu items are registered twice (which closes and then re-opens the dropdown menu again) so ensure only one click is registered */
      event.stopPropagation();
    }
    if (event.target.getAttribute('id') !== `${this.props.id}--content-parent`) {
      /* If the user has clicked any item other than a dropdown menu item then collapse the dropdown menu */
      const newState = Object.assign({}, this.state, {
        isExpanded: false
      });
      this.setState(newState, () => {
        document.removeEventListener('click', this.hideDropdownMenu, { capture: true });
      });
    }
    /* If a dropdown menu item has been clicked then ensure the click event takes place - event.preventDefault() will have otherwise prevented this */
    if (event.target.getAttribute('id') && event.target.getAttribute('id').includes('--dropdown-menu-item-')) {
      event.target.click();
    }
    /* If a single standalone menu item has been clicked then ensure the click event takes place - event.preventDefault() will have otherwise prevented this */
    if (event.target.classList && event.target.classList.length === 4 && event.target.classList[1] === 'ajc-menu-item-content'
      && event.target.classList[2] === 'ajc-font-menu') {
        event.target.click();
        document.activeElement.blur();
    }
  }

  /**
   * Displays the dropdown menu in the UI and adds a click listener to auto-hide the menu again
   * @param {Event} event 
   */
  showDropdownMenu(event) {
    event.preventDefault();
    const newState = Object.assign({}, this.state, {
      isExpanded: true
    });
    this.setState(newState, () => {
      document.addEventListener('click', this.hideDropdownMenu, { capture: true });
    });
  }

  render() {
    /* Set the styling for the component */
    const rootStyling = 'ajc-flex-row ajc-justify-left ajc-menu-item';
    let menuItemStyling = 'ajc-flex-row ajc-menu-item-content ajc-font-menu ajc-text-white';
    if (this.props.colour === 'red') {
      menuItemStyling += ' ajc-menu-item-red';
    } else {
      menuItemStyling += ' ajc-menu-item-grey';
    }
    /* Set the menu item component to be displayed */
    let onClickFunctionality;
    if (this.state.isExpanded === true) {
      onClickFunctionality = this.hideDropdownMenu;
    } else {
      onClickFunctionality = this.showDropdownMenu;
    }
    return (
      <div id={`${this.props.id}`} className={rootStyling}>
        <div className={menuItemStyling} onClick={onClickFunctionality} onKeyPress={this.handleMenuBarItemKeyPress} data-expanded={`${this.state.isExpanded}`} tabIndex={0}>
          &nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;
          <SmallDownArrowIcon colour="white" />
          &nbsp;&nbsp;
        </div>
        <DropdownMenuContainerAndItems id={`${this.props.id}--content-parent`} colour={this.props.colour} parentId={this.props.id} isDisplayed={this.state.isExpanded} dropdownMenuItemsList={this.props.dropdownMenuItemsList} />
      </div>
    );
  }
}
MenuItemDropdown.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The hover colour for the dropdown menu element. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The title for the dropdown menu being displayed. */
  title: PropTypes.string.isRequired,
  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item */
  dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
};
MenuItemDropdown.defaultProps = {
  colour: 'grey'
};
export default MenuItemDropdown;
