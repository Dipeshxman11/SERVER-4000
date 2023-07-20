const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, my name is Dipesh!');
    console.log(req);
});

server.listen(4000);