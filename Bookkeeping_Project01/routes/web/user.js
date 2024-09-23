var express = require("express");
var router = express.Router();
// Import md5 Encrypt Method
var md5 = require('md5');
// Import MongoDB Model
const UserModel = require("../../Models/User");

/* Handle signup Web Page */
router.get("/signup", function (req, res, next) {
    res.render('User/SignUp');
});

/* Handle signup Functionality */
router.post("/signup", async function (req, res, next) {
    let result = null;
    // Encrypt Password
    req.body.password = md5(req.body.password);
    try{
        result = await UserModel.create(req.body);
    }catch(error){
        res.status(500).send('Failed Sign Up.')
        console.log(error);
        return;
    }
    res.render('success', {
        msg: 'Successfully Sign Up',
        url: '/login'
    })
});

/* Handle login Web Page */
router.get("/login", function (req, res, next) {
    res.render('User/login');
});

/* Handle login Functionality */
router.post("/login", async function (req, res, next) {
    let result = null;
    const {username, password} = req.body;
    // Check User Credential
    try{
        result = await UserModel.findOne({username: username, password: md5(password)});
    }catch(error){
        res.status(500).send('Failed Login.');
        console.log(error);
        return;
    }
    if(result === null){
        res.status(500).send('Wrong user details.');
        return;
    }
    // Handle Session
    req.session.username = result.username;
    req.session._id = result._id;

    res.render('success', {
        msg: 'Successfully Login',
        url: '/account'
    })
});

/* Handle logout */
router.get("/logout", function (req, res, next) {
    req.session.destroy(()=>{
        res.render('success', {
            msg: 'Successfully Logout',
            url: '/login'
        })
    })
});

module.exports = router;
