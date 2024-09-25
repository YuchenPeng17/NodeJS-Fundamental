// 1. import
const http = require('http');
// const url = require('url');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Create URL obj
    let url = new URL(request.url, 'http://127.0.0.1')
    console.log(url)
    // 2) Get Path
    let path_name = url.pathname;
    console.log("path_name: " + path_name)          // path_name: /search

    // 3) Get Query String
    let query_string = url.searchParams;
    console.log(query_string);                      // URLSearchParams { 'name' => 'adam', 'num' => '7' }
    let name = query_string.get('name')
    let num = query_string.get('num')
    console.log(name + num);                        // adam7
    response.end('URL New')
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})


// const server = http.createServer((request, response) => {
//     // original way
//     console.log("1. request.url: " + request.url)
//     // url parse way
//     let res = url.parse(request.url, true) // para2: set query property to an obj
//     let path_name = res.pathname;
//     // url parse returned obj
//     console.log("2. url.parse: ")
//     console.log(res)
//     // obj.pathname
//     console.log("path_name: " + path_name)
//     // obj.query.<KEYWORD> to get the value
//     let color = res.query.color;
//     console.log("color: " + color)
//     let num = res.query.num;
//     console.log("num: " + num)
//     response.end("Hello HTTP Server");
// })