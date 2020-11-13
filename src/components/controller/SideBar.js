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
                {/*<p> The <b>N Body Simulation</b> is designed to represent collisions and interactions between <span className='acc'>N</span> objects. </p>*/}
                <p>
                    A simple demonstration of a lightweight physics engine. Still a
                    <span className='acc'> work in progress </span> and very much incomplete.
                </p>
                <p style={{marginTop: '10px'}}>
                    The ability to customise individual object properties and start/stop the animation have yet to be implemented.
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
