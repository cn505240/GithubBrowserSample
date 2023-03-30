import axios from 'axios';
import { PullRequest, Repo, User } from './types';

const BASE_URL = 'http://localhost:3000/api/v1/github';

// GET /api/v1/github/:username
export const getUser = async (username: string): Promise<User> => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};

// GET /api/v1/github/:username/repos
export const getUserRepos = async (username: string): Promise<Repo[]> => {
  const response = await axios.get(`${BASE_URL}/${username}/repos`);
  return response.data;
};

// GET /api/v1/github/:username/repos/:repo/pulls
export const getRepoPulls = async (username: string, repo: string): Promise<PullRequest[]> => {
  const response = await axios.get(`${BASE_URL}/${username}/repos/${repo}/pulls`);
  return response.data;
};