import React from 'react';
import { Panel } from './Panel';
import { Button } from './input/Button';
import playIcon from '../../css/icons/play_arrow-24px.svg';
import pauseIcon from '../../css/icons/pause-24px.svg';
import resetIcon from '../../css/icons/reset-24px.svg';

function SideBar() {
    return (
      <div>
          <Panel title='Information Panel'>
              <p> The <b>N Body Simulation</b> is degined to represent collisions and interactions between <span className='acc'>N</span> objects. </p>
          </Panel>
          <Panel title='Controls'>
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
          </Panel>
      </div>
    );
}

export { SideBar };
