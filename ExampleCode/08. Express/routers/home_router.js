// 1. import express
const express = require('express');

// 2. Create Router Obj
const router = express.Router();

// 3. Treat as app
router.get('/home', (req, res) => {
    res.end("Welcome To Express home");
})

router.get('/index', (req, res) => {
    res.end("Welcome To Express index");
})

// 4. Export
module.exports = router;