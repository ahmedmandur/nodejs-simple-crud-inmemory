Simple CRUD Application with Node.js and In-Memory Storage
This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and in-memory storage. It includes an auto sequential ID generator for new entries.

Getting Started
To run this project, follow the steps below:

Clone the repository to your local machine
Navigate to the project root in your terminal
Install the dependencies using npm install
Start the server using node server.js
The server will be running on http://localhost:3001

API Endpoints
The following endpoints are available:

GET /items
Returns a list of all items.

GET /items/:id
Returns the item with the specified ID.

POST /items
Creates a new item.

PUT /items/:id
Updates the item with the specified ID.

DELETE /items/:id
Deletes the item with the specified ID.

Postman Collection
A Postman collection is included in the project files to help you consume the endpoints.

Dependencies
This project requires the following dependencies:

babel/polyfill
body-parser
cors
express
memorystorage
sequential-ids
These dependencies are listed in the package.json file and will be installed automatically when running npm install.
