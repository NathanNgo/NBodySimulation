import { useRef, useEffect } from 'react';
import draw from '../render/render.js';
import Engine from '../physics/engine.js';

// A re-render of the canvas will cause it to start simulating with the new initial states.
// A re-render of the canvas will cause it to start simulating with the new initial parameters.
function useCanvasPhys(vals) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        const physEng = new Engine();

        function step(timestamp) {
            draw(ctx, vals);
            /* eslint-disable-next-line */ /* We want to reset on re-render.*/
            vals = physEng.update(vals);
            animId = window.requestAnimationFrame(step);
        }

        if (resize(canvas)) {
            console.log('Resized canvas');
        } else {
            console.log('Did not resize canvas');
        }

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
        return true;
    }

    return false;
}

export default useCanvasPhys;
