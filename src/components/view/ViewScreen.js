import React from 'react';
import CanvasPhys from './CanvasPhys';

function ViewScreen(props) {
    return (
        <div className='containerViewScreen'>
            <CanvasPhys
                vals={props.vals}
                onRender={props.onRender}
                settings={props.settings}
            />
        </div>
    );
}

export { ViewScreen };
