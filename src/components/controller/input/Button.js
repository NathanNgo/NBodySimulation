import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button
            className={`button ${props.className}`}
            type='button'
            onClick={props.onClick}
        >
            <div className='buttonValues'>
                <img src ={props.iconURL} />
                { props.children }
            </div>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string.isRequired,
    iconURL: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export { Button };
