import React, { useState } from 'react';

function SettingsList(props) {
    const [settings, setSettings] = useState(props.settings);

    function handleSettingsSubmit(event) {
        const amount = parseInt(settings.amount);
        const cor = Number(parseFloat(settings.cor).toFixed(2));
        const gravY = Number(parseFloat(settings.gravY).toFixed(2));
        const gravX = Number(parseFloat(settings.gravX).toFixed(2));
        props.onSettingsSubmit({ amount, cor, gravY, gravX });
        event.preventDefault();
    }

    function handleSettingsChange(event) {
        const newSettings = { [event.target.name]: event.target.value };
        setSettings({ ...settings, ...newSettings });
    }

    return (
        <form onSubmit={handleSettingsSubmit}>
            <label>
                Number of Objects
                <input name='amount' type='number' value={settings.amount} onChange={handleSettingsChange} />
            </label>
            <label>
                Coeff. of Restitution
                <input name='cor' type='number' step='0.01' value={settings.cor} onChange={handleSettingsChange} />
            </label>
            <label>
                Gravity (Vertical)
                <input name='gravY' type='number' value={settings.gravY} step='0.01' onChange={handleSettingsChange} />
            </label>
            <label>
                Gravity (Horizontal)
                <input name='gravX' type='number' value={settings.gravX} step='0.01' onChange={handleSettingsChange} />
            </label>
            <input type='submit' value="Update" />
        </form>
    )
}

export default SettingsList;
