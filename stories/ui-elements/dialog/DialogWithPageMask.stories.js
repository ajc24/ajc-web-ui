import React from 'react';
import { DialogWithPageMask } from '../../../src';

export default {
	component: DialogWithPageMask,
	title: 'Dialog Components/Dialog with Page Mask',
};

class DialogWithPageMaskTest extends React.Component {
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
    const twoButtonsList = [
      {
        id: 'save-button',
        onClick: () => { alert('Clicked Dialog Save Button'); },
        title: 'Save',
        type: 'button',
      },
      {
        id: 'cancel-button',
        onClick: this.hidePageMask,
        title: 'Cancel',
        type: 'button',
      }
    ];
    let propsButtonsList = [];
    if (this.props.buttonsList) {
      propsButtonsList = twoButtonsList;
    } 
    return (
      <DialogWithPageMask id={this.props.id} dialogTitle={this.props.dialogTitle} colour={this.props.colour} dialogContentAreaColour={this.props.dialogContentAreaColour}
        buttonsList={propsButtonsList} isDisplayed={this.state.showPageMask} onClose={this.hidePageMask}>
        {this.props.children}
      </DialogWithPageMask>
    );
  }
}

const DefaultTemplate = () => {
	return <div role="region">
    <DialogWithPageMaskTest id="default-page-mask-dialog" dialogTitle="Default Dialog with Page Mask" colour="grey" dialogContentAreaColour="white"
      buttonsList={undefined}>
      This is an example of a dialog with page mask in a default state.
    </DialogWithPageMaskTest>
  </div>
}
export const Default = DefaultTemplate.bind({});

const RedTemplate = () => {
	return <div role="region">
    <DialogWithPageMaskTest id="red-theme-page-mask-dialog" dialogTitle="Dialog with Page Mask Example" colour="red" dialogContentAreaColour="grey"
      buttonsList={[]}>
      This is an example of a dialog with page mask with a red theme and a grey background. Save and Cancel buttons are also displayed as part of the footer.
    </DialogWithPageMaskTest>
  </div>
}
export const RedThemeGreyBackgroundWithButtons = RedTemplate.bind({});

const GreyTemplate = () => {
	return <div role="region">
    <DialogWithPageMaskTest id="grey-theme-page-mask-dialog" dialogTitle="Dialog with Page Mask Example" colour="grey" dialogContentAreaColour="yellow"
      buttonsList={[]}>
      This is an example of a dialog with page mask with a grey theme and a yellow background. Save and Cancel buttons are also displayed as part of the footer.
    </DialogWithPageMaskTest>
  </div>
}
export const GreyThemeYellowBackgroundWithButtons = GreyTemplate.bind({});
