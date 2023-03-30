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

    const twoDaysAgo: Date = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    const createdAt: Date = new Date(pullRequest.created_at);
    if (createdAt < fiveDaysAgo) {
      return "PullRequests-red";
    } else if (createdAt < twoDaysAgo) {
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