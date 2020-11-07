class RigidBody {
    constructor(mass, velocity, color) {
        this.mass = mass;
        this.velocity = velocity;
        this.color = color;
    }
}

class Circle extends RigidBody {
    /**
     * @construct Creates a Circle object.
     * @param {number} mass - The mass of the circle.
     * @param {number[]} velocity - The velocity of the circle.
     * @param {number} radius - The radius of the circle.
     * @param {numer[]} coords - The position of the circle.
     * @param {String} color - A hex string or value to represent color.
     */
    constructor(mass, velocity, radius, coords, color) {
        super(mass, velocity, color);
        this.radius = radius;
        this.coords = coords;
    }
}

class Polygon extends RigidBody {
    constructor(mass, velocity, vertices, color) {
        super(mass, velocity, color);
        this.vertices = vertices;
    }
}

export { RigidBody, Circle, Polygon };
