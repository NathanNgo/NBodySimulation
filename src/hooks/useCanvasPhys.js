import { useRef, useEffect } from 'react';
import draw from '../render/render.js';
import Engine from '../physics/engine.js';

// A re-render of the canvas will cause it to start simulating with the new initial states.
// A re-render of the canvas will cause it to start simulating with the new initial parameters.
function useCanvasPhys(vals, onRender, settings) {
    const canvasRef = useRef(null);

    useEffect(() => {
        function step(timestamp) {
            draw(ctx, vals);
            /* eslint-disable-next-line */ /* We want to reset on re-render.*/
            physEng.update(vals);
            animId = window.requestAnimationFrame(step);
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;

        const { width, height } = resize(canvas, ctx);
        onRender(width, height);

        const bounds = {
            xMin: 0,
            xMax: canvas.width,
            yMin: 0,
            yMax: canvas.height
        }
        const physEng = new Engine(bounds, settings);

        window.requestAnimationFrame(step);

        return () => {
            window.cancelAnimationFrame(animId);
        }
    });

    return canvasRef;
}

function resize(canvas, ctx) {
    const { width, height } = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio;

    if (canvas.width !== width*ratio || canvas.height !== height*ratio) {
        canvas.width = width*ratio;
        canvas.height = height*ratio;
        ctx.scale(ratio, ratio);
    }

    return { width: canvas.width, height: canvas.height };
}

export default useCanvasPhys;
