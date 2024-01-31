const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/') {
        filePath = path.join(__dirname, './HIndex.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, './IRoutingAboutHtml.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
