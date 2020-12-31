import React from 'react';

function Panel(props) {
    return (
        <div className='containerPanel'>
            <div className='panelTitle'>
                <h3> {props.title} </h3>
            </div>
            <div className='panelBody'>
                <div className='panelSeperator' />
                <div className='panelContent'>
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default Panel;
