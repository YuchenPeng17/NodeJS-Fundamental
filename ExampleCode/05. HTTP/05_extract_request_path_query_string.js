// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Get request method
    let method = request.method;
    console.log(method);
    // 2) Get request URL
    let url = new URL(request.url, 'http://127.0.0.1');
    let path_name = url.pathname;
    console.log(path_name);
    // 3) Evaluate method and URL
    if(method === 'GET' && path_name === '/login'){
        response.end("Login Page");
    }else if(method === 'GET' && path_name === '/reg'){
        response.end("Registration Page");
    }else{
        response.end("Path Not Found");
    }
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})