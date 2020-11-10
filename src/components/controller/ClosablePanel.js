import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import chevRight from '../../css/icons/chevRight24dp.svg';

function ClosablePanel(props) {
    const [ isOpen, setIsOpen ] = useState(props.open);
    const [ rendered, setRendered ] = useState(false);
    const panelBody = useRef(null);

    const panelHeader = isOpen ? 'panelHeader headerOpen' : 'panelHeader headerClosed';
    const chev = isOpen ? 'chevOpen' : 'chevClosed';
    const maxHeight = rendered && isOpen ? `${panelBody.current.scrollHeight}px` : '0';

    useEffect(() => {
        setRendered(true);
    }, []);

    function togglePanel() {
        setIsOpen(!isOpen);
    }

    return (
        <div className='containerPanel'>
            <button className={panelHeader} onClick={togglePanel} >
                <h2> { props.title } </h2>
                <img className={chev} src={chevRight} alt='Chevron'/>
            </button>
            <div ref={panelBody} className='panelBody' style={{ maxHeight }}>
                <div className='panelSeperator' />
                <div className='panelContent'>
                    { props.children }
                </div>
            </div>
        </div>
    );
}

ClosablePanel.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

export { ClosablePanel };
