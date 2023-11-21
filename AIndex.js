// core Module

const http=require('http');

// http.createServer(function(req,res){
// res.write("hello from HTTP Module")
// res.end()
// }).listen("8080")

// local module
// const LocalModule = require('./LocalModule');

// console.log(LocalModule.add(5, 3));      
// console.log(LocalModule.subtract(10, 4)); 


// let cl=require('cli-color')

// console.log(cl.red('hello'));


const axios = require('axios');

// Making a GET request
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });


//HTTP Module


// const http=require('http');

// const server = http.createServer((req, res) => {
    
//     res.writeHead(200, {'Content-Type': 'text/plain'});
  
//     res.end('Hello, Node.js!');
//   });
  
 
// //   const PORT = 3000;
// //   server.listen(PORT, () => {
// //     console.log(`Server listening on port ${PORT}`);
// //   });



// //Routing

// const express = require('express')
// ;
// const app = express();
// const port = 3000;


// app.get('/', (req, res) => {
//   res.send('Welcome to the homepage!');
// });


// app.get('/about', (req, res) => {
//   res.send('About us Page.');
// });


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


