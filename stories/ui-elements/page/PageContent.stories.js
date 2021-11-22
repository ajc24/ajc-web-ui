import React from 'react';
import { PageContent } from '../../../src';

export default {
	component: PageContent,
	title: 'Page Components/Page Content',
};

const DefaultTemplate = args => {
	return <React.Fragment>
    <PageContent {...args}>
      <p>The page content component is designed to act as a container for the main content for each individual page of your web application.</p>
      <p>This is an example of the default page content component which is rendered with a white background.</p>
    </PageContent>
  </React.Fragment>;
}

const GreyTemplate = () => {
	return <React.Fragment>
    <PageContent title="Grey Page Content" colour="grey">
      <p>The page content component is designed to act as a container for the main content for each individual page of your web application.</p>
      <p>This is an example of a page content component with a grey background.</p>
    </PageContent>
  </React.Fragment>;
}

const TransparentTemplate = () => {
	return <React.Fragment>
    <PageContent title="Transparent Page Content" colour="transparent">
      <p>The page content component is designed to act as a container for the main content for each individual page of your web application.</p>
      <p>This is an example of a page content component with a transparent background.</p>
    </PageContent>
  </React.Fragment>;
}

const YellowTemplate = () => {
	return <React.Fragment>
    <PageContent title="Transparent Page Content" colour="yellow">
      <p>The page content component is designed to act as a container for the main content for each individual page of your web application.</p>
      <p>This is an example of a page content component with a yellow background.</p>
    </PageContent>
  </React.Fragment>;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Default Page Content'
};
export const WithGreyBackground = GreyTemplate.bind({});
WithGreyBackground.args = {
  title: 'Grey Page Content'
};
export const withTransparentBackground = TransparentTemplate.bind({});
withTransparentBackground.args = {
  title: 'Transparent Page Content'
};
export const withYellowBackground = YellowTemplate.bind({});
withYellowBackground.args = {
  title: 'Yellow Page Content'
};
