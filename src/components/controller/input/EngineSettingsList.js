import React, { useState } from 'react';

function EngineSettingsList(props) {
    const [settings, setSettings] = useState(props.settings);

    function handleSettingsSubmit(event) {
        const cor = Number(parseFloat(settings.cor).toFixed(2));
        const gravX = Number(parseFloat(settings.gravity[0]).toFixed(2));
        const gravY = Number(parseFloat(settings.gravity[1]).toFixed(2));

        props.onEngSettingsSubmit({ ...settings, cor, gravity: [gravX, gravY] });

        event.preventDefault();
    }

    function handleSettingsChange(event) {
        const newSettings = {};
        const gravity = [ ...settings.gravity ];

        if (event.target.name === 'gravX') {
            gravity[0] = event.target.value;
        } else if (event.target.name === 'gravY') {
            gravity[1] = event.target.value;
        } else {
            newSettings.[event.target.name] = event.target.value;
        }

        setSettings({ ...settings, ...newSettings, gravity });
    }

    return (
        <form onSubmit={handleSettingsSubmit}>
            <label>
                Coeff. of Restitution
                <input name='cor' type='number' step='0.01' value={settings.cor} onChange={handleSettingsChange} />
            </label>
            <label>
                Gravity (Vertical)
                <input name='gravY' type='number' value={settings.gravity[1]} step='0.01' onChange={handleSettingsChange} />
            </label>
            <label>
                Gravity (Horizontal)
                <input name='gravX' type='number' value={settings.gravity[0]} step='0.01' onChange={handleSettingsChange} />
            </label>
            <input type='submit' value="Update Engine" />
        </form>
    )
}

export default EngineSettingsList;
