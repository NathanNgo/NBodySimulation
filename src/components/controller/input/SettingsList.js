import React, { useState } from 'react';

function SettingsList(props) {
    const [settings, setSettings] = useState(props.settings);

    function handleSettingsSubmit(event) {
        const amount = parseInt(settings.amount);
        const cor = parseFloat(settings.cor).toFixed(2);
        props.onSettingsSubmit({ amount, cor });
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
            {/* Gravity has been disabled until fixed */}
            {/*<label>
                Gravity (Vertical)
                <input name='gravY' type='number' value={settings.gravY} onChange={handleSettingsChange} />
            </label>
            <label>
                Gravity (Horrizontal)
                <input name='gravX' type='number' value={settings.gravX} onChange={handleSettingsChange} />
            </label>*/}
            <label>
                Coeff. of Restitution
                <input name='cor' type='number' step='0.01' value={settings.cor} onChange={handleSettingsChange} />
            </label>
            <input type='submit' value="Update" />
        </form>
    )
}

export default SettingsList;
