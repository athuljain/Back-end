
// // > Express basics

const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/about',(req,res)=>{
    res.send("this is about page")
})
app.get('/contact',(req,res)=>{
  res.send("this is Contact page")
})
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



// >Express Routing with status code


const express = require('express');
const app = express();


app.get('/', (req, res) => {
  // Set a 200 (OK) status code
  res.status(200).send('Home Page');
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





//> Get json api

const http=require('http');
const axios = require('axios');


axios.get('https://jsonplaceholder.typicode.com/posts/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });





//MiddileWare

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
//    console.log("things get");
   
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });






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



// // third party middileware


// // 
