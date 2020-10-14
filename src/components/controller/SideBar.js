import React from 'react';
import { Panel } from './Panel';
import { Button } from './input/Button';

function SideBar() {
    return (
      <div >
          <Panel>
              <h2 className='subTitle'> Information Panel </h2>
              <p> The <b>N Body Simulation</b> is degined to represent collisions and interactions between <span className='acc'>N</span> objects. </p>
          </Panel>
          <Panel>
              <h2 className='subTitle'> Controls </h2>
              <Button className='startButton'/>
          </Panel>
      </div>
    );
}

export { SideBar };
