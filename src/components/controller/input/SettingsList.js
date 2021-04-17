import React, { useState } from 'react';

function SettingsList(props) {
    const [settings, setSettings] = useState(props.settings);

    //TODO: This should be passed in, as it would be different for different settings.
    // This is because it requires validation as well.
    function handleSettingsSubmit(event) {
    }

    function handleSettingsChange(event) {
        if (event.target.type === "checkbox") {
            setSettings({ ...settings, massGradient: event.target.checked});
        } else if (event.target.type === "number") {
            const newSettings = { [event.target.name]: event.target.value };
            setSettings({ ...settings, ...newSettings });
        }
    }

    const template = props.template
    const submitText = props.submitText

    return (
        <form onSubmit={handleSettingsSubmit}>
            <input type='submit' value={submitText} />
        </form>
    )
}

function _extractTemplate(template) {
    for (const item of template) {
        if (item.type === "checkbox") {

        } else if (item.type === "number") {

        }
    }
}

export default SettingsList;
