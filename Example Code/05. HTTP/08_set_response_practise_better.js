// 1. import
const http = require('http');
const fs = require('fs');

// 2. create http object
const server = http.createServer((request, response) => {
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    if(pathname === '/'){
        let html = fs.readFileSync(__dirname + '/Table.html')
        response.end(html)      // can take buffer or string
    }else if(pathname === '/Table.css'){
        let css = fs.readFileSync(__dirname + '/Table.css')
        response.end(css)      // can take buffer or string
    }else if(pathname === '/Table.js'){
        let js = fs.readFileSync(__dirname + '/Table.js')
        response.end(js)      // can take buffer or string
    }else{
        response.statusCode = 404;
        response.end('404 not found')
    }

})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})


