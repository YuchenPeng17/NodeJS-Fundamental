// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Get Request Method
    console.log(request.method);        // GET

    // 2) Get Request URL
    // It only contains the path and query string(路径与查询字符串)
    console.log(request.url)            // /

    // 3) Get HTTP Version
    console.log(request.httpVersion)    // 1.1

    // 4) Get Request Header
    console.log(request.headers)        // Headers
    // console.log(request.headers.host)

    response.end("Hello HTTP Server");
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})