// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./FRouter');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/express-mongodb-example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
