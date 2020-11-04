import { Circle, Polygon } from './rigid';
import { vec2 } from 'gl-matrix';

function isColliding(obj1, obj2) {
    const isCircle1 = obj1 instanceof Circle ? true : false;
    const isCircle2 = obj2 instanceof Circle ? true : false;

    if (isCircle1 && isCircle2) {
        circleCircleCollision(obj1, obj2);
    } else if (!isCircle1 && ! isCircle2) {
        polyPolyCollision();
    } else if (obj1 instanceof Circle) {
        circlePolyCollision(obj1, obj2);
    } else {
        circlePolyCollision(obj2, obj1);
    }

}

function circleCircleCollision(obj1, obj2) {
    const distSqr = (obj1.x - obj2.x)**2 + (obj1.y - obj2.y)**2;
    // Does <= have to be a float such as 0.0? Check later.
    return distSqr - (obj1.radius + obj2.radius)**2 <= 0;
}

function circlePolyCollision(obj1, obj2) {
    // Deal with polygon-circle.
    // Vertices for polygon.
    return null;
}

function polyPolyCollision(obj1, obj2) {
    // Polygon-polygon.
    //const axes1 = getAxes(obj1);
    //const axes2 = getAxes(obj2);
    return null;
}

/**
 * @desc Get the projectionn axes. These are the vectors normal to the polynomial edges.
 * @param {Polygon} obj - A Polygon to retrieve the axes of.
 * @returns A list of vectors that have not be normalized to unit vectors.
 */
function getAxes(obj) {
    const axes = [];
    let prev = obj.vertices[obj.vertices.length - 1];

    for (const vert of obj.vertices) {
        // 0 is x component, 1 is y.
        const edge = new vec2.fromValues(vert[0] - prev[0], vert[1] - prev[1])
        // Swap x and y components of edge and negate one.
        axes.push(new vec2.fromValues(-edge[1], edge[0]));
        prev = vert;
    }

    return axes;
}

export default isColliding;
