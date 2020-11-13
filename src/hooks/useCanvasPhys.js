import { useRef, useEffect } from 'react';
import draw from '../render/render.js';
import Engine from '../physics/engine.js';

/**
 * A hook that sets up a Canvas element to use the Physics engine.
 * @params {RigidBody[]} vals - An array of RigidBody objects.
 * @params {Callback} onRender - Callback function used to set Width and Height after Canvas element has rendered.
 * @params {Object} settings - Global parameters the engine should apply.
 * @returns {ref} A React ref that is attached to the Canvas element.
 */
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

        const { width, height } = resize(canvas);
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

/**
 * Correctly scales the Canvas element so that it works with the CSS scaling.
 * @params {Object} canvas - The Canvas object representing the Canvas element.
 * @returns {Object} An objects containing the width and height.
 */
function resize(canvas) {
    const ctx = canvas.getContext('2d');
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
