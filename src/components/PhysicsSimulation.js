import React from 'react';
import { SideBar } from './controller/SideBar';
import { ViewScreen } from './view/ViewScreen';
import { Circle } from '../physics/rigid';
import Modal from './controller/Modal';

// The "actual" root component.
class PhysicsSimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vals: [],
            // Settings is maintained a 2 different values instead of a single vector to avoid
            // the need to deep clone the settings objects.
            settings: {
                amount: 0,
                gravX: 0,
                gravY: 0,
                cor: 1,
            },
            canvasWidth: undefined,
            canvasHeight: undefined,
            canvasHasRendered: false,
            aninIsPlaying: true,
            valSelected: null,
            modalOpen: false,
        }

        this.handleCanvasRender = this.handleCanvasRender.bind(this);
        this.handleAnimToggle = this.handleAnimToggle.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    /**
     * Generates random attributes for a Circle Object.
     * @params {number} width - The max width of the Canvas.
     * @params {number} height - The max height of the Canvas.
     * @returns {Object} An object containing all the random attributes for a Circle.
     */
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

    /**
     * Generates an array of random Circle objects.
     * @params {number} width - The max width of the Canvas.
     * @params {number} height - The max height of the Canvas.
     * @params {number} amount - The number of Circle objects to generate.
     * @returns {Circle[]} An array containing all randomly generated Circle objects.
     */
    _genVals(width, height, amount) {
        const vals = []
        for (let i = 0; i < amount; i++) {
            vals.push(new Circle(this._genRandAttr(width, height)));
        }

        return vals;
    }

    handleCanvasRender(width, height) {
        if (!this.state.canvasHasRendered) {
            const amount = Math.floor(Math.random()*(20 - 8) + 8);

            this.setState((state) => ({
                canvasHasRendered: true,
                canvasWidth: width,
                canvasHeight: height,
                vals: this._genVals(width, height, amount),
                settings: { ...state.settings, amount }
            }));
        }
    }

    handleAnimToggle(animIsPlaying) {
        this.setState({ animIsPlaying });
    }

    handleSettingsSubmit(settings) {
        // this.setState({ vals, settings });
        /* Just have it generate new values for now. Implement altering the existing values later */
        const { canvasWidth, canvasHeight } = this.state;
        const newVals = this._genVals(canvasWidth, canvasHeight, settings.amount);
        this.setState({ vals: newVals, settings });
    }

    handleModalClose() {
        this.setState({ valSelected: null, modalOpen: false });
    }

    handleModalOpen(val) {
        this.setState({ valSelected: val, modalOpen: true });
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
                    onSettingsSubmit={this.handleSettingsSubmit}
                />;
        } else {
            sideBar = <h2> Loading... </h2>;
        }

        return (
            <div className='containerMain'>
                <header className='header'>
                    <h1> <span className='acc'> Physics Simulation </span> </h1>
                </header>
                <section className='sideBar'>
                    {sideBar}
                    {/*<button onClick={this.handleModalOpen}> Open </button>*/}
                </section>
                <section className='viewScreen'>
                    <ViewScreen
                        vals={this.state.vals}
                        onRender={this.handleCanvasRender}
                        settings={this.state.settings}
                    />
                </section>
                <footer className='footer'>
                    <p> <a href='https://github.com/NathanNgo/PhysicsSimulation'> GitHub </a> </p>
                </footer>
                <Modal isOpen={this.state.modalOpen} onClose={this.handleModalClose} >
                    <p> This is some content for the model </p>
                </Modal>
            </div>
        );
    }
}

export { PhysicsSimulation };
