# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application (SPA) designed to optimize user experience when tracking student interviews. The App allows real-time appointment management, with users able to add, edit, and delete appointments seamlessly. The application is built using the latest tools and techniques, including - React's built-in and custom hooks, and is backed by a PostgreSQL database. The client application communicates with an API server using the JSON format over HTTP. Additionally, the project adheres to best practices in Test Driven Development (TDD), with each component tested in isolation, as well as End-to-End - testing for quality assurance.

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

- User can switch bewtten weekdays and view appointments and available spots.

![](https://github.com/angelren1220/scheduler/blob/master/docs/view.gif)

- User can book an appointment. The form validates the information and then updates data.

![](https://github.com/angelren1220/scheduler/blob/master/docs/add.gif)

- User can cancel an appointment.

![](https://github.com/angelren1220/scheduler/blob/master/docs/delete.gif)

- User can edit an appointment. 

![](https://github.com/angelren1220/scheduler/blob/master/docs/edit.gif)

- If there is an error, edit and cancel will not proceed.

![](https://github.com/angelren1220/scheduler/blob/master/docs/error.gif)

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

## Running - Storybook Visual Testbed

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
  - copy .env.developement in scheduler-api as .env.test
  - create new database scheduler_test
  - follow the same steps with developement


## Project Stack
- Front-End: - React, Axios, JSX, HTML, SASS, JavaScript

- Back-End: Express, Node.js, PostgreSQL

- - Testing: - Storybook, Webpack Dev Server, Jest, - Testing Library and Cypress

## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer