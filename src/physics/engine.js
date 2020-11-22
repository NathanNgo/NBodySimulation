import { RigidBody, Circle, Polygon } from './rigid';
import { isColliding, isCollidingBoundary } from './collision/collisionDetection';
import { resolveCollision, resolveBoundaryCollision } from './collision/collisionResolution';
import { vec2 as v } from 'gl-matrix';

class Engine {
    /**
     * @constructs Creates an instance of the Engine.
     * @param {number[]} bounds - Array of integers representing boundaries of simulation.
     * @param {Object} settings - An object conitanin
     * Engine settings such as graivty and etc.
     */
    constructor(bounds, settings) {
        this.bounds = bounds;
        this.settings = settings;
    }

    /**
     * Updates an array of RigidBody's.
     * @param {RigidBody[]} vals - An array of RigidBody's or objects inherited from RigidBody.
     */
    update(vals) {
        for (let i = 0; i < vals.length; i++) {
            // Detect and resolve object-object collisions.
            for (let j = i + 1; j < vals.length; j++) {
                if (isColliding(vals[i], vals[j])) {
                    resolveCollision(vals[i], vals[j], this.settings);
                }
            }

            // Detect and handle object-boundary collisions.
            const sides = isCollidingBoundary(vals[i], this.bounds);
            resolveBoundaryCollision(vals[i], sides, this.bounds, this.settings);

            // TODO: Currently inaccurate. Coliisions lose energy when gravity is on, even with
            // perfectly elastic boundaries. Fix by not using Euler Integration. Also need to
            // implement "sleeping" system, otherwise we have too many collision resolutions calls.
            /* vals[i].velocity = v.add([], vals[i].velocity, [this.settings.gravX, this.settings.gravY]); */

            // Move the objects by their velocities.
            if (vals[i] instanceof Circle) {
                for (let c = 0; c < vals[i].coords.length; c++) {
                    vals[i].coords[c] += vals[i].velocity[c];
                }
            }
        }
    }

}

export default Engine;
