import React from 'react';
import './css/App.css';
import { NBodySimulation } from './components/NBodySimulation';

// First component. Used to set up data structures and other objects
// which might be used by child components. Can be passed via props.
// e.g. Axios object to communicate to back end (Setting baseURL and other settings).
function App() {
    //document.body.style = 'background: #f5f5f4';
    return (
        <NBodySimulation />
    );
}

export default App;
