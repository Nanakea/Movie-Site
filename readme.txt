
# Building a Movie-Based Application with NestJS

This repository provides an example of building a movie-based application using NestJS, a powerful framework for building scalable and maintainable server-side applications with TypeScript. The application allows users to manage and interact with movie data through REST API endpoints and GraphQL.

## Disclaimer
- My docker is currently making me unavailable to run it so I haven't tested it yet. But this repository is having 0 errors with clear coding style.

## Prerequisites
- Node.js and npm (or yarn) installed on your machine
- Basic knowledge of TypeScript, NestJS, and database concepts
- A working PostgreSQL database or Docker installed for running a containerized database

## Getting Started
Follow the steps below to set up the project and run the application locally:

### Step 1: Set up a NestJS project
Install the NestJS CLI globally by running the command:

npm install -g @nestjs/cli
Create a new NestJS project by executing:
```
nest new movie-app
```
Change into the project directory using:
```
cd movie-app
```
### Step 2: Set up the database
Ensure that you have PostgreSQL installed and running on your machine. Alternatively, you can install Docker and run a PostgreSQL container.
Create a new PostgreSQL database for your application.
Step 3: Set up TypeORM and create entities
Install the required dependencies by running:
```
npm install typeorm pg
```
Configure the database connection in the ormconfig.json file.
Create entity classes for the Movie, Favorite, and User models using decorators provided by TypeORM.
### Step 4: Implement authentication using JWT and PassportJS
Install the required dependencies by running:
```
npm install @nestjs/passport passport passport-local passport-jwt bcryptjs
```
Implement a User entity with necessary fields (e.g., username, password).
Create an AuthService for handling authentication logic using JWT and PassportJS.
Implement a local strategy and a JWT strategy for PassportJS.
### Step 5: Implement REST API Endpoints
Create controllers for movies, favorites, and users using NestJS decorators.
Define the necessary routes and handlers for CRUD operations and any additional functionality required.
Implement necessary services for handling business logic and interacting with the database.
### Step 6: Set up an email service
Install the required dependencies for email functionality by running:
Copy code
npm install nodemailer nodemailer-smtp-transport
Configure the SMTP service, such as Ethereal Email (https://ethereal.email/), in the EmailService class.
Implement methods in the EmailService class for sending emails for user registration, password reset, and email verification.
### Step 7: Implement GraphQL (Bonus)
Install the required dependencies by running:
```
npm install @nestjs/graphql graphql-tools graphql apollo-server-express
```
Create GraphQL schema and resolvers for movies, favorites, and users.
Define the queries, mutations, and types as per your requirements.

### Step 8: Implement Docker Support
Create a Dockerfile and a docker-compose.yml file in the root of your project.
Configure the Dockerfile to build and run your NestJS application.
Configure the docker-compose.yml file to run your NestJS application and a PostgreSQL container.
### Step 9: Implement Tests (Bonus)
Install the required dependencies for testing, such as Jest and any additional testing libraries, by running:
```
npm install --save-dev jest @types/jest
```
Currently only have testing code on movies.service.spec.ts, it is for unit tests as my docker is broken and unable to run it myself to try to do integration tests.

Run the tests using the 
```npm test``` 
or 
```
yarn test
```
command.

Start the application by running the following command:
```
npm run start:dev
```