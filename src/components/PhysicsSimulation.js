import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';
import { Circle } from '../physics/rigid';

// The "actual" root component.
class PhysicsSimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initVals: [],
            settings: undefined,
            canvasHasResized: false,
            canvasWidth: undefined,
            canvasHeight: undefined
        }

        this.handleCanvasResize = this.handleCanvasResize.bind(this);
    }


    _genRandAttr(width, height) {
        const mass = 0;
        const r = Math.random()*(100 - 10) + 10;
        const xVel = Math.random()*3;
        const xSign = Math.random() < 0.5 ? -1 : 1;
        const yVel = Math.random()*3;
        const ySign = Math.random() < 0.5 ? -1 : 1;
        const xPos = Math.random()*(width - 2*r) + r;
        const yPos = Math.random()*(height - 2*r) + r;
        const color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

        const res = [mass, xSign*xVel, ySign*yVel, r, xPos, yPos].map((v) => Math.floor(v));


        return [...res, color];
    }

    _genInitVals(width, height) {
        const amount = Math.random()*(10 - 2) + 2;
        const vals = []
        for (let i = 0; i < amount; i++) {
            const attr = this._genRandAttr(width, height);
            // FIXME: Redo this.
            vals.push(new Circle(attr[0], [attr[1], attr[2]], attr[3], [attr[4], attr[5]], attr[6]));
        }

        return vals;
    }

    handleCanvasResize(width, height) {
        if (!this.state.canvasHasResized) {
            this.setState({
                canvasHasResized: true,
                canvasWidth: width,
                canvasHeight: height,
                initVals: this._genInitVals(width, height)
            });
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
                    <ViewScreen
                        initVals={this.state.initVals}
                        onResize={this.handleCanvasResize}
                        settings={this.settings}
                    />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/NBodySimulation'> GitHub </a> </p>
                </footer>
            </div>
        );
    }
}

export { PhysicsSimulation };
