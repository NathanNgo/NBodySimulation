import { RigidBody, Circle, Polygon } from './rigid';
import { isColliding } from './collision';

class Engine {
    /**
     * @constructs Creates an instance of the Engine.
     */
    constructor(bounds, gravity) {
        this.bounds = bounds;
        this.gravity = gravity;
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
