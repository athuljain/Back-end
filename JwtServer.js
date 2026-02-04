const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user-auth-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Routes
const router = require('./Jwt');
app.use('/users', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
