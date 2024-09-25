var express = require("express");
var router = express.Router();

/* GET all account entries */
router.get("/", checkJWT, async function (req, res, next) {

});

module.exports = router;
