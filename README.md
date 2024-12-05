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
### 3. Connection between database and server.
  - The connection is typically made at the start of the server, where the connection string is specified.
  - Once connected, the server can perform various operations like reading, inserting, updating, or deleting data in the MongoDB database.
### 4. Error handler 
  - The ErrorHandler.js catches errors that occur during the execution of the application, such as database connection issues, bad API requests, or server misconfigurations.
  - The StackCaptureTrace() logs the error and provides a structured response to the client, including the error message and information about where the error occurred (e.g., the file name where the error originated).