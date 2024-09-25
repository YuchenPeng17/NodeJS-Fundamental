// Import jwt Token
var jwt = require("jsonwebtoken");
// Import SECRET
const { SECRET } = require("../config");

// Middleware Function Check Login
module.exports = (req, res, next) => {
  let token = req.query.token;
  console.log(token);

  // Check existence of token
  if (!token) {
    res.json({
      // Response Code
      code: "2003",
      // Response Message
      msg: "Can not find tokeon",
      // Response Data
      data: null,
    });
    return;
  }

  // Verify token
  jwt.verify(token, SECRET, (err, data) => {
    if (err) {
      res.json({
        // Response Code
        code: "2004",
        // Response Message
        msg: "Token verification failed.",
        // Response Data
        data: null,
      });
      return;
    } else {
      req.user = data;
      next();
    }
  });
};
