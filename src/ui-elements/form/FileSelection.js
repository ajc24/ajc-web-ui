import React from 'react';
import PropTypes from 'prop-types';
// import HorizontalButtonList from '../../../../ajc-web-ui/src/ui-elements/form/HorizontalButtonList';
// import ParagraphTextItalics from '../page/ParagraphTextItalics';
import '../../css/page.css';

class FileSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootStyling = 'ajc-flex-column ajc-flex-justify-left ajc-background-transparent ajc-black-text ajc-font-default';
    return (
      <div id={`${this.props.id}-file-selection-root`} className={rootStyling}>
        File Selection Component
      </div>
    );
  }
}
FileSelection.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The background colour for the buttons used by the file selection tool. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
};
FileSelection.defaultProps = {
  colour: 'grey',
};
export default FileSelection;
