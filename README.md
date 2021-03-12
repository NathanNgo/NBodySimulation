# Physics Simulation
This project is a React application coupled with a custom lightweight physics engine designed to simulate collisions between objects.

## View Online At
https://physics-simulation.netlify.app/

## To Do
* Polygon Rendering
* Polygon Collisions
* Interactive Options
* Polygon-Circle Collisions
* Damping and Air Friction
* Particle Excitation (Especially when stuck)
* Pause time when tabbed out.
* Rework the SettingsList components to be reuasable and modular. Move specific cases to a json file.
* Maybe implement wrapper components around input types so that we can spread the javascript objects in.

## Bugs to Fix
* Need to fix prediction techniques with boundary collisions, as decoupling the engine from frame rate has broken some assumptions of the prediction technique.
