// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    response.end("Hello HTTP Server");
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})