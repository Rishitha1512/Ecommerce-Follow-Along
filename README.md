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
