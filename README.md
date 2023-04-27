# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application(SPA) to track students interviews built with the latest tools and techniques for optimized user experience. The App allows users to add, edit and delete appointments in real time. It uses React built-in and custom hooks Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Moreover, for quality assurance, the project follows best practices of Test Driven Development (TDD).i.e, individual Component is tested in isolation as well as End-to-End testing is performed.

## Project Features
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data.

## Final Product

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress

```sh
npm run cypress
```

## API server and Database Setup

For full functionality both must run concurrently: the client and the API server applications.

- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start

- For cypress test:
- - copy .env.developement in scheduler-api as .env.test
- - create new database scheduler_test
- - following the same steps with developement
