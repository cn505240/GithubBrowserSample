# GithubBrowserSample
Sample application to view Github repositories and their PRs

## Approach

This is a pretty straightforward application. It should have a backend component responsible for retrieving data from the Github API and serving the required bits of Github's response to the frontend via REST API (could be another technology, but REST works here). It should also have a frontend component that is quite thin, only rendering the data provided by the backend and making calls to the backend REST API in response to user interactions.

Calls to the Github API from the backend should be granular, retrieving repositories and PRs only when required by the frontend. The frontend should not interact directly with the Github API. The backend should massage the data from the Github API to suit the needs of the front end, not provide unnecesary data to the frontend. The backend should also include a health check endpoint to support health monitoring.

Lastly, the system should be thoroughly tested up and down the stack. Backend tests should verify the parsing of the Github API responses and transformations into backend responses and verify each of the functional REST API endpoints individually. Frontend tests should verify that each of the components render, and that they make correct calls to the backend in response to user interaction.

## To Do List

### Backend
- [x] Node.js + Typescript + Express.js REST API (boilerplate)
- [x] Github API client
- [] Github API client tests
- [x] Heartbeat endpoint
- [] Heartbeat endpoint integration tests
- [x] List accounts endpoint
- [] List accounts endpoint integration tests
- [x] List account repositories endpoint
- [] List account repositories endpoint integration tests
- [x] List open repo PRs endpoint
- [] List open repo PRs endpoint integration tests
- [] Thorough error handling at Github client level
- [] Thorough error handling at the API level

### Frontend
- [x] React + Typescript app (boilerplate - Create React App)
- [x] Github Browser container component - provides main SPA container, manage calls to backend, pass relevant data to child components
- Jest tests for the above
- [x] Accounts list component - display retrieved accounts, support click interactions by calling prop-passed callbacks
- Jest tests for the above
- [x] Repo list component - display retrieved repositories, support click interactions by calling prop-passed callbacks
- Jest tests for the above
- [x] PR list component - display retrieved PRs, colour code by age
- Jest tests for the above
- [x] Bonus points 4 equal sized elements
- [] Error handling on API responses

