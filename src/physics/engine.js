import { RigidBody, Circle, Polygon } from './rigid';
import { isColliding, isCollidingBoundary } from './collision/collisionDetection';
import { resolveCollision, resolveBoundaryCollision } from './collision/collisionResolution';

class Engine {
    /**
     * @constructs Creates an instance of the Engine.
     * @param {number[]} bounds - Array of integers representing boundaries of simulation.
     * @param {Object} settings - An object conitaning Engine settings such as graivty and etc.
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
        vals.forEach((body) => {
            if (body instanceof Circle) {
                for (let i = 0; i < body.coordinates.length; i++) {
                    body.coordinates[i] += body.velocity[i];
                }
            }
        });
    }
}

export default Engine;
