import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';
import { Circle } from '../physics/rigid';

// The "actual" root component.
class PhysicsSimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vals: [],
            settings: undefined,
            canvasWidth: undefined,
            canvasHeight: undefined,
            canvasHasRendered: false,
            aninIsPlaying: true,
        }

        this.handleCanvasRender = this.handleCanvasRender.bind(this);
        this.handleAnimToggle = this.handleAnimToggle.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
    }


    _genRandAttr(width, height) {
        const mass = Math.random()*(5 - 1) + 1;
        const radius = Math.random()*(60 - 10) + 10;
        const xVel = Math.random()*3;
        const xSign = Math.random() < 0.5 ? -1 : 1;
        const yVel = Math.random()*3;
        const ySign = Math.random() < 0.5 ? -1 : 1;
        const xPos = Math.random()*(width - 2*radius) + radius;
        const yPos = Math.random()*(height - 2*radius) + radius;
        const color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

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

    _genVals(width, height, amount) {
        if (!amount) {
            amount = Math.floor(Math.random()*(20 - 8) + 8);
        }
        const vals = []
        for (let i = 0; i < amount; i++) {
            vals.push(new Circle(this._genRandAttr(width, height)));
        }

        return vals;
    }

    handleCanvasRender(width, height) {
        if (!this.state.canvasHasRendered) {
            const amount = Math.floor(Math.random()*(20 - 8) + 8);

            this.setState({
                canvasHasRendered: true,
                canvasWidth: width,
                canvasHeight: height,
                vals: this._genVals(width, height, amount),
                settings: { amount }
                //vals: [new Circle(1, [1, 0], 100, [200, 300], 'green'), new Circle(1, [-1, 0], 100, [600, 200], 'red')]
                //vals: [new Circle(1, [1, 1], 100, [0, 0], 'green')]
            });
        }
    }

    handleAnimToggle(animIsPlaying) {
        this.setState({ animIsPlaying });
    }

    handleOptionsChange(vals, settings) {
        // this.setState({ vals, settings });
        /* Just have it generate new values for now. Implement altering the existing values later */
        const { canvasWidth, canvasHeight } = this.state;
        const newVals = this._genVals(canvasWidth, canvasHeight, settings.amount);
        this.setState({ vals: newVals, settings });
    }

    render() {
        let sideBar;
        if (this.state.canvasHasRendered) {
            sideBar =
                <SideBar
                    vals={this.state.vals}
                    canvasWidth={this.state.canvasWidth}
                    canvasHeight={this.state.canvasHeight}
                    settings={this.state.settings}
                    animIsPlaying={this.state.animIsPlaying}
                    onAnimToggle={this.handleAnimToggle}
                    onOptionsChange={this.handleOptionsChange}
                />;
        } else {
            sideBar = <h2> Loading... </h2>;
        }

        return (
            <div className='containerMain'>
                <header className='header'>
                    {/*<h1> <span className='acc'>N Body Simulation (Work In Progress)</span> </h1>*/}
                    <h1> <span className='acc'> Physics Simulation </span> </h1>
                </header>
                <section className='sideBar'>
                    {sideBar}
                </section>
                <section className='viewScreen'>
                    <ViewScreen
                        vals={this.state.vals}
                        onRender={this.handleCanvasRender}
                        settings={this.settings}
                    />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/PhysicsSimulation'> GitHub </a> </p>
                </footer>
            </div>
        );
    }
}

export { PhysicsSimulation };
