import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './input/Button';
import expandMore from '../../css/icons/expand_more-24px.svg';
import expandLess from '../../css/icons/expand_less-24px.svg';

function Panel(props) {
    const [ isOpen, setIsOpen ] = useState(true);

    if (isOpen) {
        return (
            <div className='containerPanel'>
                <div className='panelHeader'>
                    <h2 className='subTitle'> { props.title } </h2>
                    <Button
                        className='chevronButton'
                        iconURL={ isOpen ? expandLess : expandMore }
                        onClick={ () => setIsOpen(!isOpen) }
                    />
                </div>
                { props.children }
            </div>
        );
    }

    return (
        <div className='containerPanel panelHeader'>
            <h2 className='subTitle'> { props.title } </h2>
            <Button
                className='chevronButton'
                iconURL={ isOpen ? expandLess : expandMore }
                onClick={ () => setIsOpen(!isOpen) }
            />
        </div>
    );
}

Panel.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

export { Panel };
