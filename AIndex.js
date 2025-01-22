// core Module

// const server=require('http');

// server.createServer(function(req,res){
// res.write("hello from HTTP Module")
// res.end()
// }).listen("5001",()=>console.log("server running on 5001"))

// local module
// const LocalModule = require('./LocalModule');

// console.log(LocalModule.add(3, 3));
// console.log(LocalModule.subtract(10, 4));
// console.log(LocalModule.Mul(2,3));                                        



// const Wish = require("./LocalModuleHello")

// Wish()

// //Npm Module

// let cl=require('cli-color')


// console.log(cl.blue('hello'));
// console.log(cl.bgBlueBright("hello"));
// console.log(cl.bgMagentaBright("soften"));

// console.log("hello");




// const axios = require('axios');
// //Making a GET request
// axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=15')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//HTTP Module

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, Node.js!");
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });



// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//Routing

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

// npm i express
// npm i cors

// const http = require('http');
// const port = 3000;

// const server = http.createServer((req, res) => {
// // Set CORS headers to allow cross-origin requests (for demonstration purposes)
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

// // Handle different HTTP methods
// switch (req.method) {
// case 'GET':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('GET request received');
// break;
// case 'POST':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('POST request received');
// break;
// case 'PUT':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('PUT request received');
// break;
// case 'DELETE':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('DELETE request received');
// break;
// default:
// res.writeHead(405, { 'Content-Type': 'text/plain' });
// res.end('Method Not Allowed');
// }
// });

// server.listen(port, () => {
// console.log(`Server listening on port ${port}`);
// });
