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
        for (let i = 0; i < vals.length; i++) {
            // Detect boundary and handle boundary collisions.
            const boundarySide = isCollidingBoundary(vals[i], this.bounds);
            resolveBoundaryCollision(vals[i], boundarySide, this.bounds, this.settings);

            // Detect and resolve object-object collisions.
            for (let j = i + 1; j < vals.length; j++) {
                if (isColliding(vals[i], vals[j])) {
                    resolveCollision(vals[i], vals[j], this.settings);
                }
            }

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
