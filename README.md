# Spring Boot and React JS CRUD Application
This repository contains a Full-Stack Web Application built with Spring Boot for the backend and React JS for the frontend. The application provides APIs for performing CRUD (Create, Read, Update, Delete) operations on data and displays the results on the frontend interface.

# Technologies Used
Backend
1. Spring Boot: Provides the backend framework for handling HTTP requests, business logic, and data persistence.
2. Spring Data JPA: Simplifies database access and management using Java Persistence API (JPA).
3. Spring Web: Enables the creation of RESTful APIs to handle HTTP requests.
4. MySQL (or any other database of choice): Used for storing and managing application data.

Frontend
1. React JS: JavaScript library for building user interfaces, allowing for dynamic and interactive frontend components.
2. React Router: Facilitates client-side routing to navigate between different views in the application.
3. Axios: A promise-based HTTP client for making asynchronous API calls from the frontend to the backend.
4. Reactstrap: Provides Bootstrap components as React components for designing the UI.
5. Toastify: Adds notification pop-ups (toasts) for user feedback, enhancing the user experience.

# Features
1. CRUD Operations: The application supports Create, Read, Update, and Delete operations on data entities.
2. RESTful APIs: Backend APIs are designed following RESTful principles, allowing for seamless communication between the frontend and backend.
3. React Router: Enables client-side routing, ensuring a single-page application (SPA) experience with smooth navigation.
4. Axios Integration: Handles asynchronous data fetching and sending requests to the backend APIs.
5. Reactstrap and Toastify: Enhance the UI by providing Bootstrap-based components and user-friendly notification pop-ups.

# How to Run
Clone the repository to your local machine.
Set up the backend
1. Navigate to the backend directory.
2. Configure the database settings in application.properties.
3. Run mvn spring-boot:run to start the Spring Boot backend server.
Set up the frontend
1. Navigate to the frontend directory.
2. Install dependencies using npm install or yarn install.
3. Start the frontend server with npm start or yarn start.
4. Access the application in your web browser at http://localhost:3000.
