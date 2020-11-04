import { Circle } from '../physics/rigid';

function draw(ctx, vals) {
    for (const val of vals) {
        if (val instanceof Circle) {
            drawCircle(ctx, val);
        }
    }
}

function drawCircle(ctx, circle) {
    const circleRnd = circle.forEach((attr) => Math.floor(attr));
    ctx.beginPath();
    ctx.arc(circleRnd.x, circleRnd.y, circleRnd.radius, 0, 2 * Math.PI);
    ctx.fill();
}

export default draw;
