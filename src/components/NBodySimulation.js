import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';
import { Circle } from '../physics/rigid';

// The "actual" root component.
class NBodySimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initVals: [new Circle(0, 0, 33, 50, 60), new Circle(0, 0, 77, 344, 455)],
            canvasHasResized: false,
            canvasWidth: undefined,
            canvasHeight: undefined
        }

        this.canvasHasResized = this.canvasHasResized.bind(this);
    }

    canvasHasResized(width, height) {
        if (!this.state.canvasHasResized) {
            this.setState({ canvasHasResized: true, canvasWidth: width, canvasHeight: height })
        }
    }

    render() {
        return (
            <div className='containerMain'>
                <header className='header'>
                    <h1> <span className='acc'>N Body Simulation (Work In Progress)</span> </h1>
                </header>
                <section className='sideBar'>
                    {this.state.canvasHasResized ? <SideBar /> : <h2> Loading... </h2>}
                </section>
                <section className='viewScreen'>
                    <ViewScreen initVals={this.state.initVals} onResize={this.canvasHasResized} />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/NBodySimulation'> GitHub </a> </p>
                </footer>
            </div>
        );
    }
}

export { NBodySimulation };
