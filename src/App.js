import React from 'react';
import './css/App.css';
import { PhysicsSimulation } from './components/PhysicsSimulation';

// First component. Used to set up data structures and other objects
// which might be used by child components. Can be passed via props.
// e.g. Axios object to communicate to back end (Setting baseURL and other settings).
function App() {
    return (
        <PhysicsSimulation />
    );
}

export default App;
