import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallRightArrowIcon from '../../icons/SmallRightArrowIcon';
import '../../../css/common.css';
import '../../../css/menu.css';

class DropdownMenuContainerAndItems extends React.Component {
  constructor(props) {
    super(props);
    this.setDropdownItemsListXPosition = this.setDropdownItemsListXPosition.bind(this);
    this.setDropdownItemsListYPosition = this.setDropdownItemsListYPosition.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setDropdownItemsListYPosition();
      this.setDropdownItemsListXPosition();
      window.addEventListener('resize', this.setDropdownItemsListXPosition, { capture: true });
    }, 10);
  }

  componentWillUnmount() {
    /* Remove the dynamically added resize event when the component is unmounted */
    window.removeEventListener('resize', this.setDropdownItemsListXPosition, { capture: true });
  }

  /**
   * Sets the X position of the dropdown menu items list container
   * The X position is always re-adjustable since screen resizes will affect the X position of the container
   */
  setDropdownItemsListXPosition() {
    /* Find the boundaries of the main menu item for this component */
    const mainMenuItemElement = document.querySelector(`div[id="${this.props.parentId}"]`);
    const mainMenuItemBoundary = mainMenuItemElement.getBoundingClientRect();
    /* Find the dropdown items list root element and set the width */
    const itemsListRootElement = document.querySelector(`div[id="${this.props.id}"]`);
    const itemsListRootBoundary = itemsListRootElement.getBoundingClientRect();
    if (itemsListRootBoundary.width < mainMenuItemBoundary.width) {
      itemsListRootElement.style.width = `${mainMenuItemBoundary.width}px`;
    } else {
      itemsListRootElement.style.width = `${itemsListRootBoundary.width}px`;
    }
    itemsListRootElement.style.minWidth = itemsListRootElement.style.width;
    /* Determine if the leftmost position of the dropdown menu items container needs to be adjusted to fit the screen size */
    let leftmostPosition = mainMenuItemBoundary.left;
    if (mainMenuItemBoundary.left + itemsListRootBoundary.width > window.innerWidth) {
      leftmostPosition = window.innerWidth - itemsListRootBoundary.width;
    }
    itemsListRootElement.style.left = `${leftmostPosition}px`;
  }

  /**
   * Sets the Y position of the dropdown menu items list container
   * This only needs to be set once since screen resizes will only mainly affect the X axis positioning of the container
   */
  setDropdownItemsListYPosition() {
    /* Ensure the window is scrolled to the top before marking the position of the dropdown items list */
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    /* Find the boundaries of the main menu item for this component */
    const mainMenuItemElement = document.querySelector(`div[id="${this.props.parentId}"]`);
    const mainMenuItemBottomPos = mainMenuItemElement.getBoundingClientRect().bottom;
    /* Find the dropdown items list root element and set the top position */
    const itemsListRootElement = document.querySelector(`div[id="${this.props.id}"]`);
    itemsListRootElement.style.top = `${mainMenuItemBottomPos}px`;
  }

  render() {
    let rootStyling = 'ajc-flex-column ajc-dropdown-menu';
    let dropdownMenuItemStyling = 'ajc-flex-row ajc-dropdown-menu-item ajc-font-menu';
    if (this.props.colour === 'red') {
      rootStyling += ' ajc-background-red';
      dropdownMenuItemStyling += ' ajc-menu-item-red';
    } else {
      rootStyling += ' ajc-background-grey-2';
      dropdownMenuItemStyling += ' ajc-menu-item-grey';
    }
    if (this.props.isDisplayed === true) {
      rootStyling += ' ajc-dropdown-menu-visible ajc-visibility-visible';
    } else {
      rootStyling += ' ajc-dropdown-menu-hidden ajc-visibility-hidden';
    }
    return (
      <div id={this.props.id} className={rootStyling}>
        {
          this.props.dropdownMenuItemsList.map((menuItem, index) => {
            return <Link to={menuItem.route} key={`${this.props.id}--key-menu-item-${index}`} className={dropdownMenuItemStyling} id={`${this.props.id}--dropdown-menu-item-${index}`} tabIndex={0}>
              &nbsp;&nbsp;{menuItem.title}&nbsp;&nbsp;
              <SmallRightArrowIcon colour="white" />
              &nbsp;&nbsp;
            </Link>
          })
        }
      </div>
    );
  }
}
DropdownMenuContainerAndItems.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The background colour for the container. By default this is set to grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The unique identifier of this components parent DropdownMenu component. */
  parentId: PropTypes.string.isRequired,
  /** Specifies whether the dropdown menu container is visible or hidden in the UI. */
  isDisplayed: PropTypes.bool.isRequired,
  /** The dropdown menu data which defines the list of dropdown menu items and defines the route and title for each individual item. */
  dropdownMenuItemsList: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
};
DropdownMenuContainerAndItems.defaultProps = {
  colour: 'grey'
};
export default DropdownMenuContainerAndItems;
