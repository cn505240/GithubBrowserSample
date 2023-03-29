interface User {
    login: string;
    name: string;
}

interface Repo {
    name: string;
}

interface PullRequest {
    number: number;
    title: string;
    created_at: Date;
}