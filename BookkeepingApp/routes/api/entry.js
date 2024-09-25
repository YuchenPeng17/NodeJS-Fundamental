var express = require("express");
var router = express.Router();
// Import jwt Token
var jwt = require('jsonwebtoken');
// Import jwt check middleware
const checkJWT = require("../../middlewares/checkJWT");
// Import MongoDB Model
const EntryModel = require("../../models/entry");


/* GET all account entries */
router.get("/account", checkJWT, async function (req, res, next) {
  let result = null;
  console.log(req.user);
  try {
    result = await EntryModel.find();
  } catch (error) {
    // Fail
    res.json({
      // Response Code
      code: "1111",
      // Response Message
      msg: "Failed Read All Account Entries",
      // Response Data
      data: null,
    });
  }
  // Success
  res.json({
    // Response Code
    code: "1001",
    // Response Message
    msg: "Successfully Read All Account Entries",
    // Response Data
    data: result,
  });
});

/* POST create one entry */
router.post("/account", checkJWT, async function (req, res, next) {
  // Minor modification on req.body.time
  req.body.time = new Date(req.body.time);
  let result = null;
  // Create the entry
  try {
    result = await EntryModel.create({
      ...req.body,
    });
  } catch (error) {
    if (error) {
      // Fail
      res.json({
        // Response Code
        code: "1002",
        // Response Message
        msg: "Failed Create one Account Entries",
        // Response Data
        data: error,
      });
    }
  }
  // Success
  res.json({
    // Response Code
    code: "0000",
    // Response Message
    msg: "Successfully Create one Account Entries",
    // Response Data
    data: result,
  });
});

/* DELETE an entry */
router.delete("/account/:id", checkJWT, async function (req, res, next) {
  let id = req.params.id;
  let result = null;
  // db.get("accounts").remove({ id: id }).write();
  try {
    result = await EntryModel.deleteOne({ _id: id });
  } catch (error) {
    // Fail
    res.json({
      code: "1003",
      msg: "Failed Deleted",
      data: error,
    });
  }
  // Success
  res.json({
    code: "0000",
    msg: "Successfully Deleted",
    data: result,
  });
});

/* GET one account entry */
router.get("/account/:id", checkJWT, async function (req, res, next) {
  let id = req.params.id;
  let result = null;
  try {
    result = await EntryModel.findById(id);
  } catch (error) {
    res.json({
      // Response Code
      code: "1004",
      // Response Message
      msg: "Failed Read One Account Entries",
      // Response Data
      data: error,
    });
  }
  // Success
  res.json({
    // Response Code
    code: "0000",
    // Response Message
    msg: "Successfully Read One Account Entries",
    // Response Data
    data: result,
  });
});

/* PATCH one account entry */
router.patch("/account/:id", checkJWT, async function (req, res, next) {
  let { id } = req.params;
  let result = null;
  try {
    result = await EntryModel.updateOne({ _id: id }, req.body);
  } catch (error) {
    // Fail
    res.json({
      // Response Code
      code: "1005",
      // Response Message
      msg: "Failed Update One Account Entries",
      // Response Data
      data: error,
    });
  }
  // Get the updated entry
  try {
    result = await EntryModel.findById(id);
  } catch (error) {
    res.json({
      // Response Code
      code: "1004",
      // Response Message
      msg: "Failed Read One Account Entries",
      // Response Data
      data: error,
    });
  }
  // Success
  res.json({
    // Response Code
    code: "0000",
    // Response Message
    msg: "Successfully Update One Account Entries",
    // Response Data
    data: result,
  });
});

module.exports = router;
