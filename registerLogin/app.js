const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoute');
const connectDB = require('./config/db');


connectDB()

app.use(express.json());
app.use('/users', userRoutes);

module.exports=app
