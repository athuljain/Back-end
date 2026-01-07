
// // // > Express basics

// const express = require('express');
// const app = express();
// const port = 3000;


// // // Define a route for the root endpoint


// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });
// app.get('/about',(req,res)=>{
//     res.send("this is about page")
// })
// app.get('/contact',(req,res)=>{
//   res.send("this is Contact page")
// })
// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });




// express() → creates an Express application.

// app.get(path, callback) → defines a route for HTTP GET request.

// res.send() → sends a response to the browser.

// app.listen(port, callback) → starts the server.



// ------------------------------------------------------------------------






 

// axios.get(url) → sends a GET request to a REST API.

// .then() → handles successful response.

// .catch() → handles errors.

// 🟢 Use Case: Getting external data like user info, weather, etc.



// ----------------------------------------------------------------------------




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



// Middleware = function that executes between request and response.

// app.use() → adds middleware for all or specific routes.

// Always call next() to move to the next handler.

// 🟢 Flow:

// Request comes to /things

// Middleware logs message

// Route sends response

// Log appears in console


// ---------------------------------------------------------





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
// app.get('/home', function (req,res){
//     res.send("home")
// })

// app.use('/', function(req, res){
//    console.log('End');
// });

// app.listen(3000);



// | Concept                | Function               | Example                    |
// | ---------------------- | ---------------------- | -------------------------- |
// | Create App             | `express()`            | `const app = express();`   |
// | Route                  | `app.get('/path', fn)` | `app.get('/', cb)`         |
// | Send Response          | `res.send()`           | `res.send('Hello')`        |
// | Status Code            | `res.status(code)`     | `res.status(404)`          |
// | Middleware             | `app.use(fn)`          | `app.use(logger)`          |
// | Start Server           | `app.listen(port)`     | `app.listen(3000)`         |
// | JSON Response          | `res.json(obj)`        | `res.json({name:'Athul'})` |
// | Third-party Middleware | Install with npm       | `npm install morgan cors`  |



