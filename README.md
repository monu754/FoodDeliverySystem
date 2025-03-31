# Food Delivery App

A full-stack Food Delivery App built using **Spring Boot (Java)** for the backend and **HTML, CSS, JavaScript** for the frontend. This application allows users to browse food items, place orders, and manage authentication.

## Technologies Used

### Backend:
- **Java** (Spring Boot)
- **Spring Boot** (REST API)
- **Spring Security** (Authentication & Authorization)
- **MySQL** (Database)
- **Spring Data JPA** (Database Access)
- **Maven** (Dependency Management)

### Frontend:
- **HTML** (Structure)
- **CSS** (Styling)
- **JavaScript** (Client-side Logic & API Calls)

### Tools & Platforms:
- **Postman** (API Testing)
- **VS Code** / **IntelliJ IDEA** (Code Editor)
- **MySQL Workbench** (Database Management)
- **Git & GitHub** (Version Control)

## Features
- User Authentication (Signup/Login)
- Browse Food Items
- Add to Cart & Place Orders
- RESTful API for frontend integration

## Installation & Setup

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/food-delivery-app.git
   cd food-delivery-app
   ```
2. Configure **application.properties** with your MySQL database credentials.
3. Build and run the application using Maven:
   ```sh
   mvn clean package
   mvn spring-boot:run
   ```
4. API will be available at: `http://localhost:8080`

### Database Setup (MySQL)
1. Create a database in MySQL:
   ```sql
   CREATE DATABASE fooddelivery;
   ```
2. Ensure MySQL is running and update the connection details in **application.properties**.
3. Run the application to automatically create tables.

### Frontend Setup
1. Open `index.html` in a browser.
2. Ensure `script.js` is correctly calling the backend API.

## API Endpoints
- `GET /api/foods` → Fetch all available food items
- `POST /api/auth/signup` → Register a new user
- `POST /api/auth/login` → Login user
- `POST /api/orders` → Place an order

## Contributing
Feel free to contribute by creating issues and pull requests. Suggestions are welcome!


---
### Author: Manotosh Mandal 
