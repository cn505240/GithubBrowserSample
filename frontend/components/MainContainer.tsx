import React from 'react';
import './MainContainer.scss';
import Accounts from './Accounts';
import Repos from './Repos';
import PullRequests from './PullRequests';
import BonusElements from './BonusElements';

function MainContainer() {
  return (
    <div className="MainContainer">
      <div>
        <Accounts/>
        <div>
          <Repos/>
          <PullRequests/>
        </div>
      </div>
      <BonusElements/>
    </div>
  );
}

export default MainContainer;
