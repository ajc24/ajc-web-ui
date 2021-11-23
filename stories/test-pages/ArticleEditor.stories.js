import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  DocumentEditor,
  Header,
  Menu,
  PageContent,
  SmallFooter
} from '../../src';
import siteMenuItemsListTemplate from '../data/mock-data/mock-menu';

export default {
	component: DocumentEditor,
	title: 'Test Pages/Article Editor',
};

const Template = args => {
	return <React.Fragment>
    <Header id="ajc-header-id" backgroundColour="grey" topBorder="red">
      Header content
    </Header>
    <BrowserRouter>
      <Menu id="ajc-menu-id" menuItemsList={siteMenuItemsListTemplate} colour="red" />
    </BrowserRouter>
    <PageContent colour="grey" title="Article Editor Test Page">
      <DocumentEditor {...args}>
      </DocumentEditor>
    </PageContent>
    <SmallFooter colour="red">
      Footer content
    </SmallFooter>
  </React.Fragment>
}

export const Default = Template.bind({});
Default.args = {};
