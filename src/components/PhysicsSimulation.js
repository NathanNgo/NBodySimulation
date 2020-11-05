import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';
import { Circle } from '../physics/rigid';

// The "actual" root component.
class PhysicsSimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initVals: [new Circle(0, [1, 0], 33, [50, 60]), new Circle(0, [1, 2], 77, [344, 455])],
            canvasHasResized: false,
            canvasWidth: undefined,
            canvasHeight: undefined
        }

        this.handleCanvasResize = this.handleCanvasResize.bind(this);
    }

    handleCanvasResize(width, height) {
        if (!this.state.canvasHasResized) {
            this.setState({ canvasHasResized: true, canvasWidth: width, canvasHeight: height })
        }
    }

    render() {
        return (
            <div className='containerMain'>
                <header className='header'>
                    {/*<h1> <span className='acc'>N Body Simulation (Work In Progress)</span> </h1>*/}
                    <h1> <span className='acc'> Physics Simulation </span> </h1>
                </header>
                <section className='sideBar'>
                    {this.state.canvasHasResized ? <SideBar /> : <h2> Loading... </h2>}
                </section>
                <section className='viewScreen'>
                    <ViewScreen initVals={this.state.initVals} onResize={this.handleCanvasResize} />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/NBodySimulation'> GitHub </a> </p>
                </footer>
            </div>
        );
    }
}

export { PhysicsSimulation };
