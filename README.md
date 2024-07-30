# Food Order MEAN Application

Welcome to the **Food Order MEAN Application**! This project is a full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js) to facilitate food ordering.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Browse and search food items
- Add items to cart
- Place and track orders
- Admin dashboard to manage food items and orders

## Demo

Check out a live demo of the application at [Demo Link](#). (Replace with actual demo URL if available.)

## Technologies Used

- **MongoDB** - NoSQL database for storing user and order data.
- **Express.js** - Web application framework for Node.js.
- **Angular** - Frontend framework for building the user interface.
- **Node.js** - JavaScript runtime for server-side code.
- **Bootstrap** - Frontend framework for responsive design.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/PriyaB28/food-order-mean.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd food-order-mean
    ```

3. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

4. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

5. **Set up environment variables:**

    Create a `.env` file in the `backend` directory with the following configuration:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

    Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_jwt_secret_key` with a secure secret key.

6. **Start the application:**

    - Start the backend server:

      ```bash
      cd backend
      npm start
      ```

    - Start the frontend application:

      ```bash
      cd ../frontend
      ng serve
      ```

    The application should be running at `http://localhost:4200` for the frontend and `http://localhost:3000` for the backend.

## Usage

- **Browse Food Items:** Navigate to the "Menu" section to view available food items.
- **Add to Cart:** Use the "Add to Cart" button to add items.
- **Place Order:** Go to the "Cart" and follow the steps to place your order.
- **Admin Dashboard:** Access the admin dashboard to manage food items and view orders.

## Configuration

Configure your MongoDB and JWT settings in the `.env` file as described in the Installation section.

## Contributing

We welcome contributions to the Food Order MEAN Application! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request with a clear description of your changes.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please reach out to PriyaB28 at [email@example.com](mailto:email@example.com). 

Follow me on GitHub: [PriyaB28](https://github.com/PriyaB28)

---

Thank you for checking out the Food Order MEAN Application! Enjoy using and contributing to the project.

