import React from 'react';
import { PageMask } from '../../../src';

export default {
	component: PageMask,
	title: 'Page Mask Components/Page Mask',
};

class PageMaskTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPageMask: true,
    };
    this.hidePageMask = this.hidePageMask.bind(this);
  }
  
  hidePageMask(event) {
    event.preventDefault();
    const newState = Object.assign({}, this.state, {
      showPageMask: false
    });
    this.setState(newState);
  }

  render() {
    return (
      <PageMask id={this.props.id} colour={this.props.colour} isDisplayed={this.state.showPageMask} onClose={this.hidePageMask}>
        <p>The PageMask component will mask all UI elements beneath it.</p>
        <p>You may render any content you wish inside the page mask.</p>
        <p>All content will be displayed vertically as seen here. Horizontal alignment will depend on your rendered component.</p>
        <p>When you are finished, click the close button in the top right hand corner to hide the mask again.</p>
      </PageMask>
    );
  }
}

const DefaultTemplate = () => {
	return <div role="region">
    <PageMaskTest id="default-colour" />
  </div>
}
export const DefaultColour = DefaultTemplate.bind({});

const RedTemplate = () => {
	return <div role="region">
    <PageMaskTest id="red-colour" colour="red" />
  </div>
}
export const RedColour = RedTemplate.bind({});
