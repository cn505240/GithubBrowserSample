import React from 'react';
import { PullRequest } from '../clients/github/types';
import './PullRequests.scss';

interface PullRequestsProps {
  pullRequests: PullRequest[]
}

function PullRequests(props: PullRequestsProps) {

  function colourClass(pullRequest: PullRequest) {
    const fiveDaysAgo: Date = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    console.log(fiveDaysAgo);

    const twoDaysAgo: Date = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    console.log(twoDaysAgo);

    console.log(pullRequest.created_at);
    
    if (pullRequest.created_at < fiveDaysAgo) {
      console.log('more than 5');
      return "PullRequests-red";
    } else if (pullRequest.created_at < twoDaysAgo) {
      console.log('more than 2');
      return "PullRequests-yellow";
    }

    return "";
  }

  return (
    <div className="PullRequests">
      <ul>
        {props.pullRequests.map((pullRequest) => (
          <li key={pullRequest.number} className={`PullRequests-pr ${colourClass(pullRequest)}`}>
            <span>{pullRequest.title}</span>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default PullRequests;