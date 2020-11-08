import React, { useState } from 'react';
import { ClosablePanel } from './ClosablePanel';
import { Button } from './input/Button';
import playIcon from '../../css/icons/play_arrow-24px.svg';
import pauseIcon from '../../css/icons/pause-24px.svg';
import resetIcon from '../../css/icons/reset-24px.svg';

function SideBar(props) {
    const [vals, setVals] = useState(props.vals)
    const [settings, setSettings] = useState(props.settings);

    function handleSubmit(event) {
        props.onOptionsChange(vals, settings);
        event.preventDefault();
    }

    function handleValsChange(event) {
        const newVals = { [event.target.name]: event.target.value };
        setVals({ ...vals, ...newVals });
    }

    function handleSettingsChange(event) {
        const newSettings = { [event.target.name]: event.target.value };
        setSettings({ ...settings, ...newSettings });
    }

    return (
        <div>
            <ClosablePanel title='Information'>
                {/*<p> The <b>N Body Simulation</b> is designed to represent collisions and interactions between <span className='acc'>N</span> objects. </p>*/}
                <h3 style={{marginBottom: '10px'}}> Refresh the page to obtain a new sample </h3>
                <p>
                    A simple demonstration of a lightweight physics engine. Still a
                    <span className='acc'> work in progress </span> and very much incomplete.
                    Eventually, the ability to customise the <span className='acc'>exact amount </span>
                    of objects and their properties will be implemented.
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
            <ClosablePanel title='Options'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Amount of Objects
                    </label>
                        <input name='amount' type='number' value={settings.amount} onChange={handleSettingsChange} />
                    <input type='submit' value="Update" />
                </form>
            </ClosablePanel>
        </div>
    );
}

export { SideBar };
