// 1. 
const express = require('express');
const path = require('path');
const fs = require('fs');

// 2.
const app = express();
function recordMiddleware(req, res, next){
    file = path.resolve(__dirname + '/accessLog.txt');
    let {url, ip} = req;
    fs.appendFileSync(file, `${url} ${ip}\r\n`);
    next();
}
app.use(recordMiddleware);
// 3. Create Router
app.get('/home', (req, res) => {
    res.end("Welcome To Express Home");
})

let checkMiddeware = (req, res, next) => {
    if (req.query.code === '521'){
        next();
    }else{
        res.send('暗号错误')
    }
}

app.get('/admin', checkMiddeware, (req, res) => {
    res.end("Welcome To Express Admin");
})

app.get('/*', (req, res) => {
    res.status(404);
    res.send(
        `<h1>404</h1>`
    )
})

// 4. Listen
app.listen(3000, () => {
    console.log("Express Server Starts...")
})