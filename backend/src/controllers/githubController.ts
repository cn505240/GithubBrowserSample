import { Logger } from 'winston';
import { Request, Response } from 'express';
import { autobind as Autobind } from 'core-decorators';
import GithubClient from '../clients/github/client';

interface IGithubControllerArgs {
  logger: Logger;
  githubClient: GithubClient;
}

class GithubController {
  private readonly logger: Logger;
  private readonly githubClient: GithubClient;

  constructor(services: IGithubControllerArgs) {
    this.logger = services.logger;
    this.githubClient = services.githubClient;
  }

  @Autobind
  public async getUser(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const { username } = req.params;
    const userRes: User = await this.githubClient.getUser(username);

    const user: User = {
      login: userRes.login,
      name: userRes.name
    }
    return res.json({user});
  }

  @Autobind
  public async getUserRepos(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const { username } = req.params;
    const reposRes: Repo[] = await this.githubClient.getUserRepos(username);

    const repos: Repo[] = reposRes.map((repo: Repo) => {
      return {
        name: repo.name
      }
    });
    return res.json({ repos });
  }

  @Autobind
  public async getRepoPullRequests(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const { username, repo } = req.params;
    const pullRequestsRes: PullRequest[] = await this.githubClient.getRepoPullRequests(username, repo);

    const pullRequests: PullRequest[] = pullRequestsRes.map((pullRequest: PullRequest) => {
      return {
        number: pullRequest.number,
        title: pullRequest.title,
        created_at: new Date(pullRequest.created_at)
      }
    });
    return res.json({ pullRequests });
  }
}

export default GithubController;
