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
## Milestone 5: Creating the Signup page

### 1. **Created a Signup Page**
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
## Milestone 6: 
### 1. **Generate JWT Token for the User at Signup**
   - After user signup, generate a JWT token using the `jsonwebtoken` library.
   - Include user-specific information (e.g., email or user ID).

### 2. **Create a Verification Link with the Token**
   - Once the JWT token is created, generate a URL with the token.
   - This URL will be sent to the user's email for verification.

### 3. **Configure Nodemailer to Send the Email**
   - Set up Nodemailer with an email provider (e.g., Gmail, SMTP).
   - Send an email to the user containing the verification link.

### 4. **Create an Endpoint to Verify the Token**
   - Create a `/verify-email` endpoint that accepts the token as a query parameter.
   - Use the `jsonwebtoken` library to decode and verify the token.
   - If valid, mark the user’s email as verified. If invalid or expired, return an error message.
## Milestone 7:
### Signup Route:

### 1. **Input**: The user provides their `name`, `email`, and `password`.
### 2. **Check if user exists**: 
   - If the user is already in the database, a message is returned stating "User is already present" and prompts for direct login.
   - If the user is not found, the password is hashed using a secure hashing algorithm (like **Bcrypt.js** or **Argon2.js**).
### 3. **Create a new user**: Store the `name`, `email`, and `hashed password` in the database.

### Login Route

### 1. **Input**: The user provides their `email` and `password`.
### 2. **Check credentials**:
   - If the email exists in the database, the entered password is compared with the stored hash.
   - If credentials match, a **token** is generated and sent as a **cookie** for future authenticated requests.
   - If the email is not found or the password doesn't match, the response will indicate the need to **Signup first**.

### Key Features

- **User Authentication**: Securely handle user signup and login.
- **Password Hashing**: Use hashing algorithms like Bcrypt.js or Argon2.js to securely store passwords.
- **Token-based Authentication**: Use JWT tokens to authenticate users after login and store the token as a cookie.
## Milestone 8:
### 1. **Home Page**:
   - Displays a grid of product cards using dummy data.
   - Each card has a product title, image, description, rating, and price.
   
### 2. **Card Component**:
   - Represents an individual product with details like:
     - **Title**: Displays the product name.
     - **Image**: Displays a sample product image.
     - **Price**: Shows the current and discounted prices.
     - **Discount Badge**: A label indicating a discount percentage.
     - **Add to Cart Button**: An interactive button for adding the product to the cart.

### 3. **Grid Layout**:
   - The Home Page uses a 3-column grid layout to display the products.
   - Dummy data is used to fill the product details like title, price, and image.

## Milestone 9:

### Features
- **Product Entry Form** with fields for:
  - Title
  - Description
  - Discounted Price
  - Original Price
  - Quantity
  - Category
  - Rating
  - Multiple Image Uploads
- **Form Validation** to ensure all required fields are filled.
- **Axios Integration** for making a POST request to the backend.
- **Image Upload** using `FormData` for handling file uploads.

### Technologies Used
- **React**: For building the product entry form and managing state.
- **Axios**: To send product data to the backend server.
- **Tailwind CSS**: For styling the form and ensuring a clean, responsive layout.
- **JavaScript (ES6)**: For form handling and network requests.

### How It Works
1. The user fills in the product information (title, description, price, etc.) and uploads images.
2. Upon submitting the form, the data is gathered and validated.
3. The form data, including image files, is sent as a **POST** request using **Axios** to the backend for processing.

## Milestone 10:

### 1. **Schema**:
  - Added the schema for the the products.
### 2. **Cloudinary Integration**:
   - Images uploaded by the user are sent to **Cloudinary**, a cloud-based storage service, for secure and scalable image hosting.
   - Once uploaded, Cloudinary returns a URL for each image, which is saved in the product schema along with other product details.

### 3. **Multer Integration**:
   - **Multer** is used for handling file uploads on the backend. It processes multi-part form data, allowing the user to upload product images as part of the product creation process.
   - Multer handles image validation and storage, then forwards the images to Cloudinary.
