import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './input/Button';
import chevDown from '../../css/icons/chevDown24dp.svg';
import chevRight from '../../css/icons/chevRight24dp.svg';

function ClosablePanel(props) {
    const [ isOpen, setIsOpen ] = useState(true);
    const iconURL = isOpen ? chevDown : chevRight;

    if (isOpen) {
        return (
            <div className='containerPanel'>
                <div className='panelHeaderOpen'>
                    <h2> { props.title } </h2>
                    <Button
                        className='chevronButton'
                        iconURL={iconURL}
                        onClick={ () => setIsOpen(!isOpen) }
                    />
                </div>
                <div className='panelSeperator' />
                <div className='panelBody'>
                    { props.children }
                </div>
            </div>
        );
    }

    return (
        <div className='containerPanel panelHeaderClosed'>
            <h2> { props.title } </h2>
            <Button
                className='chevronButton'
                iconURL={iconURL}
                onClick={ () => setIsOpen(!isOpen) }
            />
        </div>
    );
}

ClosablePanel.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

export { ClosablePanel };
