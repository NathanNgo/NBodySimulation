import React from 'react';
import PropTypes from 'prop-types';

function Tab(props) {
    const buttonName = props.active ? 'tabButton tabActive' : 'tabButton tabInactive';

    function handleClick(event) {
        props.onClick(props.label);
    }

    return (
        <button className={buttonName} onClick={handleClick}>
            <h2> {props.label} </h2>
        </button>
    );
}

Tab.propTypes = {
    label: PropTypes.string.isRequired
}

export default Tab;
