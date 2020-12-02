import React, { useState } from 'react';
import { ClosablePanel } from './ClosablePanel';
import SettingsList from './input/SettingsList';
import { Button } from './input/Button';
import playIcon from '../../css/icons/play_arrow-24px.svg';
import pauseIcon from '../../css/icons/pause-24px.svg';
import resetIcon from '../../css/icons/reset-24px.svg';

function SideBar(props) {
    return (
        <div>
            <ClosablePanel title='Information' open={true}>
                <p>
                    This is a demonstration of a lightweight physics engine. Adjust the engine's parameters by changing the
                    <span class='acc'> options below</span>. <br /><br />

                    Here's an explanation of the engine's options: <br /> <br />
                    <b> Number of Objects: </b> The exact number of objects to generate. <br /><br />
                    <b> Coeff. of Restitution: </b> The amount of energy which remains after a collision. A value of 1 is perfectly
                    elastic. A value of 0 is perflectly inelastic. Other values can also be explored.<br /><br />
                    <b> Gravity (Vertical): </b> The amount of gravity in the vertical direction. Values between 0 and 0.5 provide
                    the best results, but other values can be explored.<br /><br />
                    <b> Gravity (Horrizontal): </b> The amount of gravity in the horrizontal direction. Values between 0 and 0.5 provide
                    the best results, but other values can be explored.

                </p>
            </ClosablePanel>
            {/*<ClosablePanel title='Controls'>
                <Button
                    className='playButton'
                    iconURL={playIcon}
                    //onClick=...
                />
                <Button
                    className='pauseButton'
                    iconURL={pauseIcon}
                    //onClick=...
                />
                <Button
                    className='resetButton'
                    iconURL={resetIcon}
                    //onClick=...
                />
            </ClosablePanel>*/}
            <ClosablePanel title='Options' open={true}>
                <SettingsList settings={props.settings} onSettingsSubmit={props.onSettingsSubmit} />
            </ClosablePanel>
        </div>
    );
}

export { SideBar };
