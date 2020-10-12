import React from 'react';
import { InformationPanel } from './InformationPanel';
import { ControlPanel } from './ControlPanel';

function SideBar() {
    return (
      <div className="containerSideBar">
          <InformationPanel />
          <ControlPanel />
      </div>
    );
}

export { SideBar };
