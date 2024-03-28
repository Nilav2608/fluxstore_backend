# Fluxstore Backend

Fluxstore Backend is the express backend server for the [Fluxstore E-commerce app](https://github.com/Nilav2608/fluxestore_E-commerce), providing APIs for managing products, orders, users, and other resources.

## Architecture Model-View-Controller(MVC)

## Features

- **Product Management**: CRUD operations for managing product details such as name, description, price, etc.
- **Order Management**: APIs for creating, updating, and retrieving orders placed by users.
- **User Management**: Endpoints for user authentication, registration, and profile management.
- **Authentication**: Secure authentication using JSON Web Token (JWT).
- **Database Integration**: Integration with MongoDB database for storing and retrieving data.
- **Scalability**: Built with Node.js and Express.js, providing scalability and performance.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: JSON Web Tokens for secure authentication.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **bcrypt**: Library for hashing passwords and securing user data.

## Setup

### 1. Docker Installation

If you have Docker installed, you can easily pull and run the Fluxstore Backend Docker image.

### Pull the Docker Image

Run the following command to pull the latest version of the Fluxstore Backend Docker image from Docker Hub:

```bash
docker pull nilav26/fluxstore-api
```

Once the image is pulled, you can run a Docker container using the following command:

```bash
docker run -p 5000:5000 --env-file .env nilav26/fluxstore-api:latest
```

### 2. Local Node Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fluxstore-backend.git

2. Install dependencies:

   ```bash
   cd fluxstore-backend
   npm install
   ```

3. Set up environment variables:
   
   Create a .env file in the root directory and define the following variables:
   ```bash
   PORT=5000
   CONNECTION_STRING=<MongoDB Connection String>
   SECRET_KEY=<Secret Key for JWT>
   ```

4. Start the node server:
   ```bash
   npm run dev
   ```
## License

This project is licensed under the MIT License

## Contact

For sample catalog data, any inquiries or support requests, feel free to contact us at nilavarasuk@gmail.com

   
       
