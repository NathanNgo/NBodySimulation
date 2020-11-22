import { Circle, Polygon } from '../rigid';
import { vec2 } from 'gl-matrix';

/**
 * Determines the type of the 2 objects and checks if they're colliding.
 * @param {RigidBody} obj1 - The first RigidBody.
 * @param {RigidBody} obj2 - The second RigidBody.
 * @returns {boolean} Value representing if a collision occured.
 */
function isColliding(obj1, obj2) {
    const isCircle1 = obj1 instanceof Circle ? true : false;
    const isCircle2 = obj2 instanceof Circle ? true : false;

    if (isCircle1 && isCircle2) {
        return circleCircleCollision(obj1, obj2);
    } else if (!isCircle1 && ! isCircle2) {
        return polyPolyCollision();
    } else if (obj1 instanceof Circle) {
        return circlePolyCollision(obj1, obj2);
    } else {
        return circlePolyCollision(obj2, obj1);
    }
}

/**
 * Handles the case where 2 Circle objects might be colliding.
 * @params {Circle} obj1 - The first Circle object.
 * @params {Circle} obj2 - The second Circle object.
 * @returns {boolean} True if colliding, false otherwise.
 */
function circleCircleCollision(obj1, obj2) {
    let distSqr = 0;

    for (let i = 0; i < obj1.coords.length; i++) {
        distSqr += (obj1.coords[i] - obj2.coords[i])**2;
    }

    return distSqr <= (obj1.radius + obj2.radius)**2;
}

function circlePolyCollision(obj1, obj2) {
    // TODO: Deal with polygon-circle.
    // Vertices for polygon.
    return null;
}

function polyPolyCollision(obj1, obj2) {
    // TODO: Polygon-polygon.
    //const axes1 = getAxes(obj1);
    //const axes2 = getAxes(obj2);
    return null;
}

/**
 * Determines the type of an object and checks if it's colliding with a boundary.
 * @param {RigidBody} obj - The RigidBody we are testing for collision.
 * @param {Object} bounds - An object containing the boundaries.
 * @returns {number} An integer representing the boundary of collision. -1 if no collision.
 */
function isCollidingBoundary(obj, bounds) {
    if (obj instanceof Circle) {
        return circleBoundaryCollision(obj, bounds);
    }
}

/**
 * Handles the case where a Circle might be colliding with a boundary.
 * @param {Circle} obj - A circle object.
 * @param {Object} bounds - An object containing the boundary line values.
 * @returns {number[]} An array containing all boundaries the circle collided with.
 */
// TODO: Rework the function to accept a SINGLE boundary rather than all of them.
// Return true if the circle collides with that single boundary. Return false otherwise.
function circleBoundaryCollision(obj, bounds, isMin) {
    const sides = [];

    if (obj.coords[0] - obj.radius <= bounds.xMin) {
        sides.push(0);
    }
    if (obj.coords[0] + obj.radius >= bounds.xMax) {
        sides.push(1);
    }
    if (obj.coords[1] - obj.radius <= bounds.yMin) {
        sides.push(2);
    }
    if (obj.coords[1] + obj.radius >= bounds.yMax) {
        sides.push(3);
    }

    return sides;
}

function polyBoundaryCollision(obj1, bound) {
    // TODO: Polygon-boundary.
}

/**
 * @desc Get the projection axes. These are the vectors normal to the polynomial edges.
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

export { isColliding, isCollidingBoundary };
