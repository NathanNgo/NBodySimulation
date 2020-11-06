import React from 'react';
import CanvasPhys from './CanvasPhys';

function ViewScreen(props) {
    return (
        <div className='containerViewScreen'>
            <CanvasPhys
                vals={props.initVals}
                onResize={props.onResize}
                settings={props.settings}
            />
        </div>
    );
}

export { ViewScreen };
