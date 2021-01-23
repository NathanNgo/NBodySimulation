import React, { useState } from 'react';

function GenSettingsList(props) {
    const [settings, setSettings] = useState(props.settings);

    function handleSettingsSubmit(event) {
        const amount = parseInt(settings.amount);
        const minRadius = Number(parseFloat(settings.minRadius).toFixed(2));
        let maxRadius = Number(parseFloat(settings.maxRadius).toFixed(2));
        const minVel = Number(parseFloat(settings.minVel).toFixed(2));
        let maxVel = Number(parseFloat(settings.maxVel).toFixed(2));
        const minMass = Number(parseFloat(settings.minMass).toFixed(2));
        let maxMass = Number(parseFloat(settings.maxMass).toFixed(2));
        const massGradient = settings.massGradient;

        if (maxRadius < minRadius) {
            maxRadius = minRadius;
        } else if (maxVel < minVel) {
            maxVel = minVel;
        } else if (maxMass < minMass) {
            maxMass = minMass;
        }

        const packedSettings = {
            amount,
            minRadius,
            maxRadius,
            minVel,
            maxVel,
            minMass,
            maxMass,
            massGradient
        }

        // Forces a settings list re-render so that the corrected values are reflected immediately
        // instead of needing to refresh the tab to see the corrected values.
        setSettings(packedSettings);

        // Updates the values.
        props.onGenSettingsSubmit(packedSettings);

        event.preventDefault();
    }

    function handleSettingsChange(event) {
        const newSettings = { [event.target.name]: event.target.value };
        setSettings({ ...settings, ...newSettings });
    }

    function handleBooleanChange(event) {
        setSettings({ ...settings, massGradient: event.target.checked});
    }

    return (
        <form onSubmit={handleSettingsSubmit}>
            <label>
                Number of Objects
                <input name='amount' type='number' value={settings.amount} onChange={handleSettingsChange} />
            </label>
            <label>
                Radius (Min)
                <input name='minRadius' type='number' step='0.01' value={settings.minRadius} onChange={handleSettingsChange} />
            </label>
            <label>
                Radius (Max)
                <input name='maxRadius' type='number' step='0.01' value={settings.maxRadius} onChange={handleSettingsChange} />
            </label>
            <label>
                Velocity (Min)
                <input name='minVel' type='number' step='0.01' value={settings.minVel} onChange={handleSettingsChange} />
            </label>
            <label>
                Velocity (Max)
                <input name='maxVel' type='number' step='0.01' value={settings.maxVel} onChange={handleSettingsChange} />
            </label>
            <label>
                Mass (Min)
                <input name='minMass' type='number' step='0.01' value={settings.minMass} onChange={handleSettingsChange} />
            </label>
            <label>
                Mass (Max)
                <input name='maxMass' type='number' step='0.01' value={settings.maxMass} onChange={handleSettingsChange} />
            </label>
            <label>
                Mass Color Gradient
                <input name='massGradient' type='checkbox' checked={settings.massGradient} onChange={handleBooleanChange} />
            </label>
            <input type='submit' value="Update Generation" />
        </form>
    )
}

export default GenSettingsList;
