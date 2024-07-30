<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>

<h1>Food Order MEAN Application</h1>

<p>Welcome to the <strong>Food Order MEAN Application</strong>! This project is a full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js) to facilitate food ordering.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li>User authentication and authorization</li>
    <li>Browse and search food items</li>
    <li>Add items to cart</li>
    <li>Place and track orders</li>
    <li>Admin dashboard to manage food items and orders</li>
</ul>

<h2 id="demo">Demo</h2>
<p>Check out a live demo of the application at <a href="#">Demo Link</a>. (Replace with actual demo URL if available.)</p>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
    <li><strong>MongoDB</strong> - NoSQL database for storing user and order data.</li>
    <li><strong>Express.js</strong> - Web application framework for Node.js.</li>
    <li><strong>Angular</strong> - Frontend framework for building the user interface.</li>
    <li><strong>Node.js</strong> - JavaScript runtime for server-side code.</li>
    <li><strong>Bootstrap</strong> - Frontend framework for responsive design.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>Follow these steps to set up the project on your local machine:</p>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <pre><code>git clone https://github.com/PriyaB28/food-order-mean.git</code></pre>
    
    <li><strong>Navigate to the project directory:</strong></li>
    <pre><code>cd food-order-mean</code></pre>
    
    <li><strong>Install backend dependencies:</strong></li>
    <pre><code>cd backend
npm install</code></pre>
    
    <li><strong>Install frontend dependencies:</strong></li>
    <pre><code>cd ../frontend
npm install</code></pre>
    
    <li><strong>Set up environment variables:</strong></li>
    <p>Create a <code>.env</code> file in the <code>backend</code> directory with the following configuration:</p>
    <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key</code></pre>
    <p>Replace <code>your_mongodb_connection_string</code> with your MongoDB connection string and <code>your_jwt_secret_key</code> with a secure secret key.</p>
    
    <li><strong>Start the application:</strong></li>
    <ul>
        <li>Start the backend server:</li>
        <pre><code>cd backend
npm start</code></pre>
        
        <li>Start the frontend application:</li>
        <pre><code>cd ../frontend
ng serve</code></pre>
        <p>The application should be running at <code>http://localhost:4200</code> for the frontend and <code>http://localhost:3000</code> for the backend.</p>
    </ul>
</ol>

<h2 id="usage">Usage</h2>
<ul>
    <li><strong>Browse Food Items:</strong> Navigate to the "Menu" section to view available food items.</li>
    <li><strong>Add to Cart:</strong> Use the "Add to Cart" button to add items.</li>
    <li><strong>Place Order:</strong> Go to the "Cart" and follow the steps to place your order.</li>
    <li><strong>Admin Dashboard:</strong> Access the admin dashboard to manage food items and view orders.</li>
</ul>

<h2 id="configuration">Configuration</h2>
<p>Configure your MongoDB and JWT settings in the <code>.env</code> file as described in the Installation section.</p>

<h2 id="contributing">Contributing</h2>
<p>We welcome contributions to the Food Order MEAN Application! To contribute:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature/your-feature-name</code>).</li>
    <li>Make your changes and commit them (<code>git commit -am 'Add new feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature/your-feature-name</code>).</li>
    <li>Open a pull request with a clear description of your changes.</li>
</ol>
<p>Please ensure your code adheres to the project's coding standards and includes appropriate tests.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>

<h2 id="contact">Contact</h2>
<p>For any questions or feedback, please reach out to PriyaB28 at <a href="mailto:email@example.com">email@example.com</a>.</p>
<p>Follow me on GitHub: <a href="https://github.com/PriyaB28">PriyaB28</a></p>

<p>Thank you for checking out the Food Order MEAN Application! Enjoy using and contributing to the project.</p>

</body>
</html>
