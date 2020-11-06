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
            // Detect boundary collisions.
            const boundarySide = isCollidingBoundary(vals[i], this.bounds);

            // Handle boundary collision. Can probablly optimise by checking for no collision first.
            resolveBoundaryCollision(vals[i], boundarySide, this.settings);

            // Detect object-object collision. We can optimise with spatial seperation later.
            for (let j = i; j < vals.length; j++) {
                if (isColliding(vals[i], vals[j])) {
                    // Resolve collisions and change velocity.
                    resolveCollision(vals[i], vals[j], this.settings);
                }
            }

            // Update velocity
            if (vals[i] instanceof Circle) {
                for (let c = 0; c < vals[i].coordinates.length; c++) {
                    vals[i].coordinates[c] += vals[i].velocity[c];
                }
            }
        }
    }

}

export default Engine;
