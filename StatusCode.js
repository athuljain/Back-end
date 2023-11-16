const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Set a 200 (OK) status code
  res.status(200).send('OK');
});

app.get('/notfound', (req, res) => {
  // Set a 404 (Not Found) status code
  res.status(404).send('Not Found');
});

app.post('/created', (req, res) => {
  // Set a 201 (Created) status code
  res.status(201).send('Created');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
