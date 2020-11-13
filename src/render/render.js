import { Circle } from '../physics/rigid';

/**
 * Determines the type of an object and draws it to a Canvas element.
 * @params {Object} ctx - The context object for the Canvas element.
 * @params {RigidBody[]} vals - An array of RigidBody objects.
 */
function draw(ctx, vals) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (const val of vals) {
        if (val instanceof Circle) {
            drawCircle(ctx, val);
        }
    }
}

/**
 * Draws a Circle object onto the canvas element.
 * @params {Object} ctx - The context object for the canvas element.
 * @params {Circle} circle - The Circle object we want to draw.
 */
function drawCircle(ctx, circle) {
    const [ x, y ] = circle.coords;
    ctx.beginPath();
    ctx.arc(x, y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
}

export default draw;
