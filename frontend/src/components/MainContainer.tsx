import React, { useEffect, useState } from 'react';
import './MainContainer.scss';
import Accounts from './Accounts';
import Repos from './Repos';
import PullRequests from './PullRequests';
import BonusElements from './BonusElements';
import { User, PullRequest, Repo } from '../clients/github/types';
import { getUser } from '../clients/github/github';

const USERNAMES: string[] = [
  "twpayne", 
  "asim",
  "pepelsbey"
]

function MainContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);

  useEffect(() => {
    console.log('hook');
    const users: Promise<User>[] = USERNAMES.map((username: string) => {
      console.log('getting user', username);
      return getUser(username);
    })

    Promise.all(users).then((users: User[]) => {
       setUsers(users)
    });
  }, [setUsers]);

  return (
    <div className="MainContainer">
      <div className="MainContainer-columns">
        <Accounts users={users}/>
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
