import { Circle, Polygon } from './rigid';
import { vec2 } from './gl-matrix';

function isColliding(obj1, obj2) {
    const axes1 = obj1 instanceof Circle ? null : getOrth(obj1);
    const axes2 = obj2 instanceof Circle ? null : getOrth(obj2);
    
    // Account for polygon-circle collisions.
}

function getOrth(obj) {
    const orths = [];
    let prev = obj.vertices[obj.vertices.length - 1];

    for (const vert of obj.vertices) {
        // 0 is x component, 1 is y.
        const edge = new vec2.fromValues(vert[0] - prev[0], vert[1] - prev[1])
        // Swap x and y components of edge and negate one.
        orths.push(new vec2.fromValues(-edge[1], edge[0]));
        prev = vert;
    }

    return orths;
}

export default isColliding;
