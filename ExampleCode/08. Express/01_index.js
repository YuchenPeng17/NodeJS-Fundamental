// 1. 
const express = require('express');

// 2.
const app = express();

// 3. Create Router
app.get('/home', (req, res) => {
    res.end("Welcome To Express Home");
})

app.get('/request', (req, res) => {
    // original http api
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)

    // express api
    console.log(req.path)
    console.log(req.query)
    
    res.end('hello request')
})


app.get('/', (req, res) => {
    res.end("Express");
})

// 4. Listen
app.listen(3000, () => {
    console.log("Express Server Starts...")
})