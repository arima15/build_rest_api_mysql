# REST-API-with-TypeScript-Activity

## Core Components

### Main Application (app.ts)
The entry point configures Express server with middleware for:
- JSON parsing
- CORS support
- Environment variables
- API routes

### User Management
Handles user operations with the following features:
- User registration with password hashing
- Authentication
- CRUD operations
- Data persistence in users.json

### Product Management
Manages product inventory with:
- Product creation
- Inventory updates
- Product queries
- Data persistence in products.json

## API Endpoints

### User Endpoints
- `GET /users` - List all users
- `GET /user/:id` - Get specific user
- `POST /register` - Create new user
- `POST /login` - Authenticate user
- `PUT /user/:id` - Update user
- `DELETE /user/:id` - Remove user

### Product Endpoints
- `GET /products` - List all products
- `GET /product/:id` - Get specific product
- `POST /product` - Create new product
- `PUT /product/:id` - Update product
- `DELETE /product/:id` - Remove product

## Data Storage
The application uses file-based storage:
- `users.json`: Stores user data with encrypted passwords
- `products.json`: Stores product inventory information

## Technologies Used
- TypeScript
- Express.js
- bcryptjs (password hashing)
- UUID (unique ID generation)
- dotenv (environment configuration)
- CORS (Cross-Origin Resource Sharing)
- HTTP Status Codes

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file with:
```
PORT=8000
```

3. Start development server:
```bash
npm run dev
```

## Security Features
- Password hashing using bcrypt
- CORS protection
- Helmet security headers
- Input validation
- Error handling

## Error Handling
The API implements comprehensive error handling with appropriate HTTP status codes for:
- Invalid requests
- Authentication failures
- Resource not found
- Server errors

## Data Interfaces
The application uses TypeScript interfaces for type safety and data validation. Key interfaces include:
- User/UnitUser for user management
- Product/UnitProduct for product management

For detailed implementation, refer to the interface files in the respective directories.
