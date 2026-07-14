# UCab Backend API Service

This directory houses the secure business logic layer, operational endpoints, and schema declarations driving the UCab ecosystem.

## Modular Setup Architecture
- **`controllers/`**: Coordinates logical queries, cryptographic hashing via `bcryptjs`, and server token outputs.
- **`models/`**: Implements structured Mongoose schemas enforcing rigid rules for `User`, `Admin`, `Car`, and `Booking` fields.
- **`routes/`**: Handles request pipelines, routing operations straight into logical system endpoints.
- **`middlewares/`**: Implements authentication validation utilizing JSON Web Tokens (JWT).

## Installation & Setup
1. Move to the directory: `cd backend`
2. Install packages: `npm install`
3. Launch execution: `node server.js`