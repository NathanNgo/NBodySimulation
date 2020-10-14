import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';

// The "actual" root component.
class NBodySimulation extends React.Component {
    render() {
        return (
            <div className='containerMain'>
                <header className='header'>
                    <h1> <span className='acc'>N Body Simulation </span> </h1>
                </header>
                <section className='sideBar'>
                    <SideBar />
                </section>
                <section className='viewScreen'>
                    <ViewScreen />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/NBodySimulation'> GitHub </a> </p>
                </footer>
            </div>
        );
    }
}

export { NBodySimulation };
