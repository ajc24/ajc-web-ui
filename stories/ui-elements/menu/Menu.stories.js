import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from '../../../src';

export default {
	component: Menu,
	title: 'Menu Bars/Menu',
};

const testMenuItemsList = [
  {
    route: '/test-item-1',
    title: 'Link 1',
  },
  {
    title: 'Dropdown 1',
    dropdownMenuItemsList: [
      {
        route: '/test-dropdown-item-1-1',
        title: 'Dropdown Link 1.1',
      },
      {
        route: '/test-dropdown-item-1-2',
        title: 'Dropdown Link 1.2',
      },
    ],
  },
  {
    route: '/test-item-2',
    title: 'Link 2',
  },
  {
    title: 'Dropdown 2',
    dropdownMenuItemsList: [
      {
        route: '/test-dropdown-item-2-1',
        title: 'Dropdown Link 2.1',
      },
      {
        route: '/test-dropdown-item-2-2',
        title: 'Dropdown Link 2.2',
      },
    ],
  },
];

const Template = args => {
	return <React.Fragment>
    <BrowserRouter>
		  <Menu {...args} />
    </BrowserRouter>
	</React.Fragment>;
}

export const Default = Template.bind({});
Default.args = {
	id: 'test-menu',
  menuItemsList: testMenuItemsList
};

export const RedMenu = Template.bind({});
RedMenu.args = {
  colour: 'red',
	id: 'test-menu',
  menuItemsList: testMenuItemsList
};
