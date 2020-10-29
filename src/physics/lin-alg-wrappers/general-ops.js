import vec2 from 'gl-vec2';

function test() {
    const val = vec2.create();
    vec2.set(val, 3, 5);
    console.log(val);
}

export { test };
