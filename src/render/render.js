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
    const circleRnd = circle.forEach((attr) => Math.floor(attr));
    ctx.beginPath();
    ctx.arc(circleRnd.x, circleRnd.y, circleRnd.radius, 0, 2 * Math.PI);
    ctx.fill();
}

export default draw;
