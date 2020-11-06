function resolveCollision(obj1, obj2, settings) {
    // Apply kinematic equations and coefficient of restitution.
    return
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
