import React from 'react';
import CanvasPhys from './CanvasPhys';

function ViewScreen(props) {
    return (
        <div className='containerViewScreen'>
            <CanvasPhys
                vals={props.vals}
                onRender={props.onRender}
                engineSettings={props.engineSettings}
            />
        </div>
    );
}

export { ViewScreen };
