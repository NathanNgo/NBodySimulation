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
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

export default draw;
