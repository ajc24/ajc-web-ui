import React from 'react';
import PropTypes from 'prop-types';
import { FileSelection, TextInput } from '../../../../../src';

/**
 * The ScreenshotWithCaption form item component for use with the document editor.
 */
class ScreenshotWithCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={`screenshot-with-caption-${this.props.item.index}-container`}>
        {/* Render the file selection form item */}
        <FileSelection id={`screenshot-with-caption-${this.props.item.index}`} colour={this.props.colour} validFileTypes={this.props.validFileTypes} 
          onInvalidFileType={undefined} labelText={`Add / Edit Screenshot ${this.props.item.itemIndex}`} additionalUpperSpacing={this.props.additionalUpperSpacing}
          imagePath={this.props.item.fileName}/>
        
        {/* Render the text input form item */}
        <TextInput id={`screenshot-with-caption-${this.props.item.index}`} characterLimit={this.props.characterLimit}
          labelText="Please enter the caption text for this screenshot:" />
      </div>
    );
  }
}
ScreenshotWithCaption.propTypes = {
  /** The document editor item which defines this form item. */
  item: PropTypes.shape({
    caption: PropTypes.string,
    characterLimit: PropTypes.number,
    fileName: PropTypes.string,
    imageData: PropTypes.any,
    index: PropTypes.number,
    isDeleted: PropTypes.bool,
    itemIndex: PropTypes.number,
    itemType: PropTypes.oneOf(['screenshot-with-caption']),
    reviewIndex: PropTypes.number,
  }).isRequired,
  /** The colour / theme set to the form item. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** Use additional spacing above the form item. */
  additionalUpperSpacing: PropTypes.bool,
  /** The list of acceptable file types for the file input form item. */
  validFileTypes: PropTypes.arrayOf(PropTypes.string),
  /** The character limit for the text input form item. */
  characterLimit: PropTypes.number,
};
ScreenshotWithCaption.defaultProps = {
  colour: 'grey',
  additionalUpperSpacing: true,
  characterLimit: 0,
  validFileTypes: ['bmp', 'svg', 'jpg', 'jpeg', 'png'],
};
export default ScreenshotWithCaption;
