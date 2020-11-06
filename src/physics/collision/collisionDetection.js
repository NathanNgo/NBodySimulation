import { Circle, Polygon } from '../rigid';
import { vec2 } from 'gl-matrix';

/**
 * Determines if 2 RigidBody objects are colliding.
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
 * Determines if an object is colliding with the screens boundary.
 * @param {RigidBody} obj - The RigidBody we are testing for collision.
 * @param {Object} bound - An object containing the boundaries.
 * @returns {number} An integer representing the boundary of collision. -1 if no collision.
 */
function isCollidingBoundary(obj, bound) {
    const isCircle = obj instanceof Circle ? true : false;
    
    if (isCircle) {
        return circleBoundaryCollision(obj, bound);
    }
}

function circleCircleCollision(obj1, obj2) {
    let distSqr = 0;

    for (let i = 0; i < obj1.coordinates.length; i++) {
        distSqr += (obj1.coordinates[i] - obj2.coordinates[i])**2;
    }

    return distSqr <= (obj1.radius + obj2.radius)**2;
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

function circleBoundaryCollision(obj, bounds) {
    if (obj.coordinates[0] - obj.radius <= bounds.xMin) {
        return 0;
    } else if (obj.coordinates[0] + obj.radius >= bounds.xMax) {
        return 1;
    } else if (obj.coordinates[1] - obj.radius <= bounds.yMin) {
        return 2;
    } else if (obj.coordinates[1] + obj.radius >= bounds.yMax) {
        return 3;
    }
    return -1;
}

function polyBoundaryCollision(obj1, bound) {
    
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

export { isColliding, isCollidingBoundary };
