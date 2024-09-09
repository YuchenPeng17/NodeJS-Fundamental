// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser')

// 2. Create Express Application Object
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
// `extended: false`: Parses URL-encoded data into simple key-value pairs (strings or arrays).
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 3. Create Router
app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/Utility.html')
})

app.post('/login', urlencodedParser,(req, res) => {
    console.log(req.body);
    res.end("Login Post Page");
})


// 4. Listen
app.listen(3000, () => {
    console.log("Express Server Starts...")
})