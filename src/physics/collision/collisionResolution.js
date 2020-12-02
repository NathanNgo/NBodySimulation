import { vec2 as v } from 'gl-matrix';
import { Circle } from '../rigid';

/**
 * Resolves a collision between 2 objects by first ensuring no overlap and then altering velocities.
 * @param {RigidBody} obj1 - The first object to resolve.
 * @param {RigidBody} obj2 - The second object to resolve.
 * @param {Object} settings - Global parameters the engine should apply.
 */
function resolveCollision(obj1, obj2, settings) {
    _resetPositions(obj1, obj2, settings);
    _getNewVelocities(obj1, obj2, settings);
}

/**
 * Determines the object types and then moves their positions such that they no longer overlap.
 * @param {RigidBody} obj1 - The first object to resolve.
 * @param {RigidBody} obj2 - The second object to resolve.
 * @param {Object} settings - Global parameters the engine should apply.
 */
function _resetPositions(obj1, obj2, settings) {
    // TODO: Separate the objects based on a ratio of mass difference rather than by equal amounts.
    // Currently, both objects get moved the same amount, regardless of mass.
    // TODO: Check for the type of object and reset positions based on type.
    const len = Math.sqrt((obj1.coords[0] - obj2.coords[0])**2 + (obj1.coords[1] - obj2.coords[1])**2);
    const dist = (obj1.radius + obj2.radius - len)/2;
    const pushVec2 = v.normalize([], v.sub([], obj2.coords, obj1.coords));
    const pushVec1 = v.scale([], pushVec2, -1);
    obj1.coords = v.add([], obj1.coords, v.scale([], pushVec1, dist));
    obj2.coords = v.add([], obj2.coords, v.scale([], pushVec2, dist));
}

/**
 * Determines the new velocities both objects should have after the collision.
 * @param {RigidBody} obj1 - The first object to resolve.
 * @param {RigidBody} obj2 - The second object to resolve.
 * @param {Object} settings - Global parameters the engine should apply.
 */
function _getNewVelocities(obj1, obj2, settings) {
    const { cor } = settings;

    /* Create the unit normal vector. */
    const unitNorm = v.normalize([], v.sub([], obj2.coords, obj1.coords));

    /* Convert velocity array into vector object. */
    const vel1 = v.fromValues(obj1.velocity[0], obj1.velocity[1]);
    const vel2 = v.fromValues(obj2.velocity[0], obj2.velocity[1]);

    /* Obtain parallel and perpendicular projection vectors onto the unitNorm vector. */
    const obj1InitPar = v.scale([], unitNorm, v.dot(vel1, unitNorm));
    const obj2InitPar = v.scale([], unitNorm, v.dot(vel2, unitNorm));
    const obj1InitPerp = v.sub([], vel1, obj1InitPar);
    const obj2InitPerp = v.sub([], vel2, obj2InitPar);

    /* Find the final parallel vectors. */
    const obj1Fin = _calcVelocity(cor, obj1InitPar, obj1.mass, obj2InitPar, obj2.mass);
    const obj2Fin = _calcVelocity(cor, obj2InitPar, obj2.mass, obj1InitPar, obj1.mass);

    /* Change the velocity. */
    obj1.velocity = v.add([], obj1Fin, obj1InitPerp);
    obj2.velocity = v.add([], obj2Fin, obj2InitPerp);
}

/**
 * Returns the final velocity of the first object using its velocity and mass.
 * @params {number} cor - Coefficient of Restitution.
 * @params {number[]} vel1 - Velocity of the first object.
 * @params {number} mass1 -Mass of the first object
 * @params {number[]} vel2 - Velocity of the second object.
 * @params {number} mass2 -Mass of the second object.
 * @returns {number[]} Final velocity of first object.
 */
function _calcVelocity(cor, vel1, mass1, vel2, mass2) {
    const denom = mass1 + mass2;
    const numer1 = v.scale([], v.sub([], vel2, vel1), cor*mass2);
    const numer2 = v.scale([], vel1, mass1);
    const numer3 = v.scale([], vel2, mass2);
    const numerTotal = v.add([], v.add([], numer1, numer2), numer3);

    return v.scale([], numerTotal, 1/denom);
}

/**
 * Resolves a collision between an object and a boundary.
 * @param {RigidBody} obj - The first object to resolve.
 * @param {number} bound - A number representing the boundary value.
 * @param {boolean} isMin - Whether this is a min or max boundary.
 * @param {number} axis - The axis we want to perform the resolution on.
 * @param {Object} settings - Global parameters the engine should apply.
 */
function resolveBoundaryCollision(obj, bound, isMin, axis, settings) {
    if (obj instanceof Circle) {
        _resolveCircleBoundColl(obj, bound, isMin, axis, settings);
    }
}

function _resolveCircleBoundColl(obj, bound, isMin, axis, settings) {
    obj.velocity[axis] = -obj.velocity[axis];

    if (isMin && obj.coords[axis] + obj.velocity[axis] < bound + obj.radius) {
        obj.coords[axis] = bound + obj.radius;
    } else if (!isMin && obj.coords[axis] + obj.velocity[axis] > bound - obj.radius) {
        obj.coords[axis] = bound - obj.radius;
    }
}

export { resolveBoundaryCollision, resolveCollision };
