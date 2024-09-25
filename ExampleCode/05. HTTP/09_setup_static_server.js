// 1. import
const http = require('http');
const fs = require('fs');

// 2. create http object
const server = http.createServer((request, response) => {
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    let file_path = __dirname + pathname;
    console.log(file_path);
    fs.readFile(file_path, (err, data) => {
        if(err){
            response.statusCode = 500;
            response.end('Server Error');
            return;
        }
        response.end(data);
    })

})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})