import React from 'react';
import useCanvasPhys from '../../hooks/useCanvasPhys';

function CanvasPhys(props) {
    const canvasRef = useCanvasPhys(props.vals);

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
}

export default CanvasPhys;
