import React from 'react';
import { ClosablePanel } from './ClosablePanel';
import { Button } from './input/Button';
import playIcon from '../../css/icons/play_arrow-24px.svg';
import pauseIcon from '../../css/icons/pause-24px.svg';
import resetIcon from '../../css/icons/reset-24px.svg';

function SideBar() {
    return (
        <div>
            <ClosablePanel title='Information'>
                {/*<p> The <b>N Body Simulation</b> is designed to represent collisions and interactions between <span className='acc'>N</span> objects. </p>*/}
                <h3 style={{marginBottom: '10px'}}> To obtain a new sample, refresh the page. </h3>
                <p>
                    A simple demonstration of a lightweight physics engine. Still a
                    <span className='acc'> work in progress </span> and very much incomplete.
                    Currently, collision resolution is <span className='acc'>not working as intended </span>
                    and I intend to fix this later.
                </p>
            </ClosablePanel>
            <ClosablePanel title='Controls'>
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
            </ClosablePanel>
            <ClosablePanel title='Options'>
                <p> Options go here </p>
            </ClosablePanel>
        </div>
    );
}

export { SideBar };
