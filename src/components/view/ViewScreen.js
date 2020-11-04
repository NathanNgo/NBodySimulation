import React from 'react';
import CanvasPhys from './CanvasPhys';

function ViewScreen(props) {
    return (
        <div className='containerViewScreen'>
            <CanvasPhys initVals={props.initVals}>
            </CanvasPhys>
        </div>
    );
}

export { ViewScreen };
