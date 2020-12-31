import React from 'react';
import Panel from './containers/Panel';
import EngineSettingsList from './input/EngineSettingsList';
import GenSettingsList from './input/GenSettingsList';
import TabContainer from './containers/TabContainer';

function SideBar(props) {
    return (
        <div>
            <TabContainer>
                <div label='Information'>
                    <Panel title='Introduction'>
                        <p>
                            This is a demonstration of a lightweight physics engine. You can adjust the engine's parameters in the
                            <span className='acc'> options</span> tab. <br /><br />
                        </p>
                    </Panel>
                    <Panel title='Generation Parameters'>
                        <p>
                            <b><u>Number of Objects</u></b>: The exact number of objects to generate.<br /><br />
                            <b><u>Radius (Min)</u></b>: The minimum radius an object can be generated with.<br /><br />
                            <b><u>Radius (Max)</u></b>: The maximum radius an object can be generated with.<br /><br />
                            <b><u>Velocity (Min)</u></b>: The minimum velocity an object can be generated with.<br /><br />
                            <b><u>Velocity (Max)</u></b>: The maximum velocity an object can be generated with.<br /><br />
                            <b><u>Mass (Min)</u></b>: The minimum mass an object can be generated with.<br /><br />
                            <b><u>Mass (Max)</u></b>: The maximum mass an object can be generated with.<br /><br />
                        </p>
                    </Panel>
                    <Panel title='Engine Parameters'>
                        <p>
                            <b><u>Coeff. of Restitution</u></b>: The amount of energy which remains after a collision. A value of 1 is perfectly
                            elastic. A value of 0 is perfectly inelastic. Other values can also be explored.<br /><br />
                            <b><u>Gravity (Vertical)</u></b>: The amount of gravity in the vertical direction. Values between 0 and 0.5 provide
                            the best results, but other values can be explored.<br /><br />
                            <b><u>Gravity (Horizontal)</u></b>: The amount of gravity in the horizontal direction. Values between 0 and 0.5 provide
                            the best results, but other values can be explored.
                        </p>
                    </Panel>
                </div>
                <div label='Options'>
                    <Panel title="Generation Settings">
                        <GenSettingsList settings={props.genSettings} onGenSettingsSubmit={props.onGenSettingsSubmit} />
                    </Panel>
                    <Panel title='Engine Settings'>
                        <EngineSettingsList settings={props.engineSettings} onEngSettingsSubmit={props.onEngSettingsSubmit} />
                    </Panel>
                </div>
            </TabContainer>
        </div>
    );
}

export { SideBar };
