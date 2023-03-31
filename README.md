
# Simple CRUD Application with Node.js and In-Memory Storage

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and in-memory storage. It includes an auto sequential ID generator for new entries.

## Getting Started

To run this project, follow the steps below:

1.  Clone the repository to your local machine
2.  Navigate to the project root in your terminal
3.  Install the dependencies using `npm install`
4.  Start the server using `node server.js`

The server will be running on `http://localhost:3001`

## API Endpoints

The following endpoints are available:

### `GET /notes`

Returns a list of all notes.

### `POST /notes`

Creates a new note.

### `PUT /notes/:id`

Updates the note with the specified ID.

### `DELETE /notes/:id`

Deletes the note with the specified ID.

## Postman Collection

A Postman collection is included in the project files to help you consume the endpoints.

## Dependencies

This project requires the following dependencies:

-   `babel/polyfill`
-   `body-parser`
-   `cors`
-   `express`
-   `memorystorage`
-   `sequential-ids`

These dependencies are listed in the `package.json` file and will be installed automatically when running `npm install`.
