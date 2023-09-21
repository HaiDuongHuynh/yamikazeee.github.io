const express = require('express');
const app = express();

// Serve static files (CSS and JS)
app.use(express.static('public'));

// Routes for /, /users, and /products
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Users router
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Products router
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
