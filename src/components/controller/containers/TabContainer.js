import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

// Didn't use hashmap as the overhead is unnecessary. Only expecting small number of tabs.
function TabContainer(props) {
    const { children } = props;

    const [ activeTab, setActiveTab ] = useState(children[0].props.label);

    function handleTabChange(label) {
        setActiveTab(label);
    }

    let activeTabContent = undefined;
    const Tabs = children.map(child => {
        let active = false;
        if (child.props.label === activeTab) {
            activeTabContent = child;
            active = true;
        }
        
        return (
            <Tab
                key={child.props.label}
                label={child.props.label}
                onClick={handleTabChange}
                active={active}
            />
        );
    })
    
    return (
        <div className="tabContainer">
            <div className="tabList">
                {Tabs}
            </div>
            <div className="tabContent">
                {activeTabContent}
            </div>
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TabContainer;
