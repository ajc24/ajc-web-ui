import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';

/**
 * The TextInput component allows you to render a text input component in your web application.
 */
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   characterLimitStatus: '',
    //   exceededCharacterLimits: false,
    // };
    // this.clearExistingTextEntry = this.clearExistingTextEntry.bind(this);
    // this.setCharacterLimitTextContent = this.setCharacterLimitTextContent.bind(this);
    // this.setTextEntry = this.setTextEntry.bind(this);
  }

  // componentDidMount() {
  //   this.clearExistingTextEntry();
  //   this.setTextEntry(this.props.value);
  //   this.setCharacterLimitTextContent();
  // }

  /**
   * Clears all existing text entry from the text input component
   */
  // clearExistingTextEntry() {
  //   const textInputElement = document.getElementById(`${this.props.id}-text-input`);
  //   textInputElement.value = '';
  // }

  /**
   * Sets the character limit text content
   */
  // setCharacterLimitTextContent() {
  //   const textInputElement = document.getElementById(`${this.props.id}-text-input`);
  //   const charactersRemaining = this.props.characterLimit - textInputElement.value.length;
  //   let newState;
  //   if (charactersRemaining < 0) {
  //     newState = Object.assign({}, this.state, {
  //       exceededCharacterLimits: true,
  //       characterLimitStatus: `You have exceeded the character limit by ${charactersRemaining * -1} character(s)`,
  //     });
  //   } else {
  //     newState = Object.assign({}, this.state, {
  //       exceededCharacterLimits: false,
  //       characterLimitStatus: `Characters remaining: ${charactersRemaining}`,
  //     });
  //   }
  //   this.setState(newState);
  // }

  /**
   * Sets the text content value of the text input component
   * @param {string} textValue 
   */
  // setTextEntry(textValue) {
  //   const textInputElement = document.getElementById(`${this.props.id}-text-input`);
  //   if (textValue !== undefined) {
  //     textInputElement.value = textValue;
  //   } else {
  //     textInputElement.value = '';
  //   }
  // }

  render() {
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-background-transparent ajc-spacing-bottom-small ajc-text-black ajc-font-default';
    // let labelStyling = 'ajc-row ajc-flex-justify-left ajc-label ajc-spacing-bottom-small ajc-spacing-bottom-reduced';
    // if (this.props.additionalUpperSpacing === true) {
    //   labelStyling += ' ajc-spacing-top-large';
    // }
    // const textInputStyling = 'ajc-text-input ajc-font-default';
    // let characterLimitStyling = 'ajc-text-input-character-limit';
    // if (this.props.characterLimit > 0 && this.state.exceededCharacterLimits === false) {
    //   characterLimitStyling += ' ajc-text-black';
    // } else if (this.props.characterLimit > 0 && this.state.exceededCharacterLimits === true) {
    //   characterLimitStyling += ' ajc-text-red';
    // }
    return (
      <div id={`${this.props.id}-text-input-root`} className={rootStyling}>
        Text Input Component
      </div>
    );
  }
}
TextInput.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Adds additional upper spacing of 30px to the label. By default this spacing is not added to the component. */
  additionalUpperSpacing: PropTypes.bool,
  /** The label text content for the text input component. */
  labelText: PropTypes.string,
  /** The character limit for the text input component. */
  characterLimit: PropTypes.number,
  /** The value text content to be set to the text input component. */
  value: PropTypes.string,
};
TextInput.defaultProps = {
  additionalUpperSpacing: false,
  labelText: 'Text Input Label Text:',
  characterLimit: 0,
  value: undefined,
};
export default TextInput;
