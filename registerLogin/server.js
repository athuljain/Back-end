// const app = require('./app');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');
const connectDB = require('./config/db');



connectDB()

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
