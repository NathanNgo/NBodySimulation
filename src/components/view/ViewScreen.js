import React from 'react';
import CanvasPhys from './CanvasPhys';

function ViewScreen(props) {
    return (
        <div className='containerViewScreen'>
            <CanvasPhys vals={props.initVals}>
            </CanvasPhys>
        </div>
    );
}

export { ViewScreen };
