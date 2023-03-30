import React from 'react';
import './MainContainer.scss';
import Accounts from './Accounts';
import Repos from './Repos';
import PullRequests from './PullRequests';
import BonusElements from './BonusElements';

function MainContainer() {
  return (
    <div className="MainContainer">
      <div className="MainContainer-columns">
        <Accounts/>
        <div className="MainContainer-repos-and-prs">
          <Repos/>
          <PullRequests/>
        </div>
      </div>
      <BonusElements/>
    </div>
  );
}

export default MainContainer;
