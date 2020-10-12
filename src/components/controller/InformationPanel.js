import React from 'react';
import PropTypes from 'prop-types';

function InformationPanel(props) {
    return (
      <div className='containerInformationPanel'>
          { props.children }
      </div>
    );
}

InformationPanel.propTypes = {
    children: PropTypes.node.isRequired
}

export { InformationPanel };
