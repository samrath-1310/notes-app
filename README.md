# Student Notes CRUD Micro-App

## Student Information

* Student Name: SAMRATH SINGH
* Student Rollno: 2026202004 
* GitHub Repository: https://github.com/samrath-1310/notes-app.git

## Project Description

This project is a Student Notes CRUD Micro-App built using the MERN stack.

The application allows users to:

* Add notes
* View all notes
* Delete notes
* View the date and time when a note was created

## Technologies Used

* React
* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios
* Vite

## Project Structure

```text
notes-app/
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── package.json
│   └── server.js
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB

## Setup Instructions

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
cd notes-app
```

### 2. Install server dependencies

Open a terminal in the `server` folder:

```bash
cd server
npm install
```

### 3. Install client dependencies

Open another terminal and go to the `client` folder:

```bash
cd client
npm install
```

### 4. Start MongoDB

Make sure the MongoDB service is running on the local machine.

The application uses the following MongoDB database:

```text
mongodb://localhost:27017/notes_db
```

### 5. Start the backend server

Inside the `server` folder:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Start the React frontend

Inside the `client` folder:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

### 7. Open the application

Open the following address in a browser:

```text
http://localhost:5173
```

## API Endpoints

### Create a Note

```text
POST /api/notes
```

### Get All Notes

```text
GET /api/notes
```

### Delete a Note

```text
DELETE /api/notes/:id
```

## Database

The application uses MongoDB with the database:

```text
notes_db
```

The Note model contains:

* `title` — String, required
* `content` — String, required
* `createdAt` — Date, default `Date.now`

## Screenshots

The `screenshots` folder contains screenshots demonstrating:

1. Two notes displayed in the application.
2. A successful note deletion with the HTTP `200` response visible in the browser DevTools Network tab.
