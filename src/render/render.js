import { Circle } from '../physics/rigid';

function draw(ctx, vals) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (const val of vals) {
        if (val instanceof Circle) {
            drawCircle(ctx, val);
        }
    }
}

function drawCircle(ctx, circle) {
    const [ x, y ] = circle.coordinates;
    ctx.beginPath();
    ctx.arc(x, y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

export default draw;
