import React from 'react';
import PropTypes from 'prop-types';
import FormItemLabel from './supporting-elements/FormItemLabel';
import '../../css/common.css';
import '../../css/form-item.css';

/**
 * The DropdownMenu component allows you to render a dropdown menu either as a standalone or inside a dialog.
 */
class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-background-transparent ajc-spacing-bottom-small ajc-text-black ajc-font-default';
    const selectStyling = 'ajc-select ajc-font-default';
    return (
      <div className={rootStyling}>
        <FormItemLabel id={this.props.id} labelText={this.props.labelText} additionalUpperSpacing={this.props.additionalUpperSpacing}
          isDialogFormItem={this.props.isDialogFormItem} />
        <select id={this.props.id} name={this.props.id} className={selectStyling} defaultValue={this.props.optionsList[0].value}>
          {
            this.props.optionsList.map((option, index) => {
              return <option key={`${option.value}-${index}`} value={option.value} title={option.textContent}>{option.textContent}</option>
            })
          }
        </select>
      </div>
    );
  }
}
DropdownMenu.propTypes = {
  /** The components unique identifier. */
  id: PropTypes.string.isRequired,
  /** The label text content for the component. */
  labelText: PropTypes.string.isRequired,
  /** The list of option items to be rendered in the dropdown menu. */
  optionsList: PropTypes.arrayOf(PropTypes.shape({
    textContent: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  /** Switch for adding more spacing above the label. Use this to separate the label from other items above it. No additional spacing is added by default. */
  additionalUpperSpacing: PropTypes.bool,
  /** Switch for stating whether this form item appears in a dialog or not. By default this is set to false. */
  isDialogFormItem: PropTypes.bool,
};
DropdownMenu.defaultProps = {
  additionalUpperSpacing: false,
  isDialogFormItem: false,
};
export default DropdownMenu;
