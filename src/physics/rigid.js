class RigidBody {
    constructor(mass = 1, velocity = 0) {
        this.mass = mass;
        this.velocity = velocity;
    }
}

class Circle extends RigidBody {
    constructor(mass = 1, velocity = [0, 0], radius = 1, coordinates = [0, 0]) {
        super(mass, velocity);
        this.radius = radius;
        this.coordinates = coordinates;
    }
}

class Polygon extends RigidBody {
    constructor(mass = 1, vertices = [0, 0]) {
        super(mass);
        this.vertices = vertices;
    }
}

export { RigidBody, Circle, Polygon };
