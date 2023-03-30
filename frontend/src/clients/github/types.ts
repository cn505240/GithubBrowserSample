import PullRequests from "../../components/PullRequests";

export interface User {
    login: string;
    name: string;
}

export interface UserResponse {
    user: User;
}

export interface Repo {
    name: string;
}

export interface ReposResponse {
    repos: Repo[];
}

export interface PullRequest {
    number: number;
    title: string;
    created_at: Date;
}

export interface PullRequestsResponse {
    pullRequests: PullRequest[];
}