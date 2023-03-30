export interface User {
    login: string;
    name: string;
}

export interface Repo {
    name: string;
}

export interface PullRequest {
    number: number;
    title: string;
    created_at: Date;
}