// MiddileWare

// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//    console.log("A request for things received ");
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Things');
// });

// app.listen(3000);






// var express = require('express');
// var app = express();

// //First middleware before response is sent
// app.use(function(req, res, next){
//    console.log("Start");
//    next();
// });

// //Route handler
// app.get('/', function(req, res, next){
//    res.send("Middle");
//    next();
// });

// app.use('/', function(req, res){
//    console.log('End');
// });

// app.listen(3000);



// third party middileware


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // Use the bodyParser middleware to parse JSON and URL-encoded data
// app.use(bodyParser.json()); // Parse JSON
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// // Example route handling a POST request
// app.post('/example', (req, res) => {
//   const dataFromClient = req.body;
//   console.log('Data from client:', dataFromClient);
//   res.send('Received data successfully');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
