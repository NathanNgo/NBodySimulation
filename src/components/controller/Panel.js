import React from 'react';
import PropTypes from 'prop-types';

function Panel(props) {
    return (
      <div className='containerPanel'>
          { props.children }
      </div>
    );
}

Panel.propTypes = {
    children: PropTypes.node.isRequired
}

export { Panel };
