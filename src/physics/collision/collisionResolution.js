import { vec2 } from 'gl-matrix';

function resolveCollision(obj1, obj2, settings) {
    // Apply kinematic equations and coefficient of restitution. Below leads to
    // unnatural collisions for the moment.
    for (let i = 0; i < obj1.coordinates.length; i++) {
        const obj1FirstTerm = ((obj1.mass - obj2.mass)/(obj1.mass + obj2.mass))*obj1.velocity[i];
        const obj1SecondTerm = ((2*obj2.mass)/(obj1.mass + obj2.mass))*obj2.velocity[i];
        const obj1Vel = obj1FirstTerm + obj1SecondTerm;

        const obj2FirstTerm = ((2*obj1.mass)/(obj1.mass + obj2.mass))*obj1.velocity[i];
        const obj2SecondTerm = ((obj2.mass - obj1.mass)/(obj1.mass + obj2.mass))*obj2.velocity[i];
        const obj2Vel = obj2FirstTerm + obj2SecondTerm;

        obj1.velocity[i] = obj1Vel;
        obj2.velocity[i] = obj2Vel;
    }
}

function resolveBoundaryCollision(obj, boundarySide, settings) {
    switch(boundarySide) {
        case 0:
            // xMin
            obj.velocity[0] = -obj.velocity[0];
            break;
        case 1:
            // xMax
            obj.velocity[0] = -obj.velocity[0];
            break;
        case 2:
            // yMin
            obj.velocity[1] = -obj.velocity[1];
            break;
        case 3:
            // yMax
            obj.velocity[1] = -obj.velocity[1];
            break;
        default:
            // No collision.
            break;
    }
}

export { resolveBoundaryCollision, resolveCollision };
