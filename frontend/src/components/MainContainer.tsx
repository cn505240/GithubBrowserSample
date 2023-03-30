import React, { useCallback, useEffect, useState } from 'react';
import './MainContainer.scss';
import Accounts from './Accounts';
import Repos from './Repos';
import PullRequests from './PullRequests';
import BonusElements from './BonusElements';
import { User, UserResponse, PullRequest, Repo, ReposResponse, PullRequestsResponse } from '../clients/github/types';
import { getRepoPulls, getUser, getUserRepos } from '../clients/github/github';

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
    const userResponses: Promise<UserResponse>[] = USERNAMES.map((username: string) => {
      return getUser(username);
    })

    Promise.all(userResponses).then((users: UserResponse[]) => {
      console.log(users);

      setUsers(users.map((userResponse: UserResponse) => userResponse.user));
    });
  }, [setUsers]);

  useEffect(() => {
    if (selectedUser) {
      const reposResponse = getUserRepos(selectedUser.login);

      reposResponse.then((reposResponse: ReposResponse) => {
        setRepos(reposResponse.repos);
      });
    } else {
      setRepos([])
    }
  }, [selectedUser, setRepos]);

  useEffect(() => {
    if (selectedRepo && selectedUser) {
      console.log('gonna set pull requests');
      const pullRequestsResponse = getRepoPulls(selectedUser.login, selectedRepo.name);

      pullRequestsResponse.then((pullRequestsResponse: PullRequestsResponse) => {
        console.log('setting');
        setPullRequests(pullRequestsResponse.pullRequests);
        console.log(pullRequests);
      });
    } else {
      setPullRequests([])
    }
  }, [selectedRepo, selectedUser, setPullRequests]);

  return (
    <div className="MainContainer">
      <div className="MainContainer-columns">
        <Accounts users={users} setSelectedUser={setSelectedUser}/>
        <div className="MainContainer-repos-and-prs">
          <Repos repos={repos} setSelectedRepo={setSelectedRepo}/>
          <PullRequests pullRequests={pullRequests}/>
        </div>
      </div>
      <BonusElements/>
    </div>
  );
}

export default MainContainer;
