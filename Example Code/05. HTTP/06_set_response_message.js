// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Set Status Code
    response.statusCode = 200;
    // response.statusCode = 404;

    // 2) Set Status Message
    response.statusMessage = "iloveyou"

    // 3) Set Response Header
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('my-header', 'This is my header')
    response.setHeader('same-header', ['a', 'b', 'c'])

    // 4) Set Response Body
    response.write('i ')
    response.write('love ')
    response.write('you ')
    response.end()

})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})