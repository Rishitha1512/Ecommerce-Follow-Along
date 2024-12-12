# Ecommerce Applications
## Milestone 1: Project Overview
### 1. Authentication:
- Login: Users can log in using their email/username and password.
- Logout: Users can log out from their account.
- Signup: New users can create an account by providing necessary details such as name, email, password, and contact information.
### 2. Product Page:
- Product Listings: Display a catalog of products available for purchase.
- Product Details: Each product will have a detailed page showcasing product images, price, description, specifications, and availability.
- Search & Filter: Users can search products by name, category, or price range. Filters allow sorting by price, popularity, or new arrivals.
### 3. Orders Page:
- Order Tracking: Users can view all their orders in a dedicated “Orders” page. Each order will display details like order number, product name, quantity and price
### 4. Payment gateway:
- Users can view payment details of their purchase

## Milestone 2: Project Setup and Login Page
### 1. Setting up Front End
- created a folder for front end and added the following:
  1. tailwind CSS (made changes in tailwind.config.js, index.css and App.css)
  2. React (npm create vite@latest frontend)
### 2. Setting up Back End
- npm init || npm init -y
- Installed the follwing packages:
   1. Nodemon: A utility that automatically restarts the Node.js server when file changes are detected, useful for development. (npm i nodemon)
   2. Express: A fast, unopinionated web framework for Node.js, designed to build APIs and web applications. (npm i express)
   3. CORS: A middleware that allows or restricts cross-origin requests in a web application, ensuring secure data sharing between different domains. (npm i cors)
   4. Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js that provides a straightforward way to interact with a MongoDB database using schemas. (npm i mongoose)

### 3. Setting up Login page
   Created a login page with two input fields for email and password along with a log in button. Used use state to give functionality to the input fields. Used tailwind css to style the login page.

## Milestone 3: Project Setup for Backend
### 1. Setting up of nodejs server and handling the API requests.
  - Express.js is used to define the structure and route handling logic of the application.
  - API requests are processed using appropriate HTTP methods for various tasks like fetching data, creating resources, updating, or deleting them.
### 2. Connect your application to MongoDB to store and manange data.
  - Mongoose is used for managing MongoDB operations and defining data models (schemas). It simplifies the interaction with the database by providing an object data modeling (ODM) layer.
  - The application connects to the database using a connection string (MongoDB URI), which specifies the location of the MongoDB server and the database to use.
### 3. Connection between database and server
  - The connection is typically made at the start of the server, where the connection string is specified.
  - Once connected, the server can perform various operations like reading, inserting, updating, or deleting data in the MongoDB database.
### 4. Error handler 
  - The ErrorHandler.js catches errors that occur during the execution of the application, such as database connection issues, bad API requests, or server misconfigurations.
  - The StackCaptureTrace() logs the error and provides a structured response to the client, including the error message and information about where the error occurred (e.g., the file name where the error originated).
## Milestone 4: Creating User Model and Controller
### 1. User model for our database
  - The User model is a blueprint that defines the structure of user data in the database. It specifies the fields that each user will have and the data types for those fields. 
  Typically, it includes User Information: Fields like name, email, password, etc. This model is then used by the application to interact with the database, allowing for operations such as user registration, login, and updating user details.

### 2. Setting up controllers to handle user-related data
  - The controllers make sure if the email entered is unique and checks if it is already present in the database. If the email doesn't exist, it allows the user to enter his/her details again like name, email and password.
### 3. Enabling file uploads using Mutler
  - Multer is a middleware used for handling file uploads in Node.js. It is often used for managing user-uploaded files, such as profile pictures or documents. 
  - Installed multer(npm i multer).


### 1. Created a signup page
- Designed a user-friendly sign-up form with the following fields:
     - **Full Name**: A text input field for capturing the user's full name.
     - **Email Address**: A text input field for entering the user's email.
     - **Password**: A password input field for securely capturing the user's password.
     - **File Upload**: An input field that allows the user to upload a file (e.g., profile picture or document).
     - **Sign-Up Button**: A button to submit the form and initiate the sign-up process.
- Styled the page using **TailwindCSS** for a responsive and clean layout.

### 2. Created validation Object using RegEx
- Implemented client-side form validation to enhance user experience and catch errors early.
   - **Regular Expressions (RegEx)** were used for:
     - **Email Validation**: Ensured that the email is in a valid format (e.g., `user@example.com`).
     - **Password Validation**: Enforced password complexity, such as minimum length and inclusion of special characters or numbers.
     
   - Validation is triggered when the user submits the form or interacts with the input fields.
### 3. Setup React-Router for the Present Pages
- Installed **React Router DOM** by running:
     ```bash
     npm install react-router-dom
     ```
   - Configured routing with **BrowserRouter** to wrap the application, enabling navigation without page reloads.
   - Created routes for the following pages:
     - **Home Page**: The default landing page of the application.
     - **Sign-Up Page**: The page where users can fill out their details to sign up.
   - Used the `<Route>` component to define the URL paths and the corresponding components to render.
   - Added **Navigation Links** (using `<Link>`) to allow users to navigate between pages.
   - Set up the `<Routes>` component to ensure the correct page is rendered based on the URL.