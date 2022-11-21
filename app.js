const http = require('node:http');
const fs = require('fs');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('page/index.html', "utf8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('page/about.html', "utf8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if (req.url === '/create') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = '<h1>I love coding so much</h1>'
        fs.appendFile('temp/test.html', data, (err, data) => {
            if (err) throw err;
            res.write('File is created');
            res.end();
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('page/error.html', "utf8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
});

console.log(`server is running at http://localhost:8000/`)
server.listen(8000);