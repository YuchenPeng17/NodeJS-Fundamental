// 1. 
const express = require('express');

// 2.
const app = express();
const home_router = require(__dirname + '/routers/home_router.js')
const admin_router = require(__dirname + '/routers/admin_router.js')

app.use(home_router)
app.use(admin_router)
// 3. Create Router

// 4. Listen
app.listen(3000, () => {
    console.log("Express Server Starts...")
})