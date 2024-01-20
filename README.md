# Fyle Web Development Internship Challenge

## Overview

This project is a solution to the Fyle Web Development Internship Challenge. 
It implements a GitHub repositories listing page with server-side pagination, 
loader animations, and an optional search bar using HTML, CSS, and JavaScript with Bootstrap and jQuery.

## Assumptions

- The GitHub API endpoint for retrieving user repositories is assumed to be `https://api.github.com/users/{username}/repos`.
- The pagination parameters for the GitHub API are assumed to be `per_page` for the number of repositories per page and `page` for the current page.
- Loader animations are assumed to be simple spinners indicating that API calls are in progress.

## How to Run Locally

1. Clone the repository to your local machine
2. Navigate to the project directory:
3. Open the index.html file in your preferred web browser

Instructions
The main page displays a list of public repositories for a specific GitHub user.
Pagination is implemented using server-side logic.
By default, 10 repositories are displayed per page.
You can choose to display 100 repositories per page using the pagination buttons.
A loader animation is displayed during API calls.
Optionally, you can use the search bar to filter repositories based on their names.

