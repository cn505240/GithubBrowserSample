import { Router } from 'express';
import GithubController from '../controllers/githubController';

interface IGithubRouterArgs {
  githubController: GithubController;
}

function createGithubRouter(services: IGithubRouterArgs) {
  const githubRouter = Router();

  githubRouter.get('/:username', services.githubController.getUser);
  githubRouter.get('/:username/repos', services.githubController.getUserRepos);
  githubRouter.get('/:username/repos/:repo/pulls', services.githubController.getRepoPullRequests);

  return githubRouter;
}

export default createGithubRouter;
