// 1. import express
const express = require('express');

// 2. Create Router Obj
const router = express.Router();

// 3. Treat as app
router.get('/admin', (req, res) => {
    res.end("Welcome To Express admin");
})

router.get('/setting', (req, res) => {
    res.end("Welcome To Express setting");
})

// 4. Export
module.exports = router;