import React, { useRef, useEffect } from 'react';

function Canvas(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const { width, height } = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio;
        // Set the canvas attributes of width and height to match the CSS ones.
        // This resizes the canvas element.
        canvas.width = width*ratio;
        canvas.height = height*ratio;
        // Provide a scaling transformation to map CSS pixels to physical pixels.
        // This scales the canvas pixels (to the css pixels).
        context.scale(ratio, ratio);

        draw(context);
    })

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
}

function draw(context) {
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(50, 100, 20, 0, 2*Math.PI);
    context.fill();
}

export default Canvas;
