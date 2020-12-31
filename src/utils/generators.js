import { Circle } from '../physics/rigid';

/**
 * Generates a color between yellow to red given a value.
 * @params {number} val - A value in the range between 0 and 1.
 * @returns {string} A hex string representing a number.
 */
function genColorGradient(val) {
    const max = 220;
    const min = 0;

    let r = 227;
    let g = Math.floor(max - (val * (max - min) + min));
    let b = 7;

    return '#' + _RGBToHex(r) + _RGBToHex(g) + _RGBToHex(b);
}

/**
 * Converts RGB color to hex string.
 * @params {number} color - RGB color value.
 * @returns {string} String containing the RGB color converted to hex string
 */
function _RGBToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

/**
 * Generates random attributes for a Circle Object.
 * @params {number} width - The max width of the Canvas.
 * @params {number} height - The max height of the Canvas.
 * @returns {Object} An object containing all the random attributes for a Circle.
 */
function genRandAttr(width, height, genSettings) {
    const { minRadius, maxRadius, minVel, maxVel, minMass, maxMass, massGradient } = genSettings;

    const mass = Math.random()*(maxMass - minMass) + minMass;
    const radius = Math.random()*(maxRadius - minRadius) + minRadius;
    const xVel = Math.random()*(maxVel - minVel) + minVel;
    const xSign = Math.random() < 0.5 ? -1 : 1;
    const yVel = Math.random()*(maxVel - minVel) + minVel;
    const ySign = Math.random() < 0.5 ? -1 : 1;

    const xPos = Math.random()*(width - 2*radius) + radius;
    const yPos = Math.random()*(height - 2*radius) + radius;

    let color = undefined;

    if (massGradient) {
        color = genColorGradient(mass/maxMass)
    } else {
        color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }

    return {
        mass,
        velocity: [xSign*xVel, ySign*yVel],
        color,
        active: true,
        cor: 1,
        radius,
        coords: [xPos, yPos]
    }
}

/**
 * Generates an array of random Circle objects.
 * @params {number} width - The max width of the Canvas.
 * @params {number} height - The max height of the Canvas.
 * @params {number} amount - The number of Circle objects to generate.
 * @returns {Circle[]} An array containing all randomly generated Circle objects.
 */
function genCircleVals(width, height, genSettings) {
    const { amount, ...rest } = genSettings;
    const vals = []

    for (let i = 0; i < amount; i++) {
        vals.push(new Circle(genRandAttr(width, height, rest)));
    }

    return vals;
}

export { genColorGradient, genRandAttr, genCircleVals};
