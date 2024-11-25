## Burger Ordering Application

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
- Node.js (14.x)
- Next.js (13.x)
- PostgreSQL (13.x)
- Zustand (4.x)
- Next-Auth (4.x)
- React Query (5.x)

## Setup and Installation

1. Clone the repository: [git clone]()
2. Change into the project directory: cd your-repo-name
3. Install dependencies: npm install or yarn install
4. Create a .env file and add the following environment variables:

- DATABASE_URL: PostgreSQL database URL
- GOOGLE_ID: Google id
- GOOGLE_SECRET: Google secret key
- NEXTAUTH_SECRET: Next-Auth secret key
- NEXT_PUBLIC_DEV_API_URL: Application url in development
- NEXT_PUBLIC_PROD_API_URL: Applicaton url in production
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
- STRIPE_SECRET_KEY: Stripe secret key

5. Start the Docker containers: docker compose up
6. Run the database migrations: npx prisma migrate dev
7. Start the Next.js development server: npm run dev or yarn dev

## Usage

1. Open a web browser and navigate to (http://localhost:3000)
2. Click on the "Login" button to authenticate using Next-Auth
3. Browse the menu and add items to your cart
4. Click on the "Checkout" button to place an order
5. Enter your payment information and complete the order

## Authentication and Authorization

This application uses Next-Auth for authentication and authorization. Users can login using their username and password, and are redirected to the home page after successful authentication. The NEXTAUTH_SECRET environment variable is used to secure the authentication process.

## Database Schema

The database schema is defined using Prisma. The schema includes the following models

- User: Represent a user with a name, username, email, phone, state, city, street, address, password, confirmPassword, gender, image, and role,
- Product: Represent a product with a name, description, image, ingredients, isFeatured, totalRatings, ratingNumber, likes, reviews and price.
- Order: Represents an order with a user, product/menu items, price, status, and intent_id.
- Review: Represents a review with a rating, description, productId, userId, and consent.
