import React from 'react';
import { InformationPanel } from './InformationPanel';
import { ControlPanel } from './ControlPanel';

function SideBar() {
    return (
      <div className='containerSideBar'>
          <InformationPanel>
              <h2 className='subTitle'> Information Panel </h2>
              <p> The <b>N Body Simulation</b> is degined to represent collisions and interactions between <span className='acc'>N</span> objects. </p>
          </InformationPanel>
          <ControlPanel />
      </div>
    );
}

export { SideBar };
