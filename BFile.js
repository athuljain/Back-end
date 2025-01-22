const fs= require('fs')

//write file

// fs.writeFile('./example3.txt', 'Hi, sdckjsdc bzicbsd jbsckjwe', (err) => {
//     if (err) throw err;
//     console.log('File has been written.');
//   });


//  ReadFile

// fs.readFile('example2.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

// //append File

// fs.appendFile('example2.txt', ' good mrng. from soften', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('Data has been appended to the file.');
//   });


// // // // Delete file
fs.unlink('example2.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted.');
  });




   
    // fs.writeFile('example1.txt', 'This is new content.', 'utf8', (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('File content has been replaced with new data.');
    // });



// const http=require('http');


// const server = http.createServer((req, res) => {
   
//     res.writeHead(200, {'Content-Type': 'text/plain'});
 
//     res.end('Hello, Node.js!');
//   });
 

//   const PORT = 5000;
//   server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });



//    // node routes

    // const http = require('http');

    // const port = 5000;
    
    // const server = http.createServer((req, res) => {
    //     if (req.url === '/') {
    //         res.writeHead(200, { 'Content-Type': 'text/plain' });
    //         res.end('Hello, this is the home page!');
    //     } else if (req.url === '/about') {
    //         res.writeHead(200, { 'Content-Type': 'text/plain' });
    //         res.end('Welcome to the about page!');
    //     } else if (req.url === '/contact') {
    //         res.writeHead(200, { 'Content-Type': 'text/plain' });
    //         res.end('Contact us at contact@example.com');
    //     } else {
    //         res.writeHead(404, { 'Content-Type': 'text/plain' });
    //         res.end('Page not found');
    //     }
    // });
    
    // server.listen(port, () => {
    //     console.log(`Server listening on port ${port}`);
    // });
    



    // const http = require('http');
    // const url = require('url');
    // const port = 8000;
    
    // const server = http.createServer((req, res) => {
    // // Parse the request URL
    // const parsedUrl = url.parse(req.url, true);
    
    // // Log the requested URL path
    // console.log(`Received ${req.method} request for ${parsedUrl.pathname}`);
    
    // // Route the request based on the path
    // if (parsedUrl.pathname === '/') {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, this is the home page!');
    // } else if (parsedUrl.pathname === '/about') {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Welcome to the about page!');
    // } else if (parsedUrl.pathname === '/contact') {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Contact us at contact@example.com');
    // } else {
    // // Handle unknown paths with a 404 response
    // res.writeHead(404, { 'Content-Type': 'text/plain' });
    // res.end('Page not found');
    // }
    // });
    
    // // Start the server
    // server.listen(port, () => {
    // console.log(`Server listening on port ${port}`);
    // });
    