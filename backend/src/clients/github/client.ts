import axios from "axios";
import { Config } from "../../../config/config";

class GithubClient {
    private readonly host: string;
    constructor(config: Config) {
        this.host = config.githubApiUrl;
    }

    public async getUser(username: string): Promise<Account[]> {
        const response = await axios.get(`${this.host}/users/${username}`);
        return response.data;
    }

    public async getUserRepos(username: string): Promise<Repo[]> {
        const response = await axios.get(`${this.host}/users/${username}/repos`);
        return response.data;
    }

    public async getRepoPullRequests(username: string, repo: string): Promise<PullRequest[]> {
        const response = await axios.get(`${this.host}/repos/${username}/${repo}/pulls`);
        return response.data;
    }
}
