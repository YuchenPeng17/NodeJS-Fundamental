// Import
const express = require('express');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const config = require(__dirname+'/config')
// Create Obj & Set middleware
const app = express();
app.use(session({
    name: 'sid',                // set name of the sessionID cokkie, `connect.sid` by default
    secret: 'kunasecret',       // signature, encrypt string
    saveUninitialized: false,   // 
    resave: true,               // re-save the session everytime when request
    store: MongoStore.create({
        mongoUrl: config.MongoDB_Connection_String,
        dbName: 'Express_Mongoose_01'
        // collectionName: '<NAME>', by default it is "sessions"
    }),
    cookie:{
        httpOnly: true,
        maxAge: 1000 * 60 * 5
    }
}));

// Set Route
app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/login', (req, res) => {
    if(req.query.user === "admin" && req.query.pwd === "admin"){
        req.session.name = "admin";
        res.send("Good Login")
    }else{
        res.send("Bad Login")
    }
    
})


// Listen
app.listen(3000);