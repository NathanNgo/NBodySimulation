import React from 'react';
import ClosablePanel from './containers/ClosablePanel';
import SettingsList from './input/SettingsList';
import TabContainer from './containers/TabContainer';
import Tab from './containers/Tab';
/*
import { Button } from './input/Button';
import playIcon from '../../css/icons/play_arrow-24px.svg';
import pauseIcon from '../../css/icons/pause-24px.svg';
import resetIcon from '../../css/icons/reset-24px.svg';
*/

function SideBar(props) {
    return (
        <div>
            <TabContainer>
                <div label='Information'>
                    <p>
                        This is a demonstration of a lightweight physics engine. You can adjust the engine's parameters in the
                        <span className='acc'> options</span> tab. <br /><br />

                        Here's an explanation of the engine's options: <br /> <br />
                        <b> Number of Objects: </b> The exact number of objects to generate. <br /><br />
                        <b> Coeff. of Restitution: </b> The amount of energy which remains after a collision. A value of 1 is perfectly
                        elastic. A value of 0 is perfectly inelastic. Other values can also be explored.<br /><br />
                        <b> Gravity (Vertical): </b> The amount of gravity in the vertical direction. Values between 0 and 0.5 provide
                        the best results, but other values can be explored.<br /><br />
                        <b> Gravity (Horizontal): </b> The amount of gravity in the horizontal direction. Values between 0 and 0.5 provide
                        the best results, but other values can be explored.
                    </p>
                </div>
                <div label='Options'>
                    <SettingsList settings={props.settings} onSettingsSubmit={props.onSettingsSubmit} />
                </div>
            </TabContainer>
        </div>
    );
}

export { SideBar };
