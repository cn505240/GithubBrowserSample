import React from 'react';
import { Repo } from '../clients/github/types';
import './Repos.scss';

interface ReposProps {
  repos: Repo[]
  setSelectedRepo: (repo: Repo) => void
}

function Repos(props: ReposProps) {
  return (
    <div className="Repos">
      <ul>
        {props.repos.map((repo) => (
          <li className="Repos-repo" key={repo.name} onClick={() => props.setSelectedRepo(repo)}>
            <span>{repo.name}</span>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default Repos;