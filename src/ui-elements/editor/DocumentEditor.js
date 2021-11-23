import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';

/**
 * The DocumentEditor component allows a user to generate a written article which can then be rendered in your web application.
 */
class DocumentEditor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      <div>
        Document Editor Sample Text
      </div>
    );
	}
}
DocumentEditor.propTypes = {
  /** The background colour for the footer. By default it is rendered in grey. */
  colour: PropTypes.oneOf([ 'grey', 'red' ]),
  /** The children components to be displayed within the footer. */
  children: PropTypes.node.isRequired,
};
DocumentEditor.defaultProps = {
	colour: 'grey'
};
export default DocumentEditor;
