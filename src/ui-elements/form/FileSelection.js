import React from 'react';
import PropTypes from 'prop-types';
import FormItemLabel from './supporting-elements/FormItemLabel';
import ParagraphText from '../page/ParagraphText';
// import HorizontalButtonList from '../../../../ajc-web-ui/src/ui-elements/form/HorizontalButtonList';
// import ParagraphTextItalics from '../page/ParagraphTextItalics';
import '../../css/common.css';
// const fs = require('fs');
// import image from '../../../../../Images/Cobra-Speccy3.png';

class FileSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: undefined,
      isImageLoading: false,
      isLoading: true,
    };
    this.setStateImageLoading = this.setStateImageLoading.bind(this);
  }

  async componentDidMount() {
    // if (this.props.imagePath !== undefined) {
    //   // Mark the component state as image-loading
    //   await this.setStateImageLoading();
    //   // Load the image
    //   // Render the image
    // }
  }

  /**
   * Sets the state of the component to wait for an image to load
   */
  async setStateImageLoading() {
    // const { image } = await import('../../../../../Images/Cobra-Speccy3.png');
    // NOT WORKING const image = await import(`${this.props.imagePath}`);
    // const { image } = await import(`C:/Images/${this.props.imagePath}`);
    // // const { image } = await import('C:/Images/Cobra-Speccy3.png');
    // const newState = Object.assign({}, this.state, {
    //   imagePath: image,
    //   isImageLoading: true,
    //   isLoading: false,
    // });
    // this.setState(newState);
  }

  render() {
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-background-transparent ajc-black-text ajc-font-default';
    const fileInputStyling = 'ajc-display-none';
    let elementDisplay;
    if (this.state.isLoading === true) {
      elementDisplay = <ParagraphText>Loading. Please wait.</ParagraphText>;
    } else if (this.state.isImageLoading === true) {
      elementDisplay = <ParagraphText>Loading your image now. Please wait.</ParagraphText>;
    }
    return (
      <div id={`${this.props.id}-file-selection-root`} className={rootStyling}>
        <FormItemLabel id={`${this.props.id}-file`} labelText={this.props.labelText} additionalUpperSpacing={this.props.additionalUpperSpacing} isDialogFormItem={false} />
        {elementDisplay}
        <img id={`${this.props.id}-image`} className={undefined} src={this.state.imagePath} role="presentation" onLoad={undefined} />
        <input id={`${this.props.id}-file`} name={`${this.props.id}-file`} type="file" className={fileInputStyling} onChange={undefined}></input>
      </div>
    );
  }
}
FileSelection.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The background colour for the buttons used by the file selection tool. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The list of acceptable file types for the component. */
  validFileTypes: PropTypes.arrayOf(PropTypes.string),
  /** The functionality to be executed when an invalid file type is detected. */
  onInvalidFileType: PropTypes.func,
  /** The label text content for the component. */
  labelText: PropTypes.string.isRequired,
  /** Switch for adding more spacing above the label. Use this to separate the label from other items above it. No additional spacing is added by default. */
  additionalUpperSpacing: PropTypes.bool,
  /** The path to a previously uploaded image file, which when set with a valid file path renders this component in the file selected state. */
  imagePath: PropTypes.string,
};
FileSelection.defaultProps = {
  additionalUpperSpacing: false,
  colour: 'grey',
  imagePath: undefined,
  onInvalidFileType: undefined,
  validFileTypes: ['bmp', 'svg', 'jpg', 'jpeg', 'png'],
  imagePath: undefined,
};
export default FileSelection;
