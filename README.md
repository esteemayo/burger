# Burger Ordering Application

A modern burger ordering application built using Docker, Next-Auth, Next.js, PostgreSQL, Prisma, React Query, SASS, Zustand and more.

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
10. #styling
11. #contributing
12. #license

## Overview

This application allows users to browse a menu of burgers, add items to cart, and place orders. The application uses Next.js for the frontend, Prisma for database modeling, and PostgreSQL as the database. Docker is used for containerization, Zustand for state management, SASS for styling, Next-Auth for authentication and authorization, and React Query for data fetching and caching.

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
- SASS (1.x)
- React Query (5.x)

## Setup and Installation

1. Clone the repository: <mark>[git clone](https://github.com/esteemayo/burgers.git)</mark>
2. Change into the project directory: <mark>cd your-repo-name</mark>
3. Install dependencies: <mark>npm install or yarn install</mark>
4. Create a <mark>.env</mark> file and add the following environment variables:

- <mark>DATABASE_URL:</mark> PostgreSQL database URL
- <mark>GOOGLE_ID:</mark> Google ID
- <mark>GOOGLE_SECRET:</mark> Google secret key
- <mark>NEXTAUTH_SECRET:</mark> Next-Auth secret key
- <mark>NEXT_PUBLIC_DEV_API_URL:</mark> Application url in development
- <mark>NEXT_PUBLIC_PROD_API_URL:</mark> Applicaton url in production
- <mark>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:</mark> Stripe publishable key
- <mark>STRIPE_SECRET_KEY:</mark> Stripe secret key

5. Start the Docker containers: <mark>docker compose up</mark>
6. Run the database migrations: <mark>npx prisma migrate dev</mark>
7. Start the Next.js development server: <mark>npm run dev</mark> or <mark>yarn dev</mark>

## Usage

1. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000)
2. Click on the "Login" button to authenticate using Next-Auth
3. Browse the menu and add items to your cart
4. Click on the "Checkout" button to place an order
5. Enter your payment information and complete the order

## Authentication and Authorization

This application uses Next-Auth for authentication and authorization. Users can login using their username and password, and are redirected to the home page after successful authentication. The <mark>NEXTAUTH_SECRET</mark> environment variable is used to secure the authentication process.

## Database Schema

The database schema is defined using Prisma. The schema includes the following models:

- <mark>User:</mark> Represent a user with a name, username, email, phone, state, city, street, address, password, confirmPassword, gender, image, and role,
- <mark>Product:</mark> Represent a product with a name, desc, image, ingredients, isFeatured, totalRatings, ratingNumber, likes, reviews and price.
- <mark>Order:</mark> Represents an order with a user, product/menu items, price, status, and intent_id.
- <mark>Review:</mark> Represents a review with a rating, desc, productId, userId, and consent.

## API Endpoints

The following API endpoints are available:

### Authentication Endpoints

- <mark>POST /api/auth/[...nextauth]:</mark> Authenticates a user and returns a JSON Web Token (JWT).
- <mark>POST /api/auth/register:</mark> Creates a new user and returns a JWT.
- <mark>PATCH /api/auth/update-my-password/:id:</mark> Updates the authenticated user password.

### User Endpoints

- <mark>GET /api/users:</mark> Returns the users data to the admin.
- <mark>GET /api/users/id:</mark> Return a single user by ID.
- <mark>PATCH /api/users/id:</mark> Updates the authenticated user's data such as name, username, email, etc. But cannot update authenticated user's password.
- <mark>DELETE /api/users/id:</mark> Deletes the authenticated user's data by the user itself or by the admin.
- <mark>DELETE /api/users/delete-me/:id:</mark> Deletes authenticated user's data by the user or admin.

### Product Endpoints

- <mark>GET /api/products:</mark> Returns a list of product items.
- <mark>GET /api/products/search:</mark> Search the product items using the product name or desc.
- <mark>GET /api/products/ingredients:</mark> Return product items that have one or more related ingredients
- <mark>GET /api/products/:id/reviews:</mark> Return reviews associated with a productId.
- <mark>GET /api/products/:id:</mark> Returns a single product item by ID.
- <mark>POST /api/products:</mark> Creates a new product item but only by the admin.
- <mark>POST /api/products/:id/reviews:</mark> Creates a new review with a productId.
- <mark>PATCH /api/products/like/:id:</mark> Handles the like functionality of a product item.
- <mark>PATCH /api/products/:id:</mark> Update a single product item by ID but only the admin is authorized.
- <mark>DELETE /api/products/:id:</mark> Delete a single product item by ID by the admin only.

### Order Endpoints

- <mark>GET /api/orders:</mark> Returns a list of orders for the authenticated admin.
- <mark>GET /api/orders/details/:intentId:</mark> Returns a single order for the authenticated user by INTENTID.
- <mark>GET /api/orders/:id:</mark> Returns a single order for the authenticated user or admin by ID.
- <mark>POST /api/orders:</mark> Creates a new order only for the authenticated user and not the admin.
- <mark>PATCH /api/orders/:id:</mark> Updates an order by the authenticated admin.
- <mark>DELETE /api/orders/:id:</mark> Deletes an order by the authenticated admin.

### Review Endpoints

- <mark>GET /api/reviews:</mark> Returns a list of reviews for the authenticated admin.
- <mark>GET /api/reviews/:id:</mark> Returns a single review by ID for the authenticated user.
- <mark>POST /api/reviews:</mark> Creates a new review for the authenticated user.
- <mark>PATCH /api/reviews/:id:</mark> Updates a review by ID for the authenticated user or admin.
- <mark>DELETE /api/reviews/:id:</mark> Deletes a review by ID for the authenticated user or admin.

## State Management

This application uses Zustand for state management. Zustand provides a simple and scalable way to manage global state in React applications.

## Styling

This application uses SASS for styling. SASS is a preprocessor scripting language that is compiled to CSS. It allows developers to write more efficient, modular, and reusable CSS code.

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

This project is licensed under the MIT License.
