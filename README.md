# Job Portal Management System

Build a simple backend application using Node.js, Express.js, MongoDB, and Mongoose.

The application supports three types of users:

1. Job Seekers
2. Employers
3. Admins

## Job Seeker

A Job Seeker can:

* Register and login
* Manage profile information
* View available jobs
* Apply for jobs
* View their applications

## Employer

An Employer can:

* Register and login
* Create jobs
* Update their own jobs
* Delete their own jobs
* View applications for their jobs
* Update application status

## Admin

An Admin can:

* Manage users
* Manage jobs
* Manage applications
* View platform summary

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* HTTP-only Cookies
* Postman

## Main Collections

The application uses three main collections:

1. Users
2. Jobs
3. Applications

### Users

A User contains:

* name
* email
* password
* role
* skills
* experience
* education
* status

The available roles are:

* jobseeker
* employer
* admin

### Jobs

A Job contains:

* title
* companyName
* description
* location
* employmentType
* salaryMin
* salaryMax
* requiredSkills
* experienceRequirement
* postedDate
* applicationDeadline
* status
* employer

### Applications

An Application contains:

* job
* jobSeeker
* resume
* coverLetter
* status

## Authentication

The application uses JWT authentication with HTTP-only cookies.

Passwords are hashed using bcryptjs before being stored in the database.

Role-based access control is used to restrict features based on the user's role.

## Running the Application

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB connection and JWT settings.

Start the application:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:4000
```

Postman can be used to test the available API endpoints.
