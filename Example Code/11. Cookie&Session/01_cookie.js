// Import
const express = require('express');
const cookieParser = require('cookie-parser')

// Create Obj & Set middleware
const app = express();
app.use(cookieParser())

// Set Route
app.get('/', (req, res) => {
    res.send("Home")
})

/* Send Cookie to users */
app.get('/login', (req, res) => {
    // res.cookie('Username', "yucpeng17", {maxAge: 10*1000});
    res.cookie('Username', "yucpeng17");
    res.cookie('Theme', "White");
    res.cookie('Addons', "Cloud");
    res.send("Welcome")
})

/* Clear the Cookie */
app.get('/logout', (req, res) => {
    res.clearCookie('Username');
    res.send("C-Ya")
})

/* Inspect the Cookie */
app.get('/home', (req, res) => {
    let cookie = req.cookies;
    console.log(cookie);
    res.send("Cookie Inspection")
})

// Listen
app.listen(3000);