// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Declare variable
    let body = "";

    // 2) Bind Data Event, Request is a readStream by default
    request.on('data', (chunk)=>{
        body = body + chunk.toString();     // username=123123&password=123123
    })
    
    // 3) End
    request.on('end', ()=>{
        console.log(body);
        response.end("Hello HTTP Server");
    })
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})