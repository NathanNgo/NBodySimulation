class RigidBody {
    constructor(mass = 1, velocity = 0, color = 'white') {
        this.mass = mass;
        this.velocity = velocity;
        this.color = color;
    }
}

class Circle extends RigidBody {
    constructor(mass = 1, velocity = [0, 0], radius = 1, coordinates = [0, 0], color = 'white') {
        super(mass, velocity, color);
        this.radius = radius;
        this.coordinates = coordinates;
    }
}

class Polygon extends RigidBody {
    constructor(mass = 1, velocity = [0, 0], vertices = [[0, 0]], color = 'white') {
        super(mass, velocity, color);
        this.vertices = vertices;
    }
}

export { RigidBody, Circle, Polygon };
