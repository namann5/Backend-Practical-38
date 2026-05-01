# Student REST API

This is a basic REST API made using Express.js.
It is used to manage student data.

## Features

- Get all students
- Get student by id
- Add new student
- Update student
- Delete student

## How to run

Install dependencies:
npm install

Run server:
node app.js

Server will run on:
http://localhost:3000

## Routes

GET /students  
GET /students/:id  
POST /students  
PUT /students/:id  
DELETE /students/:id  


- Data is stored in array (no database)
- Only Express is used
- Basic error handling is added
