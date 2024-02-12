const express = require('express');
const bodyParser = require('body-parser');


const app = express();


// Use the bodyParser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json()); // Parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data


// Example route handling a POST request
app.post('/example', (req, res) => {
  const dataFromClient = req.body;
  console.log('Data from client:', dataFromClient);
  res.send('Received data successfully');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// {"Data from client": "hloo"}