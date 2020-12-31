import React from 'react';
import useCanvasPhys from '../../hooks/useCanvasPhys';

function CanvasPhys(props) {
    const canvasRef = useCanvasPhys(props.vals, props.onRender, props.engineSettings);

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
}

export default CanvasPhys;
