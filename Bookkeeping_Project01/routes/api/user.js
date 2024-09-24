var express = require("express");
var router = express.Router();
// Import md5 Encrypt Method
var md5 = require('md5');
// Import MongoDB Model
const UserModel = require("../../Models/User");
// Import SECTET
const {SECRET} = require('../../config');
// Import jwt Token
var jwt = require("jsonwebtoken");

/* Handle login Functionality */
router.post("/login", async function (req, res, next) {
    let result = null;
    const {username, password} = req.body;
    // Check User Credential
    try{
        result = await UserModel.findOne({username: username, password: md5(password)});
    }catch(error){
        res.json({
            // Response Code
            code: "2001",
            // Response Message
            msg: "Failed Login Request",
            // Response Data
            data: null,
          });
          return;
    }
    if(result === null){
        res.json({
            // Response Code
            code: "2002",
            // Response Message
            msg: "Incorrect Username Password",
            // Response Data
            data: null,
          });
          return;
    }
    // Handle Token
    const token = jwt.sign({
        username: result.username,
        _id: result._id,
    }, SECRET, {
        expiresIn: 60 * 60 * 24 * 7,
    })
    res.json({
        // Response Code
        code: "0000",
        // Response Message
        msg: "Successfully Login",
        // Response Data
        data: token,
      });
});

/* Handle logout */
router.post("/logout", function (req, res, next) {
    req.session.destroy(()=>{
        res.render('success', {
            msg: 'Successfully Logout',
            url: '/login'
        })
    })
});

module.exports = router;
