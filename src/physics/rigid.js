class RigidBody {
    /**
     * @construct Creates a RigidBody object.
     * @property {number} mass - The mass of the circle.
     * @property {number[]} velocity - The velocity of the circle.
     * @property {String} color - A hex string or value to represent color.
     * @property {boolean} active - If the object is sleeping or not.
     * @property {number} cor - Coefficient of Restitution. Number between 0 and 1.
     */
    constructor(attributes) {
        const { mass, velocity, color, active, cor } = attributes;

        if (cor < 0 || cor > 1) {
            throw new RangeError('COR value must be between 0 and 1.');
        }

        this.mass = mass;
        this.velocity = velocity;
        this.color = color;
        this.active = active;
        this.cor = cor;
    }
}

class Circle extends RigidBody {
    /**
     * @construct Creates a Circle object.
     * @property {number} mass - The mass of the circle.
     * @property {number[]} velocity - The velocity of the circle.
     * @property {number} radius - The radius of the circle.
     * @property {number[]} coords - The position of the circle.
     * @property {String} color - A hex string or value to represent color.
     * @property {boolean} active - If the object is sleeping or not.
     * @property {number} cor - Coefficient of Restitution. Number between 0 and 1.
     */
    constructor(attributes) {
        const { radius, coords, ...rest } = attributes;

        super(rest);
        this.radius = radius;
        this.coords = coords;
    }
}

class Polygon extends RigidBody {
    /**
     * @construct Creates a Polygon object.
     * @property {number} mass - The mass of the circle.
     * @property {number[]} velocity - The velocity of the circle.
     * @property {number[]} vertices - A set of points representing the edges of a polygon.
     * @property {String} color - A hex string or value to represent color.
     * @property {boolean} active - If the object is sleeping or not.
     * @property {number} cor - Coefficient of Restitution. Number between 0 and 1.
     */
    constructor(attributes) {
        const { vertices, ...rest } = attributes;
        super(rest);
        this.vertices = vertices;
    }
}

export { RigidBody, Circle, Polygon };
