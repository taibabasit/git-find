### GitFind : Github User Profile Viewer

GitFind is a simple web application that allows you to search for a Github user and view their profile information. It uses the Github API to fetch user data.

Frontend is built using React and Bootstrap. Backend is built using NestJS.

### Instructions to run the application
1. Directly from the repository
    - Clone the repository. 
    - To run the frontend
        - `cd git-find-frontend`
        - Run `npm install`
        - Run `npm start`
        - Open `http://localhost:3000` in your browser
    - To run the backend
        - `cd git-find-backend`
        - Run `npm install`
        - Run `npm start`
        - Open `http://localhost:3333` in your browser
2. Using Docker
    - The image name for frontend is `taibabasit/git-find-frontend:latest`
    - The image name for backend is `taibabasit/git-find-backend:latest`
    - docker-compose.yml file can be used directly to run the application
    - Run `docker-compose up`
    - Frontend runs on `http://localhost:3000` in your browser
    - Backend runs on `http://localhost:3333` in your browser