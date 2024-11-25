# Burger Ordering Application

A modern burger ordering application built using Docker, Next.js, Prisma, PostgreSQL, Zustand, Next-Auth, React Query and more.

## Table of Contents

1. #overview
2. #features
3. #technical-requirements
4. #setup-and-installation
5. #usage
6. #authentication-and-authorization
7. #database-schema
8. #api-endpoints
9. #state-management
10. #contributing
11. #license

## Overview

This application allows users to browse a menu of burgers, add items to cart, and place orders. The application uses Next.js for the frontend, Prisma for database modeling, and PostgreSQL as the database. Docker is used for containerization, Zustand for state management, Next-Auth for authentication and authorization, and React Query for data fetching and caching.

## Features

- User authentication and authorization using Next-Auth
- Burger menu with images and prices
- Shopping cart with item quantity management
- Order placement with payment processing (Stripe)
- Order history and status updates
- Admin dashboard for managing menu items, orders, and users
- Real-time updates using WebSockets
- Reviews and ratings system

## Technical Requirements

- Docker
- Node.js (20.x)
- Next.js (13.x)
- Prisma (5.x)
- PostgreSQL (13.x)
- Zustand (4.x)
- Next-Auth (4.x)
- React Query (5.x)

## Setup and Installation

1. Clone the repository: ==[git clone](https://github.com/esteemayo/burgers.git)==.
2. Change into the project directory: ==cd your-repo-name==.
3. Install dependencies: ==npm install or yarn install==.
4. Create a ==.env==. file and add the following environment variables:

- DATABASE_URL: PostgreSQL database URL
- GOOGLE_ID: Google id
- GOOGLE_SECRET: Google secret key
- NEXTAUTH_SECRET: Next-Auth secret key
- NEXT_PUBLIC_DEV_API_URL: Application url in development
- NEXT_PUBLIC_PROD_API_URL: Applicaton url in production
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
- STRIPE_SECRET_KEY: Stripe secret key

5. Start the Docker containers: ==docker compose up==.
6. Run the database migrations: ==npx prisma migrate dev==.
7. Start the Next.js development server: ==npm run dev or yarn dev==.

## Usage

1. [Open a web browser and navigate to](http://localhost:3000)
2. Click on the "Login" button to authenticate using Next-Auth
3. Browse the menu and add items to your cart
4. Click on the "Checkout" button to place an order
5. Enter your payment information and complete the order

## Authentication and Authorization

This application uses Next-Auth for authentication and authorization. Users can login using their username and password, and are redirected to the home page after successful authentication. The ==NEXTAUTH_SECRET==. environment variable is used to secure the authentication process.

## Database Schema

The database schema is defined using Prisma. The schema includes the following models:

- ==User==.: Represent a user with a name, username, email, phone, state, city, street, address, password, confirmPassword, gender, image, and role,
- ==Product==.: Represent a product with a name, description, image, ingredients, isFeatured, totalRatings, ratingNumber, likes, reviews and price.
- ==Order==.: Represents an order with a user, product/menu items, price, status, and intent_id.
- ==Review==.: Represents a review with a rating, description, productId, userId, and consent.

## API Endpoints

The following API endpoints are available:

### Authentication Endpoints

- POST /api/auth/[...nextauth]: Authenticates a user and returns a JSON Web Token (JWT).
- POST /api/auth/register: Creates a new user and returns a JWT.
- PATCH /api/auth/update-my-password/:id: Updates the authenticated user password.

### User Endpoints

- GET /api/users: Returns the users data to the admin.
- GET /api/users/id: Return a single user by ID.
- PATCH /api/users/id: Updates the authenticated user's data such as name, username, email, etc. But cannot update authenticated user's password.
- DELETE /api/users/id: Deletes the authenticated user's data by the user itself or by the admin.
- DELETE /api/users/delete-me/:id: Deletes authenticated user's data by the user or admin.

### Product Endpoints

- GET /api/products: Returns a list of product items.
- GET /api/products/search: Search the product items using the product name or desc.
- GET /api/products/ingredients: Return product items that have one or more related ingredients
- GET /api/products/:id/reviews: Return reviews associated with a productId.
- GET /api/products/:id: Returns a single product item by ID.
- POST /api/products: Creates a new product item but only by the admin.
- POST /api/products/:id/reviews: Creates a new review with a productId.
- PATCH /api/products/like/:id: Handles the like functionality of a product item.
- PATCH /api/products/:id: Update a single product item by ID but only the admin is authorized.
- DELETE /api/products/:id: Delete a single product item by ID by the admin only.

### Order Endpoints

- GET /api/orders: Returns a list of orders for the authenticated admin.
- GET /api/orders/details/:intentId: Returns a single order for the authenticated user by INTENTID.
- GET /api/orders/:id: Returns a single order for the authenticated user or admin by ID.
- POST /api/orders: Creates a new order only for the authenticated user and not the admin.
- PATCH /api/orders/:id: Updates an order by the authenticated admin.
- DELETE /api/orders/:id: Deletes an order by the authenticated admin.
