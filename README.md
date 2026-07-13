# U-cab-booking-system-
 Cab Booking System is a MERN stack web application that enables users to register, log in, book cabs, select pickup and drop locations, and manage ride history. The system includes an admin dashboard to manage users, drivers, vehicles, and bookings. It uses MongoDB, Express.js, React.js, and Node.js with secure REST APIs and responsive interface.


## Project Overview

Ucab is a full-stack web-based cab booking application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The system provides a seamless platform for users to book cabs, track rides, manage payments, and view ride history through an intuitive and responsive interface.

The application connects passengers with available drivers and enables efficient ride management through secure authentication, real-time booking updates, fare estimation, and payment processing. Ucab is designed to simplify urban transportation by offering a reliable, user-friendly, and technology-driven solution.

---

## Problem Statement

Traditional transportation booking methods often involve delays, lack of transparency, and difficulty in finding available vehicles. Users need a faster and more convenient way to book rides, track drivers, and complete payments securely.

Ucab addresses these challenges by providing a centralized online platform that allows users to book rides instantly, monitor ride status, and access booking information anytime.

---

## Objectives

* Develop a complete cab booking system using MERN Stack technologies.
* Enable secure user and driver authentication.
* Allow users to search and book nearby cabs.
* Provide fare estimation before booking confirmation.
* Maintain ride history and payment records.
* Implement role-based access control for users, drivers, and administrators.
* Create a responsive interface accessible on multiple devices.

---

## Key Features

### User Features

* User Registration and Login
* Secure Authentication using JWT
* Cab Search and Selection
* Ride Booking and Cancellation
* Fare Estimation
* Ride Tracking
* Online Payment Integration
* Booking History Management
* Profile Management

### Driver Features

* Driver Registration and Login
* Ride Acceptance and Management
* Availability Status Updates
* Ride Completion Tracking

### Admin Features

* Manage Users
* Manage Drivers
* Monitor Bookings
* View Ride Statistics
* System Administration

---

## Technologies Used

### Frontend

* React.js
* Bootstrap
* HTML5
* CSS3
* JavaScript
* Axios
* React Router

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB
* Mongoose ODM

### Development Tools

* Visual Studio Code
* Git & GitHub
* Postman
* MongoDB Compass

---

## System Architecture

The Ucab system follows the MVC (Model-View-Controller) architecture.

1. React.js provides the user interface.
2. Axios sends API requests to the Express server.
3. Express.js handles business logic and routing.
4. MongoDB stores user, driver, ride, and payment data.
5. JWT authentication secures application access.
6. Mongoose manages communication between Node.js and MongoDB.

---

## Database Design

The system consists of four major collections:

### Users Collection

Stores passenger information including registration and login details.

### Drivers Collection

Stores driver profiles, vehicle information, and availability status.

### Rides Collection

Stores ride details such as pickup location, drop location, fare, ride status, user ID, and driver ID.

### Payments Collection

Stores payment details associated with completed rides.

---

## Project Workflow

1. User registers or logs into the application.
2. User enters pickup and destination locations.
3. System displays available cabs and estimated fares.
4. User selects a preferred cab and confirms the booking.
5. Driver receives the booking request.
6. Ride status is updated in real time.
7. User completes payment after the ride.
8. Ride details are saved in booking history.

---

## Advantages

* Fast and convenient ride booking.
* Secure authentication and data protection.
* Real-time ride management.
* Responsive user interface.
* Scalable MERN Stack architecture.
* Easy maintenance and future enhancements.

---

## Future Enhancements

* Live GPS Tracking using Google Maps API.
* AI-based Fare Prediction.
* Driver Rating and Review System.
* SOS Emergency Feature.
* Ride Sharing Functionality.
* Push Notifications.
* Mobile Application Development.

---

## Learning Outcomes

Through this project, the development team gained practical experience in:

* Full-Stack Web Development
* MongoDB Database Design
* REST API Development
* Authentication and Authorization
* CRUD Operations
* React Component Development
* GitHub Version Control
* Software Development Life Cycle (SDLC)

---

## Conclusion

Ucab is a comprehensive cab booking platform that demonstrates the practical implementation of modern web technologies. The project successfully integrates frontend development, backend services, database management, authentication, and user interaction into a single scalable application. It serves as an excellent real-world example of a MERN Stack application and provides valuable experience in full-stack software development.

