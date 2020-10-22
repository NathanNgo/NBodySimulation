class RigidBody {
    constructor(mass, velocity) {
        this.mass = mass;
        this.velocity = velocity;
    }
}

class Circle extends RigidBody {
    constructor(mass, velocity, radius) {
        super(mass, velocity);
        this.radius = radius;
    }
}

export { RigidBody, Circle };
