import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/common.css';
import '../../../css/form-item.css';

/**
 * The FormItemLabel component acts as the label for all form items.
 * This label supports both standalone form items and those rendered inside a dialog.
 */
class FormItemLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labelStyling = 'ajc-row ajc-flex-justify-left ajc-spacing-bottom-small ajc-spacing-bottom-reduced';
    if (this.props.isDialogFormItem === true) {
      labelStyling += ' ajc-label-dialog';
    } else {
      labelStyling += ' ajc-label-standalone';
    }
    if (this.props.additionalUpperSpacing === true) {
      labelStyling += ' ajc-spacing-top-large';
    }
    return (
      <React.Fragment>
        <label htmlFor={this.props.id} className={labelStyling}>{this.props.labelText}</label>
      </React.Fragment>
    );
  }
}
FormItemLabel.propTypes = {
  /** The unique identifier for the form item that this label is linked to. */
  id: PropTypes.string.isRequired,
  /** The label text content for the text input component. */
  labelText: PropTypes.string.isRequired,
  /** Switch for adding more spacing above the label. Use this to separate the label from other items above it. */
  additionalUpperSpacing: PropTypes.bool,
  /** Switch for stating whether this form item appears in a dialog or not. By default this is set to false. */
  isDialogFormItem: PropTypes.bool,
};
FormItemLabel.defaultProps = {
  additionalUpperSpacing: false,
  isDialogFormItem: false,
};
export default FormItemLabel;
