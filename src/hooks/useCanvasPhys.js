import { useRef, useEffect } from 'react';
import draw from '../render/render.js';
import Engine from '../physics/engine.js';
import _ from 'lodash';

/**
 * A hook that sets up a Canvas element to use the Physics engine.
 * @params {RigidBody[]} initVals - An array of RigidBody objects.
 * @params {Callback} onRender - Callback function used to set Width and Height after Canvas element has rendered.
 * @params {Object} initSettings - Global parameters the engine should apply.
 * @returns {ref} A React ref that is attached to the Canvas element.
 */
function useCanvasPhys(initVals, onRender, initSettings) {
    const canvasRef = useRef(null);
    const vals = _.cloneDeep(initVals);
    const settings = _.cloneDeep(initSettings);
    let startTime = 0

    useEffect(() => {
        function step(timestamp) {
            timestamp *= 0.001;
            let timeDelta = timestamp - startTime;

            if (startTime === 0) {
                timeDelta = 0;
            }

            /* eslint-disable-next-line */ /* We want to reset on re-render.*/
            startTime = timestamp;

            /* eslint-disable-next-line */ /* We want to reset on re-render.*/
            physEng.update(vals, timeDelta);

            draw(ctx, vals);

            animId = window.requestAnimationFrame(step);
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;

        const { width, height } = resize(canvas);
        onRender(width, height);

        const bounds = [
            [ 0, canvas.width ], // X Bounds.
            [ 0, canvas.height ] // Y Bounds.
        ]

        const physEng = new Engine(bounds, settings, 2);

        animId = window.requestAnimationFrame(step);

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
