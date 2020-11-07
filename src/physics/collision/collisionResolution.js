import { vec2 as v } from 'gl-matrix';

function resolveCollision(obj1, obj2, settings) {
    // TODO: Move circles away from each other first, so they don't stick. Find MPV.

    /* Create the unit normal vector. */
    const components = [
        obj1.coordinates[0] - obj2.coordinates[0],
        obj1.coordinates[1] - obj2.coordinates[1]
    ];
    const unitNorm = v.normalize([], v.fromValues(...components));

    /* Convert veolcity array into vector object. */
    const obj1Vel = v.fromValues(obj1.velocity[0], obj1.velocity[1]);
    const obj2Vel = v.fromValues(obj2.velocity[0], obj2.velocity[1]);

    /* Obtain parallel and perpendicular projection vectors onto the unitNorm vector. */
    const obj1InitPar = v.scale([], unitNorm, v.dot(obj1Vel, unitNorm));
    const obj2InitPar = v.scale([], unitNorm, v.dot(obj2Vel, unitNorm));
    const obj1InitPerp = v.sub([], obj1Vel, obj1InitPar);
    const obj2InitPerp = v.sub([], obj2Vel, obj2InitPar);

    /* Find the final parallel vectors. */
    const obj1FirstCoeff = (obj1.mass - obj2.mass)/(obj1.mass + obj2.mass);
    const obj1SecondCoeff = (2*obj2.mass)/(obj1.mass + obj2.mass);
    const obj1Fin = v.add([], v.scale([], obj1InitPar, obj1FirstCoeff), v.scale([], obj2InitPar, obj1SecondCoeff));

    const obj2FirstCoeff = (obj2.mass - obj1.mass)/(obj1.mass + obj2.mass);
    const obj2SecondCoeff = (2*obj1.mass)/(obj1.mass + obj2.mass);
    const obj2Fin = v.add([], v.scale([], obj2InitPar, obj2FirstCoeff), v.scale([], obj1InitPar, obj2SecondCoeff));

    /* Change the velocity. */
    obj1.velocity = v.add([], obj1Fin, obj1InitPerp);
    obj2.velocity = v.add([], obj2Fin, obj2InitPerp);
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
