import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button
            className={props.className}
            type='button'
            onClick={props.onClick}
        >
            Start
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
}

export { Button };
