# Fantasy Football Frontend

This project is a frontend implementation for a fantasy football web application built using React, Redux, and other associated libraries. The application allows users to create, manage, and view their fantasy football teams, as well as view statistics, team standings, and player information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

1. Clone the repository:

_git clone https://github.com/davidpiper89/fantasyfrontendgroup.git_

2. Navigate to the project folder:

_cd fantasyfrontendgroup_

3. Install dependencies:

_npm install_

4. Start the development server:

_npm start_

The application will be accessible at `http://localhost:3000`.

## Usage

### Sign Up and Login

Users can sign up for an account and log in to access the application's features. After logging in, users can manage their fantasy football teams, view statistics, and interact with the application.

### Home Page

The home page provides an overview of the user's fantasy football team, displaying information such as team name, players, and total points.

### Account Page

The account page allows users to manage their account settings, such as updating their email address, changing their password, and selecting an avatar.

### Your Team Page

The "Your Team" page allows users to create and manage their fantasy football team. Users can add and remove players, view player statistics, and save their team lineup.

### User League Table Page

The "User League Table" page displays the standings of all the users in the fantasy football league. Users can view their position, total points, and other relevant information.

### Team Stats Page

The "Team Stats" page provides detailed statistics about each team in the league, including the number of goals scored, assists, and clean sheets.

### Components

The project is organized into several components, including the header, footer, home, account, your-team, user-league-table, team-stats, and modal components. Each component is responsible for rendering a specific part of the application.

### State Management

Redux is used for state management, with a `footballSlice` managing the global state of the application. This slice contains actions, reducers, and selectors for managing user data, football data, and other application state.

## Features

- User account management (sign up, login, update settings)
- Fantasy football team creation and management
- Detailed player and team statistics
- League standings and information
- Responsive design
