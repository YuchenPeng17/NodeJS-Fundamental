// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser')

// 2. Create Express Application Object
const app = express();
const static_path = __dirname + '/public'
console.log(static_path);
app.use(express.static(static_path));

// ** Anti hot Linking **
app.use((req, res, next)=>{
    // req.hostname
    let new_host_name = req.hostname;
    console.log(req.hostname);
    if (new_host_name !== '127.0.0.1'){
        res.status(404).send(`<h1>404 Not Found</h1>`)
        return;
    }
    /*
    let Referer = req.get('Referer');
    if (Referer){
        let url = new URL(Referer)
        let hostname = url.hostname;
        console.log(hostname);
        if (hostname !== '127.0.0.1'){
            res.statusCode(404).send(`<h1>404 Not Found</h1>`)
            return;
        }
    }
    */
    next();
})

// 3. Create Router
app.get('/a', (req, res) => {
    res.sendFile(__dirname+'/Utility.html')
})

// 4. Listen
app.listen(3000, () => {
    console.log("Express Server Starts...")
})